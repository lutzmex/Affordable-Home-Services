// src/app/services/data/index.ts - Updated for Home Services

import {
  ServiceData,
  ServiceDynamicData,
  ServiceStaticConfig,
  LegacyServiceData,
} from "./types";
import { SERVICE_STATIC_CONFIG } from "./static/service-static-config";

// Import all home service data
import { commercialPaintingServiceData } from "./services/commercialPainting";
import { commercialPaverInstallationServiceData } from "./services/commercialPaverInstallation";
import { commercialRoofingServiceData } from "./services/commercialRoofing";
import { commercialWindowsServiceData } from "./services/commercialWindows";
import { drivewayPaversServiceData } from "./services/drivewayPavers";
import { energyEfficientWindowsServiceData } from "./services/energyEfficientWindows";
import { exteriorPaintingServiceData } from "./services/exteriorPainting";
import { exteriorPaintPreparationServiceData } from "./services/exteriorPaintPreparation";
import { fencePaintingServiceData } from "./services/fencePainting";
import { flatRoofContractorsServiceData } from "./services/flatRoofContractors";
import { gutterinstallationServiceData } from "./services/gutterInstallation";
import { patioPaversServiceData } from "./services/patioPavers";
import { paverRepairServiceData } from "./services/paverRepair";
import { poolDeckPaversServiceData } from "./services/poolDeckPavers";
import { roofRepairServiceData } from "./services/roofRepair";
import { roofReplacementServiceData } from "./services/roofReplacement";
import { windowInstallationServiceData } from "./services/windowInstallation";
import { windowRepairServiceData } from "./services/windowRepair";
import { windowReplacementServiceData } from "./services/windowReplacement";

// Legacy services registry (existing structure for backward compatibility)
const LEGACY_SERVICES_REGISTRY: { [key: string]: LegacyServiceData } = {
  // Keep existing legacy services here if any
  // 'legacy-service-slug': legacyServiceData,
};

// New dynamic services registry (home services)
const SERVICES_DYNAMIC_REGISTRY: { [key: string]: ServiceDynamicData } = {
  // Commercial Services
  "commercial-painting-services": commercialPaintingServiceData,
  "commercial-paver-installation-services":
    commercialPaverInstallationServiceData,
  "commercial-roofing-services": commercialRoofingServiceData,
  "commercial-windows-services": commercialWindowsServiceData,

  // Painting Services
  "exterior-painting-services": exteriorPaintingServiceData,
  "exterior-paint-preparation-services": exteriorPaintPreparationServiceData,
  "fence-painting-services": fencePaintingServiceData,

  // Paver Services
  "driveway-pavers-services": drivewayPaversServiceData,
  "patio-pavers-services": patioPaversServiceData,
  "paver-repair-services": paverRepairServiceData,
  "pool-deck-pavers-services": poolDeckPaversServiceData,

  // Roofing Services
  "flat-roof-contractors-services": flatRoofContractorsServiceData,
  "roof-repair-services": roofRepairServiceData,
  "roof-replacement-services": roofReplacementServiceData,

  // Window Services
  "energy-efficient-windows-services": energyEfficientWindowsServiceData,
  "window-installation-services": windowInstallationServiceData,
  "window-repair-services": windowRepairServiceData,
  "window-replacement-services": windowReplacementServiceData,

  // Other Services
  "gutter-installation-services": gutterinstallationServiceData,
};

// Service categories for organization
export const SERVICE_CATEGORIES = {
  COMMERCIAL: "Commercial Services",
  PAINTING: "Painting Services",
  ROOFING: "Roofing Services",
  WINDOWS: "Window Services",
  PAVERS: "Paver Services",
  INSTALLATION: "Installation Services",
  REPAIR: "Repair Services",
  EXTERIOR: "Exterior Services",
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

type ServicePlaceholderReplacer = (
  text: string,
  serviceName: string,
  serviceSlug?: string,
) => string;

export const replaceServicePlaceholders: ServicePlaceholderReplacer = (
  text: string,
  serviceName: string,
  serviceSlug?: string,
): string => {
  return text
    .replace(/\{serviceName\}/g, serviceName)
    .replace(/\{serviceSlug\}/g, serviceSlug || "");
};

const replaceObjectPlaceholders = (
  obj: any,
  serviceName: string,
  serviceSlug?: string,
): any => {
  if (typeof obj === "string") {
    return replaceServicePlaceholders(obj, serviceName, serviceSlug);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) =>
      replaceObjectPlaceholders(item, serviceName, serviceSlug),
    );
  }

  if (typeof obj === "object" && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceObjectPlaceholders(value, serviceName, serviceSlug);
    }
    return result;
  }

  return obj;
};

