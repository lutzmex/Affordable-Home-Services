// src/app/services/page.tsx
import { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import ServicesClient from "./services-client";

// Primary font: Poppins with lighter weights for clean look
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // Light to medium weights only
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

// Complete SEO Schema Data with All 19 Services Listed
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Affordable Home Services",
  description:
    "Professional home improvement services including pavers, windows, roofing, and exterior painting in Los Angeles & Ventura County",
  image:
    "https://affordablehomeservices.com/images/affordable-home-services-hero.webp",
  logo: "https://affordablehomeservices.com/logo/logo.webp",
  currenciesAccepted: "USD",
  paymentAccepted: "Visa, MC, PayPal, Amex, Discover, Cash, Check",
  url: "https://affordablehomeservices.com/services",
  telephone: "+1 (818) 453-6110",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Professional Service Center",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  areaServed: [
    {
      "@type": "State",
      name: "California",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete Home Improvement Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Painting Services",
          description:
            "Professional commercial painting services for offices, retail stores, and industrial buildings with premium coatings and finishes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Paver Installation Services",
          description:
            "Professional commercial paver installation for business entrances, parking areas, and outdoor commercial spaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Roofing Services",
          description:
            "Complete commercial roofing solutions including flat roofs, TPO systems, and preventive maintenance programs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Window Services",
          description:
            "Professional commercial window installation, replacement, and repair for office buildings and retail spaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Painting Services",
          description:
            "Premium exterior house painting with professional surface preparation and high-quality paints for lasting results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Paint Preparation Services",
          description:
            "Comprehensive exterior paint preparation including power washing, scraping, priming, and surface repairs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fence Painting Services",
          description:
            "Professional fence painting and staining services to protect and beautify wooden and metal fencing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Driveway Paver Services",
          description:
            "Custom driveway paver installation with interlocking concrete pavers and natural stone options.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Patio Paver Services",
          description:
            "Beautiful patio paver installation to create stunning outdoor living spaces for entertainment and relaxation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paver Repair Services",
          description:
            "Professional paver repair, restoration, and maintenance to restore existing paved surfaces to like-new condition.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pool Deck Paver Services",
          description:
            "Slip-resistant pool deck pavers that stay cool and provide safety around swimming pools and spa areas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flat Roof Contractor Services",
          description:
            "Specialized flat roof installation, repair, and maintenance for commercial and residential buildings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair Services",
          description:
            "Emergency roof repair services available 24/7 for leak detection, shingle replacement, and storm damage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement Services",
          description:
            "Complete roof replacement with premium materials and professional installation backed by comprehensive warranties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Energy-Efficient Window Services",
          description:
            "Energy-efficient window installation to reduce utility costs and improve home comfort with ENERGY STAR certified products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Installation Services",
          description:
            "Professional window installation for new construction and home additions with precise fitting and weatherproofing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Repair Services",
          description:
            "Expert window repair services for broken glass, damaged frames, and malfunctioning hardware.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Replacement Services",
          description:
            "Complete window replacement with vinyl, wood, and aluminum frames to improve energy efficiency and home value.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gutter Installation Services",
          description:
            "Professional gutter installation and repair to protect your home's foundation with seamless aluminum gutters.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15000",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: "Mo-Su 07:00-19:00",
};

export const metadata: Metadata = {
  title:
    "Professional Home Improvement Services | 19 Specialized Solutions Available",
  description:
    "Expert home improvement services with 19 specialized solutions. From residential pavers to commercial roofing. Licensed contractors available throughout Los Angeles & Ventura County.",
  keywords:
    "home improvement, paver installation, window replacement, roofing services, exterior painting, Los Angeles, Ventura County",
  openGraph: {
    title: "Professional Home Improvement Services | 19 Specialized Solutions",
    description:
      "Complete home improvement services from residential to commercial. Quality craftsmanship, expert technicians, satisfaction guaranteed.",
    type: "website",
    url: "https://affordablehomeservices.com/services",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services-hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional Home Improvement Services",
      },
    ],
    siteName: "Affordable Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Home Improvement Services | 19 Specialized Solutions",
    description:
      "Expert home improvement with licensed contractors. Quality materials and professional installation.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services-hero.webp",
    ],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
        <ServicesClient />
      </div>
    </>
  );
}
