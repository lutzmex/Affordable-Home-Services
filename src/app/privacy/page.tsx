// app/privacy/page.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import PrivacyPageClient from "./privacy-client";

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

// Structured data for privacy policy page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - Affordable Home Services",
  description:
    "Learn how Affordable Home Services protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights regarding home improvement services in Southern California.",
  url: "https://affordablehomeservices.com/privacy",
  mainEntity: {
    "@type": "PrivacyPolicy",
    name: "Affordable Home Services Privacy Policy",
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
        email: "privacy@affordablehomeservices.com",
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
        name: "Data Collection",
        description:
          "Information about what personal data we collect from home improvement customers",
      },
      {
        "@type": "Thing",
        name: "Data Usage",
        description:
          "How we use customer personal information to provide home improvement services",
      },
      {
        "@type": "Thing",
        name: "Data Sharing",
        description: "When and with whom we share customer information",
      },
      {
        "@type": "Thing",
        name: "Data Security",
        description: "How we protect customer personal information",
      },
      {
        "@type": "Thing",
        name: "Customer Rights",
        description: "Your rights regarding your personal information",
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
        name: "Privacy Policy",
        item: "https://affordablehomeservices.com/privacy",
      },
    ],
  },
};

export const metadata: Metadata = {
  title:
    "Privacy Policy - How We Protect Your Information | Affordable Home Services",
  description:
    "Learn how Affordable Home Services protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights regarding home improvement services in Southern California.",
  keywords:
    "privacy policy, data protection, personal information, customer privacy, data security, CCPA, privacy rights, home improvement privacy, contractor privacy",
  openGraph: {
    title:
      "Privacy Policy - How We Protect Your Information | Affordable Home Services",
    description:
      "Learn how Affordable Home Services protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights regarding home improvement services in Southern California.",
    type: "website",
    url: "https://affordablehomeservices.com/privacy",
    images: [
      {
        url: "https://affordablehomeservices.com/images/privacy-policy.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services Privacy Policy - Your Information Protection",
      },
    ],
    siteName: "Affordable Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy - How We Protect Your Information | Affordable Home Services",
    description:
      "Learn how Affordable Home Services protects your personal information. Our privacy policy explains data collection, usage, sharing, and your rights regarding home improvement services in Southern California.",
    images: ["https://affordablehomeservices.com/images/privacy-policy.webp"],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/privacy",
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
  category: "Privacy Policy",
};

export default function PrivacyPage() {
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
        <PrivacyPageClient />
      </div>
    </>
  );
}
