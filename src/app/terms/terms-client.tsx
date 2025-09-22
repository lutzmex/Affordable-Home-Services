"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Globe,
  Users,
  Building,
  ArrowRight,
  Scale,
  Lock,
  Eye,
  Hammer,
  Home,
  Award,
  PhoneCall,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function TermsPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lastUpdated = "January 15, 2025";

  const termsSection = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: CheckCircle,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      content: [
        "By accessing and using the services provided by Affordable Home Services, you accept and agree to be bound by the terms and provisions of this agreement.",
        "If you do not agree to abide by the above, please do not use our home improvement services.",
        "These terms apply to all visitors, users, and customers who access or use our paver installation, window replacement, roofing, and exterior painting services.",
      ],
    },
    {
      id: 2,
      title: "Services Description",
      icon: Building,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      content: [
        "Affordable Home Services provides professional home improvement services including paver installation, window replacement and repair, roofing services, exterior painting, and related property improvement services.",
        "Our services are available throughout Los Angeles County and Ventura County through our network of licensed contractors and technicians.",
        "Service availability may vary by location and is subject to contractor availability, weather conditions, and project complexity.",
        "Emergency services are available for roofing repairs and window emergencies but may have different pricing and response time commitments.",
      ],
    },
    {
      id: 3,
      title: "Customer Responsibilities",
      icon: Users,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      content: [
        "Customers must provide accurate information about their property and the specific home improvement project requirements.",
        "Property owners must ensure safe access to all work areas and obtain necessary permits where required.",
        "Customers are responsible for clearing work areas and removing obstacles that may impede our contractors and technicians.",
        "Any safety hazards on the property must be disclosed prior to project commencement, including electrical, plumbing, or structural concerns.",
        "Payment for services must be made according to the agreed payment terms outlined in your project estimate.",
      ],
    },
    {
      id: 4,
      title: "Service Scope and Limitations",
      icon: AlertTriangle,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      content: [
        "Our home improvement services include paver installation, window services, roofing, and exterior painting as specified in your written estimate.",
        "Work quality meets industry standards, but natural variations in materials and environmental factors may affect final appearance.",
        "We are not responsible for pre-existing property damage, structural issues, or hidden conditions not apparent during initial assessment.",
        "Service may be delayed or rescheduled due to weather conditions, permit delays, material availability, or safety concerns.",
        "Additional work beyond the original scope requires written approval and may be subject to additional charges.",
      ],
    },
    {
      id: 5,
      title: "Privacy and Data Protection",
      icon: Lock,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      content: [
        "We collect and process personal information in accordance with our Privacy Policy and California privacy laws.",
        "Customer information is used solely for service delivery, project management, and business communication.",
        "We do not sell, rent, or share customer information with third parties except as required by law or for service delivery.",
        "Property photos and project documentation may be retained for quality assurance, warranty purposes, and portfolio use with consent.",
        "Customers have the right to request access to, correction of, or deletion of their personal information.",
      ],
    },
    {
      id: 6,
      title: "Pricing and Payment Terms",
      icon: Scale,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      content: [
        "Service pricing is provided as detailed estimates and may vary based on actual site conditions discovered during work.",
        "Payment terms are specified in your written estimate and typically require deposits for material orders and final payment upon completion.",
        "Emergency services and after-hours work may have premium pricing due to immediate response requirements.",
        "Additional charges may apply for extended travel, difficult site access, or time beyond standard project scope.",
        "Disputed charges must be reported in writing within 30 days of project completion for review and resolution.",
      ],
    },
    {
      id: 7,
      title: "Warranties and Guarantees",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      content: [
        "We guarantee our workmanship will be performed with professional competence and care according to industry standards.",
        "Material warranties are provided by manufacturers and vary by product - details provided with each estimate.",
        "Labor warranties typically range from 1-7 years depending on service type and are specified in your project agreement.",
        "Warranty claims must be reported promptly and are subject to normal wear and tear exclusions.",
        "Warranties do not cover damage from natural disasters, misuse, or modifications made by others.",
      ],
    },
    {
      id: 8,
      title: "Limitation of Liability",
      icon: Eye,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      content: [
        "Our liability is limited to the amount paid for our services on your specific project.",
        "We are not responsible for consequential damages, lost profits, or indirect damages beyond our direct service.",
        "We carry professional liability insurance and workers compensation as required by California law.",
        "Property damage caused by pre-existing conditions or hidden defects is not our responsibility.",
        "Customers are advised to maintain appropriate homeowners insurance coverage during and after projects.",
      ],
    },
    {
      id: 9,
      title: "Project Changes and Termination",
      icon: Clock,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      content: [
        "Either party may request project changes or termination with reasonable written notice and cause.",
        "Services may be terminated immediately for safety reasons, non-payment, or non-compliance with these terms.",
        "Partial refunds for terminated projects are calculated based on completed work and materials already ordered.",
        "Outstanding balances for completed work and materials remain due even after project termination.",
        "These terms remain in effect for all completed work and warranties even after project completion.",
      ],
    },
  ];

  const serviceAreas = [
    {
      title: "Los Angeles County",
      areas: [
        "Santa Monica",
        "Beverly Hills", 
        "Pasadena",
        "Glendale",
        "Burbank",
        "San Fernando Valley",
      ],
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
    {
      title: "Ventura County",
      areas: [
        "Thousand Oaks",
        "Simi Valley",
        "Oxnard",
        "Camarillo",
        "Ventura",
        "Surrounding Areas",
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
  ];

  const handleContactClick = () => {
    window.location.href = "tel:+18184536110";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:legal@affordablehomeservices.com";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-6 sm:mb-8 lg:mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <FileText className="h-5 w-5 mr-2" />
              Legal Information
            </div>

            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 leading-tight">
              Terms and Conditions
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                of Service
              </span>
            </h1>

            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our
              home improvement services. These terms govern your use of our
              paver installation, window replacement, roofing, and exterior
              painting services throughout Southern California.
            </p>

            {/* Service Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Building className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-lg text-gray-900 mb-2">
                  Paver Installation
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  Driveways, patios, walkways
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Home className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-lg text-gray-900 mb-2">
                  Window Services
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  Replacement & repair
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-lg text-gray-900 mb-2">
                  Roofing Solutions
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  Repair & replacement
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Award className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-lg text-gray-900 mb-2">
                  Exterior Painting
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  Professional painting
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-poppins font-medium text-gray-900">
                    Last Updated
                  </div>
                  <div className="font-poppins text-gray-600">
                    {lastUpdated}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-poppins font-medium text-xl text-blue-800 mb-3">
                    Important Notice
                  </h2>
                  <p className="font-poppins text-base sm:text-lg text-blue-700 leading-relaxed">
                    By scheduling an appointment, allowing our contractors on
                    your property, or using any of our home improvement
                    services, you acknowledge that you have read, understood,
                    and agree to be bound by these terms and conditions. If you
                    do not agree with any part of these terms, please do not
                    use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSection.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    className={`${section.bgColor} rounded-3xl shadow-lg ${section.borderColor} border p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-10 w-10 text-gray-900" />
                      </div>

                      <div className="flex-1">
                        <h2 className="font-poppins font-medium text-2xl text-gray-900 mb-6">
                          {section.id}. {section.title}
                        </h2>

                        <div className="space-y-4">
                          {section.content.map((paragraph, index) => (
                            <p
                              key={index}
                              className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 border border-green-300 text-green-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Globe className="h-5 w-5 mr-2" />
              Service Areas
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              Where These Terms Apply
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Southern California Coverage
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              These terms and conditions apply to all our home improvement
              services throughout our coverage areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className={`${area.bgColor} ${area.borderColor} border rounded-3xl shadow-lg p-8`}
              >
                <h3 className="font-poppins font-medium text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <Building className="h-6 w-6 text-pink-600" />
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.areas.map((location, idx) => (
                    <li
                      key={idx}
                      className="flex items-center font-poppins text-base text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="font-poppins font-medium text-2xl sm:text-3xl text-gray-900 mb-6">
                  Questions About These Terms?
                  <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                    We're Here to Help
                  </span>
                </h2>
                <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                  If you have any questions about these Terms and Conditions or
                  need clarification about your home improvement project, please
                  contact us. We're here to ensure you understand your rights
                  and responsibilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Phone */}
                <div
                  onClick={handleContactClick}
                  className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Phone className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-base sm:text-lg text-gray-900 mb-2">
                    Call Us Today
                  </h3>
                  <div className="font-ibm-plex-mono font-medium text-xl lg:text-2xl text-pink-700 mb-3">
                    (818) 453-6110
                  </div>
                  <p className="font-poppins text-sm text-gray-600">
                    Available Daily 7am-7pm
                  </p>
                </div>

                {/* Email */}
                <div
                  onClick={handleEmailClick}
                  className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-base sm:text-lg text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <p className="font-poppins font-medium text-sm lg:text-base text-green-700 mb-3">
                    legal@affordablehomeservices.com
                  </p>
                  <p className="font-poppins text-sm text-gray-600">
                    Response within 24 hours
                  </p>
                </div>

                {/* Legal Department */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 text-center">
                  <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-base sm:text-lg text-gray-900 mb-2">
                    Legal Department
                  </h3>
                  <p className="font-poppins text-base sm:text-lg text-blue-700 mb-3">
                    Professional Support
                  </p>
                  <p className="font-poppins text-sm text-gray-600">
                    Southern California Office
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 mx-auto"
                >
                  <PhoneCall className="h-5 w-5" />
                  Contact Legal Team
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-poppins font-medium text-xl text-gray-900 mb-4">
                  Legal Updates and Changes
                </h3>
                <div className="font-poppins text-sm text-gray-600 leading-relaxed space-y-3 max-w-3xl mx-auto">
                  <p>
                    These terms and conditions are effective as of{" "}
                    <strong className="text-gray-900">{lastUpdated}</strong> and
                    may be updated from time to time to reflect changes in our
                    services, legal requirements, or business practices.
                  </p>
                  <p>
                    Continued use of our home improvement services constitutes
                    acceptance of any changes to these terms. We recommend
                    reviewing these terms periodically, especially before
                    starting new projects with us.
                  </p>
                  <p>
                    <strong className="text-gray-900">
                      California Contractor License:
                    </strong>{" "}
                    We are licensed, bonded, and insured contractors operating
                    in compliance with California state regulations for home
                    improvement services.
                  </p>
                  <p className="font-poppins font-medium text-gray-900 border-t pt-4 mt-6">
                    Affordable Home Services | Southern California's Most
                    Trusted Home Improvement Company
                    <br />
                    Terms of Service | Effective: {lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}