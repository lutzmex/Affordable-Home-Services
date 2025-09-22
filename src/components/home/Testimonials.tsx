"use client";

import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export function Testimonials() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Jennifer M.",
      location: "Santa Monica, CA",
      rating: 5,
      text: "Outstanding paver installation! Our new driveway looks incredible and has completely transformed our home's curb appeal. The team was professional, punctual, and cleaned up perfectly each day. Highly recommend their services.",
      date: "2024-03-15",
      service: "Paver Installation",
    },
    {
      id: 2,
      name: "Robert C.",
      location: "Thousand Oaks, CA",
      rating: 5,
      text: "Had all our windows replaced and couldn't be happier. The energy efficiency improvement is noticeable, and the installation was flawless. Great communication throughout the project and fair pricing.",
      date: "2024-03-10",
      service: "Window Replacement",
    },
    {
      id: 3,
      name: "Maria L.",
      location: "Pasadena, CA",
      rating: 5,
      text: "Emergency roof repair after storm damage. They responded within hours and had our leak fixed the same day. Professional crew, fair pricing, and excellent warranty. Will definitely use again.",
      date: "2024-03-08",
      service: "Roofing Repair",
    },
    {
      id: 4,
      name: "David W.",
      location: "Simi Valley, CA",
      rating: 5,
      text: "Exterior painting project exceeded our expectations. Excellent surface prep, premium paint quality, and attention to detail. Our home looks like new and we've received numerous compliments from neighbors.",
      date: "2024-03-05",
      service: "Exterior Painting",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers throughout Los Angeles and
            Ventura County who have experienced our quality home improvement
            services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl p-6 hover:bg-stone-50 transition-colors duration-300 border border-stone-100"
            >
              {/* Service Badge */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-stone-100 text-gray-700">
                {review.service}
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
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-gray-600 text-sm">{review.location}</div>
                <div className="text-gray-500 text-xs mt-1">
                  {formatDate(review.date)}
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
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">4.9/5</div>
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

          {/* Additional Trust Elements */}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="font-semibold text-gray-800">
                  Licensed & Insured
                </div>
                <div className="text-sm text-gray-600">CSLB Licensed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold text-gray-800">A+ BBB Rating</div>
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
}
