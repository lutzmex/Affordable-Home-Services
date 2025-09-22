// src/app/services/data/types.ts

// Simplified Content Structure for easier data input (same as locations)
export interface SimpleContentSection {
  heading2: string; // H2 - main section heading
  content?: string; // Optional main content for the section
  subsections?: SimpleContentSubsection[];
}

export interface SimpleContentSubsection {
  heading3?: string; // H3
  heading4?: string; // H4
  heading5?: string; // H5
  heading6?: string; // H6
  content: string; // Content for this subsection
  subsections?: SimpleContentSubsection[]; // Nested subsections
}

// New simplified service content structure
export interface SimpleServiceContent {
  introduction?: string; // Single intro paragraph
  sections: SimpleContentSection[];
}

// Legacy content structure (for backward compatibility)
export interface LegacyServiceContent {
  mainTitle: string;
  sections: {
    title: string;
    content: string;
  }[];
}

// Process step interface
export interface ProcessStep {
  title: string;
  description: string;
}

// Technology tool interface
export interface TechnologyTool {
  name: string;
  description: string;
}

// Enhanced process step (with static data)
export interface EnhancedProcessStep extends ProcessStep {
  step: string;
  iconName: string;
  iconPath: string;
}

// Enhanced technology tool (with static data)
export interface EnhancedTechnologyTool extends TechnologyTool {
  iconName: string;
  iconPath: string;
}

// Related service interface
export interface RelatedService {
  name: string;
  slug: string;
  description: string;
  iconPath?: string; // Optional custom icon path
}

// Enhanced related service (with guaranteed iconPath)
export interface EnhancedRelatedService extends Omit<RelatedService, 'iconPath'> {
  iconPath: string; // Always present in enhanced version
}

// Service Dynamic Data Interface (simplified for easy input)
export interface ServiceDynamicData {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  category?: string; // Made optional
  description: string;
  shortDescription: string;

  // Hero Content - badge is now optional
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    badge?: string; // Made optional
    image: string;
    imageAlt: string;
  };

  // Contact (if different from static)
  contact?: {
    phone: string;
    phoneDisplay: string;
  };

  // Simplified content structure - NEW
  content: SimpleServiceContent;

  // Process steps (titles and descriptions only) - Made optional
  process?: {
    title: string;
    subtitle: string;
    description: string;
    steps: ProcessStep[];
  };

  // Technology tools (names and descriptions only) - Made optional
  technology?: {
    title: string;
    subtitle: string;
    description: string;
    tools: TechnologyTool[];
  };

  // Testimonials
  testimonials: {
    name: string;
    location: string;
    text: string;
    rating: number;
    verified: boolean;
    date: string;
  }[];

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Related Services - Made optional
  relatedServices?: RelatedService[];

  // Pricing - Made optional
  pricing?: {
    startingPrice: string;
    priceRange: string;
    factors: string[];
  };

  // Benefits - Made optional
  benefits?: {
    environmental: string[];
    financial: string[];
    safety: string[];
  };

  // Coverage - Made optional
  coverage?: {
    propertyTypes: string[];
    leakTypes: string[];
    materials: string[];
  };

  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    robots?: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      url: string;
      type: string;
      siteName: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };

  // Custom Schemas
  customSchemas?: {
    id: string;
    name?: string;
    schema: Record<string, any>;
    priority?: number;
  }[];
}

// Service Static Configuration Interface
export interface ServiceStaticConfig {
  // UI Configuration for all text and visual elements
  ui: {
    breadcrumb: {
      homeLink: string;
      homeText: string;
      servicesLink: string;
      servicesText: string;
    };
    heroSection: {
      ctaButton: {
        text: string;
      };
      availabilityBadge: {
        text: string;
      };
    };
    ctaSections: {
      afterContent: {
        title: string;
        buttonText: string;
      };
      afterReviews: {
        title: string;
        buttonText: string;
      };
      beforeRelatedServices: {
        badge: {
          icon: string;
          text: string;
        };
        title: string;
        description: string;
        buttonText: string;
        features: {
          text: string;
        }[];
      };
      afterRelatedServices: {
        badge: {
          icon: string;
          text: string;
        };
        title: string;
        description: string;
        primaryButton: {
          text: string;
        };
        secondaryButton: {
          icon: string;
          text: string;
          link: string;
        };
      };
    };
    processSection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
      };
      subtitle: string;
      description: string;
      stepLabel: string;
    };
    technologySection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
      };
      description: string;
    };
    reviewsSection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
        part3: string;
      };
      description: string;
      verifiedBadge: {
        text: string;
      };
    };
    faqSection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
      };
      description: string;
    };
    relatedServicesSection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      initialDisplay: number;
      showMoreButton: {
        text: string;
      };
      showLessButton: {
        text: string;
      };
    };
    whyChooseUsSection: {
      badge: {
        icon: string;
        text: string;
      };
      title: {
        part1: string;
        part2: string;
      };
      description: string;
      features: {
        iconName: string;
        title: string;
        description: string;
      }[];
    };
  };

  // Trust Platforms Section
  trustPlatforms: {
    title: string;
    platforms: {
      src: string;
      alt: string;
    }[];
  };

  // Static hero elements
  heroStatic: {
    badgeIcon: {
      src: string;
      alt: string;
    };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };

  // Static stats and trust indicators
  staticData: {
    stats: {
      customers: string;
      success: string;
      response: string;
      rating: string;
    };

    trustIndicators: {
      rating: string;
      served: string;
      recommend: string;
    };

    statsTemplate: {
      key: string;
      label?: string;
      labelSuffix?: string;
      iconName: string;
      color: string;
    }[];

    trustIndicatorsTemplate: {
      key: string;
      label: string;
    }[];

    // Additional trust elements for enhanced stats section
    trustElements: {
      title: string;
      subtitle: string;
    }[];
  };

  // Contact template
  contactTemplate: {
    phone: string;
    phoneDisplay: string;
  };

  // Static process with icons
  processStatic: {
    steps: {
      step: string;
      iconName: string;
      iconPath: string;
      title: string;
      description: string;
    }[];
  };

  // Static technology with icons
  technologyStatic: {
    tools: {
      iconName: string;
      iconPath: string;
      name: string;
      description: string;
    }[];
  };

  // Updated related services with complete service data
  relatedServicesStatic: {
    defaultIconPath: string;
    services: {
      id: string;
      name: string;
      slug: string;
      description: string;
      iconPath: string;
      category: string;
      categoryId: string;
      projectsCompleted: number;
      avgCost: string;
      timeframe: string;
    }[];
    iconsBySlug: {
      [slug: string]: string;
    };
  };
}

