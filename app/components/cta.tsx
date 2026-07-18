import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#E63946] py-20 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get Cleaned
        </h2>
        <p className="text-white text-2xl md:text-4xl font-bold mb-10">
          Choosing professional cleaning is the best decision for your property.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-[#181818] font-bold text-base md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 hover:bg-gray-100 transition-colors duration-200"
        >
          Request your free quote now.
        </Link>
      </div>
    </section>
  );
}