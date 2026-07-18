// app/components/service-areas/ServicesGrid.tsx
import Link from "next/link";

const services = [
  { label: "House Washing", href: "/services/house-washing", description: "Soft wash exterior cleaning safe for all siding types." },
  { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and parking areas." },
  { label: "Deck Cleaning", href: "/services/deck-cleaning", description: "Restore your deck's natural beauty safely." },
  { label: "Patio Cleaning", href: "/services/patio-cleaning", description: "Clean outdoor spaces ready for any occasion." },
  { label: "Gutter Cleaning", href: "/services/gutter-cleaning", description: "Keep your drainage system flowing freely." },
  { label: "Window Cleaning", href: "/services/window-cleaning", description: "Crystal clear, streak-free windows." },
  { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", description: "Large scale cleaning for commercial properties." },
  { label: "Christmas Light Installation", href: "/services/christmas-light-installation", description: "Professional holiday lighting installation and removal." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#181818] mb-2">
          Services We Provide
        </h2>
        <div className="w-16 h-1 bg-[#E63946] mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="border border-gray-200 p-6 hover:border-[#E63946] transition-colors duration-200 group"
            >
              <h3 className="text-base font-bold text-[#181818] group-hover:text-[#E63946] transition-colors mb-2">
                {service.label} →
              </h3>
              <p className="text-[#2A2A2A] text-sm leading-snug">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}