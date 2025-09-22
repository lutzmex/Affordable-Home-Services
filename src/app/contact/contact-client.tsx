// src/app/contact/contact-client.tsx
"use client";

import React, { memo, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  ArrowRight,
  Building,
  Shield,
  PhoneCall,
  Hammer,
  Home,
  Award,
  Target,
} from "lucide-react";

// Memoized components for better performance
const StatCard = memo(
  ({
    number,
    label,
    color,
  }: {
    number: string;
    label: string;
    color: string;
  }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-200">
      <div
        className={`font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl ${color} mb-1`}
      >
        {number}
      </div>
      <div className="font-poppins text-gray-800 text-sm sm:text-base leading-tight">
        {label}
      </div>
    </div>
  ),
);

const ContactMethodCard = memo(
  ({
    method,
    onContactClick,
  }: {
    method: any;
    onContactClick: (action: string) => void;
  }) => {
    const IconComponent = method.icon;

    const handleClick = useCallback(() => {
      onContactClick(method.action);
    }, [method.action, onContactClick]);

    return (
      <div
        onClick={handleClick}
        className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer touch-manipulation"
      >
        <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
          <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />

          <div className="flex-1 min-w-0">
            <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 leading-tight">
              {method.title}
            </h3>
            <p className="font-poppins text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              {method.description}
            </p>
            <div className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 break-all sm:break-normal">
              {method.contact}
            </div>
            <div className="font-poppins text-xs sm:text-sm text-gray-700 leading-relaxed">
              {method.availability}
            </div>
          </div>

          <div className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
        </div>
      </div>
    );
  },
);

const ServiceAreaCard = memo(({ area }: { area: any }) => (
  <div
    className={`${area.bgColor} rounded-2xl sm:rounded-3xl shadow-lg ${area.borderColor} border p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
  >
    <div className="flex items-start gap-3 sm:gap-4">
      <MapPin
        className={`h-8 w-8 sm:h-10 sm:w-10 ${area.iconColor} flex-shrink-0 mt-1`}
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-poppins text-lg sm:text-xl font-medium text-gray-900 mb-3 leading-tight">
          {area.region}
        </h3>

        <div className="space-y-2 sm:space-y-3">
          <div>
            <div className="font-poppins font-medium text-gray-900 text-sm sm:text-base">
              Coverage Area
            </div>
            <div className="font-poppins text-gray-700 text-sm sm:text-base leading-relaxed">
              {area.coverage}
            </div>
          </div>

          <div>
            <div className="font-poppins font-medium text-gray-900 text-sm sm:text-base">
              Phone
            </div>
            <div className="font-poppins text-gray-700 text-sm sm:text-base">
              {area.phone}
            </div>
          </div>

          <div>
            <div className="font-poppins font-medium text-gray-900 text-sm sm:text-base">
              Specialties
            </div>
            <div className="font-poppins text-gray-700 text-sm sm:text-base">
              {area.specialties}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
            <div className="font-poppins text-xl sm:text-2xl font-medium text-gray-900">
              {area.projectsCompleted}
            </div>
            <div className="font-poppins text-xs sm:text-sm text-gray-700 leading-tight">
              Projects Done
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
            <div className="font-poppins text-xl sm:text-2xl font-medium text-gray-900">
              {area.responseTime}
            </div>
            <div className="font-poppins text-xs sm:text-sm text-gray-700 leading-tight">
              Response Time
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const ServiceHourCard = memo(({ schedule }: { schedule: any }) => (
  <div
    className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      schedule.type === "Emergency Available"
        ? "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
        : "bg-white/90 backdrop-blur-sm border-gray-200"
    }`}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1 min-w-0">
        <div
          className={`font-poppins font-medium text-base sm:text-lg leading-tight ${
            schedule.type === "Emergency Available"
              ? "text-pink-900"
              : "text-gray-900"
          }`}
        >
          {schedule.day}
        </div>
        <div
          className={`font-poppins text-xs sm:text-sm mt-1 ${
            schedule.type === "Emergency Available"
              ? "text-pink-800"
              : "text-gray-700"
          }`}
        >
          {schedule.type}
        </div>
      </div>
      <div
        className={`font-poppins text-lg sm:text-xl lg:text-2xl font-medium flex-shrink-0 ${
          schedule.type === "Emergency Available"
            ? "text-pink-900"
            : "text-gray-900"
        }`}
      >
        {schedule.hours}
      </div>
    </div>
  </div>
));

const TrustIndicatorItem = memo(
  ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
      <span className="font-poppins text-gray-900 text-sm sm:text-base leading-relaxed">
        {children}
      </span>
    </div>
  ),
);

