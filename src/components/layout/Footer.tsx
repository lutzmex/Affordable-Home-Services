import Link from "next/link";
import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Square,
  Building,
  Home,
  Paintbrush,
  Wind,
  Wrench,
  DoorOpen,
  Shield,
} from "lucide-react";

// Custom Pinterest Icon Component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

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

  // Main services with icons - Updated with Garage Door and Doors & Gates
  const mainServices = [
    {
      name: "HVAC Services",
      href: "/services/hvac-services",
      icon: Wind,
    },
    {
      name: "Handyman Services",
      href: "/services/handyman-services",
      icon: Wrench,
    },
    {
      name: "Garage Door Services",
      href: "/services/garage-door-services",
      icon: Square,
    },
    {
      name: "Doors & Gates Installation",
      href: "/services/doors-and-gates-installation-services",
      icon: DoorOpen,
    },
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

              {/* License Badge & Local Experts */}
                            <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                  <span className="font-poppins bg-green-800 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium shadow-sm">
                    Licensed & Insured
                  </span>
                  <span className="font-poppins text-gray-300 text-sm sm:text-base font-medium">
                    Local Experts
                  </span>
                </div>

                {/* License Number - Enhanced */}
                <div className="flex justify-center md:justify-start">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-lg border border-gray-600 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-ibm-plex-mono text-gray-200 text-sm font-medium tracking-wider">
                        CA License # 988151
                      </span>
                    </div>
                  </div>
                </div>
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
              <div className="flex justify-center md:justify-start items-center gap-3 flex-wrap">
                <a
                  href="https://linkedin.com/company/affordablehome-services/"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/affordablehomeservices"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/services18545"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Twitter/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/affordablehomeservices_"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.pinterest.com/Affordablehome_services/"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-700 transition-colors text-gray-300 hover:text-white shadow-sm"
                  aria-label="Pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PinterestIcon className="h-5 w-5" />
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