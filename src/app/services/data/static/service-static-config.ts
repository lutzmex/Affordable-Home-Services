// src/app/services/data/static/service-static-config.ts - Enhanced with Related Services & Why Choose Us

import { ServiceStaticConfig } from "../types";

export const SERVICE_STATIC_CONFIG: ServiceStaticConfig = {
  // UI Configuration for all text and visual elements - Home Page Style
  ui: {
    breadcrumb: {
      homeLink: "/",
      homeText: "Home",
      servicesLink: "/services",
      servicesText: "Services",
    },
    heroSection: {
      ctaButton: {
        text: "Call Now",
      },
      availabilityBadge: {
        text: "Available Right Now",
      },
    },
    ctaSections: {
      afterContent: {
        title: "Ready to Get Started with {serviceName}?",
        buttonText: "Call Us",
      },
      afterReviews: {
        title: "Get Help Today",
        buttonText: "Call Now",
      },
      beforeRelatedServices: {
        badge: {
          icon: "Globe",
          text: "Ready to Get Started?",
        },
        title: "Expert {serviceName} Help",
        description:
          "Our {serviceName} experts are waiting to help you with your property.",
        buttonText: "Call Service Team",
        features: [
          { text: "Licensed & Insured" },
          { text: "13+ Years Experience" },
          { text: "Same-Day Service" },
        ],
      },
      afterRelatedServices: {
        badge: {
          icon: "Award",
          text: "We Guarantee Our Work",
        },
        title: "Need Something Different?",
        description:
          "We handle a complete range of home improvement services. Whether it's your home, business, or something more complex - we've got you covered with professional results and reliable warranties.",
        primaryButton: {
          text: "Call Us",
        },
        secondaryButton: {
          icon: "Globe",
          text: "See All Services",
          link: "/services",
        },
      },
    },
    processSection: {
      badge: {
        icon: "BarChart",
        text: "How We Work",
      },
      title: {
        part1: "How We Transform",
        part2: "Your {serviceName}",
      },
      subtitle: "Professional Process",
      description:
        "Simple 4-step process from consultation to completion with professional results guaranteed.",
      stepLabel: "Step",
    },
    technologySection: {
      badge: {
        icon: "Zap",
        text: "Latest Technology",
      },
      title: {
        part1: "Advanced Technology",
        part2: "& Professional Tools",
      },
      description:
        "Our high-tech equipment and professional tools ensure precision and quality for every {serviceName} project.",
    },
    reviewsSection: {
      badge: {
        icon: "MessageCircle",
        text: "Customer Reviews",
      },
      title: {
        part1: "What Our",
        part2: "Customers",
        part3: "Are Saying",
      },
      description:
        "Real reviews from satisfied customers who have experienced our {serviceName}.",
      verifiedBadge: {
        text: "Verified",
      },
    },
    faqSection: {
      badge: {
        icon: "HelpCircle",
        text: "FAQ",
      },
      title: {
        part1: "Frequently Asked",
        part2: "Questions",
      },
      description:
        "Common questions about our {serviceName} in Los Angeles & Ventura County.",
    },
    relatedServicesSection: {
      badge: {
        icon: "Globe",
        text: "Related Services",
      },
      title: {
        part1: "Complete Home Improvement",
        part2: "Services",
      },
      description:
        "Transform your home with our professional paver, window, roofing, and painting services in Los Angeles & Ventura County.",
      initialDisplay: 8,
      showMoreButton: {
        text: "Show More Services",
      },
      showLessButton: {
        text: "Show Less",
      },
    },
    whyChooseUsSection: {
      badge: {
        icon: "Award",
        text: "Why Choose Us",
      },
      title: {
        part1: "Why Choose",
        part2: "Affordable Home Services?",
      },
      description:
        "We bring expertise, reliability, and quality to every project with professional results you can trust.",
      features: [
        {
          iconName: "Award",
          title: "Licensed & Insured",
          description:
            "CSLB licensed contractors with full liability and workers' comp coverage",
        },
        {
          iconName: "Shield",
          title: "Comprehensive Warranties",
          description:
            "Up to 25-year material warranties and 10-year workmanship guarantees",
        },
        {
          iconName: "Clock",
          title: "Same-Day Service",
          description:
            "Emergency repairs and expedited project scheduling available",
        },
        {
          iconName: "Users",
          title: "Local Expert Team",
          description:
            "Southern California specialists with 13+ years of experience",
        },
        {
          iconName: "Star",
          title: "5-Star Reviews",
          description: "4.9/5 rating with over 15,000 satisfied customers",
        },
        {
          iconName: "Truck",
          title: "Free Estimates",
          description:
            "Detailed written estimates with no hidden costs or surprises",
        },
      ],
    },
  },

  // Trust Platforms Section - Home Page Style
  trustPlatforms: {
    title: "Trusted by customers on these platforms",
    platforms: [
      { src: "/icon/google.svg", alt: "Google Reviews" },
      { src: "/icon/yelp.svg", alt: "Yelp Reviews" },
      { src: "/icon/BBB.svg", alt: "Better Business Bureau" },
      { src: "/icon/Angie.svg", alt: "Angie's List" },
      { src: "/icon/homeadvisor.svg", alt: "HomeAdvisor" },
      { src: "/icon/trustpilot.svg", alt: "Trustpilot Reviews" },
      { src: "/icon/facebook.svg", alt: "Facebook Reviews" },
      { src: "/icon/Nextdoor.svg", alt: "Nextdoor Neighborhood" },
    ],
  },

  // Static hero elements - Home Page Style
  heroStatic: {
    badgeIcon: {
      src: "/icon/{serviceSlug}.svg",
      alt: "Professional {serviceName} service certification badge",
    },
    trustIndicators: [
      {
        iconName: "Award",
        text: "Licensed & Insured",
        color: "text-green-500",
      },
      { iconName: "Truck", text: "Same Day Service", color: "text-blue-500" },
      { iconName: "Star", text: "5-Star Reviews", color: "text-yellow-500" },
      { iconName: "Clock", text: "Free Estimates", color: "text-orange-500" },
    ],
  },

  // Static stats and trust indicators - Home Page Style
  staticData: {
    stats: {
      customers: "15,000+",
      success: "98%",
      response: "13+",
      rating: "4.9/5",
    },

    trustIndicators: {
      rating: "4.9/5",
      served: "15,000+",
      recommend: "98%",
    },

    statsTemplate: [
      {
        key: "rating",
        label: "Average Rating",
        iconName: "Star",
        color: "text-yellow-600",
      },
      {
        key: "customers",
        label: "Projects Completed",
        iconName: "Users",
        color: "text-blue-600",
      },
      {
        key: "success",
        label: "Customer Satisfaction",
        iconName: "Target",
        color: "text-green-600",
      },
      {
        key: "response",
        label: "Years in Business",
        iconName: "Clock",
        color: "text-orange-600",
      },
    ],

    trustIndicatorsTemplate: [
      { key: "rating", label: "Average Rating" },
      { key: "customers", label: "Projects Completed" },
      { key: "success", label: "Customer Satisfaction" },
    ],

    // Additional trust elements for enhanced stats section
    trustElements: [
      { title: "Licensed & Insured", subtitle: "CSLB Licensed" },
      { title: "A+ BBB Rating", subtitle: "Better Business Bureau" },
      { title: "Free Estimates", subtitle: "No Hidden Costs" },
      { title: "Warranty Included", subtitle: "All Services" },
    ],
  },

  // Contact template - Home Page Style
  contactTemplate: {
    phone: "+1 (818) 453-6110",
    phoneDisplay: "(818) 453-6110",
  },

  // Static process with icons - Home Page Style (4-step process)
  processStatic: {
    steps: [
      {
        step: "1",
        iconName: "Phone",
        iconPath: "/images/step-1-consultation.webp",
        title: "Free Consultation",
        description:
          "Call us for a free consultation and detailed estimate. Our expert team will assess your project needs and provide transparent pricing with no hidden costs.",
      },
      {
        step: "2",
        iconName: "Calendar",
        iconPath: "/images/step-2-planning.webp",
        title: "Design & Planning",
        description:
          "We create detailed project plans, handle all permits, and schedule materials. Our design team works with you to ensure every detail meets your vision and budget.",
      },
      {
        step: "3",
        iconName: "Hammer",
        iconPath: "/images/step-3-installation.webp",
        title: "Professional Installation",
        description:
          "Our licensed, insured craftsmen complete your project on schedule with minimal disruption. Daily cleanup and progress updates keep you informed throughout.",
      },
      {
        step: "4",
        iconName: "CheckCircle",
        iconPath: "/images/step-4-completion.webp",
        title: "Quality Guarantee",
        description:
          "Final inspection, cleanup, and warranty registration ensure your complete satisfaction. We stand behind our work with comprehensive warranties and ongoing support.",
      },
    ],
  },

  // Static technology with icons - Home Page Style
  technologyStatic: {
    tools: [
      {
        iconName: "Award",
        iconPath: "/images/tech-premium-materials.webp",
        name: "Premium Materials",
        description:
          "We source materials exclusively from established manufacturers and trusted suppliers",
      },
      {
        iconName: "Shield",
        iconPath: "/images/tech-quality-assurance.webp",
        name: "Quality Assurance",
        description:
          "Every project is assigned a dedicated project manager for coordination and quality control",
      },
      {
        iconName: "Clock",
        iconPath: "/images/tech-efficient-service.webp",
        name: "Efficient Service",
        description:
          "Modern technology and innovative installation techniques ensure superior results",
      },
      {
        iconName: "Users",
        iconPath: "/images/tech-expert-team.webp",
        name: "Expert Team",
        description:
          "Our experienced team specializes in Southern California climate and building codes",
      },
    ],
  },

  // Complete Related Services Data - Home Page Style
  relatedServicesStatic: {
    defaultIconPath: "/images/default-service-icon.webp",
    services: [
      // PAVER SERVICES
      {
        id: "driveway-paver-installation",
        name: "Driveway Paver Installation",
        slug: "driveway-pavers-services",
        description:
          "Transform your driveway with beautiful, durable pavers. Custom designs and professional installation.",
        iconPath: "/images/driveway-paver-installation.webp",
        category: "Paver Services",
        categoryId: "paver-services",
        projectsCompleted: 2456,
        avgCost: "$12-18/sq ft",
        timeframe: "3-5 days",
      },
      {
        id: "patio-paver-installation",
        name: "Patio Paver Installation",
        slug: "patio-pavers-services",
        description:
          "Create stunning outdoor living spaces with professional patio paver installation and design.",
        iconPath: "/images/patio-paver-installation.webp",
        category: "Paver Services",
        categoryId: "paver-services",
        projectsCompleted: 3234,
        avgCost: "$15-25/sq ft",
        timeframe: "4-7 days",
      },
      {
        id: "pool-deck-pavers",
        name: "Pool Deck Pavers",
        slug: "pool-deck-pavers-services",
        description:
          "Slip-resistant pool deck pavers that stay cool and provide safety around your swimming pool.",
        iconPath: "/images/pool-deck-pavers.webp",
        category: "Paver Services",
        categoryId: "paver-services",
        projectsCompleted: 1567,
        avgCost: "$18-28/sq ft",
        timeframe: "5-8 days",
      },
      {
        id: "paver-repair-restoration",
        name: "Paver Repair & Restoration",
        slug: "paver-repair-services",
        description:
          "Restore and repair existing paver surfaces. Re-sanding, sealing, and replacement services.",
        iconPath: "/images/paver-repair-restoration.webp",
        category: "Paver Services",
        categoryId: "paver-services",
        projectsCompleted: 4321,
        avgCost: "$8-15/sq ft",
        timeframe: "1-3 days",
      },

      // WINDOW SERVICES
      {
        id: "window-replacement",
        name: "Window Replacement",
        slug: "window-replacement-services",
        description:
          "Energy-efficient window replacement with professional installation. Vinyl, wood, and aluminum options.",
        iconPath: "/images/window-replacement.webp",
        category: "Window Services",
        categoryId: "window-services",
        projectsCompleted: 5678,
        avgCost: "$450-850 per window",
        timeframe: "1-2 days",
      },
      {
        id: "historic-window-restoration",
        name: "Historic Window Restoration",
        slug: "window-repair-services",
        description:
          "Preserve the character of historic homes with professional window restoration and repair services.",
        iconPath: "/images/historic-window-restoration.webp",
        category: "Window Services",
        categoryId: "window-services",
        projectsCompleted: 987,
        avgCost: "$800-1500 per window",
        timeframe: "2-4 days",
      },
      {
        id: "window-installation",
        name: "Window Installation",
        slug: "window-installation-services",
        description:
          "Professional window installation with custom measurements and quality materials.",
        iconPath: "/images/storm-window-installation.webp",
        category: "Window Services",
        categoryId: "window-services",
        projectsCompleted: 2345,
        avgCost: "$150-300 per window",
        timeframe: "1 day",
      },
      {
        id: "commercial-window-services",
        name: "Commercial Window Services",
        slug: "commercial-windows-services",
        description:
          "Professional commercial window installation, replacement, and repair for businesses and office buildings.",
        iconPath: "/images/commercial-window-services.webp",
        category: "Window Services",
        categoryId: "window-services",
        projectsCompleted: 876,
        avgCost: "$200-600 per window",
        timeframe: "1-3 days",
      },

      // ROOFING SERVICES
      {
        id: "roof-repair",
        name: "Roof Repair Services",
        slug: "roof-repair-services",
        description:
          "Professional roof leak repair, shingle replacement, and emergency roofing services available 24/7.",
        iconPath: "/images/roof-repair-services.webp",
        category: "Roofing Services",
        categoryId: "roofing-services",
        projectsCompleted: 4567,
        avgCost: "$300-1200 per repair",
        timeframe: "1-2 days",
      },
      {
        id: "roof-replacement",
        name: "Roof Replacement",
        slug: "roof-replacement-services",
        description:
          "Complete roof replacement with premium materials. Asphalt, tile, metal, and slate roofing options.",
        iconPath: "/images/roof-replacement.webp",
        category: "Roofing Services",
        categoryId: "roofing-services",
        projectsCompleted: 1234,
        avgCost: "$8000-25000",
        timeframe: "2-5 days",
      },
      {
        id: "commercial-roofing",
        name: "Commercial Roofing",
        slug: "commercial-roofing-services",
        description:
          "Professional commercial roofing services for flat roofs, TPO, EPDM, and modified bitumen systems.",
        iconPath: "/images/commercial-roofing.webp",
        category: "Roofing Services",
        categoryId: "roofing-services",
        projectsCompleted: 543,
        avgCost: "$5-15/sq ft",
        timeframe: "3-10 days",
      },
      {
        id: "gutter-installation",
        name: "Gutter Installation & Repair",
        slug: "gutter-installation-services",
        description:
          "Professional gutter installation, cleaning, and repair services to protect your home's foundation.",
        iconPath: "/images/gutter-installation.webp",
        category: "Roofing Services",
        categoryId: "roofing-services",
        projectsCompleted: 3456,
        avgCost: "$6-12 per linear ft",
        timeframe: "1-2 days",
      },

      // EXTERIOR PAINTING SERVICES
      {
        id: "exterior-house-painting",
        name: "Exterior House Painting",
        slug: "exterior-painting-services",
        description:
          "Professional residential exterior painting with premium paints and expert color consultation.",
        iconPath: "/images/exterior-house-painting.webp",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        projectsCompleted: 6789,
        avgCost: "$3500-8500",
        timeframe: "4-8 days",
      },
      {
        id: "commercial-exterior-painting",
        name: "Commercial Exterior Painting",
        slug: "commercial-painting-services",
        description:
          "Professional commercial painting services for offices, retail stores, and industrial buildings.",
        iconPath: "/images/commercial-exterior-painting.webp",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        projectsCompleted: 987,
        avgCost: "$2-6/sq ft",
        timeframe: "3-10 days",
      },
      {
        id: "fence-deck-staining",
        name: "Fence & Deck Staining",
        slug: "fence-painting-services",
        description:
          "Protect and beautify your wooden fences and decks with professional staining and sealing services.",
        iconPath: "/images/fence-deck-staining.webp",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        projectsCompleted: 2345,
        avgCost: "$2-5/sq ft",
        timeframe: "2-4 days",
      },
      {
        id: "exterior-paint-preparation",
        name: "Exterior Paint Preparation",
        slug: "exterior-paint-preparation-services",
        description:
          "Professional surface preparation including power washing, scraping, and priming for lasting results.",
        iconPath: "/images/stucco-painting-repair.webp",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        projectsCompleted: 1876,
        avgCost: "$1-3/sq ft",
        timeframe: "1-2 days",
      },
    ],
    iconsBySlug: {
      // Paver Services
      "driveway-pavers-services": "/images/driveway-paver-installation.webp",
      "patio-pavers-services": "/images/patio-paver-installation.webp",
      "pool-deck-pavers-services": "/images/pool-deck-pavers.webp",
      "paver-repair-services": "/images/paver-repair-restoration.webp",

      // Window Services
      "window-installation-services":
        "/images/window-installation-services-services.webp",
      "window-repair-services": "/images/window-repair-services-services.webp",
      "window-replacement-services":
        "/images/window-replacement-services-services.webp",
      "energy-efficient-windows-services":
        "/images/energy-efficient-windows.webp",

      // Roofing Services
      "roof-repair-services": "/images/roof-repair-services.webp",
      "roof-replacement-services":
        "/images/roof-replacement-services-services.webp",
      "commercial-roofing-services": "/images/commercial-roofing.webp",
      "flat-roof-contractors-services": "/images/flat-roof-contractors.webp",
      "gutter-installation-services": "/images/gutter-installation.webp",

      // Painting Services
      "exterior-painting-services": "/images/exterior-house-painting.webp",
      "exterior-paint-preparation-services": "/images/exterior-paint-prep.webp",
      "fence-painting-services": "/images/fence-deck-staining.webp",
      "commercial-painting-services":
        "/images/commercial-exterior-painting.webp",

      // Commercial Services
      "commercial-paver-installation-services":
        "/images/commercial-paver-installation.webp",
      "commercial-windows-services": "/images/commercial-window-services.webp",

      // Default fallback
      default: "/images/affordable-home-services-hero.webp",
    },
  },
};

