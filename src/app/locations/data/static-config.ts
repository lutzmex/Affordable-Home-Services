// src/app/locations/data/static-config.ts

export const LOCATION_STATIC_CONFIG = {
  // Contact Information
  contact: {
    phone: '+1 (818) 453-6110',
    phoneDisplay: '(818) 453-6110',
  },

  // UI Configuration
  ui: {
    breadcrumb: {
      homeLink: '/',
      homeText: 'Home',
      locationsLink: '/locations',
      locationsText: 'Locations',
    },
    heroSection: {
      ctaButton: { text: 'Call Now' },
      availabilityBadge: { text: 'Same Day Service Available' },
    },
    ctaSections: {
      afterContent: {
        title: 'Ready to Get Started in {locationName}?',
        buttonText: 'Call Us Now',
      },
      afterServices: {
        badge: { icon: 'Award', text: 'Licensed & Insured' },
        title: 'Need Help Choosing the Right Service?',
        description:
          'Our expert team is here to help you select the perfect solution for your project in {locationName} and provide competitive pricing.',
        primaryButton: { text: 'Call Us Now' },
        secondaryButton: {
          icon: 'Globe',
          text: 'View All Services',
          link: '/services',
        },
      },
      afterReviews: {
        title: 'Get Help Today in {locationName}',
        buttonText: 'Call Now',
      },
    },
    servicesSection: {
      badge: { icon: 'Truck', text: '{locationName} Services' },
      showMoreButton: { text: 'Show More Services' },
      showLessButton: { text: 'Show Less Services' },
      initialDisplay: 8,
    },
    whyChooseUsSection: {
      badge: { icon: 'CheckCircle', text: 'Why Choose Us in {locationName}' },
    },
    reviewsSection: {
      badge: { icon: 'Star', text: '{locationName} Customer Reviews' },
      title: {
        part1: 'What Our',
        part2: '{locationName}',
        part3: 'Customers Say',
      },
      description:
        'Real reviews from satisfied customers who have used our services in {locationName}.',
      verifiedBadge: { text: 'Verified' },
    },
    processSection: {
      badge: { icon: 'Settings', text: 'How It Works' },
      stepLabel: 'Step',
    },
    faqSection: {
      badge: { icon: 'HelpCircle', text: '{locationName} FAQ' },
      title: { suffix: 'Questions', highlight: 'Answered' },
      description: 'Common questions about our services in {locationName}.',
    },
    locationsSection: {
      badge: { icon: 'Globe', text: 'Serving Major Cities Nationwide' },
      title: {
        part1: 'Professional Home Services',
        part2: 'Across',
        part3: '{locationName}',
      },
      description:
        'From our base in {locationName}, our expert teams provide quality paver installation, window replacement, roofing services, and exterior painting with professional results and reliable service.',
      showAllButton: { text: 'View All Cities' },
      showLessButton: { text: 'Show Fewer Cities' },
      initialDisplay: 50,
    },
    mapSection: {
      badge: { icon: 'MapPin', text: 'Service Area' },
      title: '{locationName} Coverage',
      subtitle: 'Map',
      description:
        'See where we deliver services in {locationName} and nearby areas',
    },
  },

  // Hero Static Elements
  heroStatic: {
    badgeIcon: {
      src: '/images/professional-service-badge.webp',
      alt: 'Professional service badge',
    },
    trustIndicators: [
      {
        iconName: 'Shield',
        text: 'Licensed & Insured',
        color: 'text-green-600',
      },
      { iconName: 'Truck', text: 'Same Day Service', color: 'text-blue-600' },
      { iconName: 'Star', text: '5-Star Service', color: 'text-yellow-600' },
      { iconName: 'Clock', text: 'Quick Response', color: 'text-orange-600' },
    ],
  },

  // Trust Platforms
  trustPlatforms: {
    title: 'Trusted on these platforms',
    platforms: [
      { src: '/icon/google.svg', alt: 'Google review platform logo' },
      { src: '/icon/yelp.svg', alt: 'Yelp review platform logo' },
      {
        src: '/icon/BBB.svg',
        alt: 'Better Business Bureau accreditation logo',
      },
      { src: '/icon/Angie.svg', alt: "Angie's List review platform logo" },
      {
        src: '/icon/homeadvisor.svg',
        alt: 'HomeAdvisor service provider logo',
      },
      { src: '/icon/trustpilot.svg', alt: 'Trustpilot review platform logo' },
      { src: '/icon/facebook.svg', alt: 'Facebook business page logo' },
      { src: '/icon/Nextdoor.svg', alt: 'Nextdoor neighborhood platform logo' },
    ],
  },

  // Services List
  services: {
    title: 'Complete Service Solutions',
    subtitle: 'for {locationName} Properties',
    description:
      "Whether you own a home or business in {locationName}, we've got the right service and solution for your project.",
    list: [
      // HVAC SERVICES
      {
        name: 'HVAC Services',
        description:
          'Professional heating and cooling services with same day estimates. Reliable repairs, maintenance, and installations in {locationName}.',
        iconName: 'Wind',
        iconPath: '/images/hvac-services.webp',
        slug: 'hvac-services',
      },

      // GARAGE DOOR SERVICES
      {
        name: 'Garage Door Services',
        description:
          'Complete garage door services including installation, repair, and opener replacement. Same-day service available in {locationName}.',
        iconName: 'Square',
        iconPath: '/images/garage-door-services.webp',
        slug: 'garage-door-services',
      },

      // DOORS AND GATES INSTALLATION
      {
        name: 'Doors and Gates Installation',
        description:
          'Professional door and gate installation, repair, and maintenance. Interior, exterior, and security solutions in {locationName}.',
        iconName: 'DoorOpen',
        iconPath: '/images/door-installation.webp',
        slug: 'doors-and-gates-installation-services',
      },

      // HANDYMAN SERVICES
      {
        name: 'Handyman Services',
        description:
          'Fast and reliable handyman services for home repairs and upgrades. Fix leaks, install hardware, and handle small repairs in {locationName}.',
        iconName: 'Wrench',
        iconPath: '/images/handyman-services.webp',
        slug: 'handyman-services',
      },

      // EXTERIOR PAINTING SERVICES
      {
        name: 'Exterior Painting Services',
        description:
          'Premium exterior house painting with professional surface preparation and high-quality paints for lasting results in {locationName}.',
        iconName: 'Paintbrush',
        iconPath: '/images/exterior-house-painting.webp',
        slug: 'exterior-painting-services',
      },
      {
        name: 'Exterior Paint Preparation',
        description:
          'Comprehensive exterior paint preparation including power washing, scraping, priming, and surface repairs in {locationName}.',
        iconName: 'Settings',
        iconPath: '/images/stucco-painting-repair.webp',
        slug: 'exterior-paint-preparation-services',
      },
      {
        name: 'Fence Painting Services',
        description:
          'Professional fence painting and staining services to protect and beautify wooden and metal fencing in {locationName}.',
        iconName: 'Paintbrush',
        iconPath: '/images/fence-deck-staining.webp',
        slug: 'fence-painting-services',
      },

      // PAVER SERVICES
      {
        name: 'Driveway Paver Services',
        description:
          'Transform your driveway with custom paver installation using interlocking concrete pavers and natural stone options in {locationName}.',
        iconName: 'Square',
        iconPath: '/images/driveway-paver-installation.webp',
        slug: 'driveway-pavers-services',
      },
      {
        name: 'Patio Paver Services',
        description:
          'Create stunning outdoor living spaces with beautiful patio paver installation for entertainment and relaxation in {locationName}.',
        iconName: 'Square',
        iconPath: '/images/patio-paver-installation.webp',
        slug: 'patio-pavers-services',
      },
      {
        name: 'Paver Repair Services',
        description:
          'Professional paver repair, restoration, and maintenance to restore existing paved surfaces to like-new condition in {locationName}.',
        iconName: 'Wrench',
        iconPath: '/images/paver-repair-restoration.webp',
        slug: 'paver-repair-services',
      },
      {
        name: 'Pool Deck Paver Services',
        description:
          'Slip-resistant pool deck pavers that stay cool and provide safety around swimming pools and spa areas in {locationName}.',
        iconName: 'Droplets',
        iconPath: '/images/pool-deck-pavers.webp',
        slug: 'pool-deck-pavers-services',
      },

      // ROOFING SERVICES
      {
        name: 'Flat Roof Contractor Services',
        description:
          'Specialized flat roof installation, repair, and maintenance for commercial and residential buildings in {locationName}.',
        iconName: 'Home',
        iconPath: '/images/flat-roofing.webp',
        slug: 'flat-roof-contractors-services',
      },
      {
        name: 'Roof Repair Services',
        description:
          'Emergency roof repair services available 24/7 for leak detection, shingle replacement, and storm damage in {locationName}.',
        iconName: 'Shield',
        iconPath: '/images/roof-repair-services.webp',
        slug: 'roof-repair-services',
      },
      {
        name: 'Roof Replacement Services',
        description:
          'Complete roof replacement with premium materials and professional installation backed by comprehensive warranties in {locationName}.',
        iconName: 'Home',
        iconPath: '/images/roof-replacement.webp',
        slug: 'roof-replacement-services',
      },
      {
        name: 'Gutter Installation Services',
        description:
          "Professional gutter installation and repair to protect your home's foundation with seamless aluminum gutters in {locationName}.",
        iconName: 'Droplets',
        iconPath: '/images/gutter-installation.webp',
        slug: 'gutter-installation-services',
      },

      // WINDOW SERVICES
      {
        name: 'Energy-Efficient Window Services',
        description:
          'Energy-efficient window installation to reduce utility costs and improve home comfort with ENERGY STAR certified products in {locationName}.',
        iconName: 'Zap',
        iconPath: '/images/energy-efficient-windows.webp',
        slug: 'energy-efficient-windows-services',
      },
      {
        name: 'Window Installation Services',
        description:
          'Professional window installation for new construction and home additions with precise fitting and weatherproofing in {locationName}.',
        iconName: 'Home',
        iconPath: '/images/window-installation.webp',
        slug: 'window-installation-services',
      },
      {
        name: 'Window Repair Services',
        description:
          'Expert window repair services for broken glass, damaged frames, and malfunctioning hardware in {locationName}.',
        iconName: 'Wrench',
        iconPath: '/images/window-repair.webp',
        slug: 'window-repair-services',
      },
      {
        name: 'Window Replacement Services',
        description:
          'Complete window replacement with vinyl, wood, and aluminum frames to improve energy efficiency and home value in {locationName}.',
        iconName: 'Home',
        iconPath: '/images/window-replacement.webp',
        slug: 'window-replacement-services',
      },
    ],
  },

  // Why Choose Us Template
  whyChooseUs: {
    title: 'Why Choose Our Services?',
    subtitle: '',
    description:
      'When you choose us for your home improvement project in {locationName}, you get experienced professionals who take pride in delivering exceptional results.',
    reasons: [
      {
        title: 'Licensed & Insured',
        description:
          'Fully licensed and insured professionals serving {locationName} with complete peace of mind.',
        iconName: 'Shield',
        iconPath: '',
      },
      {
        title: 'Same Day Service',
        description:
          'Fast response times and same-day service available in {locationName} for urgent needs.',
        iconName: 'Clock',
        iconPath: '',
      },
      {
        title: '5-Star Reviews',
        description:
          'Consistently rated 5 stars by satisfied customers throughout {locationName}.',
        iconName: 'Star',
        iconPath: '',
      },
      {
        title: 'Free Estimates',
        description:
          'No-obligation free estimates for all services in {locationName} with transparent pricing.',
        iconName: 'CheckCircle',
        iconPath: '',
      },
      {
        title: 'Local Experts',
        description:
          'Local team with deep knowledge of {locationName} area and building requirements.',
        iconName: 'Users',
        iconPath: '',
      },
      {
        title: 'Quality Guarantee',
        description:
          'All work guaranteed with comprehensive warranty coverage for lasting peace of mind.',
        iconName: 'Award',
        iconPath: '',
      },
    ],
  },

  // Process Template
  process: {
    title: 'How It Works',
    subtitle: '',
    description:
      'Simple 4-step process to get your home improvement project completed in {locationName} with no hassle.',
    steps: [
      {
        step: '1',
        title: 'Contact Our Team',
        description:
          'Call our friendly representatives to discuss your project needs and schedule a free estimate in {locationName}.',
        iconName: 'Phone',
        iconPath: '',
      },
      {
        step: '2',
        title: 'Free Estimate',
        description:
          'Our experts visit your {locationName} property to provide a detailed, no-obligation estimate.',
        iconName: 'FileText',
        iconPath: '',
      },
      {
        step: '3',
        title: 'Professional Service',
        description:
          'Our licensed team completes your project with quality materials and expert workmanship.',
        iconName: 'Settings',
        iconPath: '',
      },
      {
        step: '4',
        title: 'Satisfaction Guarantee',
        description:
          'Final inspection and cleanup ensure your complete satisfaction with guaranteed results.',
        iconName: 'CheckCircle',
        iconPath: '',
      },
    ],
  },

  // Stats Templates
  statsTemplates: {
    city: {
      stats: [
        {
          value: '5,000+',
          label: 'Happy Customers',
          iconName: 'Users',
          color: 'text-blue-600',
        },
        {
          value: '24 Hours',
          label: 'Average Response',
          iconName: 'Clock',
          color: 'text-orange-600',
        },
        {
          value: '99.8%',
          label: 'Customer Satisfaction',
          iconName: 'Target',
          color: 'text-green-600',
        },
        {
          value: '15+ Years',
          label: 'Experience',
          iconName: 'Award',
          color: 'text-purple-600',
        },
      ],
    },
    state: {
      stats: [
        {
          value: '25,000+',
          label: 'Happy Customers',
          iconName: 'Users',
          color: 'text-blue-600',
        },
        {
          value: '15+ Years',
          label: 'Experience',
          iconName: 'Award',
          color: 'text-purple-600',
        },
        {
          value: '99.9%',
          label: 'Customer Satisfaction',
          iconName: 'Target',
          color: 'text-green-600',
        },
        {
          value: 'Same Day',
          label: 'Service Available',
          iconName: 'Clock',
          color: 'text-orange-600',
        },
      ],
    },
  },

  // Trust Indicators
  trustIndicators: [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '5,000+', label: 'Jobs Completed' },
    { value: '98%', label: 'Would Recommend' },
  ],

  // Default population for locations without specific data
  defaultPopulation: '50,000+',
};