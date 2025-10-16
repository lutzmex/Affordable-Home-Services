"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Building2,
} from "lucide-react";
import Image from "next/image";

// Service Interface
interface Service {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  projectsCompleted: number;
  category: string;
  categoryId: string;
  slug: string;
}

// Services Data (With HVAC and Handyman at top)
const comprehensiveServices: Service[] = [
  // HVAC SERVICES
  {
    id: "hvac-services",
    title: "HVAC Services",
    description:
      "Professional heating and cooling services with same day estimates. Reliable repairs, maintenance, and installations at affordable rates.",
    imagePath: "/images/hvac-services.webp",
    projectsCompleted: 2145,
    category: "HVAC Services",
    categoryId: "hvac-services",
    slug: "hvac-services",
  },

  // GARAGE DOOR SERVICES
  {
    id: "garage-door-services",
    title: "Garage Door Services",
    slug: "garage-door-services",
    description:
      "Complete garage door services including installation, repair, and opener replacement. Same-day service available.",
    imagePath: "/images/garage-door-services.webp",
    category: "Garage Door Services",
    categoryId: "garage-door-services",
    projectsCompleted: 1567,
  },

  // DOORS AND GATES INSTALLATION
  {
    id: "doors-and-gates-installation",
    title: "Doors and Gates Installation",
    slug: "doors-and-gates-installation-services",
    description:
      "Professional door and gate installation, repair, and maintenance. Interior, exterior, and security solutions.",
    imagePath: "/images/door-installation.webp",
    category: "Door Services",
    categoryId: "door-services",
    projectsCompleted: 1285,
  },

  // HANDYMAN SERVICES
  {
    id: "handyman-services",
    title: "Handyman Services",
    description:
      "Fast and reliable handyman services for home repairs and upgrades. Fix leaks, install hardware, and handle small repairs efficiently.",
    imagePath: "/images/handyman-services.webp",
    projectsCompleted: 3421,
    category: "Handyman Services",
    categoryId: "handyman-services",
    slug: "handyman-services",
  },

  // EXTERIOR PAINTING
  {
    id: "exterior-painting-services",
    title: "Exterior Painting Services",
    description:
      "Premium exterior house painting with professional surface preparation and high-quality paints for lasting results.",
    imagePath: "/images/exterior-house-painting.webp",
    projectsCompleted: 6789,
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    slug: "exterior-painting-services",
  },
  {
    id: "exterior-paint-preparation-services",
    title: "Exterior Paint Preparation",
    description:
      "Comprehensive exterior paint preparation including power washing, scraping, priming, and surface repairs.",
    imagePath: "/images/stucco-painting-repair.webp",
    projectsCompleted: 2134,
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    slug: "exterior-paint-preparation-services",
  },
  {
    id: "fence-painting-services",
    title: "Fence Painting Services",
    description:
      "Professional fence painting and staining services to protect and beautify wooden and metal fencing.",
    imagePath: "/images/fence-deck-staining.webp",
    projectsCompleted: 1876,
    category: "Exterior Painting",
    categoryId: "exterior-painting",
    slug: "fence-painting-services",
  },

  // PAVER SERVICES
  {
    id: "driveway-pavers-services",
    title: "Driveway Paver Installation",
    description:
      "Transform your driveway with beautiful, durable pavers. Custom designs and professional installation.",
    imagePath: "/images/driveway-paver-installation.webp",
    projectsCompleted: 2456,
    category: "Paver Services",
    categoryId: "paver-services",
    slug: "driveway-pavers-services",
  },
  {
    id: "patio-pavers-services",
    title: "Patio Paver Installation",
    description:
      "Create stunning outdoor living spaces with professional patio paver installation and design.",
    imagePath: "/images/patio-paver-installation.webp",
    projectsCompleted: 3234,
    category: "Paver Services",
    categoryId: "paver-services",
    slug: "patio-pavers-services",
  },
  {
    id: "paver-repair-services",
    title: "Paver Repair & Restoration",
    description:
      "Restore and repair existing paver surfaces. Re-sanding, sealing, and replacement services.",
    imagePath: "/images/paver-repair-restoration.webp",
    projectsCompleted: 4321,
    category: "Paver Services",
    categoryId: "paver-services",
    slug: "paver-repair-services",
  },
  {
    id: "pool-deck-pavers-services",
    title: "Pool Deck Pavers",
    description:
      "Slip-resistant pool deck pavers that stay cool and provide safety around your swimming pool.",
    imagePath: "/images/pool-deck-pavers.webp",
    projectsCompleted: 1567,
    category: "Paver Services",
    categoryId: "paver-services",
    slug: "pool-deck-pavers-services",
  },

  // ROOFING SERVICES
  {
    id: "flat-roof-contractors-services",
    title: "Flat Roof Services",
    description:
      "Specialized flat roof installation, repair, and maintenance for commercial and residential buildings.",
    imagePath: "/images/flat-roofing.webp",
    projectsCompleted: 654,
    category: "Roofing Services",
    categoryId: "roofing-services",
    slug: "flat-roof-contractors-services",
  },
  {
    id: "roof-repair-services",
    title: "Roof Repair Services",
    description:
      "Professional roof leak repair, shingle replacement, and emergency roofing services available 24/7.",
    imagePath: "/images/roof-repair-services.webp",
    projectsCompleted: 4567,
    category: "Roofing Services",
    categoryId: "roofing-services",
    slug: "roof-repair-services",
  },
  {
    id: "roof-replacement-services",
    title: "Roof Replacement",
    description:
      "Complete roof replacement with premium materials. Asphalt, tile, metal, and slate roofing options.",
    imagePath: "/images/roof-replacement.webp",
    projectsCompleted: 1234,
    category: "Roofing Services",
    categoryId: "roofing-services",
    slug: "roof-replacement-services",
  },
  {
    id: "gutter-installation-services",
    title: "Gutter Installation & Repair",
    description:
      "Professional gutter installation, cleaning, and repair services to protect your home's foundation.",
    imagePath: "/images/gutter-installation.webp",
    projectsCompleted: 3456,
    category: "Roofing Services",
    categoryId: "roofing-services",
    slug: "gutter-installation-services",
  },

  // WINDOW SERVICES
  {
    id: "energy-efficient-windows-services",
    title: "Energy-Efficient Windows",
    description:
      "Energy-efficient window installation to reduce utility costs and improve home comfort.",
    imagePath: "/images/energy-efficient-windows.webp",
    projectsCompleted: 2876,
    category: "Window Services",
    categoryId: "window-services",
    slug: "energy-efficient-windows-services",
  },
  {
    id: "window-installation-services",
    title: "Window Installation",
    description:
      "Professional window installation for new construction and home additions with precise fitting.",
    imagePath: "/images/window-installation.webp",
    projectsCompleted: 1890,
    category: "Window Services",
    categoryId: "window-services",
    slug: "window-installation-services",
  },
  {
    id: "window-repair-services",
    title: "Window Repair Services",
    description:
      "Expert window repair services for broken glass, damaged frames, and malfunctioning hardware.",
    imagePath: "/images/window-repair.webp",
    projectsCompleted: 3456,
    category: "Window Services",
    categoryId: "window-services",
    slug: "window-repair-services",
  },
  {
    id: "window-replacement-services",
    title: "Window Replacement",
    description:
      "Energy-efficient window replacement with professional installation. Vinyl, wood, and aluminum options.",
    imagePath: "/images/window-replacement.webp",
    projectsCompleted: 5678,
    category: "Window Services",
    categoryId: "window-services",
    slug: "window-replacement-services",
  },
];

