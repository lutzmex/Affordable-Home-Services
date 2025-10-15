"use client";

import React, { useState, useEffect } from "react";
import { Star, Phone, Award, ThumbsUp, Users } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  badge: string;
}

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 4 reviews that will rotate in the featured box
  const reviews: Review[] = [
    {
      id: 1,
      name: "Jennifer R.",
      rating: 5,
      text: "Called for patio paver installation and they exceeded my expectations. The crew was professional, worked efficiently, and the results are stunning. My backyard is now my favorite place to relax!",
      badge: "Los Angeles Homeowner",
    },
    {
      id: 2,
      name: "Michael T.",
      rating: 5,
      text: "Had our old windows replaced with energy-efficient ones. The difference in our electric bill is noticeable! The installers were respectful, clean, and finished right on schedule. Highly recommend their service.",
      badge: "Ventura County Resident",
    },
    {
      id: 3,
      name: "Patricia M.",
      rating: 5,
      text: "Roof leak during heavy rain - they came out the same day! Fixed the problem quickly and thoroughly. Their technician explained everything and the pricing was fair. Great emergency service when we needed it most.",
      badge: "San Fernando Valley",
    },
    {
      id: 4,
      name: "Robert K.",
      rating: 5,
      text: "Exterior painting job turned out beautiful. They took time to properly prep all surfaces, used quality paint, and paid attention to every detail. Our home looks brand new. Worth every penny!",
      badge: "Thousand Oaks Homeowner",
    },
  ];

  const trustStats = [
    { icon: Star, number: "4.8/5", label: "Customer Rating" },
    { icon: ThumbsUp, number: "95%", label: "Satisfaction Rate" },
    { icon: Users, number: "2,500+", label: "Projects Done" },
    { icon: Award, number: "15+", label: "Years Serving LA" },
  ];

  // Auto-rotate review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Real Reviews from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              Real Customers
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            See why homeowners across Los Angeles and Ventura County trust us for their home improvement needs.
          </p>
        </div>

        {/* Two Column Layout - Equal Heights */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 max-w-6xl mx-auto">
          {/* Left Column - Trust Badges (Combined height = right box) */}
          <div className="flex flex-col gap-6">
            {/* Trust Badge 1 - 50% height minus half gap */}
            <div
              className={`relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg overflow-hidden flex-1 flex items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                }}
              />
              <div className="relative flex items-center gap-4 w-full">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                    <Award className="h-8 w-8 text-pink-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Top-Rated in Los Angeles
                  </h3>
                  <p className="text-sm text-gray-600">
                    Trusted by thousands of homeowners since 2010 for quality work and reliable service.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge 2 - 50% height minus half gap */}
            <div
              className={`relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg overflow-hidden flex-1 flex items-center transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-16 opacity-15 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                }}
              />
              <div className="relative flex items-center gap-4 w-full">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-pink-600 text-pink-600"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Excellent Customer Service
                  </h3>
                  <p className="text-sm text-gray-600">
                    We take pride in delivering quality results and treating every home like our own.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Review (Same height as left column) */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              key={currentReview.id}
              className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 sm:p-10 border-2 border-yellow-200 shadow-2xl flex flex-col justify-between h-full"
            >
              {/* Large Quote Marks */}
              <div className="absolute top-6 right-6 opacity-20">
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-auto leading-relaxed">
                  "{currentReview.text}"
                </blockquote>
              </div>

              {/* Customer Info */}
              <div className="relative z-10 flex items-center gap-4 pt-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {currentReview.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg text-gray-900">
                    {currentReview.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentReview.badge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-10 sm:mb-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReviewIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentReviewIndex === index
                  ? "bg-pink-600 w-8"
                  : "bg-gray-300 hover:bg-pink-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {trustStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 text-center transition-all duration-500 border border-gray-200 hover:border-pink-300 hover:shadow-lg overflow-hidden h-[140px] flex flex-col justify-center ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-12 opacity-15 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(215, 69, 153, 0.5) 0%, transparent 100%)",
                  }}
                />
                <div className="relative">
                  <div className="flex justify-center mb-3">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-pink-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA Box */}
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
                Join Our Happy Customers
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                Experience the quality service that has made us a trusted name in Los Angeles home improvement.
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

export default Testimonials;