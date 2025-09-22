// src/app/services/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "../components/ServiceTemplate";
import { getServiceData, getAllServiceSlugs } from "../data";
import { ServiceData } from "../data/types";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs();

  return serviceSlugs.map((serviceSlug) => ({
    slug: serviceSlug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = getServiceData(slug);

  if (!serviceData) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  const { seo, name } = serviceData;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords.join(", "),
    robots: "index, follow",

    // Open Graph tags
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        {
          url: seo.openGraph.image,
          width: 1200,
          height: 630,
          alt: seo.openGraph.imageAlt,
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: "Affordable Home Service Company",
      url: seo.canonicalUrl || `/services/${slug}`,
    },

    // Twitter Card tags
    twitter: {
      card: "summary_large_image",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [seo.openGraph.image],
    },

    // Canonical URL
    alternates: {
      canonical: seo.canonicalUrl || `/services/${slug}`,
    },

    // Additional meta tags
    other: {
      "service.category": serviceData.category,
      "service.name": name,
      author: "Affordable Home Service Company",
      coverage: "Los Angeles & Ventura County",
      distribution: "Global",
      rating: "General",
      language: "EN",
      "business:contact_data:phone_number": serviceData.contact.phoneDisplay,
    },
  };
}

// Main page component
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const serviceData = getServiceData(slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceData.name,
            description: serviceData.hero.description,
            provider: {
              "@type": "LocalBusiness",
              name: "Affordable Home Service Company",
              telephone: serviceData.contact.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "California",
                addressCountry: "United States",
              },
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Los Angeles County",
              },
              {
                "@type": "Place",
                name: "Ventura County",
              },
            ],
            offers: {
              "@type": "Offer",
              priceRange: serviceData.pricing?.priceRange || "$$",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* FAQ Schema - Fixed to use serviceData.faqs directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: serviceData.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Custom Schemas */}
      {serviceData.customSchemas &&
        serviceData.customSchemas.length > 0 &&
        serviceData.customSchemas.map((customSchema) => (
          <script
            key={customSchema.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(customSchema.schema),
            }}
          />
        ))}

      {/* Service Template Component */}
      <ServiceTemplate serviceData={serviceData} />
    </>
  );
}
