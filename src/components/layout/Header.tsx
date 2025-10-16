"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Home,
  Building,
  Paintbrush,
  Wrench,
  Shield,
  ArrowRight,
  X,
  Square,
  Hammer,
  Palette,
  Zap,
  Truck,
  Settings,
  Droplets,
  Sun,
  HardHat,
  Brush,
  Wrench as WrenchIcon,
  FileText,
  Clock,
  Wind,
  DoorOpen,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback, memo } from "react";

// PERFORMANCE: Move all static data outside component to prevent recreation
const NAV_LINKS = [
  { name: "Services", type: "dropdown" as const, id: "services" },
  { name: "Service Areas", type: "dropdown" as const, id: "locations" },
  { name: "Blog", type: "link" as const, href: "/blog" },
  { name: "About", type: "link" as const, href: "/about" },
] as const;

// PERFORMANCE: Optimize mobile services data structure with SEO-friendly slugs and better icons
const MOBILE_SERVICES_DATA = {
  mainServices: {
    title: "Main Services",
    items: [
      {
        name: "HVAC Services",
        href: "/services/hvac-services",
        icon: Wind,
      },
      {
        name: "Handyman Services",
        href: "/services/handyman-services",
        icon: WrenchIcon,
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
    ],
  },
  windowServices: {
    title: "Window Services",
    items: [
      {
        name: "Window Replacement",
        href: "/services/window-replacement-services",
        icon: Zap,
      },
      {
        name: "Window Installation",
        href: "/services/window-installation-services",
        icon: HardHat,
      },
      {
        name: "Window Repair",
        href: "/services/window-repair-services",
        icon: WrenchIcon,
      },
      {
        name: "Energy Efficient Windows",
        href: "/services/energy-efficient-windows-services",
        icon: Building,
      },
    ],
  },
} as const;

// PERFORMANCE: Reduce states data for faster rendering
const STATES_DATA = [
  "Los Angeles",
  "Ventura",
  "Santa Monica",
  "Beverly Hills",
  "Pasadena",
  "Glendale",
  "Thousand Oaks",
  "Simi Valley",
  "Oxnard",
  "Camarillo",
  "Burbank",
  "Van Nuys",
] as const;

// PERFORMANCE: Optimize services data - 3 columns with 4 services each
const SERVICES_DATA = {
  essentialServices: [
    {
      name: "HVAC Services",
      href: "/services/hvac-services",
      icon: Wind,
      description: "Heating & cooling solutions",
    },
    {
      name: "Handyman Services",
      href: "/services/handyman-services",
      icon: WrenchIcon,
      description: "Quick repairs & installations",
    },
    {
      name: "Garage Door Services",
      href: "/services/garage-door-services",
      icon: Square,
      description: "Installation & repair",
    },
    {
      name: "Doors & Gates Installation",
      href: "/services/doors-and-gates-installation-services",
      icon: DoorOpen,
      description: "Interior & exterior doors",
    },
  ],
  exteriorServices: [
    {
      name: "Paver Installation",
      href: "/services/driveway-pavers-services",
      icon: Square,
      description: "Driveways, patios & walkways",
    },
    {
      name: "Roofing Services",
      href: "/services/roof-repair-services",
      icon: Home,
      description: "Repair & replacement",
    },
    {
      name: "Exterior Painting",
      href: "/services/exterior-painting-services",
      icon: Paintbrush,
      description: "Residential & commercial",
    },
    {
      name: "Window Services",
      href: "/services/window-installation-services",
      icon: Building,
      description: "All window solutions",
    },
  ],
  windowServices: [
    {
      name: "Window Replacement",
      href: "/services/window-replacement-services",
      icon: Zap,
      description: "Energy efficient upgrades",
    },
    {
      name: "Window Installation",
      href: "/services/window-installation-services",
      icon: HardHat,
      description: "New construction windows",
    },
    {
      name: "Window Repair",
      href: "/services/window-repair-services",
      icon: Wrench,
      description: "Glass & frame repairs",
    },
    {
      name: "Energy Efficient Windows",
      href: "/services/energy-efficient-windows-services",
      icon: Building,
      description: "Lower utility costs",
    },
  ],
} as const;

// PERFORMANCE: Optimize main menu items
const MAIN_MENU_ITEMS = [
  {
    name: "Services",
    hasSubmenu: true,
    description: "All home improvement services",
    view: "services" as const,
  },
  {
    name: "Service Areas",
    hasSubmenu: true,
    description: "Available locations",
    view: "locations" as const,
  },
  {
    name: "Blog",
    href: "/blog",
    hasSubmenu: false,
    description: "Tips and insights",
  },
  {
    name: "About",
    href: "/about",
    hasSubmenu: false,
    description: "Our story and expertise",
  },
  {
    name: "Contact Us",
    href: "/contact",
    hasSubmenu: false,
    description: "Get in touch with us",
  },
] as const;

// PERFORMANCE: Pre-defined styles to avoid recreation
const headerBoxStyle = { border: "1px solid rgba(215, 69, 153, 0.2)" };
const dropdownStyle = { border: "1px solid rgba(215, 69, 153, 0.15)" };
const sheetStyle = { border: "1px solid rgba(215, 69, 153, 0.15)" };

// Mobile Navigation Types
type MobileView = "main" | "services" | "locations";

// PERFORMANCE: Highly optimized Mobile Main Menu Component
const MobileMainMenu = memo(
  ({
    onNavigate,
    onClose,
  }: {
    onNavigate: (view: MobileView) => void;
    onClose: () => void;
  }) => {
    const handleItemClick = useCallback(
      (item: (typeof MAIN_MENU_ITEMS)[number]) => {
        if (item.hasSubmenu && item.view) {
          onNavigate(item.view);
        } else {
          onClose();
        }
      },
      [onNavigate, onClose],
    );

    return (
      <div className="p-4 space-y-1">
        {MAIN_MENU_ITEMS.map((item) => (
          <div key={item.name}>
            {item.hasSubmenu ? (
              <button
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-pink-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="font-medium text-slate-900 group-hover:text-pink-700">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-pink-600 transition-colors" />
              </button>
            ) : (
              <Link
                href={item.href!}
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-pink-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="font-medium text-slate-900 group-hover:text-pink-700">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-pink-600 transition-colors" />
              </Link>
            )}
          </div>
        ))}

        <div className="pt-2">
          <a
            href="tel:+18184536110"
            className="w-full mobile-call-button py-3 px-4 font-medium flex items-center justify-center gap-2"
            aria-label="Call us for quote"
          >
            <Phone className="h-4 w-4" />
            <span className="font-mono font-medium">+1 (818) 453-6110</span>
          </a>
        </div>
      </div>
    );
  },
);

MobileMainMenu.displayName = "MobileMainMenu";

// PERFORMANCE: Optimized Mobile Services Menu Component
const MobileServicesMenu = memo(({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-4 space-y-6">
      {Object.entries(MOBILE_SERVICES_DATA).map(([key, section]) => (
        <div key={key}>
          <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-3 px-2">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 transition-colors group"
                >
                  <div className="text-pink-600 flex-shrink-0 group-hover:text-pink-700">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="font-medium text-slate-900 group-hover:text-pink-700">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/services"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full p-3 bg-pink-50 text-pink-700 rounded-xl font-medium hover:bg-pink-100 transition-colors"
        >
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
});

MobileServicesMenu.displayName = "MobileServicesMenu";

// PERFORMANCE: Optimized Mobile Locations Menu Component
const MobileLocationsMenu = memo(({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 px-2">
        Service Areas
      </h3>
      <div className="grid grid-cols-1 gap-1">
        {STATES_DATA.map((area) => (
          <Link
            key={area}
            href={`/locations/home-improvement-services-in-${area.toLowerCase().replace(/\s+/g, "-")}-ca`}
            onClick={onClose}
            className="p-3 text-slate-900 hover:text-pink-700 hover:bg-pink-50 rounded-xl transition-colors font-medium"
          >
            {area}
          </Link>
        ))}
      </div>

      <div className="pt-4 mt-6 border-t border-slate-100">
        <Link
          href="/locations"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full p-3 bg-pink-50 text-pink-700 rounded-xl font-medium hover:bg-pink-100 transition-colors"
        >
          View All Areas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
});

MobileLocationsMenu.displayName = "MobileLocationsMenu";

// PERFORMANCE: Optimized Desktop Dropdown Content Component - 3 COLUMNS WITH 4 SERVICES EACH
const DropdownContent = memo(
  ({
    id,
    onMouseEnter,
    onMouseLeave,
  }: {
    id: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => {
    if (id === "services") {
      return (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-white backdrop-blur-md rounded-2xl overflow-hidden z-50 shadow-xl w-[95vw] max-w-5xl"
          style={dropdownStyle}
        >
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Essential Services */}
            <div>
              <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                Essential Services
              </h3>
              <ul className="space-y-2">
                {SERVICES_DATA.essentialServices.map((s) => {
                  const IconComponent = s.icon;
                  return (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-pink-50 group border border-transparent hover:border-pink-200 transition-all"
                      >
                        <div className="text-pink-600 flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-pink-700">
                            {s.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {s.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 2: Exterior Services */}
            <div>
              <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                Exterior Services
              </h3>
              <ul className="space-y-2">
                {SERVICES_DATA.exteriorServices.map((s) => {
                  const IconComponent = s.icon;
                  return (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-green-50 group border border-transparent hover:border-green-200 transition-all"
                      >
                        <div className="text-green-600 flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-green-700">
                            {s.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {s.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Window Services */}
            <div>
              <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                Window Specialists
              </h3>
              <ul className="space-y-2">
                {SERVICES_DATA.windowServices.map((s) => {
                  const IconComponent = s.icon;
                  return (
                    <li key={s.name}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 group border border-transparent hover:border-blue-200 transition-all"
                      >
                        <div className="text-blue-600 flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-blue-700">
                            {s.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {s.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/services"
              className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center gap-1.5 group"
            >
              View All Services{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      );
    }

    if (id === "locations") {
      return (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-white backdrop-blur-md rounded-2xl overflow-hidden z-50 shadow-xl w-[90vw] max-w-3xl"
          style={dropdownStyle}
        >
          <div className="p-8">
            <h3 className="font-medium text-slate-900 mb-5 text-sm uppercase tracking-wider flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
              Service Areas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {STATES_DATA.map((area) => (
                <Link
                  key={area}
                  href={`/locations/home-improvement-services-in-${area.toLowerCase().replace(/\s+/g, "-")}-ca`}
                  className="p-3 text-sm text-slate-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all text-center font-medium border border-slate-100 hover:border-pink-200"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 backdrop-blur-sm px-8 py-4 border-t border-slate-100 text-center">
            <Link
              href="/locations"
              className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center justify-center gap-1.5 group"
            >
              View All Areas{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      );
    }

    return null;
  },
);

DropdownContent.displayName = "DropdownContent";

// PERFORMANCE: Main Header Component - Expanded Coverage with Light Border
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<MobileView>("main");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // PERFORMANCE: Memoized handlers to prevent recreation on every render
  const handleMouseEnter = useCallback((dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setMobileView("main");
  }, []);

  const navigateToMobileView = useCallback((view: MobileView) => {
    setMobileView(view);
  }, []);

  const goBackToMain = useCallback(() => {
    setMobileView("main");
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Reset mobile view when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileView("main");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* DESKTOP HEADER - Compact Size with Light Border */}
      <header className="hidden xl:block sticky top-0 z-50 w-full pt-2">
        <div className="mx-auto px-48">
          <div className="bg-white shadow-md rounded-xl border border-pink-100 hover:border-pink-200 transition-colors duration-200">
            <div className="flex items-center justify-between h-20 px-6">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <Logo />
                <div className="border-l border-slate-200 h-8"></div>
                <span className="font-medium text-lg text-slate-900">
                  Affordable Home Services
                </span>
              </div>

              {/* Navigation */}
              <nav className="flex items-center space-x-8">
                {NAV_LINKS.map((link) => (
                  <div
                    key={link.name}
                    onMouseEnter={() =>
                      link.type === "dropdown" && handleMouseEnter(link.id)
                    }
                    onMouseLeave={() =>
                      link.type === "dropdown" && handleMouseLeave()
                    }
                    className="relative"
                  >
                    {link.type === "link" ? (
                      <Link
                        href={link.href}
                        className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-base py-2"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-base flex items-center gap-1.5 py-2"
                          aria-label={`${link.name} menu`}
                          aria-expanded={activeDropdown === link.id}
                          aria-haspopup="true"
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === link.id ? "rotate-180" : ""}`}
                          />
                        </button>
                        {activeDropdown === link.id && (
                          <DropdownContent
                            id={link.id}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleMouseLeave}
                          />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Section */}
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-base"
                >
                  Contact
                </Link>
                <a
                  href="tel:+18184536110"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 py-3 px-6 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                  aria-label="Call for quote: 1-800-555-0123"
                >
                  <Phone className="h-4 w-4" /> Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER - Rounded Design with Top Spacing */}
      <header className="xl:hidden sticky top-0 z-50 w-full pt-2">
        <div className="max-w-[1200px] mx-auto px-3">
          <div className="bg-white shadow-md rounded-2xl">
            <div className="flex items-center justify-between px-4 h-16">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Logo />
                <div className="border-l border-slate-200 h-5 flex-shrink-0"></div>
                <span className="text-sm text-slate-900 font-medium truncate">
                  Affordable Services
                </span>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2">
                <a
                  href="tel:+18184536110"
                  className="bg-pink-500 hover:bg-pink-600 text-white p-2.5 rounded-lg transition-colors"
                  aria-label="Call us: 1-800-555-0123"
                >
                  <Phone className="h-5 w-5" />
                </a>

                <Sheet
                  open={isMobileMenuOpen}
                  onOpenChange={setIsMobileMenuOpen}
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-700 hover:bg-pink-50 h-10 w-10"
                      aria-label="Open navigation menu"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full max-w-sm bg-white p-0 [&>button]:hidden"
                    style={sheetStyle}
                  >
                    <VisuallyHidden>
                      <SheetTitle>Navigation Menu</SheetTitle>
                    </VisuallyHidden>

                    <div className="flex flex-col h-full">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between p-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          {mobileView !== "main" && (
                            <button
                              onClick={goBackToMain}
                              className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                              aria-label="Go back"
                            >
                              <ChevronLeft className="h-5 w-5 text-slate-600" />
                            </button>
                          )}
                          {mobileView === "main" && <Logo />}
                          {mobileView !== "main" && (
                            <span className="text-sm text-slate-600 font-medium">
                              {mobileView === "services"
                                ? "Services"
                                : "Service Areas"}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={closeMobileMenu}
                          className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5 text-slate-600" />
                        </button>
                      </div>

                      {/* Mobile Navigation Content */}
                      <div className="flex-1 overflow-y-auto">
                        {mobileView === "main" && (
                          <MobileMainMenu
                            onNavigate={navigateToMobileView}
                            onClose={closeMobileMenu}
                          />
                        )}
                        {mobileView === "services" && (
                          <MobileServicesMenu onClose={closeMobileMenu} />
                        )}
                        {mobileView === "locations" && (
                          <MobileLocationsMenu onClose={closeMobileMenu} />
                        )}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}