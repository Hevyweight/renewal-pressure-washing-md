'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Services from "../components/services";

export default function ServicesPage() {

  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Professional & Reliable Cleaning for Every Surface
        </h1>
        <div className="w-160 h-1 bg-[#E63946] mx-auto" />
      </section>

      {/* Carousel */}
      <Services />

      {/* Text Section */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Baltimore&apos;s Most Trusted Exterior Cleaning
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Renewal is Baltimore&apos;s premier exterior cleaning service, dedicated to providing exceptional results for residential and commercial clients. With years of experience and a commitment to quality, we use only the best products and techniques to restore your property&apos;s beauty.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            This is the second placeholder paragraph. Please replace this content with the actual brand story once available.
          </p>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/images/gallery/commercial_1.jpg", alt: "Commercial pressure washing Baltimore MD" },
            { src: "/images/gallery/commercial_22.jpg", alt: "Commercial exterior cleaning Baltimore MD" },
            { src: "/images/gallery/commercial_3.jpg", alt: "Commercial building wash Baltimore MD" },
            { src: "/images/gallery/commercial_4.jpg", alt: "Parking lot cleaning Baltimore MD" },
            { src: "/images/gallery/commercial_5.jpg", alt: "Commercial power washing Baltimore MD" },
            { src: "/images/gallery/commercial_26.jpg", alt: "Building exterior cleaning Baltimore MD" },
          ].map((photo, i) => (
            <div key={i} className="relative aspect-video overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </div>
          ))}
        </div>
         <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="text-[#181818] font-bold underline underline-offset-4 hover:text-[#E63946] transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>
      </section>

      {/* Hardcoded Review */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#E63946] text-2xl mb-4">★★★★★</div>
          <p className="text-[#2A2A2A] text-lg italic leading-relaxed mb-6">
            Renewal did an incredible job on our driveway and house exterior. They showed up on time, were professional throughout, and the results were better than we expected. Our neighbors kept asking who we used!
          </p>
          <p className="text-[#181818] font-bold">— Sarah M., Pikesville MD</p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Explore More</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "View Our Work", href: "/gallery", description: "See before and after photos from our past projects." },
              { label: "Service Areas", href: "/service-areas", description: "Find out if we serve your neighborhood." },
              { label: "Read Our Reviews", href: "/reviews", description: "See what Baltimore homeowners are saying about us." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gray-200 p-6 hover:border-[#E63946] transition-colors duration-200 group"
              >
                <h3 className="text-lg font-bold text-[#181818] group-hover:text-[#E63946] transition-colors mb-2">
                  {link.label} →
                </h3>
                <p className="text-[#2A2A2A] text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E63946] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-white text-lg mb-8">
            Request a free on-site estimate today and see the Renewal difference.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-[#181818] font-bold text-lg px-10 py-4 hover:bg-gray-100 transition-colors duration-200"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

    </main>
  );
}