// Helper function to merge stats from template and static data
const mergeServiceStats = (
  template: ServiceStaticConfig["staticData"]["statsTemplate"],
  staticStats: ServiceStaticConfig["staticData"]["stats"],
  serviceName: string,
) => {
  if (!template || !Array.isArray(template)) {
    console.error("Invalid statsTemplate provided to mergeServiceStats");
    return [];
  }

  return template.map((stat) => ({
    number: staticStats[stat.key as keyof typeof staticStats] || "N/A",
    label: stat.label || `${serviceName} ${stat.labelSuffix || ""}`.trim(),
    iconName: stat.iconName,
    color: stat.color,
  }));
};

// Helper function to merge trust indicators
const mergeServiceTrustIndicators = (
  template: ServiceStaticConfig["staticData"]["trustIndicatorsTemplate"],
  staticData: ServiceStaticConfig["staticData"]["trustIndicators"],
) => {
  if (!template || !Array.isArray(template)) {
    console.error(
      "Invalid trustIndicatorsTemplate provided to mergeServiceTrustIndicators",
    );
    return [];
  }

  return template.map((indicator) => ({
    value: staticData[indicator.key as keyof typeof staticData] || "N/A",
    label: indicator.label,
  }));
};

// Helper function to convert legacy content to new format
const convertLegacyContent = (legacyContent: any): any => {
  if (legacyContent && legacyContent.mainTitle && legacyContent.sections) {
    return {
      introduction: "",
      sections: legacyContent.sections.map((section: any) => ({
        heading2: section.title,
        content: section.content,
        subsections: [],
      })),
    };
  }
  return legacyContent;
};

// =============================================================================
// SERVICE MANAGEMENT FUNCTIONS
// =============================================================================

