import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    label: "Gallery",
    description: "View Before and Afters from our past projects",
    linkText: "View Our Full Gallery",
    href: "/gallery",
    image: "/images/gallery/power_washing_11.jpg",
  },
  {
    label: "Service Areas",
    description: "Your neighborhood, our next project.",
    linkText: "See Where We Serve",
    href: "/service-areas",
    image: "/images/gallery/power_washing_4.jpg",
  },
];

export default function BeforeAndAfter() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181818] tracking-widest uppercase mb-10">
          Clean Is Our Craft
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.href}>
              <div className="relative h-88 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span
                    className="text-white font-light text-2xl"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {card.label}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[#2A2A2A] text-sm mb-2">{card.description}</p>
                <Link
                  href={card.href}
                  className="text-[#181818] font-bold underline underline-offset-4 hover:text-[#E63946] transition-colors duration-200"
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}