// Enhanced service categories for better organization - Home Page Style
export const SERVICE_CATEGORIES_ENHANCED = {
  PAVER: {
    name: "Paver Services",
    description:
      "Professional paver installation for driveways, patios, walkways, and pool decks",
    icon: "Hammer",
    color: "text-blue-600",
  },
  WINDOW: {
    name: "Window Services",
    description:
      "Window installation, replacement, repair, and energy-efficient upgrades",
    icon: "Award",
    color: "text-green-600",
  },
  ROOFING: {
    name: "Roofing Services",
    description:
      "Complete roofing solutions including repair, replacement, and maintenance",
    icon: "Shield",
    color: "text-red-600",
  },
  PAINTING: {
    name: "Exterior Painting",
    description:
      "Professional exterior painting for residential and commercial properties",
    icon: "Star",
    color: "text-purple-600",
  },
  COMMERCIAL: {
    name: "Commercial Services",
    description:
      "Specialized commercial solutions for businesses and office buildings",
    icon: "Users",
    color: "text-gray-600",
  },
};

// Service area configuration - Home Page Style
export const SERVICE_AREAS = {
  primary: ["Los Angeles County", "Ventura County"],
  cities: [
    "Los Angeles",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Glendale",
    "Burbank",
    "Van Nuys",
    "Thousand Oaks",
    "Simi Valley",
    "Oxnard",
    "Camarillo",
    "Ventura",
  ],
};

