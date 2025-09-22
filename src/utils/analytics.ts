// src/utils/analytics.ts
// Comprehensive analytics utility functions for Google Analytics and tracking

// Extend the global Window interface to include Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Configuration
export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_TRACKING_ID || "G-R8W438QET6";

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

// Check if analytics is enabled
const isAnalyticsEnabled = () => {
  if (!isBrowser) return false;

  // Check if analytics is explicitly disabled
  if (process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true") return false;

  // Check if gtag is available
  return typeof window.gtag === "function";
};

// Initialize Google Analytics
export const initGA = (): void => {
  if (!isBrowser) return;

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  // Define gtag function if it doesn't exist
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // Configure Google Analytics
  window.gtag("js", new Date());
  window.gtag("config", GA_TRACKING_ID, {
    // Privacy-friendly settings
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
    // Performance settings
    custom_map: {
      custom_parameter_1: "page_type",
      custom_parameter_2: "user_action",
    },
  });

  console.log("📊 Google Analytics initialized:", GA_TRACKING_ID);
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  if (!isAnalyticsEnabled()) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
    page_title: title || document.title,
  });

  console.log("📊 Page view tracked:", url);
};

// Generic event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>,
): void => {
  if (!isAnalyticsEnabled()) return;

  const eventData: any = {
    event_category: category,
    event_label: label,
    value: value,
    ...customParameters,
  };

  // Remove undefined values
  Object.keys(eventData).forEach((key) => {
    if (eventData[key] === undefined) {
      delete eventData[key];
    }
  });

  window.gtag("event", action, eventData);

  console.log("📊 Event tracked:", { action, category, label, value });
};

// ================================
// BUSINESS-SPECIFIC TRACKING
// ================================

// Track phone calls (primary conversion)
export const trackPhoneCall = (city?: string, source?: string): void => {
  trackEvent("phone_call", "conversion", city || "unknown_city", 1, {
    page_type: "city_page",
    conversion_type: "phone_call",
    traffic_source: source || "organic",
    city_name: city,
  });
};

// Track form submissions
export const trackFormSubmission = (formType: string, city?: string): void => {
  trackEvent(
    "form_submit",
    "conversion",
    `${formType}_${city || "unknown"}`,
    1,
    {
      form_type: formType,
      city_name: city,
      conversion_type: "form_submission",
    },
  );
};

// Track service page visits
export const trackServiceView = (serviceName: string, city?: string): void => {
  trackEvent("service_view", "engagement", serviceName, 1, {
    service_name: serviceName,
    city_name: city,
    page_type: "service_page",
  });
};

// Track quote requests
export const trackQuoteRequest = (serviceType: string, city?: string): void => {
  trackEvent("quote_request", "conversion", serviceType, 1, {
    service_type: serviceType,
    city_name: city,
    conversion_type: "quote_request",
  });
};

// ================================
// USER ENGAGEMENT TRACKING
// ================================