// Combined Service Data Interface (what components receive)
export interface ServiceData {
  // Basic Info (required fields from ServiceDynamicData)
  id: string;
  name: string;
  slug: string;
  category: string; // Made required in final ServiceData
  description: string;
  shortDescription: string;

  // Hero Content with static enhancements
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    badge?: string;
    heroImage: string;
    heroImageAlt: string;
    badgeIcon: {
      src: string;
      alt: string;
    };
    trustIndicators: {
      iconName: string;
      text: string;
      color: string;
    }[];
  };

  // Content
  content: SimpleServiceContent;

  // Static UI elements
  ui: ServiceStaticConfig["ui"];
  trustPlatforms: ServiceStaticConfig["trustPlatforms"];

  // Merged stats and trust indicators
  stats: {
    number: string;
    label: string;
    iconName: string;
    color: string;
  }[];

  trustIndicators: {
    value: string;
    label: string;
  }[];

  // Enhanced process with static icons (required in final ServiceData)
  process: {
    title: string;
    subtitle: string;
    description: string;
    steps: EnhancedProcessStep[];
  };

  // Enhanced technology with static icons (required in final ServiceData)
  technology: {
    title: string;
    subtitle: string;
    description: string;
    tools: EnhancedTechnologyTool[];
  };

  // Enhanced related services with static icons
  relatedServices: EnhancedRelatedService[];

  // Final contact (merged)
  contact: {
    phone: string;
    phoneDisplay: string;
  };

  // Data from ServiceDynamicData
  testimonials: ServiceDynamicData["testimonials"];
  faqs: ServiceDynamicData["faqs"];
  seo: ServiceDynamicData["seo"];
  customSchemas: ServiceDynamicData["customSchemas"];

  // Optional fields with defaults
  pricing: NonNullable<ServiceDynamicData["pricing"]>;
  benefits: NonNullable<ServiceDynamicData["benefits"]>;
  coverage: NonNullable<ServiceDynamicData["coverage"]>;
}

// Legacy ServiceData interface (for backward compatibility)
export interface LegacyServiceData {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;

  ui?: ServiceStaticConfig["ui"];
  trustPlatforms?: ServiceStaticConfig["trustPlatforms"];

  hero?: {
    title: string;
    subtitle?: string;
    description: string;
    badge?: string;
    badgeIcon?: { src: string; alt: string };
    heroImage: string;
    heroImageAlt: string;
    trustIndicators?: { iconName: string; text: string; color: string }[];
  };

  stats?: { number: string; label: string; iconName: string; color: string }[];
  content?: LegacyServiceContent;
  
  process?: {
    title: string;
    subtitle: string;
    description: string;
    steps: EnhancedProcessStep[];
  };
  
  technology?: {
    title: string;
    subtitle: string;
    description: string;
    tools: EnhancedTechnologyTool[];
  };

  testimonials?: ServiceDynamicData["testimonials"];
  trustIndicators?: { value: string; label: string }[];
  faqs?: ServiceDynamicData["faqs"];
  relatedServices?: EnhancedRelatedService[];
  contact?: { phone: string; phoneDisplay: string };
  pricing?: ServiceDynamicData["pricing"];
  benefits?: ServiceDynamicData["benefits"];
  coverage?: ServiceDynamicData["coverage"];
  seo?: ServiceDynamicData["seo"];
  customSchemas?: ServiceDynamicData["customSchemas"];
}

// Helper function type
export type ServicePlaceholderReplacer = (
  text: string,
  serviceName: string,
) => string;