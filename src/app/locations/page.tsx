// app/locations/page.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocationsClient from "./locations-client";

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

// Structured data for the locations page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Affordable Home Services",
  description:
    "Professional home improvement services serving 195+ cities across Southern California. Expert paver installation, window replacement, roofing services, and exterior painting with licensed contractors and quality guarantees.",
  image:
    "https://affordablehomeservices.com/images/affordable-home-services-locations.webp",
  logo: "https://affordablehomeservices.com/logo/logo.webp",
  currenciesAccepted: "USD",
  paymentAccepted: "Visa, MC, PayPal, Amex, Discover, Cash, Check, Financing",
  url: "https://affordablehomeservices.com/locations",
  telephone: "+1 (818) 453-6110",
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
    // All 195 cities served
    "Acton", "Agoura Hills", "Alhambra", "Altadena", "Anaheim", "Arcadia", "Artesia", "Arvin", "Atwood", "Azusa",
    "Baldwin Park", "Bell", "Bell Gardens", "Bellflower", "Beverly Hills", "Brandeis", "Brea", "Buena Park", "Burbank",
    "Calabasas", "Camarillo", "Canoga Park", "Canyon Country", "Carpinteria", "Carson", "Castaic", "Cerritos", "Chatsworth",
    "Chino", "Chino Hills", "City Of Industry", "Claremont", "Compton", "Costa Mesa", "Covina", "Culver City", "Cypress",
    "Diamond Bar", "Downey", "Duarte", "El Monte", "El Segundo", "Encino", "Fillmore", "Fountain Valley", "Frazier Park",
    "Fullerton", "Garden Grove", "Gardena", "Glendale", "Glendora", "Granada Hills", "Guasti", "Hacienda Heights",
    "Harbor City", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", "Huntington Beach", "Huntington Park", "Inglewood",
    "La Canada Flintridge", "La Crescenta", "La Habra", "La Mirada", "La Palma", "La Puente", "La Verne", "Lake Hughes",
    "Lakewood", "Lancaster", "Lawndale", "Lebec", "Littlerock", "Llano", "Lomita", "Long Beach", "Los Alamitos",
    "Los Angeles", "Lynwood", "Malibu", "Manhattan Beach", "Marina Del Rey", "Maywood", "Midway City", "Mission Hills",
    "Mojave", "Monrovia", "Montclair", "Montebello", "Monterey Park", "Montrose", "Moorpark", "Mount Wilson", "Mt Baldy",
    "Newbury Park", "Newhall", "Newport Beach", "North Hills", "North Hollywood", "Northridge", "Norwalk", "Oak Park",
    "Oak View", "Ojai", "Ontario", "Orange", "Oxnard", "Pacific Palisades", "Pacoima", "Palmdale", "Palos Verdes Peninsula",
    "Panorama City", "Paramount", "Pasadena", "Pearblossom", "Phelan", "Pico Rivera", "Pine Mountain Club", "Pinon Hills",
    "Piru", "Placentia", "Playa Del Rey", "Playa Vista", "Pomona", "Port Hueneme", "Port Hueneme Cbc Base", "Porter Ranch",
    "Rancho Cucamonga", "Rancho Palos Verdes", "Redondo Beach", "Reseda", "Rosamond", "Rosemead", "Rowland Heights",
    "San Dimas", "San Fernando", "San Gabriel", "San Marino", "San Pedro", "Santa Ana", "Santa Barbara", "Santa Clarita",
    "Santa Fe Springs", "Santa Monica", "Santa Paula", "Seal Beach", "Sherman Oaks", "Sierra Madre", "Signal Hill",
    "Simi Valley", "Somis", "South El Monte", "South Gate", "South Pasadena", "Stanton", "Stevenson Ranch", "Studio City",
    "Summerland", "Sun Valley", "Sunland", "Sunset Beach", "Surfside", "Sylmar", "Tarzana", "Tehachapi", "Temple City",
    "Thousand Oaks", "Toluca Lake", "Topanga", "Torrance", "Tujunga", "Tustin", "Universal City", "Upland", "Valencia",
    "Valley Village", "Valyermo", "Van Nuys", "Venice", "Ventura", "Verdugo City", "Villa Park", "Walnut", "West Covina",
    "West Hills", "West Hollywood", "Westlake Village", "Westminster", "Whittier", "Wilmington", "Winnetka", "Woodland Hills",
    "Wrightwood", "Yorba Linda"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete Home Improvement Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paver Installation Services",
          description:
            "Professional paver installation for driveways, patios, walkways, and pool decks with custom design and premium materials.",
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
          name: "Pool Deck Paver Services",
          description:
            "Slip-resistant pool deck pavers that stay cool and provide safety around swimming pools and spa areas.",
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
          name: "Window Replacement Services",
          description:
            "Complete window replacement with vinyl, wood, and aluminum frames to improve energy efficiency and home value.",
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
          name: "Commercial Window Services",
          description:
            "Professional commercial window installation, replacement, and repair for office buildings and retail spaces.",
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
          name: "Roof Repair Services",
          description:
            "Emergency roof repair services available 24/7 for leak detection, shingle replacement, and storm damage.",
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
          name: "Flat Roof Contractor Services",
          description:
            "Specialized flat roof installation, repair, and maintenance for commercial and residential buildings.",
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
          name: "Commercial Painting Services",
          description:
            "Professional commercial painting services for offices, retail stores, and industrial buildings with premium coatings and finishes.",
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
    ],
  },
  openingHours: "Mo-Su 07:00-19:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15000",
    bestRating: "5",
    worstRating: "1",
  },
  founder: {
    "@type": "Organization",
    name: "Affordable Home Services",
  },
  foundingDate: "2010",
  knowsAbout: [
    "Paver Installation",
    "Driveway Pavers", 
    "Patio Pavers",
    "Pool Deck Pavers",
    "Window Replacement",
    "Energy-Efficient Windows",
    "Window Installation",
    "Window Repair",
    "Roofing Services",
    "Roof Replacement",
    "Roof Repair",
    "Commercial Roofing",
    "Flat Roofing",
    "Gutter Installation",
    "Exterior Painting",
    "Commercial Painting",
    "Paint Preparation",
    "Fence Painting",
    "Home Improvement",
    "Construction Services",
  ],
  hasCredential: [
    "California Contractors License (CSLB)",
    "General Liability Insurance",
    "Workers Compensation Insurance",
    "Bonded Contractors",
    "A+ Better Business Bureau Rating",
    "ENERGY STAR Certified Partner",
  ],
  award: [
    "A+ Better Business Bureau Rating",
    "Customer Service Excellence Award",
    "Industry Recognition for Quality Workmanship",
    "Southern California Home Improvement Leader",
  ],
  serviceType: "Home Improvement Services",
  slogan: "Southern California's Most Trusted Home Improvement Company",
  numberOfEmployees: "200+",
  yearlyRevenue: {
    "@type": "QuantitativeValue",
    value: "50000000",
    currency: "USD",
  },
  sameAs: [
    "https://www.facebook.com/affordablehomeservices",
    "https://www.linkedin.com/company/affordable-home-services",
    "https://www.instagram.com/affordablehomeservices",
    "https://twitter.com/affordablehomes",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "tel:+18184536110",
    },
    result: {
      "@type": "Reservation",
      name: "Free Home Improvement Consultation",
    },
  },
};

