"use client";

import React, { useState, useEffect } from "react";
import { Plus, Phone, MessageCircle } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export function HomeFaqs() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What services does Affordable Home Services provide?",
      answer:
        "We offer comprehensive handyman and home improvement services including paver installation for patios and driveways, window replacement and repair, complete roofing solutions, and professional exterior painting. We serve residential and commercial properties throughout Los Angeles and Ventura County with licensed, insured professionals.",
    },
    {
      id: 2,
      question: "Do you offer free estimates for projects?",
      answer:
        "Yes! We provide completely free, no-obligation estimates for all our services. Our team will assess your project, discuss your needs, and give you a detailed quote with transparent pricing. There are no hidden fees or surprise charges - you'll know exactly what to expect before we start.",
    },
    {
      id: 3,
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. We are fully licensed, bonded, and insured for your complete protection. Our team carries comprehensive liability insurance and workers' compensation coverage. We maintain all required certifications and permits to ensure your project meets local building codes and safety standards.",
    },
    {
      id: 4,
      question: "Which areas in Los Angeles and Ventura County do you serve?",
      answer:
        "We proudly serve all of Los Angeles County including the San Fernando Valley, Pasadena, Glendale, Burbank, Santa Clarita, Long Beach, and surrounding areas. In Ventura County, we cover Thousand Oaks, Simi Valley, Oxnard, Camarillo, Ventura, and nearby cities. Contact us to confirm service availability in your specific location.",
    },
    {
      id: 5,
      question: "How quickly can you start my project?",
      answer:
        "We understand that timing matters. For many projects, we can schedule an initial consultation within 24-48 hours. Emergency repairs and urgent issues often receive same-day service. Once you approve the estimate, most projects can begin within a week, depending on the scope and material availability.",
    },
    {
      id: 6,
      question: "What types of paver installations do you do?",
      answer:
        "We specialize in all types of paver projects including driveway pavers, patio installations, pool deck pavers, walkways, and outdoor entertainment areas. We work with various materials like concrete pavers, natural stone, and brick. Our installations include proper base preparation, grading for drainage, and professional sealing for long-lasting results.",
    },
    {
      id: 7,
      question: "Do you handle emergency roofing repairs?",
      answer:
        "Yes, we provide 24/7 emergency roofing services for urgent situations like leaks, storm damage, or structural concerns. Our rapid response team will assess the damage, perform temporary repairs to prevent further issues, and provide a detailed plan for permanent repairs. We also work with insurance companies for claim assistance.",
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment options for your convenience including cash, checks, all major credit cards, and digital payment platforms. For larger projects, we offer flexible payment schedules with deposits and progress payments. We'll discuss payment terms clearly in your estimate before any work begins.",
    },
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-pink-50 text-pink-700 px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-pink-100">
            <MessageCircle className="h-5 w-5 mr-2" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Questions About Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              Home Services
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our handyman and home improvement services in Los Angeles and Ventura County.
          </p>
        </div>

        {/* FAQ Items - Original Design with Color Updates */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border-b border-gray-200 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-4 sm:py-6 text-left flex items-center justify-between group hover:bg-pink-50 transition-colors duration-200 rounded-lg px-4"
                aria-expanded={expandedFaq === faq.id}
              >
                <span className={`font-semibold text-sm sm:text-base pr-4 sm:pr-8 transition-colors duration-200 ${
                  expandedFaq === faq.id ? "text-pink-600" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-all duration-300 ${
                    expandedFaq === faq.id ? "rotate-45 text-pink-600" : "text-gray-400"
                  }`}
                >
                  <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4 sm:pb-6 px-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Updated CTA Box - Compact Size */}
        <div className="text-center mt-12 sm:mt-16">
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
                Still Have Questions?
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                Call us today for a free consultation. Our friendly team is ready to help with your home improvement project.
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

export default HomeFaqs;