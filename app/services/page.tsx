'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "House Washing",
    slug: "house-washing",
    description: "Eco-friendly, mold-removing, and curb appeal-restoring.",
    image: "/services/house-washing.jpg",
  },
  {
    title: "Concrete Cleaning",
    slug: "concrete-cleaning",
    description: "Streak-free driveways, walkways, and patios that last.",
    image: "/services/concrete-cleaning.jpg",
  },
  {
    title: "Deck Cleaning",
    slug: "deck-cleaning",
    description: "Restore your deck's natural beauty safely and effectively.",
    image: "/services/deck-cleaning.jpg",
  },
  {
    title: "Patio Cleaning",
    slug: "patio-cleaning",
    description: "Clean, safe outdoor spaces ready for any occasion.",
    image: "/services/patio-cleaning.jpg",
  },
  {
    title: "Window Cleaning",
    slug: "window-cleaning",
    description: "Crystal clear windows inside and out, streak-free guaranteed.",
    image: "/services/window-cleaning.jpg",
  },
  {
    title: "Parking Garage Cleaning",
    slug: "parking-garage-cleaning",
    description: "Professional cleaning for commercial parking structures.",
    image: "/services/parking-garage-cleaning.jpg",
  },
  {
    title: "Commercial Pressure Washing",
    slug: "commercial-pressure-washing",
    description: "Large scale exterior cleaning for commercial properties.",
    image: "/services/commercial-pressure-washing.jpg",
  },
  {
    title: "Christmas Light Installation",
    slug: "christmas-light-installation",
    description: "Professional holiday lighting that makes your property shine.",
    image: "/services/christmas-light-installation.jpg",
  },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === services.length - 1 ? 0 : i + 1));
  const getIndex = (offset: number) => (current + offset + services.length) % services.length;

  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mx-auto" />
      </section>

      {/* Carousel */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="bg-white border border-gray-200 shadow p-4 hover:bg-gray-50 transition z-10 shrink-0"
            >
              ←
            </button>
            <div className="flex gap-4 overflow-hidden w-full justify-center">
              {[-1, 0, 1].map((offset) => {
                const service = services[getIndex(offset)];
                const isCenter = offset === 0;
                return (
                  <div
                    key={service.slug}
                    className={`relative flex-shrink-0 transition-all duration-300 ${
                      isCenter ? "w-1/2 opacity-100" : "w-1/4 opacity-50"
                    } h-80 bg-gray-400 overflow-hidden`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span
                        className="text-white font-bold text-lg"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={next}
              className="bg-white border border-gray-200 shadow p-4 hover:bg-gray-50 transition z-10 shrink-0"
            >
              →
            </button>
          </div>
          <div className="mt-6 pl-[calc(25%+1rem)]">
            <Link
              href={`/services/${services[current].slug}`}
              className="text-lg font-bold text-[#181818] underline hover:text-[#E63946] transition-colors"
            >
              Explore {services[current].title}
            </Link>
            <p className="text-[#2A2A2A] text-sm mt-1">
              {services[current].description}
            </p>
          </div>
        </div>
      </section>

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
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-48 bg-gray-200 overflow-hidden group">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </div>
          ))}
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