"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Plus,
  Minus,
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
} from "lucide-react";

import { ServiceData } from "../data/types";
import { SERVICE_STATIC_CONFIG } from "../data/static/service-static-config";

interface ServiceTemplateProps {
  serviceData: ServiceData;
}

// Memoized and optimized icon map
const iconMap: { [key: string]: any } = {
  Home: Shield,
  Building: Shield,
  Mountain: Shield,
  Layers: Settings,
  Droplets: Activity,
  Settings,
  Target,
  Thermometer: Settings,
  AlertTriangle: Shield,
  Shield,
  Waves: Activity,
  Eye,
  Search: Eye,
  Camera: Eye,
  Gauge: Activity,
  Activity,
  Users,
  Award,
  Clock,
  Star,
  Brain: Settings,
  Globe,
  Phone,
  FileText: Settings,
  Radar: Eye,
  CheckCircle,
  Verified,
  MessageCircle: Users,
  HelpCircle,
  BarChart: TrendingUp,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  PhoneCall: Phone,
  Flame: Activity,
  Headphones: Settings,
  MapPin,
  Plus,
  Minus,
  Sparkles: Star,
  ExternalLink: ArrowRight,
  TrendingUp,
  Zap,
  Hammer,
  Truck,
};

// Memoized Breadcrumb Component
const ServiceBreadcrumb = React.memo(
  ({ serviceData }: { serviceData: ServiceData }) => {
    const serviceName = serviceData.name;
    const maxServiceLength = 25;

    const displayServiceName = useMemo(() => {
      if (serviceName.length > maxServiceLength) {
        const cutIndex = serviceName.lastIndexOf(" ", maxServiceLength);
        return cutIndex > 0
          ? serviceName.substring(0, cutIndex) + "..."
          : serviceName.substring(0, maxServiceLength) + "...";
      }
      return serviceName;
    }, [serviceName, maxServiceLength]);

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
            href="/services"
            className="hover:text-gray-800 transition-colors font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5 whitespace-nowrap flex-shrink-0"
            prefetch={false}
          >
            Services
          </Link>
          <ChevronRight
            className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0"
            aria-hidden="true"
          />

          <span
            className="text-gray-800 font-medium min-w-0 flex-1"
            title={serviceName}
          >
            <span className="sm:hidden">{displayServiceName}</span>
            <span className="hidden sm:inline">{serviceName}</span>
          </span>
        </div>
      </nav>
    );
  },
);

ServiceBreadcrumb.displayName = "ServiceBreadcrumb";

