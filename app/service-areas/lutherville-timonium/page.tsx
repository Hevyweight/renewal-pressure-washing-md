import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "What makes Lutherville homes different to clean than other Baltimore County properties?",
    answer: "Lutherville's winding subdivisions feature larger lots with heavily wooded yards and significant shade coverage — conditions that accelerate biological growth on home exteriors faster than more open suburban areas. Many Lutherville homes also sit on sloped terrain near Loch Raven Reservoir which keeps the surrounding environment consistently damp, making annual soft wash cleaning essential for maintaining exterior appearance.",
  },
  {
    question: "Do you clean commercial properties along York Road in Timonium?",
    answer: "Yes — we provide commercial pressure washing for storefronts, office buildings, restaurants, and parking areas throughout the Timonium commercial corridor including York Road and the areas surrounding the Maryland State Fairgrounds. We schedule around your business hours and provide full commercial liability documentation.",
  },
  {
    question: "Can you meet HOA requirements in Lutherville-Timonium communities?",
    answer: "Absolutely. Lutherville-Timonium has numerous active HOA communities with exterior maintenance standards. We provide before and after photos and service completion documentation that satisfies most HOA compliance requirements. Contact us before your deadline and we'll make sure your property passes inspection.",
  },
  {
    question: "How often should Lutherville-Timonium homeowners schedule exterior cleaning?",
    answer: "Most homeowners in the area benefit from professional exterior cleaning once a year. Lutherville properties with heavy tree coverage near Loch Raven Reservoir may develop algae and mildew faster and benefit from cleaning every 6-9 months to stay ahead of biological buildup.",
  },
];

const photos = [
  { src: "/gallery/house_washing_1.jpg", alt: "House washing in Lutherville Timonium MD" },
  { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning Lutherville Timonium MD" },
  { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Lutherville Timonium MD" },
  { src: "/gallery/residential_1.jpg", alt: "Residential power washing Lutherville Timonium MD" },
  { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Timonium MD" },
  { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Lutherville MD" },
];

export default function LuthervilleTimoniumPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/lutherville-timonium-md-hero.jpg"
          alt="Power Washing Lutherville Timonium MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Lutherville-Timonium, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Lutherville&apos;s wooded residential properties and Timonium&apos;s busy commercial corridor — one ZIP code, two distinct communities, one standard of clean.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Lutherville-Timonium, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Lutherville and Timonium share the 21093 ZIP code but have distinct characters that make them uniquely interesting from an exterior cleaning standpoint. Lutherville is one of Baltimore County&apos;s most desirable residential communities — winding subdivisions with spacious homes, wooded yards, and proximity to Loch Raven Reservoir that give the area a secluded, upscale feel. Timonium is the commercial heart of the pairing — home to the Maryland State Fairgrounds, a busy York Road retail and restaurant corridor, and significant office and commercial development.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing serves both sides of this community — residential homeowners in Lutherville&apos;s wooded subdivisions who need careful soft wash cleaning on high-value properties, and commercial property owners along Timonium&apos;s York Road corridor who need professional exterior cleaning that keeps their businesses looking sharp year round.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Lutherville-Timonium Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lutherville's Wooded Lots & Loch Raven Proximity",
                body: "Lutherville's defining characteristic is its mature, heavily wooded residential landscape — spacious homes set back from winding roads, surrounded by trees that create the secluded feel residents love. That same tree canopy keeps home exteriors shaded and damp year round, creating near-perfect conditions for algae, moss, and mildew to develop on siding, rooftops, and decks. The proximity to Loch Raven Reservoir adds additional ambient moisture to the environment. Lutherville homes typically need professional exterior cleaning annually to combat the biological growth that this environment produces.",
              },
              {
                title: "High-Value Residential Properties",
                body: "Lutherville consistently ranks among Baltimore County's highest-value residential communities — home values in the area regularly exceed $600,000 and properties in neighborhoods like Hampton and Mays Chapel North command premium prices. At these price points, exterior appearance has a direct and significant impact on property value. Professional soft wash cleaning that restores siding, clears rooftop algae streaking, and brightens driveways and walkways is one of the most visible and cost-effective maintenance investments a Lutherville homeowner can make.",
              },
              {
                title: "Timonium's Commercial Corridor & Event Venue Proximity",
                body: "Timonium's York Road corridor is one of Baltimore County's busiest commercial strips — home to retail centers, restaurants, medical offices, and businesses that serve the surrounding residential community. The Maryland State Fairgrounds brings significant seasonal traffic to the area. Commercial properties along this corridor require regular professional exterior cleaning to maintain the appearance that attracts customers in a competitive retail environment. We provide commercial pressure washing throughout the Timonium commercial district with flexible scheduling that works around business hours.",
              },
              {
                title: "HOA Communities & Exterior Standards",
                body: "Lutherville-Timonium is home to numerous planned communities with active HOAs — Chapelgate, Mays Chapel North, Roundwood Ridge, and others — that enforce exterior maintenance standards and regularly issue compliance notices for dirty siding, stained driveways, and algae-covered rooftops. We work with homeowners throughout the 21093 community to meet HOA requirements and provide documentation of service completion for compliance purposes.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-[#181818] mb-3 flex items-start gap-3">
                  <span className="text-[#E63946] shrink-0 mt-0.5">▸</span>
                  {item.title}
                </h3>
                <p className="text-[#2A2A2A] leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <MiniGallery photos={photos} />

      {/* Review */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#E63946] text-2xl mb-4">★★★★★</div>
          <p className="text-[#2A2A2A] text-lg italic leading-relaxed mb-6">
            We live in a wooded neighborhood in Lutherville and our siding gets covered in green algae every year. Renewal came out, did a thorough soft wash, and the house looks incredible. They were careful around our landscaping and the whole process was seamless. Already booked them for next year.
          </p>
          <p className="text-[#181818] font-bold">— Robert K., Lutherville, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Lutherville-Timonium & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24862!2d-76.6219!3d39.4482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80f6a1a1a1a1a%3A0x1234!2sLuthersville-Timonium%2C+MD+21093!5e0!3m2!1sen!2sus!4v1234567890"
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

      <FAQAccordion faqs={faqs} />

      {/* Internal Links */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Explore Nearby Service Areas</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Towson, MD", href: "/service-areas/towson-md", description: "Power washing services in Towson and surrounding neighborhoods." },
              { label: "Pikesville, MD", href: "/service-areas/pikesville-md", description: "Exterior cleaning for Pikesville homes and businesses." },
              { label: "Owings Mills, MD", href: "/service-areas/owings-mills-md", description: "Professional pressure washing throughout Owings Mills." },
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
            Ready to restore your Lutherville-Timonium property?
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