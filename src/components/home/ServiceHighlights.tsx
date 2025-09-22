"use client";

import React, { memo, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";

// Service Interface
interface Service {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  features: string[];
  projectsCompleted: number;
  avgCost: string;
  category: string;
  categoryId: string;
  timeframe: string;
  slug: string;
}

// Memoized Service Card Component
const ServiceCard = memo(({ service }: { service: Service }) => {
  const handleCardClick = () => {
    window.location.href = `/services/${service.slug}`;
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl transition-all duration-300 p-6 text-center hover:shadow-lg transform hover:-translate-y-1 cursor-pointer flex flex-col justify-center items-center border border-stone-100 hover:border-stone-200"
    >
      {/* Image container */}
      <div className="relative h-36 w-36 lg:h-52 lg:w-52 mx-auto mb-4">
        <Image
          src={service.imagePath}
          alt={`${service.title} service`}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 1024px) 144px, 208px"
          loading="lazy"
        />
      </div>

      {/* Service Title */}
      <h3 className="font-semibold text-gray-900 text-base lg:text-lg leading-tight mb-2">
        {service.title}
      </h3>

      {/* Average Cost */}
      <p className="text-sm text-gray-600 mb-3">
        Starting from {service.avgCost}
      </p>

      {/* Projects Completed */}
      <div className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-gray-700">
        {service.projectsCompleted.toLocaleString()} Projects Completed
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

function ServiceHighlights() {
  // State to control the visibility of additional services
  const [isExpanded, setIsExpanded] = useState(false);

  // Services data for home services
  const services = useMemo<Service[]>(
    () => [
      // PAVER SERVICES
      {
        id: "driveway-paver-installation",
        title: "Driveway Paver Installation",
        description:
          "Transform your driveway with beautiful, durable pavers. Custom designs and professional installation.",
        imagePath: "/images/driveway-paver-installation.webp",
        features: [
          "Custom paver designs",
          "Lifetime warranty",
          "Professional installation",
          "Free design consultation",
        ],
        projectsCompleted: 2456,
        avgCost: "$12-18/sq ft",
        category: "Paver Services",
        categoryId: "paver-services",
        timeframe: "3-5 days",
        slug: "driveway-paver-installation",
      },
      {
        id: "patio-paver-installation",
        title: "Patio Paver Installation",
        description:
          "Create stunning outdoor living spaces with professional patio paver installation and design.",
        imagePath: "/images/patio-paver-installation.webp",
        features: [
          "Outdoor kitchen ready",
          "Fire pit integration",
          "Drainage solutions",
          "Seating wall options",
        ],
        projectsCompleted: 3234,
        avgCost: "$15-25/sq ft",
        category: "Paver Services",
        categoryId: "paver-services",
        timeframe: "4-7 days",
        slug: "patio-paver-installation",
      },
      {
        id: "pool-deck-pavers",
        title: "Pool Deck Pavers",
        description:
          "Slip-resistant pool deck pavers that stay cool and provide safety around your swimming pool.",
        imagePath: "/images/pool-deck-pavers.webp",
        features: [
          "Slip-resistant surface",
          "Cool-touch technology",
          "Pool equipment access",
          "Coping integration",
        ],
        projectsCompleted: 1567,
        avgCost: "$18-28/sq ft",
        category: "Paver Services",
        categoryId: "paver-services",
        timeframe: "5-8 days",
        slug: "pool-deck-pavers",
      },
      {
        id: "paver-repair-restoration",
        title: "Paver Repair & Restoration",
        description:
          "Restore and repair existing paver surfaces. Re-sanding, sealing, and replacement services.",
        imagePath: "/images/paver-repair-restoration.webp",
        features: [
          "Joint sand replacement",
          "Paver sealing service",
          "Individual paver replacement",
          "Leveling and re-setting",
        ],
        projectsCompleted: 4321,
        avgCost: "$8-15/sq ft",
        category: "Paver Services",
        categoryId: "paver-services",
        timeframe: "1-3 days",
        slug: "paver-repair-restoration",
      },

      // WINDOW SERVICES
      {
        id: "window-replacement",
        title: "Window Replacement",
        description:
          "Energy-efficient window replacement with professional installation. Vinyl, wood, and aluminum options.",
        imagePath: "/images/window-replacement.webp",
        features: [
          "Energy star certified",
          "Double & triple pane",
          "Lifetime warranty",
          "Professional installation",
        ],
        projectsCompleted: 5678,
        avgCost: "$450-850 per window",
        category: "Window Services",
        categoryId: "window-services",
        timeframe: "1-2 days",
        slug: "window-replacement",
      },
      {
        id: "historic-window-restoration",
        title: "Historic Window Restoration",
        description:
          "Preserve the character of historic homes with professional window restoration and repair services.",
        imagePath: "/images/historic-window-restoration.webp",
        features: [
          "Period-accurate materials",
          "Wood frame restoration",
          "Original hardware preservation",
          "Energy efficiency upgrades",
        ],
        projectsCompleted: 987,
        avgCost: "$800-1500 per window",
        category: "Window Services",
        categoryId: "window-services",
        timeframe: "2-4 days",
        slug: "historic-window-restoration",
      },
      {
        id: "storm-window-installation",
        title: "Storm Window Installation",
        description:
          "Protect your windows and increase energy efficiency with custom storm window installation.",
        imagePath: "/images/storm-window-installation.webp",
        features: [
          "Custom measurements",
          "Aluminum construction",
          "Low-E glass coating",
          "Easy seasonal removal",
        ],
        projectsCompleted: 2345,
        avgCost: "$150-300 per window",
        category: "Window Services",
        categoryId: "window-services",
        timeframe: "1 day",
        slug: "storm-window-installation",
      },
      {
        id: "commercial-window-services",
        title: "Commercial Window Services",
        description:
          "Professional commercial window installation, replacement, and repair for businesses and office buildings.",
        imagePath: "/images/commercial-window-services.webp",
        features: [
          "Storefront windows",
          "Office building glazing",
          "Energy efficiency focus",
          "Minimal business disruption",
        ],
        projectsCompleted: 876,
        avgCost: "$200-600 per window",
        category: "Window Services",
        categoryId: "window-services",
        timeframe: "1-3 days",
        slug: "commercial-window-services",
      },

      // ROOFING SERVICES
      {
        id: "roof-repair",
        title: "Roof Repair Services",
        description:
          "Professional roof leak repair, shingle replacement, and emergency roofing services available 24/7.",
        imagePath: "/images/roof-repair-services.webp",
        features: [
          "24/7 emergency service",
          "Leak detection & repair",
          "Shingle replacement",
          "10-year warranty",
        ],
        projectsCompleted: 4567,
        avgCost: "$300-1200 per repair",
        category: "Roofing Services",
        categoryId: "roofing-services",
        timeframe: "1-2 days",
        slug: "roof-repair",
      },
      {
        id: "roof-replacement",
        title: "Roof Replacement",
        description:
          "Complete roof replacement with premium materials. Asphalt, tile, metal, and slate roofing options.",
        imagePath: "/images/roof-replacement.webp",
        features: [
          "Premium roofing materials",
          "Full tear-off service",
          "25-year warranty",
          "Insurance claim assistance",
        ],
        projectsCompleted: 1234,
        avgCost: "$8000-25000",
        category: "Roofing Services",
        categoryId: "roofing-services",
        timeframe: "2-5 days",
        slug: "roof-replacement",
      },
      {
        id: "commercial-roofing",
        title: "Commercial Roofing",
        description:
          "Professional commercial roofing services for flat roofs, TPO, EPDM, and modified bitumen systems.",
        imagePath: "/images/commercial-roofing.webp",
        features: [
          "Flat roof specialists",
          "TPO & EPDM systems",
          "Roof coating services",
          "Preventive maintenance",
        ],
        projectsCompleted: 543,
        avgCost: "$5-15/sq ft",
        category: "Roofing Services",
        categoryId: "roofing-services",
        timeframe: "3-10 days",
        slug: "commercial-roofing",
      },
      {
        id: "gutter-installation",
        title: "Gutter Installation & Repair",
        description:
          "Professional gutter installation, cleaning, and repair services to protect your home's foundation.",
        imagePath: "/images/gutter-installation.webp",
        features: [
          "Seamless aluminum gutters",
          "Leaf guard installation",
          "Downspout extensions",
          "Professional cleaning",
        ],
        projectsCompleted: 3456,
        avgCost: "$6-12 per linear ft",
        category: "Roofing Services",
        categoryId: "roofing-services",
        timeframe: "1-2 days",
        slug: "gutter-installation",
      },

      // EXTERIOR PAINTING SERVICES
      {
        id: "exterior-house-painting",
        title: "Exterior House Painting",
        description:
          "Professional residential exterior painting with premium paints and expert color consultation.",
        imagePath: "/images/exterior-house-painting.webp",
        features: [
          "Premium paint brands",
          "Color consultation included",
          "Surface preparation",
          "7-year warranty",
        ],
        projectsCompleted: 6789,
        avgCost: "$3500-8500",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        timeframe: "4-8 days",
        slug: "exterior-house-painting",
      },
      {
        id: "commercial-exterior-painting",
        title: "Commercial Exterior Painting",
        description:
          "Professional commercial painting services for offices, retail stores, and industrial buildings.",
        imagePath: "/images/commercial-exterior-painting.webp",
        features: [
          "Minimal business disruption",
          "Industrial grade coatings",
          "Power washing included",
          "Maintenance programs",
        ],
        projectsCompleted: 987,
        avgCost: "$2-6/sq ft",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        timeframe: "3-10 days",
        slug: "commercial-exterior-painting",
      },
      {
        id: "fence-deck-staining",
        title: "Fence & Deck Staining",
        description:
          "Protect and beautify your wooden fences and decks with professional staining and sealing services.",
        imagePath: "/images/fence-deck-staining.webp",
        features: [
          "Weather protection",
          "UV resistant stains",
          "Power washing prep",
          "Annual maintenance",
        ],
        projectsCompleted: 2345,
        avgCost: "$2-5/sq ft",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        timeframe: "2-4 days",
        slug: "fence-deck-staining",
      },
      {
        id: "stucco-painting-repair",
        title: "Stucco Painting & Repair",
        description:
          "Specialized stucco painting and crack repair services for Los Angeles area homes.",
        imagePath: "/images/stucco-painting-repair.webp",
        features: [
          "Crack repair expertise",
          "Elastomeric coatings",
          "Color matching service",
          "Waterproof sealing",
        ],
        projectsCompleted: 1876,
        avgCost: "$4-8/sq ft",
        category: "Exterior Painting",
        categoryId: "exterior-painting",
        timeframe: "3-6 days",
        slug: "stucco-painting-repair",
      },
    ],
    [],
  );

  // Determine which services to display based on the 'isExpanded' state
  const displayedServices = useMemo(
    () => (isExpanded ? services : services.slice(0, 8)),
    [isExpanded, services],
  );

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Main Title */}
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Complete Home Improvement Services
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transform your home with our professional paver, window, roofing,
            and painting services in Los Angeles & Ventura County.
          </p>
        </div>

        {/* Services Grid - 4 columns on medium+ screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* "Show More/Show Less" Button */}
        <div className="text-center mb-16">
          {services.length > 8 && (
            <button
              className="inline-flex items-center bg-stone-50 hover:bg-stone-100 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors duration-200 border border-stone-200"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Show Less Services
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4 mr-2" />
                  Show More Services
                </>
              )}
            </button>
          )}
        </div>

        {/* Single CTA Section */}
        <div className="text-center">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a free estimate for your project. Our expert team is here to
              help you select the perfect solution for your home improvement
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border border-stone-200 text-gray-700"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+18184536110"
                className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "#D74599",
                }}
              >
                <Phone className="h-5 w-5" />
                Call Now: (818) 453-6110
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ServiceHighlights };
export default ServiceHighlights;