// Updated Hero Section - Simplified without badge/icons
const ServiceHero = React.memo(
  ({ serviceData }: { serviceData: ServiceData }) => {
    const handleCallClick = () => {
      window.location.href = `tel:${serviceData.contact.phone}`;
    };

    const handleQuoteClick = () => {
      // Add quote form logic here
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
              {/* Main Title - No Badge */}
              <h1
                className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight mb-4 sm:mb-6"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {serviceData.hero.title}
                {serviceData.hero.subtitle && (
                  <span
                    className="block text-base sm:text-lg lg:text-xl mt-1 sm:mt-2"
                    style={{ color: "#D74599" }}
                  >
                    {serviceData.hero.subtitle}
                  </span>
                )}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {serviceData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-8">
                <button
                  onClick={handleCallClick}
                  className="inline-flex items-center hover:bg-opacity-90 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all transform hover:scale-105 shadow-sm gap-2 sm:gap-3 justify-center"
                  style={{ backgroundColor: "#D74599", color: "white" }}
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="font-medium">
                    Call: {serviceData.contact.phoneDisplay}
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
                {serviceData.hero.trustIndicators.map((indicator, index) => {
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

            {/* Right Side - Hero Image - Real Embedded */}
            <div className="order-1 lg:order-2">
              <div className="w-full h-auto">
                <Image
                  src={serviceData.hero.heroImage}
                  alt={serviceData.hero.heroImageAlt}
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
  },
);

ServiceHero.displayName = "ServiceHero";

// Memoized Content Section - Reduced top padding
const ServiceContent = React.memo(
  ({ serviceData }: { serviceData: ServiceData }) => {
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
            {serviceData.content.introduction && (
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {serviceData.content.introduction}
                </p>
              </div>
            )}

            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {serviceData.content.sections.map((section, index) =>
                renderContentSection(section, index),
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

ServiceContent.displayName = "ServiceContent";

// CTA Section Component - Home Page Style
const CTASection = React.memo(
  ({ title, description }: { title: string; description?: string }) => {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              {description && (
                <p className="text-gray-600 mb-6">{description}</p>
              )}
              <a
                href="tel:+18184536110"
                className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#D74599" }}
              >
                <Phone className="h-5 w-5" />
                Call Now: (818) 453-6110
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

CTASection.displayName = "CTASection";

// Why Choose Us Section - Home Page Style
const WhyChooseUsSection = React.memo(() => {
  const getIconComponent = useCallback((iconName: string) => {
    return iconMap[iconName] || Settings;
  }, []);

  const whyChooseUsData = SERVICE_STATIC_CONFIG.ui.whyChooseUsSection;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {whyChooseUsData.title.part1}
            <span className="block text-gray-700">
              {whyChooseUsData.title.part2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {whyChooseUsData.description}
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div
          style={{ backgroundColor: "#F0F8F0" }}
          className="rounded-2xl p-8 mb-16 border border-stone-100"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.features.map((benefit, index) => {
              const IconComponent = getIconComponent(benefit.iconName);
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Highlights Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-100">
            <div className="text-3xl font-bold mb-2 text-gray-900">15,000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-100">
            <div className="text-3xl font-bold mb-2 text-gray-900">13+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-100">
            <div className="text-3xl font-bold mb-2 text-gray-900">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-stone-50 border border-stone-100">
            <div className="text-3xl font-bold mb-2 text-gray-900">24/7</div>
            <div className="text-gray-600">Emergency Service</div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-700 text-white">
              <Hammer className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Paver Installation
            </h4>
            <p className="text-sm text-gray-600">
              Driveways, patios, walkways, and pool decks
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-700 text-white">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Window Services
            </h4>
            <p className="text-sm text-gray-600">
              Replacement, installation, and restoration
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-700 text-white">
              <Shield className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Roofing Services
            </h4>
            <p className="text-sm text-gray-600">
              Repair, replacement, and emergency service
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-700 text-white">
              <Users className="h-8 w-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Exterior Painting
            </h4>
            <p className="text-sm text-gray-600">
              Residential and commercial painting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = "WhyChooseUsSection";

// Testimonials Section with Enhanced Trust Stats
const TestimonialsSection = React.memo(
  ({ serviceData }: { serviceData: ServiceData }) => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from satisfied customers who have experienced our{" "}
              {serviceData.name}.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceData.testimonials.map((review, index) => (
              <div
                key={index}
                className="rounded-xl p-6 hover:bg-stone-50 transition-colors duration-300 border border-stone-100"
              >
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
                  {review.verified && (
                    <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Stats */}
          <div
            style={{ backgroundColor: "#F0F8F0" }}
            className="rounded-2xl p-8 text-center border border-stone-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  4.9/5
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  15,000+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-900">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
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

// FAQ Section - Home Page Style
const FAQSection = React.memo(
  ({ serviceData }: { serviceData: ServiceData }) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const toggleFaq = useCallback(
      (id: number) => {
        setExpandedFaq(expandedFaq === id ? null : id);
      },
      [expandedFaq],
    );

    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our {serviceData.name} in Los Angeles &
              Ventura County.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {serviceData.faqs.map((faq, index) => (
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
        </div>
      </section>
    );
  },
);

FAQSection.displayName = "FAQSection";

// Enhanced Related Services Section - Using Static Data
const RelatedServicesSection = React.memo(() => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [servicesToShow] = useState(8);

  const relatedServicesData =
    SERVICE_STATIC_CONFIG.relatedServicesStatic.services;
  const relatedServicesUI = SERVICE_STATIC_CONFIG.ui.relatedServicesSection;

  const displayedServices = useMemo(
    () =>
      showAllServices
        ? relatedServicesData
        : relatedServicesData.slice(0, servicesToShow),
    [showAllServices, relatedServicesData, servicesToShow],
  );

  const toggleServices = useCallback(() => {
    setShowAllServices(!showAllServices);
  }, [showAllServices]);

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            {relatedServicesUI.title.part1} {relatedServicesUI.title.part2}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {relatedServicesUI.description}
          </p>
        </div>

        {/* Services Grid - 4 columns on medium+ screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {displayedServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl transition-all duration-300 p-4 lg:p-6 text-center border border-stone-100 hover:border-stone-300 transform hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Image container */}
              <div className="relative h-36 w-36 lg:h-52 lg:w-52 mx-auto mb-4">
                <Image
                  src={service.iconPath}
                  alt={`${service.name} service`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 144px, 208px"
                  loading="lazy"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-semibold text-gray-900 text-base lg:text-lg leading-tight mb-2">
                {service.name}
              </h3>

              {/* Average Cost */}
              <p className="text-sm text-gray-600 mb-3">
                Starting from {service.avgCost}
              </p>

              {/* Projects Completed */}
              <div className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                {service.projectsCompleted.toLocaleString()} Projects Completed
              </div>
            </Link>
          ))}
        </div>

        {/* "Show More/Show Less" Button */}
        <div className="text-center mb-16">
          {relatedServicesData.length > servicesToShow && (
            <button
              className="inline-flex items-center bg-stone-50 hover:bg-stone-100 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors duration-200 border border-stone-200"
              onClick={toggleServices}
            >
              {showAllServices ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2" />
                  {relatedServicesUI.showLessButton.text}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2" />
                  {relatedServicesUI.showMoreButton.text}
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
                style={{ backgroundColor: "#D74599" }}
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
});

RelatedServicesSection.displayName = "RelatedServicesSection";

// Main Service Template Component
export default function ServiceTemplate({ serviceData }: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <ServiceBreadcrumb serviceData={serviceData} />
      </div>

      {/* Hero Section - Updated */}
      <ServiceHero serviceData={serviceData} />

      {/* Content Section - Reduced spacing */}
      <ServiceContent serviceData={serviceData} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* CTA Section after Why Choose Us */}
      <CTASection
        title={`Ready to Get Started with ${serviceData.name}?`}
        description="Our expert team is here to help you select the perfect solution for your project needs."
      />

      {/* Testimonials Section with Enhanced Stats */}
      <TestimonialsSection serviceData={serviceData} />

      {/* CTA Section after Testimonials */}
      <CTASection
        title="Get Help Today"
        description="Contact our professional team for immediate assistance and quality service."
      />

      {/* FAQ Section */}
      <FAQSection serviceData={serviceData} />

      {/* CTA Section 3 */}
      <CTASection
        title="Need Something Different?"
        description="We handle a complete range of home improvement services with professional results and reliable warranties."
      />

      {/* Enhanced Related Services Section */}
      <RelatedServicesSection />
    </div>
  );
}
