// src/app/locations/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import LocationTemplate from "../components/LocationTemplate";
import { getLocationDataSync, getAllLocationSlugsSync } from "../data";

// Primary font: Poppins with lighter weights for clean look
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

// Technical/monospace font for numbers, phone numbers, codes
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false,
  fallback: [
    "SF Mono",
    "Monaco",
    "Inconsolata",
    "Roboto Mono",
    "Consolas",
    "monospace",
  ],
  adjustFontFallback: true,
});

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all locations (for static generation)
export async function generateStaticParams() {
  const locationSlugs = getAllLocationSlugsSync();

  return locationSlugs.map((locationSlug) => ({
    slug: locationSlug,
  }));
}

// Generate metadata for each location page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locationData = getLocationDataSync(resolvedParams.slug);

  if (!locationData) {
    return {
      title: "Location Not Found",
      description: "The requested location page could not be found.",
    };
  }

  const { seo } = locationData;

  // Create base metadata first
  const baseMetadata: Metadata = {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords.join(", "),
    robots: seo.robots || "index, follow",

    // Open Graph tags
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        {
          url: seo.openGraph.image,
          width: 1200,
          height: 630,
          alt: seo.openGraph.imageAlt,
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: seo.openGraph.siteName,
      url: seo.openGraph.url,
    },

    // Twitter Card tags
    twitter: {
      card: "summary_large_image",
      title: seo.twitter.title,
      description: seo.twitter.description,
      images: [
        {
          url: seo.twitter.image,
          alt: seo.twitter.imageAlt,
        },
      ],
    },

    // Canonical URL
    alternates: {
      canonical: seo.canonicalUrl || `/locations/${resolvedParams.slug}`,
    },
  };

  // Add additional meta tags
  const additionalMeta: Record<string, string> = {
    "geo.region":
      locationData.type === "city"
        ? locationData.stateSlug?.toUpperCase() || ""
        : locationData.abbreviation || "",
    "geo.placename": locationData.name,
    author: "Affordable Home Service Company",
    coverage: locationData.type === "city" ? "Local" : "Statewide",
    distribution: "Regional",
    rating: "General",
    "revisit-after": "7 days",
    language: "EN",
    expires: "never",
    "cache-control": "public, max-age=3600",
    "og:region":
      locationData.type === "city"
        ? locationData.stateSlug?.toUpperCase() || ""
        : locationData.abbreviation || "",
    "og:country-name": "United States",
    "og:postal-code": "",
    "og:locality": locationData.name,
    "business:contact_data:street_address": "",
    "business:contact_data:locality": locationData.name,
    "business:contact_data:region":
      locationData.type === "city"
        ? locationData.stateSlug?.toUpperCase() || ""
        : locationData.abbreviation || "",
    "business:contact_data:postal_code": "",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": locationData.contact.phoneDisplay,
    "business:contact_data:website": seo.openGraph.url,
  };

  return {
    ...baseMetadata,
    other: additionalMeta,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locationData = getLocationDataSync(resolvedParams.slug);

  if (!locationData) {
    notFound();
  }

  return (
    <>
      {/* Custom Schemas Scripts - Dynamic from location data */}
      {locationData.customSchemas.map((schema) => (
        <Script
          key={schema.id}
          id={schema.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.schema) }}
          strategy="beforeInteractive"
        />
      ))}

      {/* Additional SEO Tags via Script for custom meta */}
      <Script
        id="additional-seo-tags"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add custom tracking or SEO initialization here if needed
            if (typeof window !== 'undefined') {
              // Initialize any SEO-related tracking
              window.seoData = ${JSON.stringify({
                location: locationData.name,
                type: locationData.type,
                state:
                  locationData.type === "city"
                    ? locationData.state
                    : locationData.name,
                services: locationData.services.list.length,
                relatedLocations: locationData.relatedLocations.length,
                rating:
                  locationData.trustIndicators.find(
                    (t) => t.label === "Average Rating",
                  )?.value || "4.9/5",
                experience:
                  locationData.stats.find((s) => s.label.includes("Experience"))
                    ?.value || "15+ Years",
                customSchemas: locationData.customSchemas.length,
                contentSections: locationData.content.sections?.length || 0,
                totalFaqs: locationData.faqs.length,
                totalTestimonials: locationData.testimonials.length,
              })};
              
              // Log available custom schemas for debugging
              console.log('Available Custom Schemas:', ${JSON.stringify(
                locationData.customSchemas.map((schema) => ({
                  id: schema.id,
                  name: schema.name,
                  description: schema.description,
                })),
              )});

              // Log location structure for debugging
              console.log('Location Structure:', {
                locationName: '${locationData.name}',
                locationSlug: '${locationData.slug}',
                locationType: '${locationData.type}',
                state: '${locationData.type === "city" ? locationData.state : "N/A"}',
                population: '${locationData.population}',
                sectionsCount: ${locationData.content.sections?.length || 0},
                servicesCount: ${locationData.services.list.length},
                faqsCount: ${locationData.faqs.length},
                testimonialsCount: ${locationData.testimonials.length},
                whyChooseUsReasons: ${locationData.whyChooseUs.reasons.length},
                processSteps: ${locationData.process.steps.length}
              });

              // Analytics and tracking initialization
              if (window.gtag) {
                window.gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: '${locationData.seo.metaTitle}',
                  page_location: window.location.href,
                  custom_map: {
                    'custom_parameter_1': 'location_name',
                    'custom_parameter_2': 'location_type',
                    'custom_parameter_3': 'service_type'
                  },
                  location_name: '${locationData.name}',
                  location_type: '${locationData.type}',
                  service_type: 'professional_services'
                });
              }

              // Schema validation (in development)
              if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
                console.log('SEO Validation:', {
                  hasMetaTitle: '${!!locationData.seo.metaTitle}',
                  hasMetaDescription: '${!!locationData.seo.metaDescription}',
                  hasOpenGraph: '${!!locationData.seo.openGraph}',
                  hasTwitterCard: '${!!locationData.seo.twitter}',
                  hasCanonicalUrl: '${!!locationData.seo.canonicalUrl}',
                  keywordsCount: ${locationData.seo.keywords.length},
                  customSchemasCount: ${locationData.customSchemas.length},
                  hasRelatedLocations: ${locationData.relatedLocations.length > 0}
                });
              }
            }
          `,
        }}
      />

      {/* Performance and UX Enhancements */}
      <Script
        id="performance-enhancements"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring and UX improvements for location pages
            if (typeof window !== 'undefined') {
              // Smooth scrolling for anchor links
              document.addEventListener('click', function(e) {
                const target = e.target.closest('a[href^="#"]');
                if (target) {
                  e.preventDefault();
                  const id = target.getAttribute('href').substring(1);
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              });

              // Add loading states for better UX
              const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
              phoneLinks.forEach(link => {
                link.addEventListener('click', function() {
                  // Track phone call clicks
                  if (window.gtag) {
                    window.gtag('event', 'phone_call', {
                      event_category: 'engagement',
                      event_label: '${locationData.name}',
                      value: 1
                    });
                  }
                });
              });

              // Track service navigation clicks
              const serviceLinks = document.querySelectorAll('a[href^="/services/"]');
              serviceLinks.forEach(link => {
                link.addEventListener('click', function() {
                  if (window.gtag) {
                    window.gtag('event', 'service_navigation', {
                      event_category: 'navigation',
                      event_label: this.href,
                      value: 1
                    });
                  }
                });
              });

              // Lazy load images with intersection observer
              const images = document.querySelectorAll('img[loading="lazy"]');
              if (images.length > 0 && 'IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                      }
                      imageObserver.unobserve(img);
                    }
                  });
                }, {
                  rootMargin: '50px 0px',
                  threshold: 0.01
                });
                
                images.forEach(img => imageObserver.observe(img));
              }

              // Add error boundary for better error handling
              window.addEventListener('error', function(e) {
                console.error('Location Page Error:', e.error);
                // Report to error tracking service if configured
              });

              // Performance metrics
              if ('performance' in window && 'PerformanceObserver' in window) {
                try {
                  const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                      if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                      }
                      if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                      }
                    });
                  });
                  observer.observe({entryTypes: ['largest-contentful-paint', 'first-input']});
                } catch (e) {
                  console.log('Performance observer not fully supported');
                }
              }

              // Location-specific content tracking
              const locationInfo = {
                locationName: '${locationData.name}',
                locationType: '${locationData.type}',
                sectionsCount: ${locationData.content.sections?.length || 0},
                hasMap: true,
                hasFaqs: ${locationData.faqs.length > 0},
                hasTestimonials: ${locationData.testimonials.length > 0}
              };

              if (window.gtag) {
                window.gtag('event', 'location_content_loaded', {
                  event_category: 'content',
                  location_name: locationInfo.locationName,
                  location_type: locationInfo.locationType,
                  sections_count: locationInfo.sectionsCount,
                  has_map: locationInfo.hasMap,
                  has_faqs: locationInfo.hasFaqs,
                  has_testimonials: locationInfo.hasTestimonials
                });
              }

              // Track scroll depth for location pages
              let maxScroll = 0;
              const throttledScrollHandler = (() => {
                let isThrottled = false;
                return () => {
                  if (isThrottled) return;
                  isThrottled = true;
                  requestAnimationFrame(() => {
                    const scrollPercent = Math.round(
                      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
                    );
                    if (scrollPercent > maxScroll) {
                      maxScroll = scrollPercent;
                      if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                        if (window.gtag) {
                          window.gtag('event', 'scroll_depth', {
                            event_category: 'engagement',
                            event_label: maxScroll + '%',
                            value: maxScroll
                          });
                        }
                      }
                    }
                    isThrottled = false;
                  });
                };
              })();
              
              window.addEventListener('scroll', throttledScrollHandler, { passive: true });
            }
          `,
        }}
      />

      {/* Font wrapper with clean typography */}
      <div
        className={`${poppins.variable} ${ibmPlexMono.variable}`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* Main Component */}
        <LocationTemplate locationData={locationData} />
      </div>
    </>
  );
}
