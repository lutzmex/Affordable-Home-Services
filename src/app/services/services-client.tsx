// src/app/services/services-client.tsx
"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Phone,
  Star,
  Clock,
  Users,
  Check,
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

// Service Interface
interface Service {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  features: string[];
  expertsAvailable: number;
  responseTime: string;
  category: string;
  categoryId: string;
  rating: number;
  completedJobs: number;
  avgCost: string;
  isPopular?: boolean;
  isEmergency?: boolean;
  slug: string;
}

// Comprehensive Services Data with Updated Content for Home Services
const comprehensiveServices: Service[] = [
  // COMMERCIAL SERVICES
  {
    id: "commercial-painting-services",
    title: "Commercial Painting Services",
    description:
      "Professional commercial painting for offices, retail stores, and industrial buildings with minimal business disruption.",
    imagePath: "/images/commercial-exterior-painting.webp",
    features: [
      "Minimal business disruption scheduling",
      "Industrial grade coatings and finishes",
      "Professional surface preparation",
      "Ongoing maintenance programs available",
    ],
    expertsAvailable: 15,
    responseTime: "< 4 Hours",
    category: "Commercial Services",
    categoryId: "commercial-services",
    rating: 4.8,
    completedJobs: 987,
    avgCost: "$2,500-15,000",
    isPopular: true,
    slug: "commercial-painting-services",
  },
  {
    id: "commercial-paver-installation-services",
    title: "Commercial Paver Installation",
    description:
      "Durable commercial paver solutions for business entrances, parking areas, and outdoor commercial spaces.",
    imagePath: "/images/commercial-paver-services.webp",
    features: [
      "Heavy-duty commercial pavers",
      "ADA compliant installations",
      "Load-bearing calculations included",
      "Long-term durability warranty",
    ],
    expertsAvailable: 12,
    responseTime: "< 24 Hours",
    category: "Commercial Services",
    categoryId: "commercial-services",
    rating: 4.7,
    completedJobs: 543,
    avgCost: "$8-25/sq ft",
    slug: "commercial-paver-installation-services",
  },
  {
    id: "commercial-roofing-services",
    title: "Commercial Roofing Services",
    description:
      "Complete commercial roofing solutions including flat roofs, TPO systems, and preventive maintenance programs.",
    imagePath: "/images/commercial-roofing.webp",
    features: [
      "Flat roof specialists with expertise",
      "TPO, EPDM, and membrane systems",
      "Emergency leak repair services",
      "Preventive maintenance contracts",
    ],
    expertsAvailable: 18,
    responseTime: "< 2 Hours",
    category: "Commercial Services",
    categoryId: "commercial-services",
    rating: 4.9,
    completedJobs: 765,
    avgCost: "$5-20/sq ft",
    isEmergency: true,
    slug: "commercial-roofing-services",
  },
  {
    id: "commercial-windows-services",
    title: "Commercial Window Services",
    description:
      "Professional commercial window installation, replacement, and repair for office buildings and retail spaces.",
    imagePath: "/images/commercial-window-services.webp",
    features: [
      "Storefront window specialists",
      "Energy-efficient glazing systems",
      "Building code compliance ensured",
      "Scheduled maintenance programs",
    ],
    expertsAvailable: 14,
    responseTime: "< 8 Hours",
    category: "Commercial Services",
    categoryId: "commercial-services",
    rating: 4.6,
    completedJobs: 432,
    avgCost: "$200-800/window",
    slug: "commercial-windows-services",
  },

  // EXTERIOR PAINTING
  {
    id: "exterior-painting-services",
    title: "Exterior Painting Services",
    description:
      "Premium exterior house painting with professional surface preparation and high-quality paints for lasting results.",
    imagePath: "/images/exterior-house-painting.webp",
    features: [
      "Premium Sherwin-Williams & Benjamin Moore paints",
      "Complete surface preparation included",
      "Color consultation and matching",
      "7-year workmanship warranty",
    ],
    expertsAvailable: 25,
    responseTime: "< 2 Hours",
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    rating: 4.8,
    completedJobs: 3456,
    avgCost: "$3,500-12,000",
    isPopular: true,
    slug: "exterior-painting-services",
  },
  {
    id: "exterior-paint-preparation-services",
    title: "Exterior Paint Preparation",
    description:
      "Comprehensive exterior paint preparation including power washing, scraping, priming, and surface repairs.",
    imagePath: "/images/stucco-painting-repair.webp",
    features: [
      "High-pressure power washing",
      "Professional scraping and sanding",
      "Crack repair and wood replacement",
      "Premium primer application",
    ],
    expertsAvailable: 20,
    responseTime: "< 4 Hours",
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    rating: 4.7,
    completedJobs: 2134,
    avgCost: "$1,200-4,500",
    slug: "exterior-paint-preparation-services",
  },
  {
    id: "fence-painting-services",
    title: "Fence Painting Services",
    description:
      "Professional fence painting and staining services to protect and beautify wooden and metal fencing.",
    imagePath: "/images/fence-deck-staining.webp",
    features: [
      "Weather-resistant stains and paints",
      "UV protection coatings applied",
      "Power washing prep included",
      "Annual maintenance programs",
    ],
    expertsAvailable: 18,
    responseTime: "< 4 Hours",
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    rating: 4.6,
    completedJobs: 1876,
    avgCost: "$3-8/linear ft",
    slug: "fence-painting-services",
  },

  // PAVER SERVICES
  {
    id: "driveway-pavers-services",
    title: "Driveway Paver Services",
    description:
      "Transform your driveway with custom paver installation using interlocking concrete pavers and natural stone options.",
    imagePath: "/images/driveway-paver-installation.webp",
    features: [
      "Custom design consultation included",
      "Interlocking concrete and natural stone",
      "Professional excavation and base prep",
      "Lifetime material warranty",
    ],
    expertsAvailable: 22,
    responseTime: "< 4 Hours",
    category: "Paver Services",
    categoryId: "paver-services",
    rating: 4.9,
    completedJobs: 2567,
    avgCost: "$12-25/sq ft",
    isPopular: true,
    slug: "driveway-pavers-services",
  },
  {
    id: "patio-pavers-services",
    title: "Patio Paver Services",
    description:
      "Create stunning outdoor living spaces with beautiful patio paver installation for entertainment and relaxation.",
    imagePath: "/images/patio-paver-installation.webp",
    features: [
      "Outdoor kitchen integration ready",
      "Fire pit and seating wall options",
      "Proper drainage solutions included",
      "Custom patterns and borders",
    ],
    expertsAvailable: 20,
    responseTime: "< 4 Hours",
    category: "Paver Services",
    categoryId: "paver-services",
    rating: 4.8,
    completedJobs: 3234,
    avgCost: "$15-30/sq ft",
    isPopular: true,
    slug: "patio-pavers-services",
  },
  {
    id: "paver-repair-services",
    title: "Paver Repair Services",
    description:
      "Professional paver repair, restoration, and maintenance to restore existing paved surfaces to like-new condition.",
    imagePath: "/images/paver-repair-restoration.webp",
    features: [
      "Joint sand replacement and refilling",
      "Individual paver replacement service",
      "Professional cleaning and sealing",
      "Leveling and re-setting expertise",
    ],
    expertsAvailable: 16,
    responseTime: "< 2 Hours",
    category: "Paver Services",
    categoryId: "paver-services",
    rating: 4.7,
    completedJobs: 1567,
    avgCost: "$8-18/sq ft",
    slug: "paver-repair-services",
  },
  {
    id: "pool-deck-pavers-services",
    title: "Pool Deck Paver Services",
    description:
      "Slip-resistant pool deck pavers that stay cool and provide safety around swimming pools and spa areas.",
    imagePath: "/images/pool-deck-pavers.webp",
    features: [
      "Slip-resistant surface technology",
      "Cool-touch paver materials",
      "Pool equipment access solutions",
      "Integrated coping and drainage",
    ],
    expertsAvailable: 14,
    responseTime: "< 6 Hours",
    category: "Paver Services",
    categoryId: "paver-services",
    rating: 4.8,
    completedJobs: 987,
    avgCost: "$18-35/sq ft",
    slug: "pool-deck-pavers-services",
  },

  // ROOFING SERVICES
  {
    id: "flat-roof-contractors-services",
    title: "Flat Roof Contractor Services",
    description:
      "Specialized flat roof installation, repair, and maintenance for commercial and residential buildings.",
    imagePath: "/images/flat-roofing.webp",
    features: [
      "TPO, EPDM, and modified bitumen",
      "Professional membrane installation",
      "Drainage system optimization",
      "25-year material warranties",
    ],
    expertsAvailable: 12,
    responseTime: "< 4 Hours",
    category: "Roofing Services",
    categoryId: "roofing-services",
    rating: 4.7,
    completedJobs: 654,
    avgCost: "$6-15/sq ft",
    slug: "flat-roof-contractors-services",
  },
  {
    id: "roof-repair-services",
    title: "Roof Repair Services",
    description:
      "Emergency roof repair services available 24/7 for leak detection, shingle replacement, and storm damage.",
    imagePath: "/images/roof-repair-services.webp",
    features: [
      "24/7 emergency response available",
      "Insurance claim assistance provided",
      "Leak detection and repair",
      "Storm damage restoration",
    ],
    expertsAvailable: 30,
    responseTime: "< 1 Hour",
    category: "Roofing Services",
    categoryId: "roofing-services",
    rating: 4.9,
    completedJobs: 4567,
    avgCost: "$300-2,500",
    isEmergency: true,
    isPopular: true,
    slug: "roof-repair-services",
  },
  {
    id: "roof-replacement-services",
    title: "Roof Replacement Services",
    description:
      "Complete roof replacement with premium materials and professional installation backed by comprehensive warranties.",
    imagePath: "/images/roof-replacement.webp",
    features: [
      "Premium GAF, Owens Corning materials",
      "Complete tear-off and installation",
      "25-year material warranty included",
      "Full insurance claim support",
    ],
    expertsAvailable: 18,
    responseTime: "< 8 Hours",
    category: "Roofing Services",
    categoryId: "roofing-services",
    rating: 4.8,
    completedJobs: 1234,
    avgCost: "$8,000-35,000",
    isPopular: true,
    slug: "roof-replacement-services",
  },
  {
    id: "gutter-installation-services",
    title: "Gutter Installation Services",
    description:
      "Professional gutter installation and repair to protect your home's foundation with seamless aluminum gutters.",
    imagePath: "/images/gutter-installation.webp",
    features: [
      "Seamless aluminum gutter systems",
      "Leaf guard protection available",
      "Proper slope and drainage design",
      "Downspout extension installation",
    ],
    expertsAvailable: 16,
    responseTime: "< 4 Hours",
    category: "Roofing Services",
    categoryId: "roofing-services",
    rating: 4.6,
    completedJobs: 2345,
    avgCost: "$6-15/linear ft",
    slug: "gutter-installation-services",
  },

  // WINDOW SERVICES
  {
    id: "energy-efficient-windows-services",
    title: "Energy-Efficient Window Services",
    description:
      "Energy-efficient window installation to reduce utility costs and improve home comfort with ENERGY STAR certified products.",
    imagePath: "/images/energy-efficient-windows.webp",
    features: [
      "ENERGY STAR certified products",
      "Double and triple pane options",
      "Low-E glass coating included",
      "Significant utility bill savings",
    ],
    expertsAvailable: 20,
    responseTime: "< 4 Hours",
    category: "Window Services",
    categoryId: "window-services",
    rating: 4.8,
    completedJobs: 2876,
    avgCost: "$450-950/window",
    isPopular: true,
    slug: "energy-efficient-windows-services",
  },
  {
    id: "window-installation-services",
    title: "Window Installation Services",
    description:
      "Professional window installation for new construction and home additions with precise fitting and weatherproofing.",
    imagePath: "/images/window-installation.webp",
    features: [
      "New construction specialists",
      "Precise measurement and fitting",
      "Complete weatherproofing system",
      "Building code compliance ensured",
    ],
    expertsAvailable: 18,
    responseTime: "< 6 Hours",
    category: "Window Services",
    categoryId: "window-services",
    rating: 4.7,
    completedJobs: 1890,
    avgCost: "$400-800/window",
    slug: "window-installation-services",
  },
  {
    id: "window-repair-services",
    title: "Window Repair Services",
    description:
      "Expert window repair services for broken glass, damaged frames, and malfunctioning hardware.",
    imagePath: "/images/window-repair.webp",
    features: [
      "Same-day repair service available",
      "Glass replacement expertise",
      "Frame and hardware repair",
      "Emergency board-up services",
    ],
    expertsAvailable: 24,
    responseTime: "< 2 Hours",
    category: "Window Services",
    categoryId: "window-services",
    rating: 4.6,
    completedJobs: 3456,
    avgCost: "$150-600/repair",
    isEmergency: true,
    slug: "window-repair-services",
  },
  {
    id: "window-replacement-services",
    title: "Window Replacement Services",
    description:
      "Complete window replacement with vinyl, wood, and aluminum frames to improve energy efficiency and home value.",
    imagePath: "/images/window-replacement.webp",
    features: [
      "Vinyl, wood, and aluminum options",
      "Professional removal and installation",
      "Energy efficiency improvement",
      "Lifetime warranty on materials",
    ],
    expertsAvailable: 22,
    responseTime: "< 4 Hours",
    category: "Window Services",
    categoryId: "window-services",
    rating: 4.8,
    completedJobs: 4123,
    avgCost: "$350-750/window",
    isPopular: true,
    slug: "window-replacement-services",
  },
];

