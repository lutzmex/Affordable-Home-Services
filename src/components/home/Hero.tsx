"use client";

import React, { memo } from "react";
import { Phone, Calendar, Award, Truck, Star, Clock } from "lucide-react";
import Image from "next/image";

export const Hero = memo(() => {
  const handleCallClick = () => {
    window.location.href = "tel:+18184536110";
  };

  const handleQuoteClick = () => {
    // Add your quote form logic here
    console.log("Get Free Quote clicked");
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Main Title */}
            <h1
              className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight mb-4 sm:mb-6 lg:mb-8"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Affordable Home Services | Pavers, Windows, Roofing & Exterior
              Painting in Los Angeles
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              Transform your home with professional paver installation, window
              replacement, roofing repair, and exterior painting services.
              Licensed, insured, and serving Los Angeles & Ventura County with
              quality craftsmanship since 2010.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center hover:bg-opacity-90 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-4 rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-sm gap-2 sm:gap-3 justify-center"
                style={{
                  backgroundColor: "#D74599",
                  color: "white",
                }}
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="font-medium">Call: (818) 453-6110</span>
              </button>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center bg-stone-50 hover:bg-stone-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-4 rounded-xl font-medium text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-sm gap-2 sm:gap-3 justify-center text-gray-800 border border-stone-200"
              >
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                Get Free Estimate
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-gray-700">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-700">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-700">
                  Same Day Service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-700">
                  5-Star Reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                <span className="font-medium text-xs sm:text-sm text-gray-700">
                  Free Estimates
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-auto">
              <Image
                src="/images/home-improvement-services-hero.webp"
                alt="Professional home improvement services - pavers, windows, roofing, and painting"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority={true}
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
