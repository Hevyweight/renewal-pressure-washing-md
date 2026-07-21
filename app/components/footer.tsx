import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E63946] py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Renewal Pressure Washing"
          width={160}
          height={80}
          className="object-contain"
        />

        {/* Copyright */}
        <p className="text-white text-xs font-semibold tracking-widest uppercase">
          Copyright © 2026 Renewal Pressure Washing. All Rights Reserved.
        </p>

        {/* Contact + BBB */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm font-medium">
            <a href="tel:+14109998886" className="hover:opacity-70 transition-opacity">
                (410) 999 8886
            </a>
            <span>•</span>
            <a href="mailto:info@renewalpressurewashing.com" className="hover:opacity-70 transition-opacity">
                info@renewalpressurewashing.com
            </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/rpw_md/" aria-label="Instagram" className="text-white hover:opacity-70 transition-opacity">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100050273036367" aria-label="Facebook" className="text-white hover:opacity-70 transition-opacity">
            <FaFacebookF className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
}