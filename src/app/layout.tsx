import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { StickyCallButtons } from "@/components/layout/StickyCallButtons";
import Script from "next/script";

// CRITICAL: Optimized font loading for better LCP
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
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

// Optimized Metadata for SEO and performance - Updated for Home Services
export const metadata: Metadata = {
  metadataBase: new URL("https://affordablehomeservices.com"),
  title: {
    default: "Affordable Home Services - Southern California's Most Trusted Home Improvement Company",
    template: "%s | Affordable Home Services",
  },
  description:
    "Professional home improvement services in Los Angeles & Ventura County. Expert paver installation, window replacement, roofing services, and exterior painting. Licensed, insured, A+ BBB rating.",
  applicationName: "Affordable Home Services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "home improvement",
    "paver installation",
    "window replacement",
    "roofing contractors",
    "exterior painting",
    "Los Angeles contractors",
    "Ventura County home services",
    "licensed contractors",
  ],
  authors: [
    {
      name: "Affordable Home Services",
      url: "https://affordablehomeservices.com",
    },
  ],
  creator: "Affordable Home Services",
  publisher: "Affordable Home Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affordablehomeservices.com",
    siteName: "Affordable Home Services",
    title: "Affordable Home Services - Southern California's Most Trusted Home Improvement Company",
    description:
      "Professional home improvement services in Los Angeles & Ventura County. Expert paver installation, window replacement, roofing services, and exterior painting. Licensed, insured, A+ BBB rating.",
    images: [
      {
        url: "/images/affordable-home-services.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services - Professional Home Improvement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AffordableHomeCA",
    creator: "@AffordableHomeCA",
    title: "Affordable Home Services - Professional Home Improvement",
    description:
      "Professional home improvement services in Los Angeles & Ventura County. Expert paver installation, window replacement, roofing services, and exterior painting.",
    images: ["/images/affordable-home-services.webp"],
  },
};

// Optimized Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E11D48" },
    { media: "(prefers-color-scheme: dark)", color: "#E11D48" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CRITICAL: Immediate font and connection preloads */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* CRITICAL: High priority logo preload for LCP optimization */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* CRITICAL: Preload critical above-the-fold images - MOBILE FIRST */}
        <link
          rel="preload"
          href="/logo/logo.webp"
          as="image"
          type="image/webp"
          media="(max-width: 1279px)"
          fetchPriority="high"
        />

        {/* CRITICAL: Inline critical CSS for LCP optimization - Updated for Home Services */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for LCP - Mobile First - Home Services Brand */
            .lcp-text {
              font-display: swap;
              contain: layout style;
              transform: translateZ(0);
              will-change: auto;
            }
            .header-container {
              contain: layout style;
              will-change: transform;
            }
            
            /* Prevent FOUT/FOIT - Mobile First */
            .font-inter {
              font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-display: swap;
            }
            
            /* Critical mobile header styles - Updated colors */
            @media (max-width: 1279px) {
              .header-container {
                position: sticky;
                top: 0.5rem;
                z-index: 50;
                width: 100%;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
              }
              
              .mobile-logo-container {
                height: 3rem;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                border-radius: 1rem;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                border: 1px solid rgba(236, 72, 153, 0.2);
              }
              
              @media (min-width: 640px) {
                .header-container {
                  padding-left: 1rem;
                  padding-right: 1rem;
                }
                .mobile-logo-container {
                  height: 3.5rem;
                  border-radius: 1.5rem;
                }
              }
            }
            
            /* Desktop header styles */
            @media (min-width: 1280px) {
              .header-container {
                position: sticky;
                top: 1rem;
                z-index: 50;
                width: 100%;
              }
            }
            
            /* Logo optimization for LCP */
            .logo-image {
              height: auto;
              width: auto;
              max-height: 1.75rem;
              max-width: 100px;
            }
            
            @media (min-width: 640px) {
              .logo-image {
                max-height: 2rem;
                max-width: 115px;
              }
            }
            
            @media (min-width: 768px) {
              .logo-image {
                max-height: 2.25rem;
                max-width: 130px;
              }
            }
            
            @media (min-width: 1024px) {
              .logo-image {
                max-height: 2.5rem;
                max-width: 145px;
              }
            }
            
            @media (min-width: 1280px) {
              .logo-image {
                max-height: 3rem;
                max-width: 160px;
              }
            }
            
            /* Performance optimizations */
            * {
              -webkit-tap-highlight-color: transparent;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            body {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
            }
            
            /* Reduce layout shift */
            img {
              font-size: 0;
            }
            
            /* Critical button styles - Updated for Home Services brand */
            .mobile-call-button {
              background: linear-gradient(to right, rgb(236 72 153), rgb(219 39 119));
              color: white;
              padding: 0.5rem;
              border-radius: 0.75rem;
              box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
              transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
              transform: translateZ(0);
            }
            
            .mobile-call-button:hover {
              background: linear-gradient(to right, rgb(219 39 119), rgb(190 24 93));
              box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
              transform: scale(1.05) translateZ(0);
            }
            
            @media (min-width: 640px) {
              .mobile-call-button {
                padding: 0.625rem;
              }
            }
          `,
          }}
        />

        {/* DEFERRED: Move structured data to prevent render blocking */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Affordable Home Services",
              image:
                "https://affordablehomeservices.com/images/affordable-home-services.webp",
              telephone: "+18184536110",
              email: "info@affordablehomeservices.com",
              url: "https://affordablehomeservices.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Los Angeles County",
                },
                {
                  "@type": "AdministrativeArea", 
                  name: "Ventura County",
                },
              ],
              openingHours: "Mo-Su 07:00-19:00",
              serviceArea: {
                "@type": "State",
                name: "California",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Home Improvement Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Paver Installation",
                      description: "Professional paver installation for driveways, patios, and walkways",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Window Replacement",
                      description: "Energy-efficient window replacement and installation services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Roofing Services",
                      description: "Complete roofing services including repair and replacement",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Exterior Painting",
                      description: "Professional exterior painting for residential and commercial properties",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "15000",
              },
            }),
          }}
        />
      </head>

      <body
        className="flex flex-col min-h-screen bg-background text-foreground antialiased font-inter"
        style={{
          fontFamily: inter.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-base"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>

        <Footer />
        <Toaster />
        <StickyCallButtons />

        {/* OPTIMIZED: Google Analytics with better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HOME123456"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HOME123456', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />
      </body>
    </html>
  );
}