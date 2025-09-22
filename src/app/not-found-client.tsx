"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Home,
  Phone,
  ArrowRight,
  Building,
  Shield,
  Award,
  PhoneCall,
} from "lucide-react";

export default function NotFoundClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+18184536110";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorative Elements - Pink/Green Theme */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* 404 Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-8 shadow-sm">
              <AlertTriangle className="h-5 w-5 mr-2" />
              404 Error
            </div>

            {/* Large 404 Text */}
            <div className="text-8xl sm:text-9xl lg:text-[12rem] font-medium mb-8 bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent font-poppins leading-none">
              404
            </div>

            {/* Error Message */}
            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
              Oops! This Page Has
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Gone Missing
              </span>
            </h1>

            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
              Don't worry - even our expert home improvement skills can't find this
              page! It might have been moved, deleted, or the URL might be
              incorrect. Let us help you get back on track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}