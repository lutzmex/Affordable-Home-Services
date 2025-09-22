import Link from "next/link";
import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Square,
  Building,
  Home,
  Paintbrush,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Company navigation links
  const companyLinks = [
    { name: "All Services", href: "/services" },
    { name: "Service Areas", href: "/locations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  // Main services with icons - Updated with new slugs
  const mainServices = [
    {
      name: "Paver Installation",
      href: "/services/driveway-pavers-services",
      icon: Square,
    },
    {
      name: "Window Services",
      href: "/services/window-installation-services",
      icon: Building,
    },
    {
      name: "Roofing Services",
      href: "/services/roof-repair-services",
      icon: Home,
    },
    {
      name: "Exterior Painting",
      href: "/services/exterior-painting-services",
      icon: Paintbrush,
    },
  ];

  // Service areas with updated slugs
  const serviceAreas = [
    { name: "Los Angeles", href: "/locations/home-improvement-services-in-los-angeles-ca" },
    { name: "Ventura", href: "/locations/home-improvement-services-in-ventura-ca" },
    { name: "Santa Monica", href: "/locations/home-improvement-services-in-santa-monica-ca" },
    { name: "Beverly Hills", href: "/locations/home-improvement-services-in-beverly-hills-ca" },
    { name: "Thousand Oaks", href: "/locations/home-improvement-services-in-thousand-oaks-ca" },
    { name: "Simi Valley", href: "/locations/home-improvement-services-in-simi-valley-ca" },
  ];

  return (
    <div className="bg-white px-4 py-6">
      <footer className="bg-gray-900 text-white rounded-3xl max-w-full mx-auto shadow-2xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <Logo />
              </div>
              <p className="font-poppins text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                Professional home improvement services in Los Angeles and
                Ventura County. Quality pavers, windows, roofing, and exterior
                painting you can trust.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                  <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                  <a
                    href="tel:+18184536110"
                    className="font-ibm-plex-mono hover:text-white transition-colors text-base sm:text-lg"
                  >
                    +1 (818) 453-6110
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                  <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                  <a
                    href="mailto:info@affordablehomeservices.com"
                    className="font-ibm-plex-mono hover:text-white transition-colors text-base sm:text-lg"
                  >
                    info@affordablehomeservices.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                  <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0" />
                  <span className="font-poppins text-base sm:text-lg">
                    Los Angeles & Ventura Counties
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <span className="font-poppins bg-green-800 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium shadow-sm">
                  Licensed & Insured
                </span>
                <span className="font-poppins text-gray-300 text-sm sm:text-base font-medium">
                  Local Experts
                </span>
              </div>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-poppins text-gray-300 hover:text-pink-300 transition-colors text-base sm:text-lg block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Services */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">
                Our Services
              </h3>
              <ul className="space-y-3">
                {mainServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="font-poppins text-gray-300 hover:text-pink-300 transition-colors text-base sm:text-lg flex items-center gap-2 hover:underline group justify-center md:justify-start"
                      >
                        <IconComponent className="h-4 w-4 text-pink-400 group-hover:text-pink-300 flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Service Areas & Emergency */}
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-white font-medium mb-6 text-xl sm:text-2xl">
                Service Areas
              </h3>

              {/* Service Areas */}
              <ul className="space-y-2 mb-6">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="font-poppins text-gray-300 hover:text-green-300 transition-colors text-base sm:text-lg block hover:underline"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Emergency Contact */}
              <div className="p-4 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg mb-4 shadow-md">
                <p className="font-poppins text-sm sm:text-base font-medium mb-2 text-white">
                  24/7 Emergency Service
                </p>
                <a
                  href="tel:+18184536110"
                  className="font-ibm-plex-mono text-base sm:text-lg font-medium text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                >
                  <Phone className="h-4 w-4" />
                  Call: +1 (818) 453-6110
                </a>
              </div>

              {/* Social Media */}
              <div className="flex justify-center md:justify-start items-center gap-4">
                <a
                  href="https://linkedin.com/company/affordable-home-services"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/affordablehomes"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/affordablehomeservices"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 px-10 py-4">
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4 text-sm justify-center sm:justify-start">
              <Link
                href="/privacy"
                className="font-poppins text-gray-400 hover:text-pink-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/terms"
                className="font-poppins text-gray-400 hover:text-pink-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            <p className="font-poppins text-gray-400 text-sm text-center">
              © {currentYear} Affordable Home Services. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 justify-center sm:justify-end">
              <span className="font-poppins">Proudly serving</span>
              <span className="font-poppins text-pink-300">
                Southern California
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}