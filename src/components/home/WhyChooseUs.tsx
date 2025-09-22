"use client";

import React from "react";
import {
  Phone,
  Calendar,
  Hammer,
  CheckCircle,
  ArrowRight,
  Award,
  Shield,
  Clock,
  Users,
  Star,
  Truck,
} from "lucide-react";

export function WhyChooseUs() {
  const processSteps = [
    {
      id: 1,
      title: "Free Consultation",
      description:
        "Call us for a free consultation and detailed estimate. Our expert team will assess your project needs and provide transparent pricing with no hidden costs.",
      icon: Phone,
      step: 1,
    },
    {
      id: 2,
      title: "Design & Planning",
      description:
        "We create detailed project plans, handle all permits, and schedule materials. Our design team works with you to ensure every detail meets your vision and budget.",
      icon: Calendar,
      step: 2,
    },
    {
      id: 3,
      title: "Professional Installation",
      description:
        "Our licensed, insured craftsmen complete your project on schedule with minimal disruption. Daily cleanup and progress updates keep you informed throughout.",
      icon: Hammer,
      step: 3,
    },
    {
      id: 4,
      title: "Quality Guarantee",
      description:
        "Final inspection, cleanup, and warranty registration ensure your complete satisfaction. We stand behind our work with comprehensive warranties and ongoing support.",
      icon: CheckCircle,
      step: 4,
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Licensed & Insured",
      description:
        "CSLB licensed contractors with full liability and workers' comp coverage",
    },
    {
      icon: Shield,
      title: "Comprehensive Warranties",
      description:
        "Up to 25-year material warranties and 10-year workmanship guarantees",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description:
        "Emergency repairs and expedited project scheduling available",
    },
    {
      icon: Users,
      title: "Local Expert Team",
      description:
        "Southern California specialists with 13+ years of experience",
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "4.9/5 rating with over 15,000 satisfied customers",
    },
    {
      icon: Truck,
      title: "Free Estimates",
      description:
        "Detailed written estimates with no hidden costs or surprises",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Transform Your Home
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process from consultation to completion with
            professional results guaranteed.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="text-center p-6 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300 border border-stone-100"
              >
                {/* Step Number Above Icon */}
                <div className="mb-6">
                  <div className="text-sm font-bold mb-4 text-gray-600">
                    Step {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 text-white rounded-full">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
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

        {/* Why Choose Us Features */}
        <div
          style={{ backgroundColor: "#F0F8F0" }}
          className="rounded-2xl p-8 mb-16 border border-stone-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Affordable Home Services?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
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

        {/* Service Highlights */}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our expert team today for a free consultation and detailed
              estimate for your home improvement project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border border-stone-200 text-gray-700"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+18184536110"
                className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "#D74599",
                }}
              >
                <Phone className="h-5 w-5" />
                Call Now: (818) 453-6110
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