// Business information - Home Page Style
export const BUSINESS_INFO = {
  name: "Affordable Home Service Company",
  phone: "+1 (818) 453-6110",
  phoneDisplay: "(818) 453-6110",
  email: "info@affordablehomeservices.com",
  website: "https://affordablehomeservices.com",
  address: {
    street: "Service Area Coverage",
    city: "Los Angeles",
    state: "California",
    zipCode: "",
    country: "United States",
  },
  hours: {
    weekdays: "24/7 Emergency Service",
    weekend: "24/7 Emergency Service",
    emergency: true,
  },
  social: {
    facebook: "https://facebook.com/affordablehomeservices",
    google: "https://google.com/business/affordablehomeservices",
    yelp: "https://yelp.com/biz/affordable-home-services",
  },
  certifications: [
    "Licensed & Insured",
    "A+ BBB Rating",
    "CSLB Licensed",
    "13+ Years Experience",
  ],
};

// Default service benefits - Home Page Style
export const DEFAULT_SERVICE_BENEFITS = {
  quality: [
    "Licensed & insured contractors",
    "Premium materials from trusted brands",
    "Professional installation techniques",
    "Quality workmanship guaranteed",
  ],
  convenience: [
    "Same-day estimates available",
    "Flexible scheduling options",
    "Minimal disruption to your routine",
    "Complete cleanup included",
  ],
  value: [
    "Competitive pricing with no hidden fees",
    "Free detailed estimates",
    "Comprehensive warranties included",
    "Long-term cost savings",
  ],
  service: [
    "24/7 emergency service available",
    "Local expert teams",
    "Clear communication throughout",
    "Customer satisfaction guarantee",
  ],
};

// SEO templates - Home Page Style
export const SEO_TEMPLATES = {
  metaTitle: "{serviceName} | Professional Home Services in Los Angeles",
  metaDescription:
    "Professional {serviceName} in Los Angeles & Ventura County. Licensed, insured, and experienced. Get your free estimate today!",
  keywords: [
    "{serviceName}",
    "Los Angeles {serviceName}",
    "professional {serviceName}",
    "licensed contractors",
    "home improvement",
    "quality service",
  ],
  openGraph: {
    title: "Professional {serviceName} in Los Angeles & Ventura County",
    description:
      "Get expert {serviceName} with licensed, insured contractors. Free estimates and quality guaranteed.",
    image: "/images/{serviceSlug}-services.webp",
    imageAlt: "Professional {serviceName} in Los Angeles area",
  },
};