// Track scroll depth
export const trackScrollDepth = (depth: number, page?: string): void => {
  // Only track at 25%, 50%, 75%, 100%
  const milestones = [25, 50, 75, 100];
  if (!milestones.includes(depth)) return;

  trackEvent("scroll_depth", "engagement", `${depth}%`, depth, {
    page_type: page || "unknown",
    scroll_depth: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number, page?: string): void => {
  // Only track significant time milestones
  const milestones = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
  const milestone = milestones.find(
    (m) => timeInSeconds >= m && timeInSeconds < m + 5,
  );

  if (milestone) {
    trackEvent("time_on_page", "engagement", `${milestone}s`, milestone, {
      page_type: page || "unknown",
      time_spent: timeInSeconds,
    });
  }
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent("external_link", "engagement", url, 1, {
    link_url: url,
    link_text: linkText || "unknown",
    click_type: "external_link",
  });
};

// Track internal navigation
export const trackInternalNavigation = (from: string, to: string): void => {
  trackEvent("internal_navigation", "engagement", `${from}_to_${to}`, 1, {
    navigation_from: from,
    navigation_to: to,
    navigation_type: "internal",
  });
};

// ================================
// ERROR AND PERFORMANCE TRACKING
// ================================

// Track JavaScript errors
export const trackError = (error: Error, context?: string): void => {
  trackEvent("javascript_error", "error", error.message, 1, {
    error_name: error.name,
    error_message: error.message,
    error_context: context || "unknown",
    error_stack: error.stack?.substring(0, 500), // Limit stack trace length
  });
};

// Track page load performance
export const trackPageLoadTime = (loadTime: number, page?: string): void => {
  // Only track if load time is reasonable (not too fast/slow)
  if (loadTime < 100 || loadTime > 10000) return;

  trackEvent(
    "page_load_time",
    "performance",
    page || "unknown",
    Math.round(loadTime),
    {
      load_time_ms: Math.round(loadTime),
      page_type: page || "unknown",
      performance_metric: "page_load",
    },
  );
};

// ================================
// UTILITY FUNCTIONS
// ================================

// Set user properties
export const setUserProperty = (propertyName: string, value: string): void => {
  if (!isAnalyticsEnabled()) return;

  window.gtag("config", GA_TRACKING_ID, {
    custom_map: { [propertyName]: value },
  });
};

// Set user ID for cross-device tracking
export const setUserId = (userId: string): void => {
  if (!isAnalyticsEnabled()) return;

  window.gtag("config", GA_TRACKING_ID, {
    user_id: userId,
  });
};

// Enhanced consent management
export const updateConsent = (consentSettings: {
  analytics?: boolean;
  marketing?: boolean;
  functional?: boolean;
}): void => {
  if (!isAnalyticsEnabled()) return;

  window.gtag("consent", "update", {
    analytics_storage: consentSettings.analytics ? "granted" : "denied",
    ad_storage: consentSettings.marketing ? "granted" : "denied",
    functionality_storage: consentSettings.functional ? "granted" : "denied",
  });
};

// ================================
// AUTO-INITIALIZATION & SETUP
// ================================

// Auto-initialize scroll tracking
export const initScrollTracking = (): void => {
  if (!isBrowser) return;

  let maxScroll = 0;
  let timeOnPage = 0;

  // Start time tracking
  const startTime = Date.now();

  // Throttled scroll handler
  const throttledScrollHandler = (() => {
    let isThrottled = false;
    return () => {
      if (isThrottled) return;
      isThrottled = true;

      requestAnimationFrame(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100,
        );

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;

          // Track at milestones
          if ([25, 50, 75, 100].includes(scrollPercent)) {
            trackScrollDepth(scrollPercent, document.title);
          }
        }

        isThrottled = false;
      });
    };
  })();

  // Add scroll listener
  window.addEventListener("scroll", throttledScrollHandler, { passive: true });

  // Track time on page when user leaves
  window.addEventListener("beforeunload", () => {
    timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeOnPage, document.title);
  });
};

// Auto-initialize error tracking
export const initErrorTracking = (): void => {
  if (!isBrowser) return;

  window.addEventListener("error", (event) => {
    trackError(event.error || new Error(event.message), "window_error");
  });

  window.addEventListener("unhandledrejection", (event) => {
    trackError(new Error(event.reason), "unhandled_promise_rejection");
  });
};

// Auto-initialize performance tracking
export const initPerformanceTracking = (): void => {
  if (!isBrowser) return;

  // Track page load time
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackPageLoadTime(loadTime, document.title);
    }, 0);
  });
};

// Master initialization function
export const initAnalytics = (): void => {
  if (!isBrowser) return;

  initGA();
  initScrollTracking();
  initErrorTracking();
  initPerformanceTracking();

  console.log("📊 Analytics fully initialized");
};

// Default export for convenience
export default {
  init: initAnalytics,
  trackPageView,
  trackEvent,
  trackPhoneCall,
  trackFormSubmission,
  trackServiceView,
  trackQuoteRequest,
  trackScrollDepth,
  trackTimeOnPage,
  trackExternalLink,
  trackError,
  isEnabled: isAnalyticsEnabled,
};
