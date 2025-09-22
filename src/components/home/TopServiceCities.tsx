"use client";

import React, { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Globe,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ServiceCity {
  id: number;
  name: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  state: string;
  completedProjects: number;
  certificationLevel: "Standard" | "Premium" | "Elite";
  emergencyAvailable: boolean;
}

export function TopServiceCities() {
  const [showAll, setShowAll] = useState(false);

  // Major US cities and metropolitan areas for home improvement services
  const allCities: ServiceCity[] = [
    {
      id: 1,
      name: "Los Angeles",
      state: "CA",
      tagline: "Premier home improvement services in the City of Angels",
      ctaText: "Get Quote in Los Angeles",
      ctaLink: "/locations/los-angeles",
      completedProjects: 25680,
      certificationLevel: "Elite",
      emergencyAvailable: true,
    },
    {
      id: 2,
      name: "San Francisco",
      state: "CA",
      tagline: "Victorian home restoration and modern upgrades",
      ctaText: "Get Quote in San Francisco",
      ctaLink: "/locations/san-francisco",
      completedProjects: 18790,
      certificationLevel: "Elite",
      emergencyAvailable: true,
    },
    {
      id: 3,
      name: "San Diego",
      state: "CA",
      tagline: "Coastal home improvement specialists",
      ctaText: "Get Quote in San Diego",
      ctaLink: "/locations/san-diego",
      completedProjects: 16234,
      certificationLevel: "Elite",
      emergencyAvailable: true,
    },
    {
      id: 4,
      name: "San Jose",
      state: "CA",
      tagline: "Silicon Valley home improvement experts",
      ctaText: "Get Quote in San Jose",
      ctaLink: "/locations/san-jose",
      completedProjects: 14987,
      certificationLevel: "Elite",
      emergencyAvailable: true,
    },
    {
      id: 5,
      name: "Sacramento",
      state: "CA",
      tagline: "Capital city home improvement excellence",
      ctaText: "Get Quote in Sacramento",
      ctaLink: "/locations/sacramento",
      completedProjects: 12876,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 6,
      name: "Fresno",
      state: "CA",
      tagline: "Central Valley home improvement services",
      ctaText: "Get Quote in Fresno",
      ctaLink: "/locations/fresno",
      completedProjects: 9432,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 7,
      name: "Long Beach",
      state: "CA",
      tagline: "Coastal California home improvement",
      ctaText: "Get Quote in Long Beach",
      ctaLink: "/locations/long-beach",
      completedProjects: 11654,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 8,
      name: "Oakland",
      state: "CA",
      tagline: "East Bay home improvement solutions",
      ctaText: "Get Quote in Oakland",
      ctaLink: "/locations/oakland",
      completedProjects: 10234,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 9,
      name: "Bakersfield",
      state: "CA",
      tagline: "Kern County home improvement specialists",
      ctaText: "Get Quote in Bakersfield",
      ctaLink: "/locations/bakersfield",
      completedProjects: 7890,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 10,
      name: "Anaheim",
      state: "CA",
      tagline: "Orange County home improvement experts",
      ctaText: "Get Quote in Anaheim",
      ctaLink: "/locations/anaheim",
      completedProjects: 9876,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 11,
      name: "Santa Ana",
      state: "CA",
      tagline: "Heart of Orange County home services",
      ctaText: "Get Quote in Santa Ana",
      ctaLink: "/locations/santa-ana",
      completedProjects: 8765,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 12,
      name: "Riverside",
      state: "CA",
      tagline: "Inland Empire home improvement solutions",
      ctaText: "Get Quote in Riverside",
      ctaLink: "/locations/riverside",
      completedProjects: 8234,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 13,
      name: "Stockton",
      state: "CA",
      tagline: "Central Valley home improvement services",
      ctaText: "Get Quote in Stockton",
      ctaLink: "/locations/stockton",
      completedProjects: 6543,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 14,
      name: "Irvine",
      state: "CA",
      tagline: "Planned community home improvement",
      ctaText: "Get Quote in Irvine",
      ctaLink: "/locations/irvine",
      completedProjects: 9123,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 15,
      name: "Chula Vista",
      state: "CA",
      tagline: "South Bay home improvement specialists",
      ctaText: "Get Quote in Chula Vista",
      ctaLink: "/locations/chula-vista",
      completedProjects: 7654,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 16,
      name: "Fremont",
      state: "CA",
      tagline: "East Bay community home services",
      ctaText: "Get Quote in Fremont",
      ctaLink: "/locations/fremont",
      completedProjects: 6789,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 17,
      name: "San Bernardino",
      state: "CA",
      tagline: "Inland Empire home improvement",
      ctaText: "Get Quote in San Bernardino",
      ctaLink: "/locations/san-bernardino",
      completedProjects: 5432,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 18,
      name: "Modesto",
      state: "CA",
      tagline: "Central Valley home solutions",
      ctaText: "Get Quote in Modesto",
      ctaLink: "/locations/modesto",
      completedProjects: 4876,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 19,
      name: "Fontana",
      state: "CA",
      tagline: "San Bernardino County home services",
      ctaText: "Get Quote in Fontana",
      ctaLink: "/locations/fontana",
      completedProjects: 5234,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 20,
      name: "Oxnard",
      state: "CA",
      tagline: "Ventura County coastal home improvement",
      ctaText: "Get Quote in Oxnard",
      ctaLink: "/locations/oxnard",
      completedProjects: 4321,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 21,
      name: "Moreno Valley",
      state: "CA",
      tagline: "Riverside County home specialists",
      ctaText: "Get Quote in Moreno Valley",
      ctaLink: "/locations/moreno-valley",
      completedProjects: 4567,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 22,
      name: "Huntington Beach",
      state: "CA",
      tagline: "Surf City home improvement experts",
      ctaText: "Get Quote in Huntington Beach",
      ctaLink: "/locations/huntington-beach",
      completedProjects: 6890,
      certificationLevel: "Premium",
      emergencyAvailable: true,
    },
    {
      id: 23,
      name: "Glendale",
      state: "CA",
      tagline: "San Fernando Valley home services",
      ctaText: "Get Quote in Glendale",
      ctaLink: "/locations/glendale",
      completedProjects: 6123,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 24,
      name: "Santa Clarita",
      state: "CA",
      tagline: "Valencia home improvement solutions",
      ctaText: "Get Quote in Santa Clarita",
      ctaLink: "/locations/santa-clarita",
      completedProjects: 5678,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 25,
      name: "Garden Grove",
      state: "CA",
      tagline: "Orange County home improvement",
      ctaText: "Get Quote in Garden Grove",
      ctaLink: "/locations/garden-grove",
      completedProjects: 5432,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 26,
      name: "Oceanside",
      state: "CA",
      tagline: "North County San Diego home services",
      ctaText: "Get Quote in Oceanside",
      ctaLink: "/locations/oceanside",
      completedProjects: 4987,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 27,
      name: "Rancho Cucamonga",
      state: "CA",
      tagline: "Inland Empire home improvement",
      ctaText: "Get Quote in Rancho Cucamonga",
      ctaLink: "/locations/rancho-cucamonga",
      completedProjects: 5234,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 28,
      name: "Santa Rosa",
      state: "CA",
      tagline: "Wine Country home improvement",
      ctaText: "Get Quote in Santa Rosa",
      ctaLink: "/locations/santa-rosa",
      completedProjects: 4765,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 29,
      name: "Ontario",
      state: "CA",
      tagline: "San Bernardino County home services",
      ctaText: "Get Quote in Ontario",
      ctaLink: "/locations/ontario",
      completedProjects: 4321,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 30,
      name: "Lancaster",
      state: "CA",
      tagline: "Antelope Valley home improvement",
      ctaText: "Get Quote in Lancaster",
      ctaLink: "/locations/lancaster",
      completedProjects: 3876,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
    {
      id: 31,
      name: "Elk Grove",
      state: "CA",
      tagline: "Sacramento County home services",
      ctaText: "Get Quote in Elk Grove",
      ctaLink: "/locations/elk-grove",
      completedProjects: 4123,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 32,
      name: "Palmdale",
      state: "CA",
      tagline: "High Desert home improvement",
      ctaText: "Get Quote in Palmdale",
      ctaLink: "/locations/palmdale",
      completedProjects: 3654,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
    {
      id: 33,
      name: "Corona",
      state: "CA",
      tagline: "Riverside County home specialists",
      ctaText: "Get Quote in Corona",
      ctaLink: "/locations/corona",
      completedProjects: 4456,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 34,
      name: "Salinas",
      state: "CA",
      tagline: "Monterey County home improvement",
      ctaText: "Get Quote in Salinas",
      ctaLink: "/locations/salinas",
      completedProjects: 3789,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 35,
      name: "Pomona",
      state: "CA",
      tagline: "San Gabriel Valley home services",
      ctaText: "Get Quote in Pomona",
      ctaLink: "/locations/pomona",
      completedProjects: 3567,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 36,
      name: "Hayward",
      state: "CA",
      tagline: "East Bay home improvement solutions",
      ctaText: "Get Quote in Hayward",
      ctaLink: "/locations/hayward",
      completedProjects: 4234,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 37,
      name: "Escondido",
      state: "CA",
      tagline: "North County San Diego home services",
      ctaText: "Get Quote in Escondido",
      ctaLink: "/locations/escondido",
      completedProjects: 3890,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 38,
      name: "Torrance",
      state: "CA",
      tagline: "South Bay home improvement experts",
      ctaText: "Get Quote in Torrance",
      ctaLink: "/locations/torrance",
      completedProjects: 4567,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 39,
      name: "Sunnyvale",
      state: "CA",
      tagline: "Silicon Valley home solutions",
      ctaText: "Get Quote in Sunnyvale",
      ctaLink: "/locations/sunnyvale",
      completedProjects: 5123,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 40,
      name: "Orange",
      state: "CA",
      tagline: "Orange County home improvement",
      ctaText: "Get Quote in Orange",
      ctaLink: "/locations/orange",
      completedProjects: 4321,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 41,
      name: "Fullerton",
      state: "CA",
      tagline: "North Orange County home services",
      ctaText: "Get Quote in Fullerton",
      ctaLink: "/locations/fullerton",
      completedProjects: 4089,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 42,
      name: "Pasadena",
      state: "CA",
      tagline: "San Gabriel Valley home improvement",
      ctaText: "Get Quote in Pasadena",
      ctaLink: "/locations/pasadena",
      completedProjects: 4765,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 43,
      name: "Thousand Oaks",
      state: "CA",
      tagline: "Ventura County home specialists",
      ctaText: "Get Quote in Thousand Oaks",
      ctaLink: "/locations/thousand-oaks",
      completedProjects: 3654,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 44,
      name: "Visalia",
      state: "CA",
      tagline: "Central Valley home improvement",
      ctaText: "Get Quote in Visalia",
      ctaLink: "/locations/visalia",
      completedProjects: 2987,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
    {
      id: 45,
      name: "Simi Valley",
      state: "CA",
      tagline: "Ventura County home solutions",
      ctaText: "Get Quote in Simi Valley",
      ctaLink: "/locations/simi-valley",
      completedProjects: 3234,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 46,
      name: "Concord",
      state: "CA",
      tagline: "East Bay home improvement services",
      ctaText: "Get Quote in Concord",
      ctaLink: "/locations/concord",
      completedProjects: 3567,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 47,
      name: "Roseville",
      state: "CA",
      tagline: "Placer County home specialists",
      ctaText: "Get Quote in Roseville",
      ctaLink: "/locations/roseville",
      completedProjects: 3890,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 48,
      name: "Santa Clara",
      state: "CA",
      tagline: "Silicon Valley home improvement",
      ctaText: "Get Quote in Santa Clara",
      ctaLink: "/locations/santa-clara",
      completedProjects: 3765,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 49,
      name: "Vallejo",
      state: "CA",
      tagline: "Solano County home services",
      ctaText: "Get Quote in Vallejo",
      ctaLink: "/locations/vallejo",
      completedProjects: 2876,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
    {
      id: 50,
      name: "Victorville",
      state: "CA",
      tagline: "High Desert home improvement",
      ctaText: "Get Quote in Victorville",
      ctaLink: "/locations/victorville",
      completedProjects: 2543,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
    {
      id: 51,
      name: "Berkeley",
      state: "CA",
      tagline: "East Bay premium home services",
      ctaText: "Get Quote in Berkeley",
      ctaLink: "/locations/berkeley",
      completedProjects: 3456,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 52,
      name: "Costa Mesa",
      state: "CA",
      tagline: "Orange County home improvement",
      ctaText: "Get Quote in Costa Mesa",
      ctaLink: "/locations/costa-mesa",
      completedProjects: 3789,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 53,
      name: "Downey",
      state: "CA",
      tagline: "Southeast LA County home services",
      ctaText: "Get Quote in Downey",
      ctaLink: "/locations/downey",
      completedProjects: 3234,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 54,
      name: "Inglewood",
      state: "CA",
      tagline: "South LA home improvement specialists",
      ctaText: "Get Quote in Inglewood",
      ctaLink: "/locations/inglewood",
      completedProjects: 2987,
      certificationLevel: "Standard",
      emergencyAvailable: true,
    },
    {
      id: 55,
      name: "West Covina",
      state: "CA",
      tagline: "San Gabriel Valley home solutions",
      ctaText: "Get Quote in West Covina",
      ctaLink: "/locations/west-covina",
      completedProjects: 2765,
      certificationLevel: "Standard",
      emergencyAvailable: false,
    },
  ];

  // Show only first 20 cities initially
  const displayedCities = showAll ? allCities : allCities.slice(0, 20);

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-stone-100 text-gray-700 px-6 py-3 rounded-full font-medium text-sm mb-6">
            <Globe className="h-5 w-5 mr-2" />
            Serving Major Cities Nationwide
          </div>
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6">
            Professional Home Services
            <span className="block text-gray-700">Across America</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            From coast to coast, our expert teams provide quality paver
            installation, window replacement, roofing services, and exterior
            painting with professional results and reliable service.
          </p>
        </div>

        {/* Cities Grid - Responsive */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
            {displayedCities.map((city) => (
              <a
                key={city.id}
                href={city.ctaLink}
                className="group text-center py-4 px-2 cursor-pointer hover:bg-stone-50 rounded-lg transition-all duration-300 border border-transparent hover:border-stone-200"
              >
                <MapPin className="h-6 w-6 text-gray-600 mx-auto mb-2 group-hover:text-gray-800 transition-colors" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700 transition-colors leading-tight">
                  {city.name}
                </h4>
                <div className="text-xs text-gray-500">{city.state}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {city.completedProjects.toLocaleString()} projects
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Show More/Less Button */}
        {allCities.length > 20 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 bg-stone-50 text-gray-700 hover:bg-stone-100 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 border border-stone-200"
            >
              {showAll ? (
                <>
                  Show Fewer Cities
                  <ChevronUp className="h-5 w-5" />
                </>
              ) : (
                <>
                  View All {allCities.length} Cities
                  <ChevronDown className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Single CTA Box */}
        <div className="text-center">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert home improvement services in your area with
              professional installation, quality materials, and reliable
              warranties.
            </p>
            <a
              href="tel:+18184536110"
              className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: "#D74599",
              }}
            >
              <Phone className="h-5 w-5" />
              Call Us Now: (818) 453-6110
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
