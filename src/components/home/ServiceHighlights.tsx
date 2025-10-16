"use client";

import React, { memo, useMemo } from "react";
import { ArrowRight } from "lucide-react";
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  // Services data - Only 6 main services
  const services = useMemo<Service[]>(
    () => [
      // ROOFING SERVICES
      {
        id: "roof-repair",
        title: "Roofing Services",
        description:
          "Expert roof leak repair and shingle replacement. Emergency service available 24/7 for urgent issues.",
        imagePath: "/images/roof-repair-services.webp",
        projectsCompleted: 1320,
        category: "Roofing Services",
        slug: "roof-repair-services",
      },

      // WINDOW SERVICES
      {
        id: "window-replacement",
        title: "Window Services",
        description:
          "Energy-efficient window replacement. Lower bills, improve comfort. Quality vinyl and wood options.",
        imagePath: "/images/window-replacement.webp",
        projectsCompleted: 1650,
        category: "Window Services",
        slug: "window-replacement-services",
      },

      // HVAC SERVICES
      {
        id: "hvac-services",
        title: "HVAC Services",
        description:
          "Professional heating and cooling services with same day estimates. Reliable repairs, maintenance, and installations.",
        imagePath: "/images/hvac-services.webp",
        projectsCompleted: 2145,
        category: "HVAC Services",
        slug: "hvac-services",
      },

      // HANDYMAN SERVICES
      {
        id: "handyman-services",
        title: "Handyman Services",
        description:
          "Fast and reliable handyman services for home repairs and upgrades. Fix leaks, install hardware, and handle small repairs.",
        imagePath: "/images/handyman-services.webp",
        projectsCompleted: 3421,
        category: "Handyman Services",
        slug: "handyman-services",
      },

      // DOORS AND GATES
      {
        id: "doors-gates-services",
        title: "Doors and Gates",
        description:
          "Professional door and gate installation, repair, and maintenance. Interior, exterior, and security solutions.",
        imagePath: "/images/door-installation.webp",
        projectsCompleted: 1285,
        category: "Door Services",
        slug: "door-installation-services",
      },

      // GARAGE DOORS
      {
        id: "garage-door-services",
        title: "Garage Doors",
        description:
          "Complete garage door services including installation, repair, and opener replacement. Same-day service available.",
        imagePath: "/images/garage-door-services.webp",
        projectsCompleted: 1567,
        category: "Garage Door Services",
        slug: "garage-door-services",
      },
    ],
    [],
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

        {/* Services Grid - 6 services in 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10 sm:mb-12 lg:mb-16 max-w-[1600px] mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Box with Button */}
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

              {/* View All Services Button */}
              <div className="flex justify-center">
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