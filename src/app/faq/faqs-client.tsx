"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  HelpCircle,
  Phone,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Star,
  Globe,
  Building,
  Home,
  Award,
  Hammer,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQsClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What home improvement services do you offer?",
      answer:
        "We specialize in four main services: professional paver installation for driveways, patios, walkways, and pool decks; energy-efficient window replacement and historic window restoration; complete roofing services including repair, replacement, and emergency services; and premium exterior painting for residential and commercial properties. All services are performed by licensed, insured contractors throughout Los Angeles and Ventura County with comprehensive warranties.",
      category: "General Services",
    },
    {
      id: 2,
      question: "How much do paver installation projects typically cost?",
      answer:
        "Paver installation costs vary by project size, material choice, and complexity. Driveway pavers typically range from $12-25 per square foot, patio pavers $15-30 per square foot, and pool deck pavers $18-35 per square foot. These prices include excavation, proper base preparation, paver installation, joint sand, and sealing. We provide detailed written estimates at no cost with transparent pricing and no hidden fees.",
      category: "Paver Services",
    },
    {
      id: 3,
      question: "Are you licensed and insured contractors?",
      answer:
        "Yes, we are fully licensed by the California Contractors State License Board (CSLB), bonded, and carry comprehensive liability insurance plus Workers' Compensation for all employees. We maintain an A+ Better Business Bureau rating and provide detailed warranties on all work performed. Our certifications include EPA compliance and industry safety standards. We're also members of professional contractor associations.",
      category: "Licensing & Insurance",
    },
    {
      id: 4,
      question: "Do you provide free estimates for all services?",
      answer:
        "Absolutely! We provide comprehensive written estimates for all projects at no cost. Our estimates include detailed material specifications, labor costs, project timeline, and warranty information. We believe in transparent pricing with no hidden fees or surprise costs - what we quote is what you pay. Our estimators will visit your property and provide personalized recommendations for your specific needs.",
      category: "Pricing & Estimates",
    },
    {
      id: 5,
      question: "What areas do you serve in Southern California?",
      answer:
        "We serve all of Los Angeles County including Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van Nuys, and the entire San Fernando Valley. We also serve all of Ventura County including Thousand Oaks, Simi Valley, Oxnard, Camarillo, and Ventura. Our local teams understand Southern California's unique climate, soil conditions, and building requirements to ensure optimal results for every project.",
      category: "Service Areas",
    },
    {
      id: 6,
      question: "How long do paver installations typically take?",
      answer:
        "Project timelines vary by size and complexity. Most driveway paver installations take 3-5 days, patio installations 4-7 days, and pool deck installations 5-8 days. This includes excavation, base preparation, paver installation, and final sealing. Weather conditions, permit requirements, and material availability may affect timelines. We provide realistic schedules and keep you updated throughout the entire process.",
      category: "Project Timelines",
    },
    {
      id: 7,
      question: "What types of windows do you install and replace?",
      answer:
        "We install and replace all types of windows including vinyl, wood, and aluminum frames in single-hung, double-hung, casement, sliding, bay, bow, and custom configurations. All our windows are Energy Star certified for maximum efficiency and utility savings. We also specialize in historic window restoration for older Los Angeles homes, preserving architectural character while improving energy performance and functionality.",
      category: "Window Services",
    },
    {
      id: 8,
      question: "Do you handle roofing emergencies and insurance claims?",
      answer:
        "Yes, we provide 24/7 emergency roofing services throughout Los Angeles and Ventura County with typically under 2-hour response times. Our certified roofers work directly with insurance companies to ensure proper claim handling for storm damage, leaks, and other covered repairs. We handle all documentation, work with adjusters to expedite your claim process, and can often bill insurance directly.",
      category: "Roofing Services",
    },
    {
      id: 9,
      question: "What exterior painting services do you provide?",
      answer:
        "We provide comprehensive exterior painting services including residential house painting, commercial building painting, fence and deck staining, surface preparation, power washing, and protective coatings. We use premium Sherwin-Williams and Benjamin Moore paints with UV protection and weather resistance. All painting projects include thorough surface preparation, crack repair, and come with 7-year workmanship warranties.",
      category: "Exterior Painting",
    },
    {
      id: 10,
      question: "How quickly can you start my home improvement project?",
      answer:
        "Most projects can be scheduled within 1-2 weeks of estimate approval, depending on the season and current demand. Emergency services like roof repairs are available 24/7 with same-day response. Complex projects requiring permits may take additional time for approval. We provide realistic schedules based on current workload, weather conditions, and material availability while keeping you informed throughout the process.",
      category: "Project Scheduling",
    },
    {
      id: 11,
      question: "Do you offer warranties on your work?",
      answer:
        "Yes, we provide comprehensive warranties on all our work. Paver installations include lifetime material warranties and 7-year workmanship warranties. Window installations have manufacturer warranties (typically 10-20 years) plus our installation guarantee. Roofing projects include 25-year material warranties and workmanship guarantees. Exterior painting includes 7-year workmanship warranties. All warranties are provided in writing and backed by our A+ BBB rating.",
      category: "Warranties",
    },
    {
      id: 12,
      question: "Can you help with permits and HOA approvals?",
      answer:
        "Absolutely! We handle all necessary permits for your project and can assist with HOA approvals and architectural review processes. Our team is familiar with Los Angeles County and Ventura County building requirements, zoning laws, and permit procedures. We ensure all work meets or exceeds local building codes and help navigate the approval process efficiently to avoid delays.",
      category: "Permits & Approvals",
    },
    {
      id: 13,
      question: "What should I do to prepare for my home improvement project?",
      answer:
        "Before we begin your project, please clear the work area of vehicles, outdoor furniture, and personal items. For paver installations, mark any underground utilities or irrigation lines. For roofing projects, protect valuable items in your attic from potential dust. We'll provide a detailed pre-project checklist specific to your service to ensure smooth project execution and protect your property throughout the process.",
      category: "Project Preparation",
    },
    {
      id: 14,
      question: "Do you offer financing options for larger projects?",
      answer:
        "Yes, we offer flexible financing options for qualified customers on projects over $5,000. We work with reputable financing companies to provide competitive rates and payment plans that fit your budget. Options include same-as-cash programs, low monthly payments, and seasonal payment plans. Our team can help you explore financing options during your free estimate consultation.",
      category: "Financing",
    },
    {
      id: 15,
      question: "What makes your company different from other contractors?",
      answer:
        "We combine 13+ years of experience with personalized service, transparent pricing, and exceptional quality. Our team consists of licensed professionals who treat your property with respect and deliver superior craftsmanship. We're locally owned and operated, maintain an A+ BBB rating, provide comprehensive warranties, and stand behind our work. Our customers consistently rate us 4.9/5 stars for reliability, quality, and customer service.",
      category: "Company Difference",
    },
    {
      id: 16,
      question: "Can you work around my schedule and minimize disruption?",
      answer:
        "Absolutely! We understand that home improvement projects can be disruptive to your daily routine. We work with you to schedule work during convenient hours, maintain clean and safe work areas, and minimize noise and dust. For occupied commercial properties, we can work evenings or weekends. We communicate daily about progress and any temporary inconveniences, ensuring your comfort throughout the project.",
      category: "Scheduling Flexibility",
    },
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const trustStats = [
    { 
      icon: Shield, 
      value: "Licensed & Insured", 
      desc: "CSLB Licensed",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
    { 
      icon: Star, 
      value: "4.9/5 Rating", 
      desc: "15,000+ reviews",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100", 
      borderColor: "border-green-200",
    },
    { 
      icon: Clock, 
      value: "13+ Years", 
      desc: "Experience",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    { 
      icon: Users, 
      value: "Expert Team", 
      desc: "Certified contractors",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
  ];

  const services = [
    {
      icon: Building,
      title: "Paver Installation",
      description: "Driveways, patios, walkways, pool decks",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
    {
      icon: Home,
      title: "Window Services", 
      description: "Replacement, installation, restoration",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      icon: Shield,
      title: "Roofing Solutions",
      description: "Repair, replacement, emergency service",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", 
      borderColor: "border-blue-200",
    },
    {
      icon: Award,
      title: "Exterior Painting",
      description: "Residential & commercial painting",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      borderColor: "border-pink-200", 
    },
  ];

  const handleContactClick = () => {
    window.location.href = "tel:+18184536110";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@affordablehomeservices.com";
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-pink-200 border border-pink-300 text-pink-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-6 shadow-sm">
            <HelpCircle className="h-5 w-5 mr-2" />
            Frequently Asked Questions
          </div>
          <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-6 leading-tight">
            Home Improvement Questions
            <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
              Answered by Experts
            </span>
          </h1>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our paver installation, window replacement, 
            roofing services, and exterior painting. Expert answers from licensed contractors 
            with 13+ years of Southern California experience.
          </p>
        </div>

        {/* Services Overview */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
              >
                <IconComponent className="h-12 w-12 text-gray-900 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-base sm:text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-poppins text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {trustStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bgColor} ${stat.borderColor} border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
              >
                <IconComponent className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                <div className="font-poppins font-medium text-lg text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="font-poppins text-sm text-gray-600">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div
            className={`space-y-3 sm:space-y-4 mb-12 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 sm:py-6 text-left flex items-center justify-between group"
                  aria-expanded={expandedFaq === faq.id}
                >
                  <span className="font-poppins font-medium text-sm sm:text-base text-gray-900 pr-4 sm:pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      expandedFaq === faq.id ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  </div>
                </button>

                {expandedFaq === faq.id && (
                  <div className="pb-4 sm:pb-6">
                    <p className="font-poppins text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-poppins font-medium text-xl sm:text-2xl text-gray-900 mb-2">
                  Proudly Serving Southern California
                </h3>
                <p className="font-poppins text-base text-gray-700">
                  Professional home improvement services throughout our coverage areas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-2xl p-6">
                  <h4 className="font-poppins font-medium text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-pink-600" />
                    Los Angeles County
                  </h4>
                  <p className="font-poppins text-gray-700 text-sm leading-relaxed">
                    Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van Nuys, 
                    San Fernando Valley, and surrounding areas.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl p-6">
                  <h4 className="font-poppins font-medium text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    Ventura County
                  </h4>
                  <p className="font-poppins text-gray-700 text-sm leading-relaxed">
                    Thousand Oaks, Simi Valley, Oxnard, Camarillo, Ventura, 
                    and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div
            className={`text-center transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 border border-green-300 text-green-800 px-4 py-2 rounded-full font-poppins font-medium text-sm mb-6">
                  <Globe className="h-4 w-4 mr-2" />
                  Still Have Questions?
                </div>

                <h2 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
                  Get Expert Help Today
                  <span className="block bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                    Free Consultation Available
                  </span>
                </h2>
                <p className="font-poppins text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                  Can't find what you're looking for? Our licensed home improvement 
                  experts are ready to provide personalized assistance and answer any 
                  specific questions about your paver, window, roofing, or painting project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <PhoneCall className="h-5 w-5" />
                    Call (818) 453-6110
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={handleEmailClick}
                    className="bg-white border border-gray-200 hover:border-green-300 text-gray-800 hover:text-green-800 px-8 py-4 rounded-2xl font-poppins font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us Today
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-poppins text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Free Estimates</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>A+ BBB Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}