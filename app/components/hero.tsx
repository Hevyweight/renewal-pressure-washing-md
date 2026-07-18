import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Renewal Pressure Washing"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 lg:pl-16 lg:pr-0 max-w-6xl mt-[-25vh] md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          We restore your property&apos;s beauty, so you can enjoy peace of mind.
        </h1>

        <div className="flex items-center gap-4 flex-wrap">
          {/* Primary CTA */}
          <Link
            href="/quote"
            className="bg-[#E63946] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:bg-red-700 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>

          {/* Secondary CTA */}
          <a
            href="tel:+14109998886"
            className="border border-white text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-[#181818] transition-colors duration-200"
          >
            Call Now
          </a>
        </div>
      </div>

    </section>
  );
}