"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Plus,
  Phone,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Globe,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  PhoneCall,
  Verified,
  Award,
  Target,
  Activity,
  Calendar,
  Truck,
  Hammer,
  TrendingUp,
  Zap,
  Eye,
  Settings,
  Search,
  FileText,
  Headphones,
  Layers,
  Droplets,
  AlertTriangle,
  Gauge,
  Home,
  Building,
  Paintbrush,
  Square,
  Wrench,
} from "lucide-react";

import { LocationData } from "../data/types";

interface LocationTemplateProps {
  locationData: LocationData;
}

// Memoized and optimized icon map
const iconMap: { [key: string]: any } = {
  Home,
  Building,
  MapPin,
  Plus,
  Phone,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Globe,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  PhoneCall,
  Verified,
  Award,
  Target,
  Activity,
  Calendar,
  Truck,
  Hammer,
  TrendingUp,
  Zap,
  Eye,
  Settings,
  Search,
  FileText,
  Headphones,
  Layers,
  Droplets,
  AlertTriangle,
  Gauge,
  Paintbrush,
  Square,
  Wrench,
};

// Memoized Breadcrumb Component
const LocationBreadcrumb = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const locationName = locationData.name;
    const maxLocationLength = 25;

    const displayLocationName = useMemo(() => {
      if (locationName.length > maxLocationLength) {
        const cutIndex = locationName.lastIndexOf(" ", maxLocationLength);
        return cutIndex > 0
          ? locationName.substring(0, cutIndex) + "..."
          : locationName.substring(0, maxLocationLength) + "...";
      }
      return locationName;
    }, [locationName, maxLocationLength]);

    return (
      <nav
        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6"
        aria-label="Breadcrumb"
      >
        <div className="flex items-center gap-1 sm:gap-2 w-full min-w-0">
          <Link
            href="/"
            className="hover:text-gray-800 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
            prefetch={false}
          >
            Home
          </Link>
          <ChevronRight
            className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0"
            aria-hidden="true"
          />

          <Link
            href="/locations"
            className="hover:text-gray-800 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
            prefetch={false}
          >
            Locations
          </Link>
          <ChevronRight
            className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0"
            aria-hidden="true"
          />

          <span
            className="text-gray-800 font-medium min-w-0 flex-1"
            title={locationName}
          >
            <span className="sm:hidden">{displayLocationName}</span>
            <span className="hidden sm:inline">{locationName}</span>
          </span>
        </div>
      </nav>
    );
  },
);

LocationBreadcrumb.displayName = "LocationBreadcrumb";

