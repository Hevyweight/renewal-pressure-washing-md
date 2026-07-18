'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const services = [
  { label: "All Services", href: "/services" },
  { label: "House Washing", href: "/services/house-washing" },
  { label: "Concrete Cleaning", href: "/services/concrete-cleaning" },
  { label: "Deck Cleaning", href: "/services/deck-cleaning" },
  { label: "Patio Cleaning", href: "/services/patio-cleaning" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  { label: "Parking Garage Cleaning", href: "/services/parking-garage-cleaning" },
  { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing" },
  { label: "Christmas Light Installation", href: "/services/christmas-light-installation" },
];

const links = [
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        scrolled ? "bg-[#3A3A3A]/85 backdrop-blur-sm shadow-lg" : "bg-transparent md:bg-transparent bg-[#3A3A3A]/85"
      }`}
    >
      <div className="w-full flex items-stretch justify-between h-24">

        {/* Logo */}
        <Link href="/" className="pl-6 flex items-center">
          <Image
            src="/logo.png"
            alt="Renewal Pressure Washing"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-stretch gap-6 lg:gap-8">
          
          {/* Home Button */}
          <Link
            href="/"
            className={`text-lg font-medium transition-colors duration-200 flex items-center ${
              pathname === "/quote" ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative flex items-center">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`text-lg font-medium transition-colors duration-200 flex items-center gap-1 ${
              pathname.startsWith("/quote") ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
            }`}
          >
              Services
              <span className="text-xs">{servicesOpen ? "▲" : "▼"}</span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 bg-[#181818] shadow-lg py-2 w-56 z-50">
                {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setServicesOpen(false)}
                  className={`block px-4 py-2.5 text-md transition-colors duration-200 ${
                    pathname === "/quote"
                      ? "text-[#E63946] bg-[#2A2A2A]"
                      : "text-white hover:text-[#E63946] hover:bg-[#2A2A2A]"
                  }`}
                >
                  {service.label}
                </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-200 flex items-center ${
                pathname === "/quote" ? "text-[#E63946]" : "text-white hover:text-[#E63946]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/quote"
            className={`text-xl font-semibold px-8 self-stretch flex items-center transition-colors duration-200 ${
              pathname === "/quote"
                ? "bg-white text-[#181818] hover:bg-gray-100"
                : "bg-[#E63946] text-white hover:bg-red-700"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile: Get Quote + Hamburger */}
        <div className="md:hidden flex items-center gap-4 pr-4">
          <Link
            href="/quote"
            className={`text-xs font-semibold px-4 py-2 transition-colors duration-200 ${
              pathname === "/quote"
                ? "bg-white text-[#181818]"
                : "bg-[#E63946] text-white hover:bg-red-700"
            }`}
          >
            Get a Quote
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full overflow-hidden bg-[#3A3A3A] border-t border-[#2A2A2A] px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4">

            {/* Mobile Services Toggle */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="text-white text-sm font-medium hover:text-[#E63946] transition-colors duration-200 text-left flex items-center gap-1"
            >
              Services
              <span className="text-xs">{mobileServicesOpen ? "▲" : "▼"}</span>
            </button>

            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-white/80 text-sm hover:text-[#E63946] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium hover:text-[#E63946] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/quote"
              className="bg-[#E63946] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-red-700 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}