// Main function to get complete service data (handles both legacy and new structure)
export const getServiceData = (slug: string): ServiceData | null => {
  // Try new dynamic structure first
  const dynamicData = SERVICES_DYNAMIC_REGISTRY[slug];
  if (dynamicData) {
    try {
      // Replace placeholders in static config
      const staticConfigWithPlaceholders = replaceObjectPlaceholders(
        SERVICE_STATIC_CONFIG,
        dynamicData.name,
        dynamicData.slug,
      );

      // Merge stats and trust indicators
      const mergedStats = mergeServiceStats(
        SERVICE_STATIC_CONFIG.staticData.statsTemplate,
        SERVICE_STATIC_CONFIG.staticData.stats,
        dynamicData.name,
      );
      const mergedTrustIndicators = mergeServiceTrustIndicators(
        SERVICE_STATIC_CONFIG.staticData.trustIndicatorsTemplate,
        SERVICE_STATIC_CONFIG.staticData.trustIndicators,
      );

      // Use static contact if dynamic doesn't exist
      const contact =
        dynamicData.contact || SERVICE_STATIC_CONFIG.contactTemplate;

      // Create merged data with proper structure
      const mergedData: ServiceData = {
        // Basic info
        id: dynamicData.id,
        name: dynamicData.name,
        slug: dynamicData.slug,
        description: dynamicData.description,
        shortDescription: dynamicData.shortDescription,
        category: dynamicData.category || "Home Services",

        // Hero section
        hero: {
          title: dynamicData.hero.title,
          subtitle: dynamicData.hero.subtitle || "",
          description: dynamicData.hero.description,
          badge: dynamicData.hero.badge || "",
          heroImage: dynamicData.hero.image,
          heroImageAlt: dynamicData.hero.imageAlt,
          badgeIcon: {
            src:
              SERVICE_STATIC_CONFIG.heroStatic?.badgeIcon?.src?.replace(
                "{serviceSlug}",
                dynamicData.slug,
              ) || "",
            alt:
              SERVICE_STATIC_CONFIG.heroStatic?.badgeIcon?.alt?.replace(
                "{serviceName}",
                dynamicData.name,
              ) || "",
          },
          trustIndicators:
            SERVICE_STATIC_CONFIG.heroStatic?.trustIndicators || [],
        },

        // Content
        content: dynamicData.content,

        // Testimonials and FAQs
        testimonials: dynamicData.testimonials,
        faqs: dynamicData.faqs,

        // SEO
        seo: dynamicData.seo,
        customSchemas: dynamicData.customSchemas || [],

        // Static elements
        ui: staticConfigWithPlaceholders.ui || {},
        trustPlatforms: staticConfigWithPlaceholders.trustPlatforms || [],
        stats: mergedStats,
        trustIndicators: mergedTrustIndicators,
        contact,

        // Default values for missing properties
        relatedServices: dynamicData.relatedServices || [],
        pricing: dynamicData.pricing || {
          startingPrice: "",
          priceRange: "",
          factors: [],
        },
        benefits: dynamicData.benefits || {
          environmental: [],
          financial: [],
          safety: [],
        },
        coverage: dynamicData.coverage || {
          propertyTypes: [],
          leakTypes: [],
          materials: [],
        },
        process: dynamicData.process || {
          title: "",
          subtitle: "",
          description: "",
          steps: [],
        },
        technology: dynamicData.technology || {
          title: "",
          subtitle: "",
          description: "",
          tools: [],
        },
      } as ServiceData;

      return mergedData;
    } catch (error) {
      console.error(
        `[getServiceData] Error processing dynamic data for service ${slug}:`,
        error,
      );
      return null;
    }
  }

  // Fall back to legacy structure for backward compatibility
  const legacyData = LEGACY_SERVICES_REGISTRY[slug];
  if (legacyData) {
    try {
      const convertedContent = convertLegacyContent(legacyData.content);

      const convertedLegacyData: ServiceData = {
        ...legacyData,
        content: convertedContent,
        ui: legacyData.ui || SERVICE_STATIC_CONFIG.ui,
        trustPlatforms:
          legacyData.trustPlatforms || SERVICE_STATIC_CONFIG.trustPlatforms,
        stats: legacyData.stats || [],
        trustIndicators: legacyData.trustIndicators || [],
        contact: legacyData.contact || SERVICE_STATIC_CONFIG.contactTemplate,
        hero: {
          title: legacyData.hero?.title || "",
          subtitle: legacyData.hero?.subtitle || "",
          description: legacyData.hero?.description || "",
          badge: legacyData.hero?.badge || "",
          heroImage: legacyData.hero?.heroImage || "",
          heroImageAlt: legacyData.hero?.heroImageAlt || "",
          badgeIcon: legacyData.hero?.badgeIcon ||
            SERVICE_STATIC_CONFIG.heroStatic?.badgeIcon || { src: "", alt: "" },
          trustIndicators:
            legacyData.hero?.trustIndicators ||
            SERVICE_STATIC_CONFIG.heroStatic?.trustIndicators ||
            [],
        },
        testimonials: legacyData.testimonials || [],
        faqs: legacyData.faqs || [],
        relatedServices: legacyData.relatedServices || [],
        pricing: legacyData.pricing || {
          startingPrice: "",
          priceRange: "",
          factors: [],
        },
        benefits: legacyData.benefits || {
          environmental: [],
          financial: [],
          safety: [],
        },
        coverage: legacyData.coverage || {
          propertyTypes: [],
          leakTypes: [],
          materials: [],
        },
        seo: legacyData.seo || {
          metaTitle: "",
          metaDescription: "",
          keywords: [],
          canonicalUrl: "",
          robots: "index, follow",
          openGraph: {
            title: "",
            description: "",
            image: "",
            imageAlt: "",
            url: "",
            type: "website",
            siteName: "",
          },
          twitter: {
            card: "summary_large_image",
            title: "",
            description: "",
            image: "",
            imageAlt: "",
          },
        },
        customSchemas: legacyData.customSchemas || [],
        process: legacyData.process || {
          title: "",
          subtitle: "",
          description: "",
          steps: [],
        },
        technology: legacyData.technology || {
          title: "",
          subtitle: "",
          description: "",
          tools: [],
        },
      } as ServiceData;

      return convertedLegacyData;
    } catch (error) {
      console.error(
        `[getServiceData] Error processing legacy data for service ${slug}:`,
        error,
      );
      return null;
    }
  }

  console.warn(`[getServiceData] No data found for service: ${slug}`);
  return null;
};

// Get dynamic service data only (without static config)
export const getServiceDynamicData = (
  slug: string,
): ServiceDynamicData | null => {
  return SERVICES_DYNAMIC_REGISTRY[slug] || null;
};

// Get static config with placeholders replaced for a service
export const getServiceStaticConfig = (
  serviceName: string,
  serviceSlug?: string,
): ServiceStaticConfig => {
  return replaceObjectPlaceholders(
    SERVICE_STATIC_CONFIG,
    serviceName,
    serviceSlug,
  );
};

// Generate static params for all services (for static generation)
export function getAllServiceSlugs(): string[] {
  const dynamicServices = Object.keys(SERVICES_DYNAMIC_REGISTRY);
  const legacyServices = Object.keys(LEGACY_SERVICES_REGISTRY);
  return [...new Set([...dynamicServices, ...legacyServices])];
}

