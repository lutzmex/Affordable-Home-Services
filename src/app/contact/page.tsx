// src/app/contact/page.tsx
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ContactClient from "./contact-client";

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

// Structured data for the contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Affordable Home Services",
  description:
    "Contact Southern California's most trusted home improvement company. Licensed contractors specializing in paver installation, window replacement, roofing services, and exterior painting throughout Los Angeles & Ventura County.",
  url: "https://affordablehomeservices.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Affordable Home Services",
    telephone: "+1 (818) 453-6110",
    email: "info@affordablehomeservices.com",
    url: "https://affordablehomeservices.com",
    logo: "https://affordablehomeservices.com/logo/logo.webp",
    image:
      "https://affordablehomeservices.com/images/affordable-home-services-contact.webp",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1 (818) 453-6110",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+1 (818) 453-6110",
        contactType: "emergency",
        availableLanguage: ["English", "Spanish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        email: "info@affordablehomeservices.com",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Los Angeles County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Ventura County",
      },
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "City",
        name: "Beverly Hills",
      },
      {
        "@type": "City",
        name: "Pasadena",
      },
      {
        "@type": "City",
        name: "Glendale",
      },
      {
        "@type": "City",
        name: "Burbank",
      },
      {
        "@type": "City",
        name: "Thousand Oaks",
      },
      {
        "@type": "City",
        name: "Simi Valley",
      },
      {
        "@type": "City",
        name: "Oxnard",
      },
      {
        "@type": "City",
        name: "Ventura",
      },
    ],
    openingHours: ["Mo-Fr 07:00-19:00", "Sa 08:00-18:00", "Su 09:00-17:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "15000",
    },
    serviceType: [
      "Paver Installation",
      "Window Replacement",
      "Roofing Services",
      "Exterior Painting",
      "Home Improvement",
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
            description:
              "Professional paver installation for driveways, patios, walkways, and pool decks",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Replacement",
            description:
              "Energy-efficient window replacement and historic window restoration services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roofing Services",
            description:
              "Complete roofing services including repair, replacement, and emergency service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Painting",
            description:
              "Professional exterior painting for residential and commercial properties",
          },
        },
      ],
    },
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D74599",
};

// Enhanced metadata
export const metadata: Metadata = {
  title:
    "Contact Expert Home Improvement Contractors | Affordable Home Services",
  description:
    "Contact Southern California's most trusted home improvement company. Licensed contractors specializing in paver installation, window replacement, roofing services, and exterior painting. Call (818) 453-6110 for free estimates.",
  keywords: [
    "contact home improvement contractors",
    "Los Angeles contractors",
    "Ventura County contractors",
    "paver installation contact",
    "window replacement contractors",
    "roofing contractors contact",
    "exterior painting contractors",
    "home improvement phone number",
    "Southern California contractors",
    "licensed home improvement",
  ].join(", "),
  authors: [{ name: "Affordable Home Services" }],
  creator: "Affordable Home Services",
  publisher: "Affordable Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Contact Expert Home Improvement Contractors | Affordable Home Services",
    description:
      "Contact Southern California's most trusted home improvement company. Licensed contractors specializing in paver installation, window replacement, roofing services, and exterior painting. Call (818) 453-6110 for free estimates.",
    type: "website",
    url: "https://affordablehomeservices.com/contact",
    siteName: "Affordable Home Services",
    locale: "en_US",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Affordable Home Services - Professional Home Improvement Contractors",
        type: "image/webp",
      },
      {
        url: "https://affordablehomeservices.com/images/contact-home-improvement-experts.webp",
        width: 800,
        height: 600,
        alt: "Contact Our Licensed Home Improvement Contractors",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Expert Home Improvement Contractors | Affordable Home Services",
    description:
      "Contact Southern California's most trusted home improvement company. Licensed contractors specializing in paver installation, window replacement, roofing services, and exterior painting. Call (818) 453-6110 for free estimates.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services-contact.webp",
    ],
    creator: "@AffordableHomeServices",
    site: "@AffordableHomeServices",
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/contact",
    languages: {
      "en-US": "https://affordablehomeservices.com/contact",
    },
  },
  category: "Home Improvement Services",
  classification: "Home Improvement Contractors",
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
    "apple-mobile-web-app-title": "Contact Affordable Home Services",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#D74599",
    "msapplication-config": "/browserconfig.xml",
  },
};

function generateStructuredData() {
  return {
    __html: JSON.stringify(structuredData, null, 0),
  };
}

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />

      {/* Page wrapper with font variables and optimization */}
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
        <ContactClient />
      </div>
    </>
  );
}

// Performance optimizations
export const dynamic = "auto";
export const revalidate = false;
