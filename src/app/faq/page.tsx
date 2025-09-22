// app/faqs/page.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import FAQsClient from "./faqs-client";

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

// Structured data for the FAQs page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What home improvement services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in four main services: professional paver installation for driveways, patios, and pool decks; energy-efficient window replacement and restoration; complete roofing services including repair and replacement; and exterior painting for residential and commercial properties. All services are performed by licensed, insured contractors throughout Los Angeles and Ventura County.",
      },
    },
    {
      "@type": "Question",
      name: "How much do paver installation projects typically cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paver installation costs vary by project size and material choice. Driveway pavers typically range from $12-25 per square foot, patio pavers $15-30 per square foot, and pool deck pavers $18-35 per square foot. These prices include excavation, base preparation, paver installation, joint sand, and sealing. We provide detailed written estimates at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are fully licensed by the California Contractors State License Board, bonded, and carry comprehensive liability insurance plus Workers' Compensation for all employees. We maintain an A+ Better Business Bureau rating and provide detailed warranties on all work performed. Our certifications include EPA compliance and industry safety standards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide free estimates for all services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We provide comprehensive written estimates for all projects at no cost. Our estimates include detailed material specifications, labor costs, project timeline, and warranty information. We believe in transparent pricing with no hidden fees or surprise costs.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Los Angeles County including Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van Nuys, and the entire San Fernando Valley. We also serve all of Ventura County including Thousand Oaks, Simi Valley, Oxnard, Camarillo, and Ventura. Our local teams understand Southern California's unique climate and building requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long do paver installations typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary by size and complexity. Most driveway paver installations take 3-5 days, patio installations 4-7 days, and pool deck installations 5-8 days. This includes excavation, base preparation, paver installation, and final sealing. Weather conditions and permit requirements may affect timelines.",
      },
    },
    {
      "@type": "Question",
      name: "What types of windows do you install and replace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install and replace all types of windows including vinyl, wood, and aluminum frames in single-hung, double-hung, casement, sliding, and custom configurations. All our windows are Energy Star certified for maximum efficiency. We also specialize in historic window restoration for older Los Angeles homes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle roofing emergencies and insurance claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide 24/7 emergency roofing services throughout Los Angeles and Ventura County. Our certified roofers work directly with insurance companies to ensure proper claim handling for storm damage, leaks, and other covered repairs. We handle all documentation and work with adjusters to expedite your claim process.",
      },
    },
    {
      "@type": "Question",
      name: "What exterior painting services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide comprehensive exterior painting services including house painting, commercial building painting, fence and deck staining, surface preparation, power washing, and protective coatings. We use premium Sherwin-Williams and Benjamin Moore paints with 7-year workmanship warranties.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start my home improvement project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects can be scheduled within 1-2 weeks of estimate approval. Emergency services like roof repairs are available 24/7 with same-day response. Project timelines depend on permits, weather, and material availability. We provide realistic schedules and keep you updated throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer warranties on your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive warranties on all our work. Paver installations include lifetime material warranties and 7-year workmanship warranties. Window installations have manufacturer warranties plus our installation guarantee. Roofing projects include 25-year material warranties and workmanship guarantees. Exterior painting includes 7-year workmanship warranties.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with permits and HOA approvals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We handle all necessary permits for your project and can assist with HOA approvals. Our team is familiar with Los Angeles County and Ventura County building requirements. We ensure all work meets or exceeds local building codes and help navigate the approval process efficiently.",
      },
    },
  ],
  about: {
    "@type": "Organization",
    name: "Affordable Home Services",
    description:
      "Southern California's most trusted home improvement company specializing in pavers, windows, roofing, and exterior painting with 13+ years of experience",
    url: "https://affordablehomeservices.com",
    telephone: "+1 (818) 453-6110",
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
};

export const metadata: Metadata = {
  title:
    "Frequently Asked Questions - Home Improvement FAQs | Affordable Home Services",
  description:
    "Get instant answers to your home improvement questions. Expert insights on paver installation, window replacement, roofing services, and exterior painting costs, timelines, and processes in Los Angeles & Ventura County.",
  keywords:
    "home improvement FAQ, paver installation cost, window replacement questions, roofing contractor questions, exterior painting FAQ, Los Angeles home services, Ventura County contractors, licensed home improvement",
  openGraph: {
    title:
      "Frequently Asked Questions - Home Improvement FAQs | Affordable Home Services",
    description:
      "Get instant answers to your home improvement questions. Expert insights on paver installation, window replacement, roofing services, and exterior painting costs, timelines, and processes in Los Angeles & Ventura County.",
    type: "website",
    url: "https://affordablehomeservices.com/faqs",
    images: [
      {
        url: "https://affordablehomeservices.com/images/home-improvement-faq.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services - Frequently Asked Questions",
      },
    ],
    siteName: "Affordable Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Frequently Asked Questions - Home Improvement FAQs | Affordable Home Services",
    description:
      "Get instant answers to your home improvement questions. Expert insights on paver installation, window replacement, roofing services, and exterior painting costs, timelines, and processes in Los Angeles & Ventura County.",
    images: [
      "https://affordablehomeservices.com/images/home-improvement-faq.webp",
    ],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/faqs",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function FAQsPage() {
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
        <FAQsClient />
      </div>
    </>
  );
}