export function getAllServices(): ServiceData[] {
  const serviceList: ServiceData[] = [];

  // Get services from dynamic registry
  Object.keys(SERVICES_DYNAMIC_REGISTRY).forEach((serviceSlug) => {
    const serviceData = getServiceData(serviceSlug);
    if (serviceData) {
      serviceList.push(serviceData);
    }
  });

  // Get services from legacy registry
  Object.keys(LEGACY_SERVICES_REGISTRY).forEach((serviceSlug) => {
    if (!SERVICES_DYNAMIC_REGISTRY[serviceSlug]) {
      const serviceData = getServiceData(serviceSlug);
      if (serviceData) {
        serviceList.push(serviceData);
      }
    }
  });

  return serviceList;
}

// =============================================================================
// SEARCH AND FILTER FUNCTIONS
// =============================================================================

export const searchServices = (query: string): ServiceData[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllServices().filter(
    (service) =>
      service.name.toLowerCase().includes(lowercaseQuery) ||
      service.description.toLowerCase().includes(lowercaseQuery) ||
      service.category.toLowerCase().includes(lowercaseQuery) ||
      service.seo.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowercaseQuery),
      ),
  );
};

// Get services by category
export const getServicesByCategory = (category: string): ServiceData[] => {
  return getAllServices().filter((service) => service.category === category);
};

// Get related services (excluding current service)
export const getRelatedServices = (
  currentSlug: string,
  limit: number = 6,
): ServiceData[] => {
  const currentService = getServiceData(currentSlug);
  if (!currentService) return [];

  const otherServices = getAllServices().filter(
    (service) => service.slug !== currentSlug,
  );

  // Prioritize services in the same category
  const sameCategory = otherServices.filter(
    (service) => service.category === currentService.category,
  );

  const otherCategory = otherServices.filter(
    (service) => service.category !== currentService.category,
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
};

// Get services by type (painting, roofing, windows, etc.)
export const getServicesByType = (type: string): ServiceData[] => {
  const lowercaseType = type.toLowerCase();
  return getAllServices().filter(
    (service) =>
      service.name.toLowerCase().includes(lowercaseType) ||
      service.slug.includes(lowercaseType),
  );
};

// Get commercial services
export const getCommercialServices = (): ServiceData[] => {
  return getAllServices().filter((service) =>
    service.slug.includes("commercial"),
  );
};

// Get residential services
export const getResidentialServices = (): ServiceData[] => {
  return getAllServices().filter(
    (service) => !service.slug.includes("commercial"),
  );
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

export const isValidService = (slug: string): boolean => {
  return (
    SERVICES_DYNAMIC_REGISTRY[slug] !== undefined ||
    LEGACY_SERVICES_REGISTRY[slug] !== undefined
  );
};

// =============================================================================
// SEO HELPER FUNCTIONS
// =============================================================================

export const generateServiceSiteMap = () => {
  const urls: string[] = [];

  getAllServiceSlugs().forEach((serviceSlug) => {
    urls.push(`/services/${serviceSlug}`);
  });

  return urls;
};

export const getServiceMetadata = (serviceSlug: string) => {
  const serviceData = getServiceData(serviceSlug);
  if (!serviceData) return null;

  return {
    title: serviceData.seo.metaTitle,
    description: serviceData.seo.metaDescription,
    keywords: serviceData.seo.keywords,
    openGraph: serviceData.seo.openGraph,
    twitter: serviceData.seo.twitter,
    customSchemas: serviceData.customSchemas || [],
  };
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export const addServiceDynamicData = (
  slug: string,
  data: ServiceDynamicData,
) => {
  SERVICES_DYNAMIC_REGISTRY[slug] = data;
};

export const removeServiceData = (slug: string) => {
  if (SERVICES_DYNAMIC_REGISTRY[slug]) {
    delete SERVICES_DYNAMIC_REGISTRY[slug];
  }
  if (LEGACY_SERVICES_REGISTRY[slug]) {
    delete LEGACY_SERVICES_REGISTRY[slug];
  }
};

export const getServiceStats = () => {
  const totalServices = getAllServices().length;
  const servicesByCategory = Object.values(SERVICE_CATEGORIES).map(
    (category) => ({
      category,
      count: getServicesByCategory(category).length,
    }),
  );

  return {
    totalServices,
    servicesByCategory,
    dynamicServices: Object.keys(SERVICES_DYNAMIC_REGISTRY).length,
    legacyServices: Object.keys(LEGACY_SERVICES_REGISTRY).length,
  };
};

// Export types for use in components
export type {
  ServiceData,
  ServiceDynamicData,
  ServiceStaticConfig,
  LegacyServiceData,
} from "./types";
