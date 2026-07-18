import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "How does Pikesville's older housing stock affect pressure washing?",
    answer: "Many Pikesville homes were built between the 1950s and 1980s and feature brick, older vinyl siding, and painted wood exteriors that require careful soft wash techniques rather than high pressure washing. High pressure on these older materials can cause damage — we always assess the surface age and condition before we start.",
  },
  {
    question: "Do you service HOA communities in Pikesville?",
    answer: "Yes — we work with homeowners in HOA communities throughout Pikesville and can provide documentation of service completion if your HOA requires proof of exterior cleaning compliance.",
  },
  {
    question: "How often should Pikesville homeowners schedule exterior cleaning?",
    answer: "Given Pikesville's mature tree canopy and humid Baltimore County climate, most homes benefit from professional exterior cleaning once a year. Properties with heavy shade from surrounding trees may develop algae and mildew faster and benefit from service every 6-9 months.",
  },
  {
    question: "Can you remove the black streaking on my Pikesville home's roof or siding?",
    answer: "Yes — black streaking is caused by Gloeocapsa Magma, an algae that thrives in humid Mid-Atlantic climates like Baltimore County. Our soft wash treatment kills the algae at the root and removes the staining from both roofing and siding surfaces safely.",
  },
];

export default function PikesvillePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/pikesville-md-hero.jpg"
          alt="Power Washing Pikesville MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Pikesville, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Pikesville homeowners and businesses — restoring curb appeal to one of Baltimore County&apos;s most established communities.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Pikesville, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Pikesville is one of Baltimore County&apos;s most established and affluent communities — home to well-maintained residential neighborhoods, mature tree-lined streets, and a mix of mid-century single-family homes and newer developments near Quarry Lake. With a median home value well above $600,000 and a community that takes pride in its appearance, Pikesville homeowners have high standards for how their properties look — and so do we.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing is based in Pikesville and serves the surrounding community with professional exterior cleaning that matches the standard of the neighborhood. From the brick colonials near Seven Mile Market to the newer construction along the I-695 corridor, we know these streets and we know what Pikesville homes need to stay looking their best.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Pikesville Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mature Tree Canopy & Shade-Driven Algae Growth",
                body: "Pikesville's mature residential neighborhoods feature heavy tree coverage that keeps homes shaded and damp — creating ideal conditions for algae, mold, and mildew growth on siding, driveways, and rooftops. The north and shaded sides of Pikesville homes commonly develop green and black biological staining that, left untreated, penetrates surface materials and accelerates deterioration.",
              },
              {
                title: "Mid-Century Brick & Older Siding",
                body: "A significant portion of Pikesville's housing stock was built between the 1950s and 1980s. These homes feature brick exteriors, older vinyl siding, and painted wood surfaces that require careful soft wash techniques — high pressure washing on these materials can force water behind siding panels, damage aging mortar joints, and strip paint from wood surfaces. We always adjust our approach for the age and material of each home.",
              },
              {
                title: "HOA Communities & Exterior Standards",
                body: "Many of Pikesville's residential communities have active HOAs that enforce exterior maintenance standards — including requirements for clean driveways, siding, and rooflines. We work with Pikesville homeowners to meet HOA compliance requirements and can provide service documentation upon request.",
              },
              {
                title: "High Value Properties & Curb Appeal",
                body: "With median home values among the highest in Baltimore County, Pikesville homeowners understand that property appearance directly affects value. A professional exterior cleaning before listing a home for sale or simply as part of annual maintenance is one of the highest ROI investments a Pikesville homeowner can make.",
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

      {/* Services */}
      <ServicesGrid />

      <MiniGallery photos={[
        { src: "/gallery/house_washing_1.jpg", alt: "House washing job in Pikesville MD" },
        { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning in Pikesville MD" },
        { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Pikesville MD" },
        { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Pikesville MD" },
        { src: "/gallery/residential_1.jpg", alt: "Residential power washing Pikesville MD" },
        { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Pikesville MD" },
      ]} />

      {/* Review */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#E63946] text-2xl mb-4">★★★★★</div>
          <p className="text-[#2A2A2A] text-lg italic leading-relaxed mb-6">
            Renewal did an amazing job on our driveway and house exterior. We&apos;ve lived in Pikesville for over 15 years and have tried a few different companies — Renewal was by far the most professional and the results were the best we&apos;ve seen. Our neighbors were asking for their number before they even finished the job.
          </p>
          <p className="text-[#181818] font-bold">— David R., Pikesville, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Serving Pikesville & Surrounding Areas</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24862!2d-76.7383!3d39.3773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81c3e91c0d8c5%3A0x1234!2sPikesville%2C+MD+21208!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={faqs} />

      {/* Internal Links */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Explore Nearby Service Areas</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Owings Mills, MD", href: "/service-areas/owings-mills-md", description: "Power washing services in Owings Mills and surrounding neighborhoods." },
              { label: "Reisterstown, MD", href: "/service-areas/reisterstown-md", description: "Exterior cleaning for Reisterstown homes and businesses." },
              { label: "Towson, MD", href: "/service-areas/towson-md", description: "Professional pressure washing throughout the Towson area." },
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
            Ready to restore your Pikesville property?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate from Baltimore County&apos;s trusted exterior cleaning team.
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