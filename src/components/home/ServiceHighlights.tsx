"use client";

import React, { memo, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";

// Service Interface
interface Service {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  projectsCompleted: number;
  category: string;
  slug: string;
}

// Memoized Service Card Component
const ServiceCard = memo(({ service }: { service: Service }) => {
  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `/services/${service.slug}`;
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:+18184536110`;
  };

  return (
    <div className="group relative bg-white rounded-3xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl h-full flex flex-col">
      {/* Pink Top Gradient Effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(215, 69, 153, 0.3) 0%, transparent 100%)",
        }}
      />

      {/* Image Section - Full Size */}
      <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden flex-shrink-0">
        <Image
          src={service.imagePath}
          alt={`${service.title} in Los Angeles and Ventura County`}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        
        {/* Optional: Text Overlay on Image */}
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
          {service.projectsCompleted.toLocaleString()} Happy Customers
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleViewDetails}
            className="w-full px-4 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 text-sm font-bold transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2 hover:shadow-md whitespace-nowrap"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button
            onClick={handleGetQuote}
            className="w-full px-4 py-3 rounded-full text-white text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ backgroundColor: "#D74599" }}
          >
            Free Quote
          </button>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

function ServiceHighlights() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Services data (excluding Commercial services)
  const services = useMemo<Service[]>(
    () => [
      // PAVER SERVICES
      {
        id: "driveway-paver-installation",
        title: "Driveway Paver Installation",
        description:
          "Beautiful, durable driveway pavers that boost curb appeal. Expert installation with quality materials.",
        imagePath: "/images/driveway-paver-installation.webp",
        projectsCompleted: 780,
        category: "Paver Services",
        slug: "driveway-pavers-services",
      },
      {
        id: "patio-paver-installation",
        title: "Patio Paver Installation",
        description:
          "Create your dream outdoor living space with custom patio pavers. Professional design and installation.",
        imagePath: "/images/patio-paver-installation.webp",
        projectsCompleted: 920,
        category: "Paver Services",
        slug: "patio-pavers-services",
      },
      {
        id: "pool-deck-pavers",
        title: "Pool Deck Pavers",
        description:
          "Safe, slip-resistant pool deck pavers that stay cool. Transform your pool area with style.",
        imagePath: "/images/pool-deck-pavers.webp",
        projectsCompleted: 445,
        category: "Paver Services",
        slug: "pool-deck-pavers-services",
      },
      {
        id: "paver-repair-restoration",
        title: "Paver Repair & Restoration",
        description:
          "Restore your existing pavers to like-new condition. Replacement, re-leveling, and sealing services.",
        imagePath: "/images/paver-repair-restoration.webp",
        projectsCompleted: 1240,
        category: "Paver Services",
        slug: "paver-repair-services",
      },

      // WINDOW SERVICES
      {
        id: "window-replacement",
        title: "Window Replacement",
        description:
          "Energy-efficient window replacement. Lower bills, improve comfort. Quality vinyl and wood options.",
        imagePath: "/images/window-replacement.webp",
        projectsCompleted: 1650,
        category: "Window Services",
        slug: "window-replacement-services",
      },
      {
        id: "window-installation",
        title: "New Window Installation",
        description:
          "Professional window installation for new construction and additions. Precise fitting, proper sealing.",
        imagePath: "/images/window-installation.webp",
        projectsCompleted: 540,
        category: "Window Services",
        slug: "window-installation-services",
      },
      {
        id: "window-repair",
        title: "Window Repair Services",
        description:
          "Fast window repair for broken glass, damaged frames, and hardware issues. Same-day service available.",
        imagePath: "/images/window-repair.webp",
        projectsCompleted: 980,
        category: "Window Services",
        slug: "window-repair-services",
      },
      {
        id: "energy-efficient-windows",
        title: "Energy-Efficient Windows",
        description:
          "Cut energy costs with modern, efficient windows. Double-pane, Low-E glass options available.",
        imagePath: "/images/energy-efficient-windows.webp",
        projectsCompleted: 825,
        category: "Window Services",
        slug: "energy-efficient-windows-services",
      },

      // ROOFING SERVICES
      {
        id: "roof-repair",
        title: "Roof Repair Services",
        description:
          "Expert roof leak repair and shingle replacement. Emergency service available 24/7 for urgent issues.",
        imagePath: "/images/roof-repair-services.webp",
        projectsCompleted: 1320,
        category: "Roofing Services",
        slug: "roof-repair-services",
      },
      {
        id: "roof-replacement",
        title: "Complete Roof Replacement",
        description:
          "Quality roof replacement with premium materials. Asphalt, tile, and metal roofing options.",
        imagePath: "/images/roof-replacement.webp",
        projectsCompleted: 365,
        category: "Roofing Services",
        slug: "roof-replacement-services",
      },
      {
        id: "gutter-installation",
        title: "Gutter Installation & Repair",
        description:
          "Protect your home with quality gutters. Installation, cleaning, and repair services available.",
        imagePath: "/images/gutter-installation.webp",
        projectsCompleted: 990,
        category: "Roofing Services",
        slug: "gutter-installation-services",
      },
      {
        id: "flat-roof-contractors",
        title: "Flat Roof Services",
        description:
          "Specialized flat roof installation and repair. Commercial and residential flat roofing experts.",
        imagePath: "/images/flat-roofing.webp",
        projectsCompleted: 185,
        category: "Roofing Services",
        slug: "flat-roof-contractors-services",
      },

      // EXTERIOR PAINTING SERVICES
      {
        id: "exterior-house-painting",
        title: "Exterior House Painting",
        description:
          "Professional exterior painting that lasts. Premium paints, expert prep work, beautiful results.",
        imagePath: "/images/exterior-house-painting.webp",
        projectsCompleted: 1890,
        category: "Exterior Painting",
        slug: "exterior-painting-services",
      },
      {
        id: "exterior-paint-preparation",
        title: "Exterior Paint Prep",
        description:
          "Thorough surface preparation for lasting results. Power washing, scraping, priming, and repairs.",
        imagePath: "/images/stucco-painting-repair.webp",
        projectsCompleted: 615,
        category: "Exterior Painting",
        slug: "exterior-paint-preparation-services",
      },
      {
        id: "fence-painting",
        title: "Fence & Deck Staining",
        description:
          "Protect and beautify your fence and deck. Quality staining and painting for wood surfaces.",
        imagePath: "/images/fence-deck-staining.webp",
        projectsCompleted: 535,
        category: "Exterior Painting",
        slug: "fence-painting-services",
      },
    ],
    [],
  );

  // Show only first 8 services initially
  const displayedServices = useMemo(
    () => (isExpanded ? services : services.slice(0, 8)),
    [isExpanded, services],
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Our Home Improvement Services
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Quality handyman services for your home. Pavers, windows, roofing, and painting throughout Los Angeles & Ventura County.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 mb-10 sm:mb-12 lg:mb-16 max-w-[1600px] mx-auto">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Box with Buttons */}
        <div className="text-center">
          <div className="relative bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-lg overflow-hidden max-w-3xl mx-auto h-[200px] flex items-center justify-center">
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
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Need a Different Service?
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                Explore our complete range of affordable home services. From minor repairs to major renovations, we've got you covered.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {/* Show More/Less Button */}
                {services.length > 8 && (
                  <button
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? (
                      <>
                        <ArrowUp className="h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ArrowDown className="h-4 w-4" />
                        View More Services
                      </>
                    )}
                  </button>
                )}

                {/* View All Services Button */}
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  All Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ServiceHighlights };
export default ServiceHighlights;