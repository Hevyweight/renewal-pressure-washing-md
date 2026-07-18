import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Do you provide the lights or do I need to supply them?",
    answer: "We offer both options. We can install lights you already own, or we can supply professional grade commercial lighting that is significantly brighter and more durable than standard retail lights. Professional lights are installed, stored, and maintained by us — you never have to deal with tangled strands or burnt out bulbs.",
  },
  {
    question: "When should I book my Christmas light installation?",
    answer: "We recommend booking in October or early November — our schedule fills up quickly as the holiday season approaches. Early booking also gives us the flexibility to work around weather conditions and ensures your display is up well before Thanksgiving.",
  },
  {
    question: "Do you take the lights down after the season?",
    answer: "Yes — takedown and storage are included in every installation package. We return after the holiday season to carefully remove and store your lights so they're ready for next year. You never have to climb a ladder or stuff strands into a box yourself.",
  },
  {
    question: "Can you install lights on large or complex rooflines?",
    answer: "Yes — we have the equipment and experience to safely install lighting on homes and commercial properties of any size, including multi-story buildings, complex rooflines, and large trees. We assess every property during the quote process to ensure a safe and beautiful installation.",
  },
];

export default function ChristmasLightInstallationPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services/christmas-light-installation-hero.jpg"
          alt="Christmas Light Installation Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Christmas Light Installation
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional holiday lighting installation that makes your home or business shine — without the ladders, the tangles, or the stress.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Professional Christmas Light Installation in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Holiday lighting is one of the most visible ways to make your home or business stand out during the season — but installing lights safely and beautifully is time consuming, physically demanding, and genuinely dangerous without the right equipment. Every year thousands of homeowners are injured falling from ladders during holiday light installation. Renewal Pressure Washing takes that risk completely off your plate.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            We design, install, maintain, and remove your holiday lighting — so all you have to do is enjoy the display. From simple roofline outlines to full property designs with tree wrapping and landscape lighting, we handle every detail from the first strand to the final takedown.
          </p>
        </div>
      </section>

      {/* What We Install */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What We Install
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Roofline & Gutter Lighting",
                body: "Roofline lighting is the foundation of any holiday display — clean, evenly spaced lights along your roofline and gutters create a classic look that transforms your home's curb appeal. We use professional clip systems that secure lights without damaging your shingles or gutters.",
              },
              {
                title: "Tree & Shrub Wrapping",
                body: "Wrapped trees and shrubs add depth and dimension to your holiday display. We wrap trunks, branches, and shrubs with precision — creating a warm, layered effect that looks professionally designed because it is.",
              },
              {
                title: "Landscape & Pathway Lighting",
                body: "Ground level landscape lighting and pathway illumination ties your entire display together and makes your property safe and welcoming for guests. We integrate pathway and landscape lighting with your roofline display for a cohesive finished look.",
              },
              {
                title: "Commercial Holiday Lighting",
                body: "Retail businesses, restaurants, office buildings, and commercial properties benefit enormously from professional holiday lighting — it drives foot traffic, signals that you're open and festive, and creates a memorable impression. We handle commercial installations of any scale.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#E63946] pl-6">
                <h3 className="text-lg font-bold text-[#181818] mb-2">{item.title}</h3>
                <p className="text-[#2A2A2A] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Why Professional Installation Makes the Difference
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              There&apos;s a visible difference between DIY holiday lighting and a professionally installed display — and your neighbors will notice.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Commercial grade lights that are brighter and more durable than retail",
                "Professional clip systems that protect your roofline and gutters",
                "Custom design tailored to your property's specific architecture",
                "Takedown and storage included — no work for you after the season",
                "Bulb replacement and maintenance throughout the season",
                "Safe installation by trained professionals with proper equipment",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#2A2A2A]">
                  <span className="text-[#E63946] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/services/christmas-light-installation-2.jpg"
              alt="Christmas light installation Baltimore MD"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#E63946] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            Our Installation Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Design Consultation & Quote",
                body: "We visit your property to assess your roofline, trees, landscape, and architectural features — then put together a custom lighting design and transparent quote before any work begins.",
              },
              {
                step: "02",
                title: "Light Selection",
                body: "We help you choose from our selection of professional grade lighting options — warm white, cool white, multicolor, or custom combinations — to match your vision for the display.",
              },
              {
                step: "03",
                title: "Professional Installation",
                body: "Our trained installation team arrives with all equipment and lighting on the scheduled date and installs your complete display safely and efficiently — typically in a single visit.",
              },
              {
                step: "04",
                title: "Season Maintenance",
                body: "We remain available throughout the holiday season to replace any burnt out bulbs, fix loose strands, or address any issues with your display at no additional charge.",
              },
              {
                step: "05",
                title: "Takedown & Storage",
                body: "After the holiday season we return to carefully remove, test, and store your lights so they're in perfect condition for next year. No work required from you.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <span className="text-white/30 text-4xl font-bold shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-gray-200 py-6">
                <h3 className="text-lg font-bold text-[#181818] mb-2">{faq.question}</h3>
                <p className="text-[#2A2A2A] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Explore More Services</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's exterior." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", description: "Keep your drainage system flowing freely year round." },
              { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", description: "Large scale exterior cleaning for commercial properties." },
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
            Make your home the brightest on the block.
          </h2>
          <p className="text-white text-lg mb-8">
            Book early — our holiday installation schedule fills up fast. Get your free design consultation today.
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