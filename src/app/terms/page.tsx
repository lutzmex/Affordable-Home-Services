// app/terms/page.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import TermsPageClient from "./terms-client";

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

// Structured data for terms of service page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms and Conditions - Affordable Home Services",
  description:
    "Read the terms and conditions for Affordable Home Services. Understand your rights, responsibilities, and our service agreements for professional home improvement services in Southern California.",
  url: "https://affordablehomeservices.com/terms",
  mainEntity: {
    "@type": "TermsOfService",
    name: "Affordable Home Services Terms of Service",
    dateModified: "2024-01-01",
    datePublished: "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: "Affordable Home Services",
      url: "https://affordablehomeservices.com",
      logo: "https://affordablehomeservices.com/logo/logo.webp",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-818-453-6110",
        contactType: "customer service",
        email: "legal@affordablehomeservices.com",
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
    },
    about: [
      {
        "@type": "Thing",
        name: "Service Agreement",
        description: "Terms governing home improvement services",
      },
      {
        "@type": "Thing",
        name: "User Responsibilities",
        description: "Customer obligations and requirements",
      },
      {
        "@type": "Thing",
        name: "Service Limitations",
        description: "Scope and limitations of home improvement services",
      },
      {
        "@type": "Thing",
        name: "Liability Terms",
        description: "Limitation of liability and warranty information",
      },
      {
        "@type": "Thing",
        name: "Payment Terms",
        description: "Pricing, payment, and billing terms",
      },
    ],
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
        name: "Terms of Service",
        item: "https://affordablehomeservices.com/terms",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Terms of Service - Legal Agreement | Affordable Home Services",
  description:
    "Read the terms and conditions for Affordable Home Services. Understand your rights, responsibilities, and our service agreements for professional home improvement services in Southern California.",
  keywords:
    "terms of service, legal agreement, service terms, home improvement agreement, customer terms, service conditions, liability terms, warranty terms, contractor terms",
  openGraph: {
    title: "Terms of Service - Legal Agreement | Affordable Home Services",
    description:
      "Read the terms and conditions for Affordable Home Services. Understand your rights, responsibilities, and our service agreements for professional home improvement services in Southern California.",
    type: "website",
    url: "https://affordablehomeservices.com/terms",
    images: [
      {
        url: "https://affordablehomeservices.com/images/terms-of-service.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services Terms of Service - Legal Agreement",
      },
    ],
    siteName: "Affordable Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Legal Agreement | Affordable Home Services",
    description:
      "Read the terms and conditions for Affordable Home Services. Understand your rights, responsibilities, and our service agreements for professional home improvement services in Southern California.",
    images: ["https://affordablehomeservices.com/images/terms-of-service.webp"],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/terms",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  authors: [{ name: "Affordable Home Services" }],
  publisher: "Affordable Home Services",
  category: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <TermsPageClient />
      </div>
    </>
  );
}