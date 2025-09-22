import { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import { Hero } from "@/components/home/Hero";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { TopServiceCities } from "@/components/home/TopServiceCities";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HomeFaqs } from "@/components/home/HomeFaqs";
import { Testimonials } from "@/components/home/Testimonials";
import ContentSection from "@/components/home/ContentSection";

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

// Local Factors Data
const localFactors = {
  commonProjects: [
    "Driveway paver installation and design",
    "Patio and outdoor living space pavers",
    "Pool deck paver installation",
    "Energy-efficient window replacement",
    "Historic window restoration services",
    "Commercial window installation",
    "Emergency roof leak repair",
    "Complete roof replacement systems",
    "Tile and asphalt shingle roofing",
    "Exterior house painting and preparation",
    "Commercial building exterior painting",
    "Stucco painting and repair services",
  ],
  climateFactors: [
    "Hot summers requiring cool-touch pool deck pavers",
    "UV-resistant exterior painting for sun protection",
    "Energy-efficient windows for cooling costs",
    "Drought-tolerant landscaping with permeable pavers",
    "Fire-resistant roofing materials for wildfire areas",
  ],
  buildingTypes: [
    "Single-family ranch and contemporary homes",
    "Spanish colonial and Mediterranean architecture",
    "Mid-century modern residential properties",
    "Commercial office and retail buildings",
    "Historic homes requiring specialized restoration",
  ],
};

// SEO Keywords
const keywords = [
  "paver installation los angeles",
  "window replacement los angeles",
  "roofing contractors los angeles",
  "exterior painting los angeles",
  "affordable home services",
  "driveway pavers ventura county",
  "energy efficient windows",
  "roof repair emergency",
  "commercial painting services",
  "patio paver installation",
  "historic window restoration",
  "tile roof replacement",
  "residential exterior painting",
  "pool deck pavers",
  "storm window installation",
  "flat roof repair",
  "house painters los angeles",
  "concrete paver contractors",
  "vinyl window replacement",
  "licensed home contractors",
];

// Structured Data Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://affordablehomeservices.com/#organization",
  name: "Affordable Home Services",
  description:
    "Professional home improvement services in Los Angeles and Ventura County specializing in paver installation, window replacement, roofing, and exterior painting.",
  url: "https://affordablehomeservices.com/",
  logo: "https://affordablehomeservices.com/logo/logo.webp",
  image:
    "https://affordablehomeservices.com/images/affordable-home-services.webp",
  telephone: "+18184536110",
  email: "info@affordablehomeservices.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "State",
      name: "California",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    geoRadius: "100000",
  },
  foundingDate: "2010",
  numberOfEmployees: "25-50",
  slogan: "Transform Your Home with Professional Quality",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://affordablehomeservices.com/#website",
  name: "Affordable Home Services",
  description:
    "Professional paver installation, window replacement, roofing services, and exterior painting in Los Angeles and Ventura County.",
  url: "https://affordablehomeservices.com/",
  publisher: {
    "@id": "https://affordablehomeservices.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://affordablehomeservices.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://affordablehomeservices.com/#localbusiness",
  name: "Affordable Home Services",
  description:
    "Licensed home improvement contractors serving Los Angeles and Ventura County with paver installation, window services, roofing, and exterior painting.",
  image:
    "https://affordablehomeservices.com/images/affordable-home-services.webp",
  logo: "https://affordablehomeservices.com/logo/logo.webp",
  currenciesAccepted: "USD",
  paymentAccepted: "Visa, MC, PayPal, Amex, Discover, Cash, Check",
  url: "https://affordablehomeservices.com/",
  telephone: "+18184536110",
  priceRange: "$$",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete Home Improvement Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Driveway Paver Installation",
          description:
            "Professional driveway paver installation with custom designs and lifetime warranties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Patio Paver Installation",
          description:
            "Beautiful patio paver installation for outdoor living spaces and entertainment areas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pool Deck Pavers",
          description:
            "Slip-resistant pool deck pavers with cool-touch technology for safety and comfort.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Replacement Services",
          description:
            "Energy-efficient window replacement with professional installation and warranties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Historic Window Restoration",
          description:
            "Specialized restoration of historic windows preserving character while improving efficiency.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Window Services",
          description:
            "Professional commercial window installation and replacement for businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair Services",
          description:
            "Emergency roof repair and leak detection with 24/7 service availability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement",
          description:
            "Complete roof replacement with premium materials and comprehensive warranties.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Roofing",
          description:
            "Professional commercial roofing services for flat roofs and industrial buildings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior House Painting",
          description:
            "Professional residential exterior painting with premium paints and surface preparation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Exterior Painting",
          description:
            "Commercial building exterior painting with minimal business disruption.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stucco Painting and Repair",
          description:
            "Specialized stucco painting and crack repair services for Southern California homes.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: "Mo-Sa 07:00-18:00",
};

