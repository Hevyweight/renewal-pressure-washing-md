'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "House Washing",
    slug: "house-washing",
    description: "Eco-friendly, mold-removing, and curb appeal-restoring.",
    image: "/images/gallery/residential_8.jpg",
  },
  {
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    description: "Keep your home safe and looking great with our gutter cleaning services.",
    image: "/images/gallery/gutter_cleaning_1.jpg",
  },
  {
    title: "Concrete Cleaning",
    slug: "concrete-cleaning",
    description: "Streak-free driveways, walkways, and patios that last.",
    image: "/images/gallery/residential_6.jpg",
  },
  {
    title: "Deck Cleaning",
    slug: "deck-cleaning",
    description: "Restore your deck's natural beauty safely and effectively.",
    image: "/images/gallery/commercial_24.jpg",
  },
  {
    title: "Patio Cleaning",
    slug: "patio-cleaning",
    description: "Clean, safe outdoor spaces ready for any occasion.",
    image: "/images/gallery/residential_2.jpg",
  },
  {
    title: "Window Cleaning",
    slug: "window-cleaning",
    description: "Crystal clear windows inside and out, streak-free guaranteed.",
    image: "/images/gallery/window_cleaning_1.jpg",
  },
  {
    title: "Parking Garage Cleaning",
    slug: "parking-garage-cleaning",
    description: "Professional cleaning for commercial parking structures.",
    image: "/images/gallery/parking_garage_cleaning_2.jpg",
  },
  {
    title: "Commercial Pressure Washing",
    slug: "commercial-pressure-washing",
    description: "Large scale exterior cleaning for commercial properties.",
    image: "/images/gallery/commercial_1.jpg",
  },
  {
    title: "Christmas Light Installation",
    slug: "christmas-light-installation",
    description: "Professional holiday lighting that makes your property shine.",
    image: "/images/gallery/lights_1.jpg",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === services.length - 1 ? 0 : i + 1));

  const getIndex = (offset: number) =>
    (current + offset + services.length) % services.length;

  return (
    <section className="bg-white py-20">
  {/* Header stays contained */}
  <div className="max-w-6xl mx-auto px-6 lg:px-16 mb-12">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
        Our Services
      </h2>
      <div className="w-16 h-1 bg-[#E63946] mx-auto" />
    </div>
  </div>

  {/* Carousel goes full width */}
  <div className="relative flex items-center">
<button
  onClick={prev}
  className="absolute left-4 top-4 md:top-1/2 md:-translate-y-1/2 z-20 bg-white shadow p-5 text-xl font-bold hover:bg-gray-50 transition"
>
  ←
</button>

    <div className="flex w-full overflow-hidden">
      {[-1, 0, 1].map((offset) => {
        const service = services[getIndex(offset)];
        const isCenter = offset === 0;
        return (
          <div
            key={service.slug}
            className={`relative flex-shrink-0 transition-all duration-300 ${
              isCenter
                ? "w-full md:w-1/2 opacity-100"
                : "hidden md:block md:w-1/4 opacity-50"
            } h-[60vh]`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-4 left-4 z-10">
              <span
                className="text-white font-bold text-xl"
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
      className="absolute right-4 top-4 md:top-1/2 md:-translate-y-1/2 z-20 bg-white shadow p-5 text-xl font-bold hover:bg-gray-50 transition"
    >
      →
    </button>
  </div>

  {/* Below Carousel stays contained */}
  <div className="mt-6 px-6 md:pl-[26%] lg:pl-[26%]">
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
</section>
  );
}