import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "Do you service the newer developments in Owings Mills?",
    answer: "Yes — we work throughout Owings Mills including newer developments like Greenspring Station, Caves Valley, and the communities along Reisterstown Road. Newer construction often features vinyl and fiber cement siding that benefits greatly from annual soft wash cleaning to prevent algae and mildew buildup.",
  },
  {
    question: "How does Owings Mills' geography affect exterior cleaning needs?",
    answer: "Owings Mills sits in a valley with significant tree coverage and natural drainage features that keep properties damp longer after rain. This moisture retention accelerates biological growth on home exteriors — making professional soft washing more important here than in drier, more exposed areas.",
  },
  {
    question: "Can you handle HOA requirements in Owings Mills communities?",
    answer: "Absolutely. Many Owings Mills communities have active HOAs with strict exterior maintenance standards. We provide service documentation and before and after photos that satisfy most HOA compliance requirements. Contact us and we'll make sure your property meets your community's standards.",
  },
  {
    question: "Do you clean commercial properties in the Owings Mills Town Center area?",
    answer: "Yes — we provide commercial pressure washing for retail, office, and mixed use properties throughout the Owings Mills area including the Town Center corridor. We schedule around your business hours and provide full commercial liability documentation.",
  },
];

const photos = [
  { src: "/images/gallery/power_washing_5.jpg", alt: "House washing in Owings Mills MD" },
  { src: "/images/gallery/commercial_3.jpg", alt: "Driveway cleaning Owings Mills MD" },
  { src: "/images/gallery/commercial_15.jpg", alt: "Deck cleaning service Owings Mills MD" },
  { src: "/images/gallery/residential_2.jpg", alt: "Residential power washing Owings Mills MD" },
  { src: "/images/gallery/commercial_14.jpg", alt: "Commercial pressure washing Owings Mills MD" },
  { src: "/images/gallery/parking_garage_cleaning_2.jpg", alt: "Exterior cleaning Owings Mills MD" },
];

export default function OwingsMillsPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/gallery/commercial_13.jpg"
          alt="Power Washing Catonsville MD"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 20%' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Owings Mills, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Professional exterior cleaning for Owings Mills homeowners and businesses — keeping one of Baltimore County&apos;s fastest growing communities looking its best.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/quote"
              className="bg-[#E63946] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:bg-red-700 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+14109998886"
              className="border border-white text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-[#181818] transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Owings Mills, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Owings Mills has transformed over the past two decades from a quiet Baltimore County suburb into one of the region&apos;s most sought-after residential and commercial destinations. With upscale communities like Caves Valley, Greenspring, and McDonogh Park attracting high-income homeowners, and the Owings Mills Town Center drawing major retail and commercial development, the area&apos;s growth has brought with it an equally high standard for property maintenance and appearance.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing serves homeowners and commercial property owners throughout Owings Mills with professional exterior cleaning that matches the standard of this growing community. Whether you&apos;re maintaining a newer construction home in one of Owings Mills&apos; planned communities or keeping a commercial property on the Town Center corridor looking sharp, we have the right equipment and approach for every surface type.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Owings Mills Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Valley Geography & Moisture Retention",
                body: "Owings Mills sits in a natural valley surrounded by the Caves Valley and Greenspring Valley corridors — beautiful wooded terrain that keeps the area lush but also traps moisture against home exteriors longer after rain. This extended dampness creates ideal conditions for algae, mold, and mildew growth on siding, rooftops, and concrete that property owners in flatter, more exposed areas don't deal with at the same rate.",
              },
              {
                title: "Newer Construction & HOA Communities",
                body: "Much of Owings Mills' residential development happened in the 1990s and 2000s, producing large planned communities with active HOAs and strict exterior maintenance requirements. Vinyl siding, fiber cement board, and composite materials are common on these properties — all of which benefit from annual soft wash cleaning to prevent the green and black biological staining that develops in shaded, damp conditions. HOA violation notices for dirty exteriors are common in these communities.",
              },
              {
                title: "High Property Values & Curb Appeal Standards",
                body: "Owings Mills communities like Caves Valley and Greenspring consistently rank among Baltimore County's highest-value residential areas. In a market where homes regularly sell above $600,000, exterior appearance has a direct and measurable impact on property value and neighborhood perception. Professional exterior cleaning is one of the highest ROI maintenance investments an Owings Mills homeowner can make before a sale or simply as part of annual upkeep.",
              },
              {
                title: "Commercial Growth Along the Town Center Corridor",
                body: "The Owings Mills Town Center and surrounding commercial development along Reisterstown Road and Dolfield Boulevard creates significant demand for commercial pressure washing. Retail storefronts, restaurant exteriors, office building facades, and parking areas all require regular professional cleaning to maintain the polished appearance that attracts customers in this competitive commercial environment.",
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
            Our HOA sent us a notice about our driveway and siding. Called Renewal and they came out within a few days. The results were incredible — our driveway looks brand new and the siding is spotless. The HOA inspector signed off immediately. Highly recommend.
          </p>
          <p className="text-[#181818] font-bold">— Marcus T., Owings Mills, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Owings Mills & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49318.518424701564!2d-76.83751393643941!3d39.4149109953042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c817ad20ac897f%3A0xd3eb5f31eb8c09f4!2sOwings%20Mills%2C%20MD!5e0!3m2!1sen!2sus!4v1784578801780!5m2!1sen!2sus"
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
              { label: "Pikesville, MD", href: "/service-areas/pikesville-md", description: "Power washing services in Pikesville and surrounding neighborhoods." },
              { label: "Reisterstown, MD", href: "/service-areas/reisterstown-md", description: "Exterior cleaning for Reisterstown homes and businesses." },
              { label: "Lutherville-Timonium, MD", href: "/service-areas/lutherville-timonium-md", description: "Professional pressure washing throughout Lutherville-Timonium." },
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
            Ready to restore your Owings Mills property?
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