// Service Categories
const serviceCategories = [
  { id: "all", name: "All Services", count: comprehensiveServices.length },
  {
    id: "commercial-services",
    name: "Commercial Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "commercial-services",
    ).length,
  },
  {
    id: "exterior-painting",
    name: "Exterior Painting",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "exterior-painting",
    ).length,
  },
  {
    id: "paver-services",
    name: "Paver Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "paver-services",
    ).length,
  },
  {
    id: "roofing-services",
    name: "Roofing Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "roofing-services",
    ).length,
  },
  {
    id: "window-services",
    name: "Window Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "window-services",
    ).length,
  },
];

// Service Card Component
interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const handleCallNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    window.location.href = "tel:+1 (818) 453-6110";
  };

  const handleCardClick = () => {
    window.location.href = `/services/${service.slug}`;
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-gray-300 hover:border-gray-400 transform hover:-translate-y-2 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Service Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.imagePath}
          alt={service.title}
          width={400}
          height={350}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {service.isPopular && (
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Star className="h-3 w-3 fill-current" />
              Popular
            </div>
          )}
          {service.isEmergency && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full font-poppins font-medium text-xs flex items-center gap-1 shadow-sm">
              <Clock className="h-3 w-3" />
              24/7
            </div>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-2 py-1 text-gray-700">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="font-poppins font-medium text-xs">
              {service.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full font-poppins font-medium text-xs border border-gray-300">
              {service.category}
            </span>
            <div className="flex items-center gap-1 text-green-600">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-poppins font-medium text-xs">
                Available
              </span>
            </div>
          </div>

          <h3 className="font-poppins font-medium text-lg text-gray-800 mb-2 group-hover:text-gray-900 transition-colors leading-tight">
            {service.title}
          </h3>

          <p className="font-poppins text-sm text-gray-600 leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-50 rounded-xl p-2.5 text-center group-hover:bg-pink-50 transition-colors">
            <Clock className="h-4 w-4 text-pink-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-gray-800">
              {service.responseTime}
            </div>
            <div className="font-poppins text-xs text-gray-500">Response</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2.5 text-center group-hover:bg-green-50 transition-colors">
            <Users className="h-4 w-4 text-green-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-gray-800">
              {service.expertsAvailable}
            </div>
            <div className="font-poppins text-xs text-gray-500">Experts</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2.5 text-center group-hover:bg-pink-50 transition-colors">
            <CheckCircle className="h-4 w-4 text-pink-600 mx-auto mb-1" />
            <div className="font-poppins font-medium text-xs text-gray-800">
              {service.completedJobs.toLocaleString()}
            </div>
            <div className="font-poppins text-xs text-gray-500">Jobs Done</div>
          </div>
        </div>

        {/* Average Cost */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
          <div className="text-center">
            <div className="font-poppins font-medium text-sm text-green-800">
              Average Cost
            </div>
            <div className="font-ibm-plex-mono font-medium text-lg text-green-700">
              {service.avgCost}
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-poppins font-medium text-sm text-gray-800 mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-pink-600" />
            Key Features:
          </h4>
          <ul className="space-y-1">
            {service.features.slice(0, 2).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center font-poppins text-xs text-gray-600"
              >
                <Check className="h-2.5 w-2.5 text-green-500 mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="font-poppins font-medium text-xs text-gray-600 mt-1">
            +{service.features.length - 2} more features
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleCallNow}
            className="w-full bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 hover:from-pink-200 hover:to-pink-300 py-2.5 px-4 rounded-xl font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </button>

          <div className="w-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600 py-2 px-4 rounded-xl font-poppins font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
            View Details
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Services Page Component
export default function ServicesClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || service.categoryId === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gray-100 border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-8 shadow-sm">
              <Target className="h-5 w-5 mr-2" />
              Complete Service Portfolio
            </div>

            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight mb-6">
              Professional Home Improvement
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Services & Solutions
              </span>
            </h1>

            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              Complete home improvement services with 19 specialized solutions.
              From residential pavers to commercial roofing - we transform
              properties with quality craftsmanship and professional results.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-pink-600 mb-1">
                  19
                </div>
                <div className="font-poppins text-sm text-gray-700">
                  Services Available
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-green-600 mb-1">
                  325+
                </div>
                <div className="font-poppins text-sm text-gray-700">
                  Expert Contractors
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-pink-600 mb-1">
                  98%
                </div>
                <div className="font-poppins text-sm text-gray-700">
                  Success Rate
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
                <div className="font-poppins font-medium text-4xl lg:text-5xl text-green-600 mb-1">
                  13+
                </div>
                <div className="font-poppins text-sm text-gray-700">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section
        className={`py-12 bg-gray-50 transform transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search home improvement services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent font-poppins text-base lg:text-lg bg-white shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-poppins font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-pink-600 text-white shadow-sm transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className={`py-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 relative z-10">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-sm max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-poppins font-medium text-xl text-gray-800 mb-2">
                  No Services Found
                </h3>
                <p className="font-poppins text-gray-600">
                  Try different search terms or view all services.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 bg-gray-800 text-white hover:bg-gray-900 px-6 py-2 rounded-xl font-poppins font-medium transition-all duration-300"
                >
                  Show All Services
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl text-gray-800 mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-600 mb-8">
              Our licensed contractors are ready to help with any home
              improvement project you have in mind.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+1 (818) 453-6110")}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              <PhoneCall className="h-5 w-5" />
              <span className="font-ibm-plex-mono font-medium">
                Call (818) 453-6110
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