export default function ContactClient() {
  const contactMethods = [
    {
      id: 1,
      title: "Call for Immediate Service & Estimates",
      description:
        "Call now for emergency repairs, free estimates, and professional home improvement services",
      icon: Phone,
      contact: "(818) 453-6110",
      action: "tel:+18184536110",
      availability: "Available 7 days a week • Same-day service available",
    },
    {
      id: 2,
      title: "Email for Project Quotes",
      description:
        "Non-urgent inquiries, detailed project quotes, and documentation requests",
      icon: Mail,
      contact: "info@affordablehomeservices.com",
      action: "mailto:info@affordablehomeservices.com",
      availability: "Response within 4 hours during business hours",
    },
  ];

  const serviceAreas = [
    {
      id: 1,
      region: "Los Angeles County",
      coverage:
        "Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van Nuys, San Fernando Valley",
      phone: "(818) 453-6110",
      specialties: "Pavers, Windows, Roofing, Painting",
      projectsCompleted: "12K+",
      responseTime: "2-4 Hrs",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      id: 2,
      region: "Ventura County",
      coverage:
        "Thousand Oaks, Simi Valley, Oxnard, Camarillo, Ventura, Moorpark",
      phone: "(818) 453-6110",
      specialties: "Pavers, Windows, Roofing, Painting",
      projectsCompleted: "3K+",
      responseTime: "2-6 Hrs",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
  ];

  const serviceHours = [
    {
      day: "Monday - Friday",
      hours: "7:00 AM - 7:00 PM",
      type: "Regular Service",
    },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM", type: "Weekend Service" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM", type: "Weekend Service" },
    {
      day: "Emergency Repairs",
      hours: "24/7 Available",
      type: "Emergency Available",
    },
  ];

  const handleContactClick = useCallback((action: string) => {
    window.location.href = action;
  }, []);

  return (
    <div className="min-h-screen font-poppins overflow-x-hidden bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-4 lg:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-4 lg:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-poppins text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Contact Information
            </div>

            <h1 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Get In Touch With Our
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Home Improvement Experts
              </span>
            </h1>

            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Ready to transform your home? Our licensed contractors are
              available for paver installation, window replacement, roofing
              services, and exterior painting throughout Southern California.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-2">
              <StatCard
                number="13+"
                label="Years Experience"
                color="text-pink-600"
              />
              <StatCard
                number="15K+"
                label="Projects Completed"
                color="text-green-600"
              />
              <StatCard
                number="4.9/5"
                label="Customer Rating"
                color="text-pink-600"
              />
              <StatCard
                number="24/7"
                label="Emergency Service"
                color="text-green-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-poppins text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Contact Methods
            </div>
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-3 sm:mb-4 px-2">
              Contact Our
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2 leading-relaxed">
              Choose your preferred method to connect with our licensed home
              improvement professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method) => (
              <ContactMethodCard
                key={method.id}
                method={method}
                onContactClick={handleContactClick}
              />
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 leading-tight">
                    Need Emergency Repairs?
                  </h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-700">
                    Call immediately for urgent roofing or emergency home
                    repairs
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleContactClick("tel:+18184536110")}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-poppins font-medium text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 sm:gap-3 min-h-[50px] sm:min-h-[60px] touch-manipulation"
              >
                <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span>Call Now: (818) 453-6110</span>
              </button>

              <div className="mt-3 sm:mt-4 font-poppins text-xs sm:text-sm text-gray-700 leading-relaxed">
                Licensed & Insured • Free Estimates • Same-Day Service Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 border border-green-300 text-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-poppins text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Service Areas
            </div>
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-3 sm:mb-4 px-2">
              Proudly Serving
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Southern California
              </span>
            </h2>
            <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2 leading-relaxed">
              Professional home improvement services throughout Los Angeles
              County and Ventura County with local expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {serviceAreas.map((area) => (
              <ServiceAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours & Trust */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Service Hours */}
            <div className="flex flex-col h-full">
              <div className="text-center lg:text-left mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-poppins text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-1 sm:mr-2" />
                  Service Hours
                </div>

                <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight">
                  When You Need Us,
                  <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                    We're Here
                  </span>
                </h2>

                <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Our service schedule accommodates your needs, with extended
                  hours and emergency availability for urgent repairs.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col justify-end">
                {serviceHours.map((schedule, index) => (
                  <ServiceHourCard key={index} schedule={schedule} />
                ))}
              </div>
            </div>

            {/* Trust Indicators & Services */}
            <div className="flex flex-col h-full justify-end space-y-6 sm:space-y-8">
              {/* Services Overview */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Hammer className="h-12 w-12 sm:h-16 sm:w-16 text-pink-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2">
                    Our Services
                  </h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-700">
                    Complete home improvement solutions
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-4 text-center">
                    <Building className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <div className="font-poppins font-medium text-sm text-gray-900">
                      Paver Installation
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
                    <Home className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-poppins font-medium text-sm text-gray-900">
                      Window Services
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-poppins font-medium text-sm text-gray-900">
                      Roofing Solutions
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-4 text-center">
                    <Award className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <div className="font-poppins font-medium text-sm text-gray-900">
                      Exterior Painting
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2">
                    Licensed & Trusted
                  </h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-700">
                    Your peace of mind is our priority
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <TrustIndicatorItem>
                    Licensed & Insured in California
                  </TrustIndicatorItem>
                  <TrustIndicatorItem>
                    A+ Better Business Bureau Rating
                  </TrustIndicatorItem>
                  <TrustIndicatorItem>
                    13+ Years of Experience
                  </TrustIndicatorItem>
                  <TrustIndicatorItem>
                    15,000+ Completed Projects
                  </TrustIndicatorItem>
                  <TrustIndicatorItem>
                    Free Detailed Estimates
                  </TrustIndicatorItem>
                  <TrustIndicatorItem>
                    Comprehensive Warranties
                  </TrustIndicatorItem>
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-gradient-to-br from-pink-50 to-green-50 border border-pink-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="font-poppins text-2xl sm:text-3xl font-medium text-gray-900 mb-1">
                    4.9/5
                  </div>
                  <div className="font-poppins text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Customer Rating
                  </div>
                  <div className="font-poppins text-xs sm:text-sm text-gray-700">
                    Based on 15,000+ completed projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Set display names for better debugging
StatCard.displayName = "StatCard";
ContactMethodCard.displayName = "ContactMethodCard";
ServiceAreaCard.displayName = "ServiceAreaCard";
ServiceHourCard.displayName = "ServiceHourCard";
TrustIndicatorItem.displayName = "TrustIndicatorItem";
