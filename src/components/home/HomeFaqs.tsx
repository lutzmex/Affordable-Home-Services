"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export function HomeFaqs() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What home improvement services do you offer?",
      answer:
        "We specialize in four main services: professional paver installation for driveways, patios, and pool decks; energy-efficient window replacement and restoration; complete roofing services including repair and replacement; and exterior painting for residential and commercial properties. All services are performed by licensed, insured contractors throughout Los Angeles and Ventura County.",
    },
    {
      id: 2,
      question: "How much do paver installation projects typically cost?",
      answer:
        "Paver installation costs vary by project size and material choice. Driveway pavers typically range from $12-18 per square foot, patio pavers $15-25 per square foot, and pool deck pavers $18-28 per square foot. These prices include excavation, base preparation, paver installation, joint sand, and sealing. We provide detailed written estimates at no cost.",
    },
    {
      id: 3,
      question: "Are you licensed and insured contractors?",
      answer:
        "Yes, we are fully licensed by the California Contractors State License Board (License #XXXXXX), bonded, and carry comprehensive liability insurance plus Workers' Compensation for all employees. We maintain an A+ Better Business Bureau rating and provide detailed warranties on all work performed.",
    },
    {
      id: 4,
      question: "Do you provide free estimates for all services?",
      answer:
        "Absolutely! We provide comprehensive written estimates for all projects at no cost. Our estimates include detailed material specifications, labor costs, project timeline, and warranty information. We believe in transparent pricing with no hidden fees or surprise costs - what we quote is what you pay.",
    },
    {
      id: 5,
      question: "What areas do you serve in Southern California?",
      answer:
        "We serve all of Los Angeles County including Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, Van Nuys, and the entire San Fernando Valley. We also serve all of Ventura County including Thousand Oaks, Simi Valley, Oxnard, Camarillo, and Ventura. Our local teams understand Southern California's unique climate and building requirements.",
    },
    {
      id: 6,
      question: "How long do paver installations typically take?",
      answer:
        "Project timelines vary by size and complexity. Most driveway paver installations take 3-5 days, patio installations 4-7 days, and pool deck installations 5-8 days. This includes excavation, base preparation, paver installation, and final sealing. Weather conditions and permit requirements may affect timelines.",
    },
    {
      id: 7,
      question: "What types of windows do you install and replace?",
      answer:
        "We install and replace all types of windows including vinyl, wood, and aluminum frames in single-hung, double-hung, casement, sliding, and custom configurations. All our windows are Energy Star certified for maximum efficiency. We also specialize in historic window restoration for older Los Angeles homes, preserving character while improving performance.",
    },
    {
      id: 8,
      question: "Do you handle roofing emergencies and insurance claims?",
      answer:
        "Yes, we provide 24/7 emergency roofing services throughout Los Angeles and Ventura County. Our certified roofers work directly with insurance companies to ensure proper claim handling for storm damage, leaks, and other covered repairs. We handle all documentation and work with adjusters to expedite your claim process.",
    },
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Home Improvement Questions
          </h2>
          <p className="text-lg text-gray-600">Answered</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Common questions about our paver, window, roofing, and painting
            services in Los Angeles & Ventura County.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-stone-200">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-4 sm:py-6 text-left flex items-center justify-between group"
                aria-expanded={expandedFaq === faq.id}
              >
                <span className="font-medium text-sm sm:text-base text-gray-900 pr-4 sm:pr-8">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    expandedFaq === faq.id ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus h-4 w-4 sm:h-5 sm:w-5 text-gray-500"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
              </button>

              {expandedFaq === faq.id && (
                <div className="pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly team is here to help you choose the perfect solution
              for your home improvement project.
            </p>
            <a
              href="tel:+18184536110"
              className="inline-flex items-center gap-2 text-white hover:bg-opacity-90 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: "#D74599",
              }}
            >
              Call Us Now: (818) 453-6110
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