const faqSchema = {
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
        text: "Paver installation costs vary by project size and material choice. Driveway pavers typically range from $12-18 per square foot, patio pavers $15-25 per square foot, and pool deck pavers $18-28 per square foot. These prices include excavation, base preparation, paver installation, joint sand, and sealing. We provide detailed written estimates at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are fully licensed by the California Contractors State License Board, bonded, and carry comprehensive liability insurance plus Workers' Compensation for all employees. We maintain an A+ Better Business Bureau rating and provide detailed warranties on all work performed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide free estimates for all services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We provide comprehensive written estimates for all projects at no cost. Our estimates include detailed material specifications, labor costs, project timeline, and warranty information. We believe in transparent pricing with no hidden fees or surprise costs - what we quote is what you pay.",
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
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://affordablehomeservices.com/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Home Improvement Services",
  description:
    "Comprehensive home improvement services including paver installation, window replacement, roofing services, and exterior painting using professional techniques and quality materials.",
  provider: {
    "@id": "https://affordablehomeservices.com/#organization",
  },
  serviceType: "Home Improvement Services",
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
    name: "Home Improvement Service Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paver Installation Services",
          description:
            "Professional paver installation for driveways, patios, and pool decks",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Replacement and Restoration",
          description: "Energy-efficient window services for homes and businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roofing Services",
          description: "Complete roofing repair and replacement services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Painting Services",
          description: "Professional exterior painting for residential and commercial properties",
        },
      },
    ],
  },
  category: "Home Improvement Services",
  audience: {
    "@type": "Audience",
    audienceType: "Homeowners, Property Managers, Business Owners",
  },
};

// Metadata for the home page
export const metadata: Metadata = {
  title: "Affordable Home Services | Pavers, Windows, Roofing & Painting LA",
  description:
    "Professional home improvement services in Los Angeles & Ventura County. Paver installation, window replacement, roofing repair, exterior painting. Licensed & insured. Call (818) 453-6110.",
  keywords: keywords,
  authors: [{ name: "Affordable Home Services" }],
  creator: "Affordable Home Services",
  publisher: "Affordable Home Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://affordablehomeservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Affordable Home Services | Pavers, Windows, Roofing & Painting LA",
    description:
      "Professional home improvement services in Los Angeles & Ventura County. Paver installation, window replacement, roofing repair, exterior painting. Licensed & insured. Call (818) 453-6110.",
    url: "https://affordablehomeservices.com/",
    siteName: "Affordable Home Services",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services.webp",
        width: 1200,
        height: 630,
        alt: "Professional home improvement services - pavers, windows, roofing, and painting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Home Services | Pavers, Windows, Roofing & Painting LA",
    description:
      "Professional home improvement services in Los Angeles & Ventura County. Paver installation, window replacement, roofing repair, exterior painting. Licensed & insured. Call (818) 453-6110.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services.webp",
    ],
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
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Font wrapper with clean typography */}
      <div
        className={`${poppins.variable} ${ibmPlexMono.variable} font-poppins`}
        style={{
          fontFamily: poppins.style.fontFamily,
          fontFeatureSettings: "'kern' 1, 'liga' 1, 'calt' 1",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <Hero />
        <ContentSection />
        <ServiceHighlights />
        <TopServiceCities />
        <WhyChooseUs />
        <Testimonials />
        <HomeFaqs />
      </div>
    </>
  );
}