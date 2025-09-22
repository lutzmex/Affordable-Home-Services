// src/app/locations/data/types.ts

// =============================================================================
// MAIN LOCATION DATA INTERFACES
// =============================================================================

export interface SubDomainData {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  type?: "city" | "state";

  // Geographic Info
  state?: string; // For cities
  stateSlug?: string; // For cities
  county?: string; // For cities
  abbreviation?: string; // For states
  region?: string; // For states

  // Hero Content
  hero: HeroContent;

  // Content Structure
  content: {
    introduction?: string;
    sections: ContentSection[];
  };

  // Data Arrays
  testimonials: Testimonial[];
  faqs: FAQ[];

  // Related Locations
  nearbyCities?: RelatedLocation[]; // For cities
  cities?: RelatedLocation[]; // For states
  neighboringStates?: RelatedLocation[]; // For states

  // Other Data
  mapEmbedUrl: string;
  localFactors?: LocalFactors;
  seo: SEOData;
  customSchemas: CustomSchema[];
}

// =============================================================================
// PROCESSED LOCATION DATA (with merged static content)
// =============================================================================

export interface LocationData extends SubDomainData {
  // Additional processed fields from static config
  ui: UIConfig;
  services: ServicesConfig;
  whyChooseUs: WhyChooseUsConfig;
  process: ProcessConfig;
  contact: ContactConfig;
  trustPlatforms: TrustPlatformsConfig;
  stats: StatsConfig[];
  trustIndicators: TrustIndicator[];
  relatedLocations: RelatedLocation[]; // Processed from nearbyCities or cities
  population: string; // Added from static config or default
}

// =============================================================================
// CORE INTERFACES
// =============================================================================

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  image: string;
  imageAlt: string;
  badgeIcon?: BadgeIcon;
  trustIndicators?: TrustIndicatorItem[];
}

export interface BadgeIcon {
  src: string;
  alt: string;
}

export interface TrustIndicatorItem {
  iconName: string;
  text: string;
  color: string;
}

// =============================================================================
// CONTENT STRUCTURE
// =============================================================================

export interface ContentSection {
  heading2: string;
  content?: string;
  subsections?: ContentSubsection[];
}

export interface ContentSubsection {
  heading3?: string;
  heading4?: string;
  heading5?: string;
  heading6?: string;
  content: string;
  subsections?: ContentSubsection[];
}

// =============================================================================
// TESTIMONIALS & REVIEWS
// =============================================================================

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  verified: boolean;
  date: string;
}

// =============================================================================
// FAQ STRUCTURE
// =============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

// =============================================================================
// LOCATION REFERENCES
// =============================================================================

export interface RelatedLocation {
  name: string;
  slug: string;
}

// =============================================================================
// LOCAL FACTORS
// =============================================================================

export interface LocalFactors {
  commonIssues: string[];
  soilType: string;
  climateFactors: string[];
  buildingTypes: string[];
}

// =============================================================================
// SEO DATA
// =============================================================================

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl?: string;
  robots?: string;
  openGraph: OpenGraphData;
  twitter: TwitterData;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  type?: string;
  siteName: string;
}

export interface TwitterData {
  card: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// =============================================================================
// CUSTOM SCHEMAS
// =============================================================================

export interface CustomSchema {
  id: string;
  name: string;
  description?: string;
  priority?: number;
  schema: Record<string, any>;
}

// =============================================================================
// STATIC CONFIG INTERFACES
// =============================================================================

export interface ContactConfig {
  phone: string;
  phoneDisplay: string;
}

export interface UIConfig {
  breadcrumb: BreadcrumbConfig;
  heroSection: HeroSectionConfig;
  ctaSections: CTASectionsConfig;
  servicesSection: ServicesSectionConfig;
  whyChooseUsSection: WhyChooseUsSectionConfig;
  reviewsSection: ReviewsSectionConfig;
  processSection: ProcessSectionConfig;
  faqSection: FAQSectionConfig;
  locationsSection: LocationsSectionConfig;
  mapSection: MapSectionConfig;
}

export interface BreadcrumbConfig {
  homeLink: string;
  homeText: string;
  locationsLink: string;
  locationsText: string;
}

export interface HeroSectionConfig {
  ctaButton: { text: string };
  availabilityBadge: { text: string };
}

export interface CTASectionsConfig {
  afterContent: {
    title: string;
    buttonText: string;
  };
  afterServices: {
    badge: { icon: string; text: string };
    title: string;
    description: string;
    primaryButton: { text: string };
    secondaryButton: { icon: string; text: string; link: string };
  };
  afterReviews: {
    title: string;
    buttonText: string;
  };
}

export interface ServicesSectionConfig {
  badge: { icon: string; text: string };
  showMoreButton: { text: string };
  showLessButton: { text: string };
  initialDisplay: number;
}

export interface WhyChooseUsSectionConfig {
  badge: { icon: string; text: string };
}

export interface ReviewsSectionConfig {
  badge: { icon: string; text: string };
  title: { part1: string; part2: string; part3: string };
  description: string;
  verifiedBadge: { text: string };
}

export interface ProcessSectionConfig {
  badge: { icon: string; text: string };
  stepLabel: string;
}

export interface FAQSectionConfig {
  badge: { icon: string; text: string };
  title: { suffix: string; highlight: string };
  description: string;
}

export interface LocationsSectionConfig {
  badge: { icon: string; text: string };
  title: { part1: string; part2: string; part3: string };
  description: string;
  showAllButton: { text: string };
  showLessButton: { text: string };
  initialDisplay: number;
}

export interface MapSectionConfig {
  badge: { icon: string; text: string };
  title: string;
  subtitle: string;
  description: string;
}

// =============================================================================
// SERVICES CONFIG
// =============================================================================

export interface ServicesConfig {
  title: string;
  subtitle: string;
  description: string;
  list: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  description: string;
  iconName: string;
  iconPath: string;
  slug: string;
}

// =============================================================================
// WHY CHOOSE US CONFIG
// =============================================================================

export interface WhyChooseUsConfig {
  title: string;
  subtitle: string;
  description: string;
  reasons: WhyChooseUsReason[];
}

export interface WhyChooseUsReason {
  title: string;
  description: string;
  iconName: string;
  iconPath: string;
}

// =============================================================================
// PROCESS CONFIG
// =============================================================================

export interface ProcessConfig {
  title: string;
  subtitle: string;
  description: string;
  steps: ProcessStep[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
  iconPath: string;
}

// =============================================================================
// TRUST PLATFORMS CONFIG
// =============================================================================

export interface TrustPlatformsConfig {
  title: string;
  platforms: TrustPlatform[];
}

export interface TrustPlatform {
  src: string;
  alt: string;
}

// =============================================================================
// STATS CONFIG
// =============================================================================

export interface StatsConfig {
  value: string;
  label: string;
  iconName: string;
  color: string;
}

// =============================================================================
// TRUST INDICATORS
// =============================================================================

export interface TrustIndicator {
  value: string;
  label: string;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type LocationType = "city" | "state";

export interface LocationRegistryItem {
  data: SubDomainData;
  type: LocationType;
}

export interface SitemapEntry {
  slug: string;
  url: string;
  type: LocationType;
  name: string;
  lastModified: string;
}

export interface DebugInfo {
  totalLocations: number;
  totalStates: number;
  totalCities: number;
  locations: {
    slug: string;
    name: string;
    type: LocationType;
    url: string;
  }[];
}
