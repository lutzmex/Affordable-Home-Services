import React, { memo } from "react";

// Memoized section component
const ContentBlock = memo(
  ({
    title,
    children,
    isH2 = false,
  }: {
    title: string;
    children: React.ReactNode;
    isH2?: boolean;
  }) => {
    const HeadingComponent = isH2 ? "h2" : "h3";
    const headingClass = isH2
      ? "font-medium text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight mb-6"
      : "font-medium text-base sm:text-lg lg:text-xl text-gray-800 mb-4 sm:mb-6";

    return (
      <div>
        <HeadingComponent className={headingClass}>{title}</HeadingComponent>
        {children}
      </div>
    );
  },
);

ContentBlock.displayName = "ContentBlock";

const ContentSection: React.FC = memo(() => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <h2 className="font-medium text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight">
            Professional Home Improvement Services Affordablehomeservices.com
            Serves Los Angeles & Ventura County
          </h2>

          {/* Main intro paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Affordablehomeservices.com is Southern California's most trusted
            home improvement company, serving homeowners and businesses
            throughout Los Angeles and Ventura County. Our expert team
            specializes in paver installation, window replacement, roofing
            services, and exterior painting. We combine quality craftsmanship
            with affordable pricing to transform your property with lasting
            results.
          </p>

          {/* Extended Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Section 1 - Paver Services */}
            <ContentBlock title="Professional Paver Installation for Driveways, Patios and Pool Decks">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Transform your outdoor spaces with our professional paver
                installation services. We specialize in interlocking concrete
                pavers, natural stone pavers, and decorative brick pavers for
                driveways, patios, walkways, and pool decks. Our experienced
                team handles every aspect from excavation and base preparation
                to final installation and sealing, ensuring your paved surfaces
                last for decades.
              </p>
            </ContentBlock>

            {/* Section 2 - Window Services */}
            <ContentBlock title="Energy-Efficient Window Replacement and Historic Window Restoration">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Upgrade your home's comfort and energy efficiency with our
                professional window replacement services. We install vinyl,
                wood, and aluminum windows from top manufacturers, all Energy
                Star certified for maximum savings. Our team also specializes in
                historic window restoration, preserving the character of older
                Los Angeles homes while improving their performance and energy
                efficiency.
              </p>
            </ContentBlock>

            {/* Section 3 - Roofing Services */}
            <ContentBlock title="Complete Roofing Services Including Emergency Repair and Replacement">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Protect your most valuable investment with our comprehensive
                roofing services. From emergency leak repairs to complete roof
                replacements, we handle tile, asphalt shingle, metal, and flat
                roofing systems. Our certified roofers provide 24/7 emergency
                service throughout Los Angeles County and work directly with
                insurance companies to ensure your claims are handled properly.
              </p>
            </ContentBlock>

            {/* Section 4 - Exterior Painting */}
            <ContentBlock title="Professional Exterior Painting for Homes and Commercial Buildings">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Enhance your property's curb appeal and protection with our
                professional exterior painting services. We use premium paints
                from Sherwin-Williams and Benjamin Moore, with extensive surface
                preparation including power washing, scraping, and priming. Our
                experienced painters handle stucco, wood siding, trim work, and
                specialty coatings for both residential and commercial
                properties.
              </p>
            </ContentBlock>

            {/* Section 5 - Service Areas */}
            <ContentBlock title="Serving All of Los Angeles County and Ventura County">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our service area covers the entire Los Angeles metropolitan area
                including Santa Monica, Beverly Hills, Pasadena, Glendale,
                Burbank, Van Nuys, and the San Fernando Valley. We also serve
                all of Ventura County including Thousand Oaks, Simi Valley,
                Oxnard, Camarillo, and Ventura. Our local teams understand the
                unique challenges of Southern California climate and building
                codes.
              </p>
            </ContentBlock>

            {/* Section 6 - Licensing and Insurance */}
            <ContentBlock title="Licensed, Bonded and Insured Contractors With Proven Track Record">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                All of our contractors are fully licensed by the California
                Contractors State License Board, bonded, and carry comprehensive
                liability insurance. We maintain Workers' Compensation coverage
                for all employees and provide detailed warranties on all work.
                Our A+ Better Business Bureau rating and thousands of satisfied
                customers demonstrate our commitment to quality and customer
                service.
              </p>
            </ContentBlock>

            {/* Section 7 - Free Estimates */}
            <ContentBlock title="Free Detailed Estimates With No Hidden Costs or Surprises">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We provide comprehensive written estimates for all projects at
                no cost. Our estimates include detailed material specifications,
                labor costs, timeline, and warranty information. We believe in
                transparent pricing with no hidden fees, change orders, or
                surprise costs. What we quote is what you pay, guaranteed in
                writing before any work begins.
              </p>
            </ContentBlock>

            {/* Section 8 - Material Quality */}
            <ContentBlock title="Premium Materials From Trusted Manufacturers and Suppliers">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We source our materials exclusively from established
                manufacturers and distributors. Our paver suppliers include
                Belgard, Unilock, and Pavestone. Window products come from
                Milgard, Andersen, and Pella. Roofing materials are supplied by
                GAF, Owens Corning, and CertainTeed. All paints are premium
                brands including Sherwin-Williams Duration and Benjamin Moore
                Aura exterior finishes.
              </p>
            </ContentBlock>

            {/* Section 9 - Project Management */}
            <ContentBlock title="Professional Project Management and Timeline Coordination">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Every project is assigned a dedicated project manager who
                coordinates all aspects of your home improvement. From initial
                permits and material delivery to daily progress updates and
                final inspection, we keep you informed every step of the way.
                Our project managers handle all city inspections, utility
                coordination, and ensure minimal disruption to your daily
                routine.
              </p>
            </ContentBlock>

            {/* Section 10 - Specialty Services */}
            <ContentBlock title="Specialized Services Including HOA Compliance and Historic Preservation">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We understand the unique requirements of Homeowners Associations
                and historic districts throughout Los Angeles. Our team has
                extensive experience working with HOA architectural committees
                to ensure compliance with community standards. We also
                specialize in historic preservation projects, maintaining the
                authentic character of vintage properties while adding modern
                functionality.
              </p>
            </ContentBlock>

            {/* Section 11 - Seasonal Services */}
            <ContentBlock title="Year-Round Services With Seasonal Maintenance Programs">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our services are available year-round with seasonal maintenance
                programs to keep your home in peak condition. Spring services
                include paver cleaning and sealing, window washing, and exterior
                touch-up painting. Fall maintenance includes gutter cleaning,
                roof inspections, and exterior surface preparation. We also
                provide emergency storm damage repair throughout the year.
              </p>
            </ContentBlock>

            {/* Section 12 - Customer Service */}
            <ContentBlock title="Exceptional Customer Service With Local Teams and Support">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our customer service team is based locally in Los Angeles and
                provides support in both English and Spanish. We respond to all
                inquiries within 24 hours and provide same-day emergency service
                when needed. Our office staff includes experienced estimators
                who can answer technical questions and help you choose the right
                materials and finishes for your specific project and budget.
              </p>
            </ContentBlock>

            {/* Section 13 - Warranty and Guarantees */}
            <ContentBlock title="Comprehensive Warranties and Satisfaction Guarantees on All Work">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We stand behind our work with comprehensive warranties that
                exceed industry standards. Paver installations include a 5-year
                warranty on workmanship and lifetime warranty on materials.
                Window installations are backed by manufacturer warranties up to
                20 years plus our 5-year installation warranty. Roofing work
                includes up to 25-year material warranties and 10-year
                workmanship guarantees.
              </p>
            </ContentBlock>

            {/* Section 14 - Technology and Innovation */}
            <ContentBlock title="Modern Technology and Innovative Installation Techniques">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We utilize the latest technology and installation techniques to
                ensure superior results. Our paver installations use advanced
                base preparation methods and polymeric sand systems. Window
                installations include proper flashing, insulation, and
                weatherproofing techniques. We use drone technology for roof
                inspections and thermal imaging to identify energy loss and
                moisture issues.
              </p>
            </ContentBlock>

            {/* Section 15 - Environmental Responsibility */}
            <ContentBlock title="Environmentally Responsible Practices and Sustainable Materials">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                We are committed to environmental responsibility in all our
                projects. Our paver installations include permeable options that
                reduce stormwater runoff. We recycle old windows, roofing
                materials, and construction debris whenever possible. Our paint
                products are low-VOC and environmentally friendly. We also offer
                energy-efficient solutions that reduce your home's environmental
                impact while saving money on utility bills.
              </p>
            </ContentBlock>
          </div>
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = "ContentSection";

export default ContentSection;
