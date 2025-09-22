// app/about/page.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import AboutClient from "./about-client";

// Clean, modern font setup
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

// Structured data for the about page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Affordable Home Services",
  description:
    "Southern California's most trusted home improvement company specializing in paver installation, window replacement, roofing services, and exterior painting. Serving Los Angeles & Ventura County since 2010.",
  url: "https://affordablehomeservices.com/about",
  logo: "https://affordablehomeservices.com/logo/logo.webp",
  image:
    "https://affordablehomeservices.com/images/affordable-home-services-about.webp",
  telephone: "+1 (818) 453-6110",
  foundingDate: "2010",
  founders: [
    {
      "@type": "Person",
      name: "Affordable Home Services Founders",
    },
  ],
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
  numberOfEmployees: "50+",
  slogan: "Southern California's Most Trusted Home Improvement Company",
  knowsAbout: [
    "Paver Installation",
    "Window Replacement",
    "Roofing Services",
    "Exterior Painting",
    "Home Improvement",
    "Construction Services",
  ],
  hasCredential: [
    "CSLB Licensed",
    "Fully Insured",
    "Bonded Contractors",
    "A+ BBB Rating",
    "Warranty Included",
  ],
  award: [
    "A+ Better Business Bureau Rating",
    "Customer Service Excellence",
    "Industry Recognition",
  ],
  serviceType: "Home Improvement Services",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete Home Improvement Services",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15000",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: "Mo-Su 07:00-19:00",
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Check", "Financing"],
  sameAs: [
    "https://www.facebook.com/affordablehomeservices",
    "https://www.linkedin.com/company/affordable-home-services",
  ],
};

export const metadata: Metadata = {
  title:
    "About Us - 13+ Years of Quality Home Improvement | Affordable Home Services",
  description:
    "Learn about Southern California's most trusted home improvement company. 13+ years of experience, 15,000+ projects completed, 4.9/5 rating. Licensed paver, window, roofing & painting experts serving LA & Ventura County.",
  keywords:
    "about home improvement company, Southern California contractors, paver installation experts, window replacement specialists, roofing contractors, exterior painting, Los Angeles home services, Ventura County contractors, licensed insured",
  openGraph: {
    title:
      "About Us - 13+ Years of Quality Home Improvement | Affordable Home Services",
    description:
      "Learn about Southern California's most trusted home improvement company. 13+ years of experience, 15,000+ projects completed, 4.9/5 rating. Licensed paver, window, roofing & painting experts serving LA & Ventura County.",
    type: "website",
    url: "https://affordablehomeservices.com/about",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services-about.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services - About Our Expert Home Improvement Team",
      },
    ],
    siteName: "Affordable Home Services",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Us - 13+ Years of Quality Home Improvement | Affordable Home Services",
    description:
      "Learn about Southern California's most trusted home improvement company. 13+ years of experience, 15,000+ projects completed, 4.9/5 rating. Licensed paver, window, roofing & painting experts serving LA & Ventura County.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services-about.webp",
    ],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/about",
  },
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function AboutPage() {
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
        <AboutClient />
      </div>
    </>
  );
}