// Hero Section Component
// Option 1: Fixed Aspect Ratio Container (Recommended)
const LocationHero = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const handleCallClick = () => {
      window.location.href = `tel:${locationData.contact.phone}`;
    };

    const handleQuoteClick = () => {
      console.log("Get Free Quote clicked");
    };

    const getIconComponent = useCallback((iconName: string) => {
      return iconMap[iconName] || Settings;
    }, []);

    return (
      <section className="py-6 sm:py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              {/* Main Title */}
              <h1
                className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight mb-4 sm:mb-6"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {locationData.hero.title}
                {locationData.hero.subtitle && (
                  <span className="block text-base sm:text-lg lg:text-xl mt-1 sm:mt-2 text-gray-600">
                    {locationData.hero.subtitle}
                  </span>
                )}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {locationData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
                <button
                  onClick={handleCallClick}
                  className="inline-flex items-center hover:bg-opacity-90 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all transform hover:scale-105 shadow-sm gap-2 sm:gap-3 justify-center text-white"
                  style={{ backgroundColor: "#D74599" }}
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="font-medium">
                    Call: {locationData.contact.phoneDisplay}
                  </span>
                </button>

                <button
                  onClick={handleQuoteClick}
                  className="inline-flex items-center bg-stone-50 hover:bg-stone-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all transform hover:scale-105 shadow-sm gap-2 sm:gap-3 justify-center text-gray-800 border border-stone-200"
                >
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                  Get Free Estimate
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-700">
                {locationData.hero.trustIndicators &&
                  locationData.hero.trustIndicators.map((indicator, index) => {
                    const IconComponent = getIconComponent(indicator.iconName);
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <IconComponent
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${indicator.color}`}
                        />
                        <span className="font-medium text-xs sm:text-sm text-gray-700">
                          {indicator.text}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Right Side - Hero Image - FIXED VERSION */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl">
                <Image
                  src={locationData.hero.image}
                  alt={locationData.hero.imageAlt}
                  fill
                  className="object-cover object-center"
                  priority={true}
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

LocationHero.displayName = "LocationHero";

// Content Section Component
const LocationContent = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const contentHeadingClasses = {
      h2: "font-medium text-lg sm:text-xl lg:text-2xl text-gray-900 mb-4 sm:mb-6 leading-tight",
      h3: "font-medium text-base sm:text-lg lg:text-xl text-gray-800 mb-3 sm:mb-4",
      h4: "font-medium text-sm sm:text-base lg:text-lg text-gray-800 mb-2 sm:mb-3",
      h5: "font-medium text-sm sm:text-base text-gray-800 mb-2",
      h6: "font-medium text-xs sm:text-sm text-gray-800 mb-2",
    };

    const renderContentSection = useCallback(
      (section: any, sectionIndex: number) => {
        return (
          <div key={sectionIndex} className="space-y-4 sm:space-y-6">
            <h2 className={contentHeadingClasses.h2}>{section.heading2}</h2>
            {section.content && (
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                {section.content}
              </p>
            )}
            {section.subsections &&
              section.subsections.map((subsection: any, subIndex: number) => (
                <div
                  key={`${sectionIndex}-${subIndex}`}
                  className="ml-2 sm:ml-4 space-y-2 sm:space-y-4"
                >
                  {subsection.heading3 && (
                    <h3 className={contentHeadingClasses.h3}>
                      {subsection.heading3}
                    </h3>
                  )}
                  {subsection.heading4 && (
                    <h4 className={contentHeadingClasses.h4}>
                      {subsection.heading4}
                    </h4>
                  )}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {subsection.content}
                  </p>
                </div>
              ))}
          </div>
        );
      },
      [contentHeadingClasses],
    );

    return (
      <section className="py-4 sm:py-6 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {locationData.content.sections.map((section, index) =>
                renderContentSection(section, index),
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

LocationContent.displayName = "LocationContent";

// CTA Section Component
const CTASection = React.memo(
  ({
    title,
    description,
    locationData,
  }: {
    title: string;
    description?: string;
    locationData: LocationData;
  }) => {
    const handleCallClick = () => {
      window.location.href = `tel:${locationData.contact.phone}`;
    };

    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              {description && (
                <p className="text-gray-600 mb-6">{description}</p>
              )}
              <button
                onClick={handleCallClick}
                className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#D74599" }}
              >
                <Phone className="h-5 w-5" />
                Call Now: {locationData.contact.phoneDisplay}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

CTASection.displayName = "CTASection";

// Services Section Component
const ServicesSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const [showAllServices, setShowAllServices] = useState(false);
    const getIconComponent = useCallback((iconName: string) => {
      return iconMap[iconName] || Settings;
    }, []);

    const displayedServices = useMemo(
      () =>
        showAllServices
          ? locationData.services.list
          : locationData.services.list.slice(
              0,
              locationData.ui.servicesSection.initialDisplay,
            ),
      [
        showAllServices,
        locationData.services.list,
        locationData.ui.servicesSection.initialDisplay,
      ],
    );

    return (
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              {locationData.services.title}
              <span className="block text-gray-700">
                {locationData.services.subtitle}
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {locationData.services.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {displayedServices.map((service, index) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group bg-white transition-all duration-300 p-6 text-center hover:shadow-lg transform hover:-translate-y-1 cursor-pointer flex flex-col items-center rounded-lg hover:border hover:border-gray-200"
                >
                  <div className="relative w-full h-48 lg:h-64 mb-6 flex items-center justify-center">
                    {service.iconPath ? (
                      <Image
                        src={service.iconPath}
                        alt={`${service.name} - Professional service`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                        <IconComponent className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 text-base lg:text-lg text-center leading-tight group-hover:text-gray-700 transition-colors">
                    {service.name}
                  </h3>
                </Link>
              );
            })}
          </div>

          {/* Show More Button */}
          {locationData.services.list.length >
            locationData.ui.servicesSection.initialDisplay && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center bg-stone-50 text-gray-700 hover:bg-stone-100 px-6 py-3 rounded-full font-medium transition-colors duration-200 border border-stone-200"
              >
                {showAllServices ? (
                  <>
                    Show Less Services
                    <ChevronUp className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Show More Services
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Our expert team is here to help you select the perfect service
                for your property in {locationData.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-stone-50 text-gray-700 hover:bg-stone-100 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border border-stone-200"
                >
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() =>
                    (window.location.href = `tel:${locationData.contact.phone}`)
                  }
                  className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: "#D74599" }}
                >
                  <Phone className="h-5 w-5" />
                  Call Us Now: {locationData.contact.phoneDisplay}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

ServicesSection.displayName = "ServicesSection";

// Why Choose Us Section Component
const WhyChooseUsSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const getIconComponent = useCallback((iconName: string) => {
      return iconMap[iconName] || Settings;
    }, []);

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locationData.whyChooseUs.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locationData.whyChooseUs.description}
            </p>
          </div>

          {/* Features */}
          <div
            style={{ backgroundColor: "#F0F8F0" }}
            className="rounded-2xl p-8 mb-16 border border-stone-100"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationData.whyChooseUs.reasons.map((reason, index) => {
                const IconComponent = getIconComponent(reason.iconName);
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.stats.map((stat, index) => {
              const IconComponent = getIconComponent(stat.iconName);
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-stone-50 border border-stone-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gray-700 text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);

WhyChooseUsSection.displayName = "WhyChooseUsSection";

// Process Section Component
const ProcessSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const getIconComponent = useCallback((iconName: string) => {
      return iconMap[iconName] || Settings;
    }, []);

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locationData.process.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locationData.process.description}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationData.process.steps.map((step, index) => {
              const IconComponent = getIconComponent(step.iconName);
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300 border border-stone-100"
                >
                  <div className="mb-6">
                    <div className="text-sm font-bold text-gray-600 mb-4">
                      Step {index + 1}
                    </div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-white">
                      <IconComponent className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);

ProcessSection.displayName = "ProcessSection";

// Testimonials Section Component
const TestimonialsSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our {locationData.name} Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from satisfied customers who have used our services
              in {locationData.name}.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {locationData.testimonials.slice(0, 4).map((review, index) => (
              <div
                key={index}
                className="rounded-xl p-6 hover:bg-stone-50 transition-colors duration-300 border border-stone-100"
              >
                {/* Service Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-stone-100 text-gray-700">
                  Customer Review
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-gray-700"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{review.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t border-stone-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-gray-600 text-sm">{review.location}</div>
                  <div className="text-gray-500 text-xs mt-1">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div
            style={{ backgroundColor: "#F0F8F0" }}
            className="rounded-2xl p-8 text-center border border-stone-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {locationData.trustIndicators.map((indicator, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-2 text-gray-900">
                    {indicator.value}
                  </div>
                  <div className="text-gray-600">{indicator.label}</div>
                </div>
              ))}
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-900">13+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-gray-800">
                    Licensed & Insured
                  </div>
                  <div className="text-sm text-gray-600">CSLB Licensed</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-gray-800">
                    A+ BBB Rating
                  </div>
                  <div className="text-sm text-gray-600">
                    Better Business Bureau
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-gray-800">
                    Free Estimates
                  </div>
                  <div className="text-sm text-gray-600">No Hidden Costs</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-gray-800">
                    Warranty Included
                  </div>
                  <div className="text-sm text-gray-600">All Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

TestimonialsSection.displayName = "TestimonialsSection";

// FAQ Section Component
const FAQSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [showAllFAQs, setShowAllFAQs] = useState(false);

    const toggleFaq = useCallback(
      (id: number) => {
        setExpandedFaq(expandedFaq === id ? null : id);
      },
      [expandedFaq],
    );

    const displayedFAQs = useMemo(
      () => (showAllFAQs ? locationData.faqs : locationData.faqs.slice(0, 6)),
      [showAllFAQs, locationData.faqs],
    );

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locationData.name} Questions Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our services in {locationData.name}.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {displayedFAQs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-6 text-left flex items-center justify-between group"
                  aria-expanded={expandedFaq === index}
                >
                  <span className="font-medium text-sm sm:text-base text-gray-900 pr-4 sm:pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      expandedFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  </div>
                </button>

                {expandedFaq === index && (
                  <div className="pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {locationData.faqs.length > 6 && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={() => setShowAllFAQs(!showAllFAQs)}
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors text-sm sm:text-base"
              >
                <span>{showAllFAQs ? "Show Less" : "View All FAQs"}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showAllFAQs ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    );
  },
);

FAQSection.displayName = "FAQSection";

// Related Locations Section Component
const RelatedLocationsSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const [showAllLocations, setShowAllLocations] = useState(false);

    const displayedLocations = useMemo(
      () =>
        showAllLocations
          ? locationData.relatedLocations
          : locationData.relatedLocations.slice(
              0,
              locationData.ui.locationsSection.initialDisplay,
            ),
      [
        showAllLocations,
        locationData.relatedLocations,
        locationData.ui.locationsSection.initialDisplay,
      ],
    );

    // Don't render the section if there are no related locations
    if (
      !locationData.relatedLocations ||
      locationData.relatedLocations.length === 0
    ) {
      return null;
    }

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
              <span className="block text-gray-700">
                Across {locationData.name}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From our base in {locationData.name}, our expert teams provide
              quality paver installation, window replacement, roofing services,
              and exterior painting with professional results and reliable
              service.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
              {displayedLocations.map((location, index) => (
                <Link
                  key={index}
                  href={`/locations/${location.slug}`}
                  className="group text-center py-4 px-2 cursor-pointer hover:bg-stone-50 rounded-lg transition-all duration-300 border border-transparent hover:border-stone-200"
                >
                  <MapPin className="h-6 w-6 text-gray-600 mx-auto mb-2 group-hover:text-gray-800 transition-colors" />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700 transition-colors leading-tight">
                    {location.name}
                  </h4>
                  <div className="text-xs text-gray-500">CA</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Math.floor(Math.random() * 50) + 100} projects
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Show More/Less Button */}
          {locationData.relatedLocations.length >
            locationData.ui.locationsSection.initialDisplay && (
            <div className="text-center mb-16">
              <button
                onClick={() => setShowAllLocations(!showAllLocations)}
                className="inline-flex items-center gap-3 bg-stone-50 text-gray-700 hover:bg-stone-100 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 border border-stone-200"
              >
                {showAllLocations ? (
                  <>
                    Show Fewer Cities
                    <ChevronUp className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    View All Cities
                    <ChevronDown className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA Section */}
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
              <button
                onClick={() =>
                  (window.location.href = `tel:${locationData.contact.phone}`)
                }
                className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#D74599" }}
              >
                <Phone className="h-5 w-5" />
                Call Us Now: {locationData.contact.phoneDisplay}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

RelatedLocationsSection.displayName = "RelatedLocationsSection";

// Map Section Component
const MapSection = React.memo(
  ({ locationData }: { locationData: LocationData }) => {
    const handleCallClick = () => {
      window.location.href = `tel:${locationData.contact.phone}`;
    };

    return (
      <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-stone-50 text-gray-700 px-3 py-1 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-stone-200">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                Service Area
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                {locationData.name} Coverage Map
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                See where we provide professional services in{" "}
                {locationData.name} and nearby areas
              </p>
              <button
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-2 text-white hover:bg-opacity-90 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base"
                style={{ backgroundColor: "#D74599" }}
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call for Immediate Service
              </button>
            </div>
            <div className="h-80 sm:h-96 lg:h-full min-h-[320px] sm:min-h-[400px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 shadow-sm order-1 lg:order-2">
              <iframe
                src={locationData.mapEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${locationData.name} Service Coverage Map`}
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  },
);

MapSection.displayName = "MapSection";

// Main Location Template Component
export default function LocationTemplate({
  locationData,
}: LocationTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <LocationBreadcrumb locationData={locationData} />
      </div>

      {/* Hero Section */}
      <LocationHero locationData={locationData} />

      {/* Content Section */}
      <LocationContent locationData={locationData} />

      {/* CTA Section after Content */}
      <CTASection
        title={`Ready to Get Professional Service in ${locationData.name}?`}
        description="Our expert team is here to help you with fast, reliable service."
        locationData={locationData}
      />

      {/* Services Section */}
      <ServicesSection locationData={locationData} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection locationData={locationData} />

      {/* Process Section */}
      <ProcessSection locationData={locationData} />

      {/* CTA Section after Why Choose Us */}
      <CTASection
        title={`Call For Expert Help in ${locationData.name}`}
        description="Our professional team is ready to assist you with any service needs."
        locationData={locationData}
      />

      {/* Testimonials Section */}
      <TestimonialsSection locationData={locationData} />

      {/* CTA Section after Testimonials */}
      <CTASection
        title="Get Help Today"
        description={`Contact our professional team for immediate assistance in ${locationData.name}.`}
        locationData={locationData}
      />

      {/* FAQ Section */}
      <FAQSection locationData={locationData} />

      {/* Related Locations Section */}
      <RelatedLocationsSection locationData={locationData} />

      {/* Map Section */}
      <MapSection locationData={locationData} />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 md:hidden z-40 shadow-lg">
        <button
          onClick={() =>
            (window.location.href = `tel:${locationData.contact.phone}`)
          }
          className="flex items-center justify-center gap-2 text-white hover:bg-opacity-90 py-2.5 sm:py-3 w-full text-sm sm:text-base rounded-lg shadow-lg"
          style={{ backgroundColor: "#D74599" }}
        >
          <Phone className="h-4 w-4" />
          <span>Call {locationData.contact.phoneDisplay}</span>
        </button>
      </div>
    </div>
  );
}
