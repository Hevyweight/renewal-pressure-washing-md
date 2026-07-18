import Link from "next/link";
import { Droplets, House, Star } from "lucide-react";

const stats = [
  {
    icon: <Droplets className="w-8 h-8 text-[#E63946]" />,
    stat: "#1",
    description: "Rated Power Washing Service in Baltimore",
  },
  {
    icon: <House className="w-8 h-8 text-[#E63946]" />,
    stat: "7+",
    description: "Years of Exterior Home Cleaning Experience",
  },
  {
    icon: <Star className="w-8 h-8 text-[#E63946]" />,
    stat: "150+",
    description: "Five Star Ratings by DMV Homeowners",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
          Why Us?
        </h2>
        <div className="w-16 h-1 bg-[#E63946] mx-auto mb-12" />

        <div className="border border-gray-100 shadow-sm rounded-lg p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="border-2 border-[#E63946] rounded-full p-3">
                  {item.icon}
                </div>
                <span className="text-2xl font-bold text-[#181818]">{item.stat}</span>
                <p className="text-[#2A2A2A] text-sm leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-1 mt-8 text-[#181818] font-semibold underline hover:text-[#E63946] transition-colors duration-200"
        >
          Learn More About Us →
        </Link>
      </div>
    </section>
  );
}