export const metadata: Metadata = {
  title:
    "Professional Home Improvement Services - 195+ Cities | Affordable Home Services",
  description:
    "Expert home improvement contractors serving 195+ cities across Southern California. Professional paver installation, window replacement, roofing services & exterior painting. Licensed, insured & guaranteed. Call (818) 453-6110 for free estimate.",
  keywords:
    "home improvement services, paver installation, window replacement, roofing contractor, exterior painting, Los Angeles County, Ventura County, Orange County, California contractors, licensed home improvement, residential contractors, commercial contractors",
  openGraph: {
    title:
      "Professional Home Improvement Services - 195+ Cities | Affordable Home Services",
    description:
      "Expert home improvement contractors serving 195+ cities across Southern California. Professional paver installation, window replacement, roofing services & exterior painting. Licensed, insured & guaranteed.",
    type: "website",
    url: "https://affordablehomeservices.com/locations",
    images: [
      {
        url: "https://affordablehomeservices.com/images/affordable-home-services-locations.webp",
        width: 1200,
        height: 630,
        alt: "Affordable Home Services - Professional Home Improvement Across 195+ Cities",
      },
    ],
    siteName: "Affordable Home Services",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Home Improvement Services - 195+ Cities | Affordable Home Services",
    description:
      "Expert home improvement contractors serving 195+ cities across Southern California. Professional paver installation, window replacement, roofing services & exterior painting. Licensed, insured & guaranteed.",
    images: [
      "https://affordablehomeservices.com/images/affordable-home-services-locations.webp",
    ],
  },
  alternates: {
    canonical: "https://affordablehomeservices.com/locations",
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
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Southern California",
    "geo.position": "34.0522;-118.2437",
    "ICBM": "34.0522, -118.2437",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Home Improvement Services",
};

// Additional JSON-LD for breadcrumb navigation
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
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
      name: "Service Locations",
      item: "https://affordablehomeservices.com/locations",
    },
  ],
};

