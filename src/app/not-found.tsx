// app/not-found.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import NotFoundClient from "./not-found-client";

// Clean, modern font setup matching other pages
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

// Structured data for the 404 page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "404 - Page Not Found | Affordable Home Services",
  description:
    "The page you are looking for could not be found. Return to Affordable Home Services homepage or contact our expert home improvement team for assistance.",
  url: "https://affordablehomeservices.com/404",
  isPartOf: {
    "@type": "WebSite",
    name: "Affordable Home Services",
    url: "https://affordablehomeservices.com",
  },
  mainEntity: {
    "@type": "Organization",
    name: "Affordable Home Services",
    telephone: "+1 (818) 453-6110",
    url: "https://affordablehomeservices.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 (818) 453-6110",
      contactType: "customer service",
      availableLanguage: "English",
      hoursAvailable: "Mo-Su 07:00-19:00",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Improvement Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paver Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roofing Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Painting",
          },
        },
      ],
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://affordablehomeservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "404 Error",
        item: "https://affordablehomeservices.com/404",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "404 - Page Not Found | Affordable Home Services",
  description:
    "The page you are looking for could not be found. Return to Affordable Home Services homepage or contact our expert home improvement team for assistance with paver installation, window replacement, roofing, or exterior painting.",
  keywords:
    "404 error, page not found, affordable home services, home improvement services, contact support, paver installation, window replacement, roofing services, exterior painting",
  authors: [{ name: "Affordable Home Services" }],
  creator: "Affordable Home Services",
  publisher: "Affordable Home Services",
  robots: {
    index: false, // Don't index 404 pages
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "404 - Page Not Found | Affordable Home Services",
    description:
      "The page you are looking for could not be found. Return to Affordable Home Services homepage or contact our expert home improvement team for assistance.",
    type: "website",
    url: "https://affordablehomeservices.com/404",
    siteName: "Affordable Home Services",
    locale: "en_US",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services - 404 Page Not Found",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found | Affordable Home Services",
    description:
      "The page you are looking for could not be found. Return to Affordable Home Services homepage or contact our expert home improvement team for assistance.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services.webp",
    ],
    creator: "@AffordableHomeCA",
    site: "@AffordableHomeCA",
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/404",
    languages: {
      "en-US": "https://affordablehomeservices.com/404",
    },
  },
  category: "Error Page",
  classification: "404 Not Found",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://affordablehomeservices.com"),
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "404 - Affordable Home Services",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#E11D48",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function NotFoundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Font wrapper with clean typography */}
      <div
        className={`${inter.variable}`}
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <NotFoundClient />
      </div>
    </>
  );
}