// instrumentation.ts - Place this in your root directory
// This file disables Next.js automatic instrumentation and analytics

export async function register() {
  // Only run in browser environment
  if (typeof window !== 'undefined') {
    // COMPREHENSIVE: Block all analytics and web-vitals loading
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const url = args[0]?.toString() || '';
      
      // Block web-vitals and analytics URLs
      if (url.includes('unpkg.com') || 
          url.includes('web-vitals') || 
          url.includes('google-analytics') ||
          url.includes('googletagmanager') ||
          url.includes('vercel.com/api/analytics') ||
          url.includes('vitals.vercel-analytics')) {
        console.log('🚫 Blocked analytics/web-vitals request:', url);
        return Promise.resolve(new Response('{}', { status: 200 }));
      }
      
      return originalFetch.apply(this, args);
    };

    // Override analytics globals
    (window as any).gtag = () => {};
    (window as any).dataLayer = [];
    (window as any).ga = () => {};
    (window as any).analytics = null;
    
    // Block web-vitals if it tries to load
    Object.defineProperty(window, 'webVitals', {
      value: null,
      writable: false,
      configurable: false,
    });
    
    // Override common web-vitals functions
    (window as any).getCLS = () => {};
    (window as any).getFID = () => {};
    (window as any).getFCP = () => {};
    (window as any).getLCP = () => {};
    (window as any).getTTFB = () => {};
    
    // Ensure process is properly defined for browser
    if (typeof (window as any).process === 'undefined') {
      (window as any).process = {
        env: { 
          NODE_ENV: 'development',
          BROWSER: true
        },
        browser: true,
        version: '',
        versions: { node: '' },
        platform: 'browser',
        nextTick: () => {},
        exit: () => {},
        cwd: () => '/',
        pid: 0,
        ppid: 0,
        argv: [],
        execPath: '',
        title: 'browser',
      };
    }
    
    // Block script injection
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = function(name: string, value: string) {
          if (name === 'src' && (
            value.includes('unpkg.com') ||
            value.includes('web-vitals') ||
            value.includes('google-analytics') ||
            value.includes('googletagmanager')
          )) {
            console.log('🚫 Blocked script loading:', value);
            return;
          }
          return originalSetAttribute.call(this, name, value);
        };
      }
      
      return element;
    };
  }
  
  // Server-side: Clean environment variables
  if (typeof process !== 'undefined' && process.env) {
    // Remove analytics environment variables
    const analyticsVars = [
      'NEXT_PUBLIC_ANALYTICS_ID',
      'VERCEL_ANALYTICS_ID', 
      'NEXT_PUBLIC_VERCEL_ANALYTICS_ID',
      'GOOGLE_ANALYTICS_ID',
      'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
      'GA_TRACKING_ID',
      'NEXT_PUBLIC_GA_TRACKING_ID',
      'VERCEL_SPEED_INSIGHTS_ID',
      'NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_ID'
    ];
    
    analyticsVars.forEach(varName => {
      if (process.env[varName]) {
        delete process.env[varName];
      }
    });
  }
}