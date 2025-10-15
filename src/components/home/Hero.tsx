"use client";

import React, { memo, useState, useEffect } from "react";
import { Phone, Calendar, Award, Truck, Star, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";

export const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+18184536110";
  };

  const handleQuoteClick = () => {
    console.log("Get Free Estimate clicked");
    // Add your quote form logic here
  };

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2,500+", label: "Projects Completed" },
    { number: "1,800+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          {/* Main Heading */}
          <h1
            className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Affordable Home Services
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              You Can Trust
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Expert handyman and home improvement services in Los Angeles & Ventura County. Specializing in pavers, windows, roofing, and exterior painting.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <button
              onClick={handleCallClick}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 hover:shadow-xl shadow-lg gap-2 sm:gap-3"
              style={{
                backgroundColor: "#D74599",
                color: "white",
              }}
            >
              <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
              <span>Call: (818) 453-6110</span>
            </button>

            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center bg-white hover:bg-pink-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all transform hover:scale-105 shadow-lg gap-2 sm:gap-3 border-2"
              style={{
                color: "#D74599",
                borderColor: "#D74599",
              }}
            >
              <Calendar className="h-5 w-5 lg:h-6 lg:w-6" />
              Get Free Estimate
            </button>
          </div>
        </div>

        {/* Hero Image - Larger Size, Pure White Background */}
        <div className="relative max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          {/* Main Hero Image - No Effects, No Border */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full">
              <Image
                src="/images/hero image.webp"
                alt="Professional handyman and home improvement services - pavers, windows, roofing, painting in Los Angeles"
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
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Grid - Smaller Size, More Rounded */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8 px-4 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Award className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#D74599" }} />
            <span className="font-medium text-xs sm:text-sm text-gray-700">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Truck className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#D74599" }} />
            <span className="font-medium text-xs sm:text-sm text-gray-700">Same Day Available</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Star className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#D74599" }} />
            <span className="font-medium text-xs sm:text-sm text-gray-700">Top Rated Service</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#D74599" }} />
            <span className="font-medium text-xs sm:text-sm text-gray-700">Free Quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";