// FAQ Schema for locations page
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many cities do you serve in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We proudly serve 195+ cities across Southern California, including all major areas in Los Angeles County, Orange County, Ventura County, San Bernardino County, Kern County, Santa Barbara County, and Riverside County. Our expert contractors provide professional home improvement services throughout the region.",
      },
    },
    {
      "@type": "Question",
      name: "What home improvement services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive home improvement services including paver installation (driveways, patios, walkways, pool decks), window replacement and installation, roofing services (repair and replacement), and exterior painting for both residential and commercial properties.",
      },
    },
    {
      "@type": "Question",
      name: "Are your contractors licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our contractors are fully licensed by the California State License Board (CSLB), carry comprehensive general liability insurance, workers compensation insurance, and are bonded for your protection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide free, detailed estimates for all our home improvement services. Contact us at (818) 453-6110 to schedule your free consultation and estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Los Angeles County do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major cities in Los Angeles County including Beverly Hills, Burbank, Calabasas, Culver City, Agoura Hills, Arcadia, Pasadena, Glendale, Santa Monica, Long Beach, and many more. Contact us to confirm service in your specific area.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete home improvement services throughout Orange County including Anaheim, Huntington Beach, Newport Beach, Costa Mesa, Garden Grove, Fullerton, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Ventura County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete home improvement services throughout Ventura County including Thousand Oaks, Simi Valley, Camarillo, Oxnard, Ventura, Moorpark, Ojai, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your company different from other contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We stand out with our comprehensive coverage of 195+ cities, 13+ years of experience, 4.9/5 customer rating, licensed and insured contractors, free estimates, quality materials, comprehensive warranties, and 24/7 emergency services. We're committed to exceptional customer service and professional results.",
      },
    },
  ],
};

// Additional Schema for Service Areas
const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Improvement Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Affordable Home Services",
  },
  areaServed: [
    // Major Counties
    {
      "@type": "AdministrativeArea",
      name: "Los Angeles County",
      containsPlace: [
        { "@type": "City", name: "Los Angeles" },
        { "@type": "City", name: "Beverly Hills" },
        { "@type": "City", name: "Burbank" },
        { "@type": "City", name: "Calabasas" },
        { "@type": "City", name: "Culver City" },
        { "@type": "City", name: "Pasadena" },
        { "@type": "City", name: "Glendale" },
        { "@type": "City", name: "Santa Monica" },
        { "@type": "City", name: "Long Beach" },
        { "@type": "City", name: "Torrance" },
      ]
    },
    {
      "@type": "AdministrativeArea", 
      name: "Orange County",
      containsPlace: [
        { "@type": "City", name: "Anaheim" },
        { "@type": "City", name: "Huntington Beach" },
        { "@type": "City", name: "Newport Beach" },
        { "@type": "City", name: "Costa Mesa" },
        { "@type": "City", name: "Garden Grove" },
        { "@type": "City", name: "Fullerton" },
      ]
    },
    {
      "@type": "AdministrativeArea",
      name: "Ventura County", 
      containsPlace: [
        { "@type": "City", name: "Thousand Oaks" },
        { "@type": "City", name: "Simi Valley" },
        { "@type": "City", name: "Camarillo" },
        { "@type": "City", name: "Oxnard" },
        { "@type": "City", name: "Ventura" },
        { "@type": "City", name: "Moorpark" },
      ]
    }
  ]
};

export default function LocationsPage() {
  return (
    <>
      {/* Main Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Service Area Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
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
        <LocationsClient />
      </div>
    </>
  );
}