// Service Categories (With HVAC and Handyman)
const serviceCategories = [
  { id: "all", name: "All Services", count: comprehensiveServices.length },
  {
    id: "hvac-services",
    name: "HVAC Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "hvac-services",
    ).length,
  },
  {
    id: "garage-door-services",
    name: "Garage Door Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "garage-door-services",
    ).length,
  },
  {
    id: "door-services",
    name: "Door Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "door-services",
    ).length,
  },
  {
    id: "handyman-services",
    name: "Handyman Services",
    count: comprehensiveServices.filter(
      (s) => s.categoryId === "handyman-services",
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

// Service Card Component (Matching Home Page Style)
interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  const handleCardClick = () => {
    window.location.href = `/services/${service.slug}`;
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:+18184536110`;
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-3xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl h-full flex flex-col cursor-pointer"
    >
      {/* Pink Top Gradient Effect */}
      <div
        className="absolute top-0 left-0 right-0 h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(215, 69, 153, 0.3) 0%, transparent 100%)",
        }}
      />

      {/* Image Section */}
      <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden flex-shrink-0">
        <Image
          src={service.imagePath}
          alt={`${service.title} service`}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col p-5 sm:p-6 lg:p-7">
        {/* Service Title */}
        <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl leading-tight mb-3 min-h-[3.5rem] flex items-center">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-grow min-h-[3rem]">
          {service.description}
        </p>

        {/* Projects Completed Badge */}
        <div className="text-sm font-bold px-4 py-2.5 rounded-full bg-pink-50 text-pink-700 mb-5 border border-pink-100 group-hover:bg-pink-100 group-hover:border-pink-200 transition-colors duration-300 text-center">
          {service.projectsCompleted.toLocaleString()} Projects Completed
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full px-4 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 text-sm font-bold transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2 hover:shadow-md whitespace-nowrap">
            View Details
            <ArrowRight className="h-4 w-4" />
          </div>

          <button
            onClick={handleGetQuote}
            className="w-full px-4 py-3 rounded-full text-white text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ backgroundColor: "#D74599" }}
          >
            Get Quote
          </button>
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
        service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || service.categoryId === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            {/* Main Heading */}
            <h1
              className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4 sm:mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              Professional Home Improvement
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                Services & Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              Transform your home with expert paver installation, window
              replacement, roofing, and exterior painting services in Los
              Angeles & Ventura County.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <a
                href="tel:+18184536110"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 hover:shadow-xl shadow-lg gap-2 sm:gap-3"
                style={{
                  backgroundColor: "#D74599",
                  color: "white",
                }}
              >
                <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
                <span>Call: (818) 453-6110</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white hover:bg-pink-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-lg gap-2 sm:gap-3 border-2"
                style={{
                  color: "#D74599",
                  borderColor: "#D74599",
                }}
              >
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                Browse Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <div
              className={`relative transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full">
                <Image
                  src="/images/professionals-services-page.webp"
                  alt="Professional home improvement service team"
                  width={2000}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority={true}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 2000px"
                />
              </div>
            </div>

            {/* Center Down Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 z-20">
              <div
                className={`rounded-full p-3 sm:p-4 shadow-lg animate-bounce transition-all duration-1000 delay-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundColor: "#D74599",
                }}
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white rotate-90" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                19+
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Service Categories
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                35K+
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Completed Projects
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Customer Satisfaction
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                13+
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                Years Experience
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8 px-4 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CheckCircle2
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <Phone
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                24/7 Available
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CheckCircle2
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Quality Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <MapPin
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: "#D74599" }}
              />
              <span className="font-medium text-xs sm:text-sm text-gray-700">
                Free Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section
        id="services"
        className={`py-12 bg-gray-50 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-base bg-white shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.id ? "#D74599" : "",
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  No Services Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try different search terms or view all services.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  Show All Services
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 max-w-[1600px] mx-auto">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg overflow-hidden max-w-3xl mx-auto min-h-[240px] sm:h-[200px] flex items-center justify-center">
              {/* Pink Gradient Effect on Top */}
              <div
                className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Ready to Transform Your Home?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl mx-auto px-2">
                  Contact our expert team today for a free consultation and
                  detailed estimate for your home improvement project.
                </p>

                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
                  <a
                    href="/locations"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                  >
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    View Service Areas
                  </a>

                  <a
                    href="tel:+18184536110"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                    style={{ backgroundColor: "#D74599" }}
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call: (818) 453-6110
                  </a>
                </div>

                {/* Info Text */}
                <div className="flex justify-center items-center">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    Available 7 Days • Free Estimates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}