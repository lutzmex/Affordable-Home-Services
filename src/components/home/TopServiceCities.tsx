"use client";

import React from "react";
import {
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
} from "lucide-react";

interface ServiceCity {
  id: number;
  name: string;
  tagline: string;
  ctaLink: string;
  completedProjects: number;
}

export function TopServiceCities() {
  const topCities: ServiceCity[] = [
    {
      id: 1,
      name: "Los Angeles",
      tagline: "Trusted home services in LA",
      ctaLink: "/locations/los-angeles",
      completedProjects: 420,
    },
    {
      id: 2,
      name: "San Fernando Valley",
      tagline: "Quality service across the Valley",
      ctaLink: "/locations/san-fernando-valley",
      completedProjects: 285,
    },
    {
      id: 3,
      name: "Pasadena",
      tagline: "Reliable home improvement",
      ctaLink: "/locations/pasadena",
      completedProjects: 245,
    },
    {
      id: 4,
      name: "Glendale",
      tagline: "Expert handyman services",
      ctaLink: "/locations/glendale",
      completedProjects: 210,
    },
    {
      id: 5,
      name: "Santa Clarita",
      tagline: "Professional home repairs",
      ctaLink: "/locations/santa-clarita",
      completedProjects: 175,
    },
    {
      id: 6,
      name: "Long Beach",
      tagline: "Affordable home solutions",
      ctaLink: "/locations/long-beach",
      completedProjects: 190,
    },
    {
      id: 7,
      name: "Burbank",
      tagline: "Quality work, fair prices",
      ctaLink: "/locations/burbank",
      completedProjects: 225,
    },
    {
      id: 8,
      name: "Torrance",
      tagline: "South Bay home experts",
      ctaLink: "/locations/torrance",
      completedProjects: 165,
    },
    {
      id: 9,
      name: "Thousand Oaks",
      tagline: "Ventura County specialists",
      ctaLink: "/locations/thousand-oaks",
      completedProjects: 195,
    },
    {
      id: 10,
      name: "Simi Valley",
      tagline: "Dependable home services",
      ctaLink: "/locations/simi-valley",
      completedProjects: 155,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-pink-50 text-pink-700 px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-pink-100">
            <Building2 className="h-5 w-5 mr-2" />
            Serving LA & Ventura County
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Home Services in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              Your Community
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Affordable handyman services available throughout Los Angeles and Ventura County. Call us for pavers, windows, roofing, and painting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-10 sm:mb-12 max-w-[1400px] mx-auto">
          {topCities.map((city) => (
            <a
              key={city.id}
              href={city.ctaLink}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:shadow-xl overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215, 69, 153, 0.3) 0%, transparent 100%)",
                }}
              />

              <div className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-50 p-3 rounded-xl group-hover:bg-pink-100 transition-colors duration-300 border border-pink-100">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {city.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                  {city.tagline}
                </p>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    {city.completedProjects.toLocaleString()} completed
                  </span>
                </div>

                <div className="flex items-center justify-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
                  Get Service
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="relative bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-lg overflow-hidden max-w-3xl mx-auto h-[200px] flex items-center justify-center">
            <div
              className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
              }}
            />

            <div className="relative w-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Ready to Improve Your Home?
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                Get quality home improvement services in your neighborhood. Licensed, insured, and ready to help with your project.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="/service-areas"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  View All Areas
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:+18184536110"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  <Phone className="h-4 w-4" />
                  Call: (818) 453-6110
                </a>
              </div>

              <div className="flex justify-center items-center mt-3">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  Available 7 Days • Free Estimates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopServiceCities;