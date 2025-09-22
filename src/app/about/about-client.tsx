"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Target,
  Globe,
  Heart,
  Clock,
  Building,
  Phone,
  ArrowRight,
  Eye,
  Lightbulb,
  HandHeart,
  Hammer,
  Home,
  Sparkles,
  Check,
  PhoneCall,
} from "lucide-react";

export default function AboutClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyStats = [
    {
      id: 1,
      number: "13+",
      label: "Years Experience",
      description: "Since 2010",
      color: "text-pink-600",
    },
    {
      id: 2,
      number: "15k+",
      label: "Projects Done",
      description: "Satisfied customers",
      color: "text-green-600",
    },
    {
      id: 3,
      number: "4.9/5",
      label: "Customer Rating",
      description: "Exceptional reviews",
      color: "text-pink-600",
    },
    {
      id: 4,
      number: "24/7",
      label: "Emergency Service",
      description: "Always available",
      color: "text-green-600",
    },
  ];

  const coreValues = [
    {
      id: 1,
      title: "Quality Craftsmanship",
      description:
        "We deliver superior results using premium materials and expert installation techniques for lasting beauty and durability.",
      icon: Award,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
    {
      id: 2,
      title: "Honest Pricing",
      description:
        "Transparent estimates with no hidden costs. What we quote is what you pay, guaranteed in writing before work begins.",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      id: 3,
      title: "Professional Service",
      description:
        "Licensed, insured contractors who respect your time, property, and investment with reliable, punctual service.",
      icon: Users,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority. We stand behind our work with comprehensive warranties and ongoing support.",
      icon: HandHeart,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Started with a vision to provide quality home improvement services to Los Angeles families.",
      gradient: "from-pink-100 to-pink-200",
    },
    {
      year: "2013",
      title: "Service Expansion",
      description:
        "Added window replacement and roofing services to complement our paver installation expertise.",
      gradient: "from-green-100 to-green-200",
    },
    {
      year: "2016",
      title: "Ventura County",
      description:
        "Extended services to Ventura County, serving Thousand Oaks, Simi Valley, and surrounding areas.",
      gradient: "from-blue-100 to-blue-200",
    },
    {
      year: "2018",
      title: "10,000th Project",
      description:
        "Reached major milestone completing our 10,000th home improvement project.",
      gradient: "from-pink-100 to-pink-200",
    },
    {
      year: "2021",
      title: "Award Recognition",
      description:
        "Earned A+ Better Business Bureau rating and numerous customer service awards.",
      gradient: "from-green-100 to-green-200",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as Southern California's most trusted home improvement company.",
      gradient: "from-blue-100 to-blue-200",
    },
  ];

  const services = [
    {
      icon: Building,
      title: "Paver Installation",
      description:
        "Driveways, patios, walkways, and pool decks with professional design and installation.",
      features: [
        "Custom design consultation",
        "Premium materials",
        "Lifetime warranty",
      ],
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: Home,
      title: "Window Services",
      description:
        "Energy-efficient replacement and historic window restoration with expert craftsmanship.",
      features: [
        "Energy Star certified",
        "Professional installation",
        "Historic restoration",
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: "Roofing Solutions",
      description:
        "Complete roofing services from emergency repairs to full replacement systems.",
      features: [
        "24/7 emergency service",
        "Insurance assistance",
        "Premium materials",
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      title: "Exterior Painting",
      description:
        "Professional painting services that enhance curb appeal and protect your investment.",
      features: ["Premium paints", "Surface preparation", "Color consultation"],
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600",
    },
  ];

  const certifications = [
    "CSLB Licensed",
    "Fully Insured",
    "Bonded Contractors",
    "A+ BBB Rating",
    "Warranty Included",
    "Local Experts",
  ];

  const handleCallClick = () => {
    window.location.href = "tel:+18184536110";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center bg-gray-100 border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-8 shadow-sm">
              <Building className="h-5 w-5 mr-2" />
              About Affordable Home Services
            </div>

            <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 leading-tight">
              Southern California's Most Trusted
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Home Improvement Company
              </span>
            </h1>

            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              For over 13 years, we've been transforming homes throughout Los
              Angeles and Ventura County with quality paver installation, window
              replacement, roofing services, and exterior painting. Our
              commitment to craftsmanship and customer satisfaction has made us
              the trusted choice for thousands of homeowners.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {companyStats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200"
                >
                  <div
                    className={`font-poppins font-medium text-4xl lg:text-5xl ${stat.color} mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className="font-poppins text-sm text-gray-800">
                    {stat.label}
                  </div>
                  <div className="font-poppins text-xs text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 border border-green-300 text-green-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
                <Heart className="h-5 w-5 mr-2" />
                Our Story
              </div>

              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
                Built on a Foundation of
                <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                  Quality and Trust
                </span>
              </h2>

              <div className="space-y-6 font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010 with a simple mission: to provide Southern
                  California homeowners with exceptional home improvement
                  services at fair prices. What started as a small paver
                  installation company has grown into a comprehensive home
                  improvement service trusted by thousands of families.
                </p>

                <p>
                  We recognized early that homeowners needed a contractor they
                  could trust - one that would show up on time, provide honest
                  estimates, use quality materials, and stand behind their work.
                  Our commitment to these principles has been the foundation of
                  our success.
                </p>

                <p>
                  Today, with over 15,000 completed projects throughout Los
                  Angeles and Ventura County, we continue to uphold the same
                  values that have made us Southern California's most trusted
                  home improvement company.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleCallClick}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  Call (818) 453-6110
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Mission/Vision */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="h-12 w-12 text-pink-600" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                  To transform homes throughout Southern California with quality
                  craftsmanship, honest pricing, and exceptional service that
                  exceeds expectations and creates lasting value.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="h-12 w-12 text-green-600" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed">
                  To be the most trusted home improvement company in Southern
                  California, known for quality work, fair pricing, and turning
                  houses into beautiful, functional homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Star className="h-5 w-5 mr-2" />
              Core Values
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              The Principles That
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Guide Our Work
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Our values shape every project we undertake and every relationship
              we build with our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  className={`${value.bgColor} rounded-3xl shadow-lg ${value.borderColor} border p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <IconComponent className="h-16 w-16 text-gray-900 mb-6" />
                  <h3 className="font-poppins font-medium text-lg sm:text-xl text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-base text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Hammer className="h-5 w-5 mr-2" />
              Our Services
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              Complete Home Improvement
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              From beautiful paver installations to energy-efficient windows, we
              provide comprehensive home improvement services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`${service.bgColor} rounded-3xl shadow-lg ${service.borderColor} border p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <IconComponent
                    className={`h-16 w-16 ${service.iconColor} mb-6`}
                  />
                  <h3 className="font-poppins font-medium text-lg sm:text-xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-base text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-poppins font-medium text-sm text-gray-800 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-pink-600" />
                      Key Features:
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center font-poppins text-sm text-gray-600"
                      >
                        <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 border border-green-300 text-green-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <Clock className="h-5 w-5 mr-2" />
              Our Journey
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              13+ Years of
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Growth & Excellence
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Key milestones in our journey to becoming Southern California's
              most trusted home improvement company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${milestone.gradient} rounded-3xl shadow-lg border border-gray-200 p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 px-4 py-2 rounded-full font-poppins font-medium text-sm mb-6 inline-block">
                  {milestone.year}
                </div>
                <h3 className="font-poppins font-medium text-lg sm:text-xl text-gray-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="font-poppins text-base text-gray-700 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Why Choose Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
                <Award className="h-5 w-5 mr-2" />
                Why Choose Us
              </div>

              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
                The Affordable Home Services
                <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                  Advantage
                </span>
              </h2>

              <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                When you choose us, you're choosing a company that puts your
                satisfaction first with proven expertise and reliable service.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    Licensed & Insured Contractors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    Free Detailed Estimates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    Quality Materials & Workmanship
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    Comprehensive Warranties
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    Local Southern California Experts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-poppins text-base text-gray-900">
                    A+ Better Business Bureau Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Trust */}
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-medium text-xl sm:text-2xl text-gray-900 mb-2">
                    Licensed & Certified
                  </h3>
                  <p className="font-poppins text-base text-gray-600">
                    Maintaining the highest industry standards
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
                    >
                      <div className="font-poppins font-medium text-sm text-gray-900">
                        {cert}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 border border-pink-200 rounded-2xl text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="font-poppins font-medium text-xl sm:text-2xl text-gray-900 mb-1">
                    4.9/5 Rating
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    Over 15,000 Satisfied Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
              <MapPin className="h-5 w-5 mr-2" />
              Service Areas
            </div>
            <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
              Proudly Serving
              <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                Southern California
              </span>
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              We provide professional home improvement services throughout Los
              Angeles County and Ventura County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-3xl p-8 shadow-lg">
              <h3 className="font-poppins font-medium text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-pink-600" />
                Los Angeles County
              </h3>
              <p className="font-poppins text-gray-700 mb-4">
                Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van
                Nuys, San Fernando Valley, and surrounding areas.
              </p>
              <div className="font-poppins text-gray-600 text-sm">
                Major metropolitan area coverage
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-3xl p-8 shadow-lg">
              <h3 className="font-poppins font-medium text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-green-600" />
                Ventura County
              </h3>
              <p className="font-poppins text-gray-700 mb-4">
                Thousand Oaks, Simi Valley, Oxnard, Camarillo, Ventura, and
                surrounding communities.
              </p>
              <div className="font-poppins text-gray-600 text-sm">
                Complete county coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6">
                Ready to Transform Your Home?
                <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                  Contact Us Today
                </span>
              </h2>

              <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their
                home improvement projects. Contact us today for a free
                consultation and detailed estimate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCallClick}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call (818) 453-6110
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  href="/services"
                  className="bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-3"
                >
                  <Globe className="h-5 w-5" />
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 font-poppins text-sm text-gray-500">
                Licensed & Insured • Free Estimates • Serving LA & Ventura
                County
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
