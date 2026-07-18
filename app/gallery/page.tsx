'use client'

import Image from "next/image";
import { useState } from "react";
import { galleryItems, Category, MediaType } from "@/lib/gallery";

const categories: Category[] = [
  "All",
  "Power Washing",
  "Residential",
  "Commercial",
  "Gutter Cleaning",
  "House Washing",
  "Concrete Cleaning",
  "Deck Cleaning",
  // "Patio Cleaning",
  "Window Cleaning",
  "Parking Garage Cleaning",
  "Christmas Light Installation",
];

export default function GalleryPage() {
  const [activeType, setActiveType] = useState<"all" | MediaType>("all");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);
  

  const filtered = galleryItems.filter((item) => {
    const typeMatch = activeType === "all" || item.type === activeType;
    const categoryMatch =
      activeCategory === "All" || item.category.includes(activeCategory);
    return typeMatch && categoryMatch;
  });

  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Work
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mx-auto" />
      </section>

      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Radio Toggle */}
          <div className="flex items-center gap-6 mb-8">
            {(["all", "photo", "video"] as const).map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={activeType === type}
                  onChange={() => setActiveType(type)}
                  className="accent-[#E63946] w-4 h-4"
                />
                <span className="text-sm font-semibold text-[#181818] capitalize">
                  {type === "all" ? "All" : type === "photo" ? "Photos" : "Videos"}
                </span>
              </label>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#E63946] text-white"
                    : "bg-white border border-gray-200 text-[#181818] hover:border-[#E63946] hover:text-[#E63946]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-[#2A2A2A] py-20">
              No items found for this filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden aspect-video bg-gray-200 cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  {item.type === "photo" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase">
                      {item.type === "video" ? "▶ Play" : "View"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lightbox */}
          {selected && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:opacity-70 transition-opacity"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              {selected.type === "photo" ? (
                <div
                  className="relative w-full max-w-4xl h-[80vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <video
                  src={selected.src}
                  className="max-w-4xl w-full max-h-[80vh]"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
