"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Award,
  Clock,
  Star,
  Shield,
} from "lucide-react";
import Image from "next/image";

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2,500+", label: "Projects Done" },
    { number: "1,800+", label: "Happy Clients" },
    { number: "40+", label: "Skilled Pros" },
  ];

  const steps = [
    {
      id: 1,
      number: "1",
      title: "Call Us",
      description: "Tell us about your project",
    },
    {
      id: 2,
      number: "2",
      title: "Free Quote",
      description: "Get honest, upfront pricing",
    },
    {
      id: 3,
      number: "3",
      title: "We Do the Work",
      description: "Sit back, we'll handle everything",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully certified for your safety",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Excellent customer reviews",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick response times",
    },
    {
      icon: Shield,
      title: "Quality Work",
      description: "Guaranteed satisfaction",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - White Background */}
        <div className="mb-12 sm:mb-16 max-w-6xl mx-auto">
          {/* Header - Outside Box */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Affordable Home Services
              <span className="block">for Every Need</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 mb-6">
              Quality handyman work without breaking the bank. Let's fix what's broken and improve what's not!
            </p>
            <button
              onClick={() => (window.location.href = "tel:+18184536110")}
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-white"
              style={{ backgroundColor: "#D74599" }}
            >
              <Phone className="h-5 w-5" />
              Call for Free Quote
            </button>
          </div>

          {/* Images and Stats Grid - No Big Box */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Stat - Middle Aligned */}
            <div className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stats[0].number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 leading-tight">
                {stats[0].label}
              </div>
            </div>

            {/* Person 1 Image - No visible box */}
            <div 
              className="relative overflow-hidden rounded-3xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Pink Gradient on Top */}
              <div
                className="absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none rounded-t-3xl"
                style={{
                  background: "linear-gradient(180deg, rgba(215, 69, 153, 0.2) 0%, transparent 100%)",
                }}
              />
              <div 
                className="relative w-full h-96 sm:h-[28rem]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Image
                  src="/images/Person 1.webp"
                  alt="Professional handyman team member"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  style={{ padding: "12px" }}
                />
              </div>
            </div>

            {/* Person 2 Image - No visible box */}
            <div 
              className="relative overflow-hidden rounded-3xl"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Pink Gradient on Top */}
              <div
                className="absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none rounded-t-3xl"
                style={{
                  background: "linear-gradient(180deg, rgba(215, 69, 153, 0.2) 0%, transparent 100%)",
                }}
              />
              <div 
                className="relative w-full h-96 sm:h-[28rem]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Image
                  src="/images/Person 2.webp"
                  alt="Experienced home improvement specialist"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  style={{ padding: "12px" }}
                />
              </div>
            </div>

            {/* Right Stat - Middle Aligned */}
            <div className="text-center lg:text-right">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stats[1].number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 leading-tight">
                {stats[1].label}
              </div>
            </div>
          </div>

          {/* Bottom Stats - Centered */}
          <div className="grid grid-cols-2 gap-8 mt-10 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stats[2].number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 leading-tight">
                {stats[2].label}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                {stats[3].number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 leading-tight">
                {stats[3].label}
              </div>
            </div>
          </div>

          {/* Down Arrow */}
          <div className="flex justify-center mt-10">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
              style={{ backgroundColor: "#D74599" }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Simple Steps */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              How It Works - Simple & Easy
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Getting your home fixed has never been easier.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent z-0"></div>

              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative z-10 text-center transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg transition-all duration-300 hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #D74599 0%, #C73888 100%)",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
            What Makes Us Different
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-4 transition-all duration-300 border border-gray-200 hover:border-pink-300 hover:shadow-lg overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-12 opacity-15 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                    }}
                  />

                  <div className="relative text-center">
                    <div className="flex justify-center mb-3">
                      <div className="bg-pink-50 p-2.5 rounded-lg group-hover:bg-pink-100 transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-pink-600" />
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1.5">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-snug">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="relative bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-lg overflow-hidden max-w-3xl mx-auto">
            <div
              className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
              }}
            />
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Let's Get Your Project Started
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                Contact us today for a free, no-obligation quote. We're ready to help make your home better.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="tel:+18184536110"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  <Phone className="h-4 w-4" />
                  Call: (818) 453-6110
                </a>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  Available Daily • Free Estimates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;