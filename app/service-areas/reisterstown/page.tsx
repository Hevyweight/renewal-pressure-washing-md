import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "Can you clean historic homes in Reisterstown without causing damage?",
    answer: "Yes — Reisterstown's historic district features homes dating back to the late 1700s with original brick, stone, and wood exteriors that require extremely careful soft wash techniques. We never use high pressure on historic materials and always assess surface age and condition before we start to ensure we're using the safest possible approach.",
  },
  {
    question: "How does Reisterstown's rural character affect exterior cleaning needs?",
    answer: "Reisterstown's wooded, semi-rural setting means homes are surrounded by mature trees that keep exteriors shaded and damp — accelerating algae, moss, and mildew growth significantly compared to more open suburban areas. Homes on larger lots with heavy tree coverage often need professional cleaning more frequently than typical suburban properties.",
  },
  {
    question: "Do you service the newer developments west of I-795?",
    answer: "Yes — we serve both the historic town center area and the newer residential developments west of Interstate 795 including townhomes, condos, and single family homes in that corridor. Each area has different housing types and we adjust our approach accordingly.",
  },
  {
    question: "How often should Reisterstown homeowners schedule exterior cleaning?",
    answer: "Given Reisterstown's heavy tree coverage and semi-rural setting, most homeowners benefit from professional exterior cleaning once a year. Properties with significant shade or moss growth on rooftops may need service every 6-9 months to stay ahead of biological buildup.",
  },
];

const photos = [
  { src: "/images/gallery/power_washing_11.jpg", alt: "House washing in Reisterstown MD" },
  { src: "/images/gallery/parking_garage_cleaning_2.jpg", alt: "Driveway cleaning Reisterstown MD" },
  { src: "/images/gallery/commercial_5.jpg", alt: "Deck cleaning service Reisterstown MD" },
  { src: "/images/gallery/residential_7.jpg", alt: "Residential power washing Reisterstown MD" },
  { src: "/images/gallery/commercial_14.jpg", alt: "Commercial pressure washing Reisterstown MD" },
  { src: "/images/gallery/lights_6.jpg", alt: "Exterior cleaning Reisterstown MD" },
];

export default function ReisterstownPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/gallery/commercial_13.jpg"
          alt="Power Washing Reisterstown MD"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 20%' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Reisterstown, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Professional exterior cleaning for Reisterstown&apos;s historic homes and newer developments — respecting the character of one of Baltimore County&apos;s most storied communities.
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
            Renewal Pressure Washing Serves Reisterstown, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Reisterstown is one of Baltimore County&apos;s most historically significant communities — a town with roots stretching back to the late 1700s, a charming Main Street historic district, and a residential landscape that ranges from 18th century brick homes to modern townhomes and single family developments west of Interstate 795. That diversity of housing stock makes Reisterstown one of the most interesting and demanding areas for exterior cleaning in the region.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing serves homeowners throughout the Reisterstown area with professional soft wash and pressure washing techniques calibrated to each property&apos;s unique needs. We understand the difference between cleaning a 200-year-old brick facade on Main Street and a vinyl-sided colonial in a newer I-795 corridor development — and we approach each one accordingly.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Reisterstown Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Historic Architecture Requiring Special Care",
                body: "Reisterstown's historic district contains homes dating to the late 1700s — original brick, stone foundations, aged mortar joints, and wood exteriors that cannot tolerate high pressure washing under any circumstances. High pressure destroys aged mortar joints, causes spalling on old brick, and permanently damages original wood surfaces. Our soft wash approach is the only safe cleaning method for historic Reisterstown properties, and it's the approach we use without exception on these materials.",
              },
              {
                title: "Semi-Rural Setting & Heavy Biological Growth",
                body: "Reisterstown's semi-rural character — larger lots, mature trees, and natural wooded surroundings — creates the ideal environment for aggressive biological growth on home exteriors. Moss, algae, lichen, and mildew all thrive in Reisterstown's shaded, damp conditions. Unlike suburban properties with more sun exposure, Reisterstown homes often develop visible biological staining within a single season on north-facing and shaded surfaces.",
              },
              {
                title: "Two Distinct Housing Markets",
                body: "Reisterstown effectively contains two separate residential markets — the historic town center with its older character homes, and the newer high-density development west of I-795 featuring condos, townhomes, and modern single-family construction. Each market has completely different surface types, cleaning requirements, and price points. We serve both with the right equipment and technique for each property type.",
              },
              {
                title: "Large Lot Properties & Extended Driveways",
                body: "Reisterstown's larger residential lots mean more concrete, more hardscaping, and more surface area to maintain than typical Baltimore County suburbs. Long driveways, expansive patios, and large deck surfaces are common on Reisterstown properties — all of which accumulate biological staining, oil, and weathering faster than smaller suburban surfaces due to greater exposure and surface area.",
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
            We have an older home near Main Street and were very nervous about pressure washing damaging the original brick. Renewal was incredibly knowledgeable about historic materials and took their time assessing everything before starting. The result was perfect — clean without any damage whatsoever.
          </p>
          <p className="text-[#181818] font-bold">— Patricia H., Reisterstown, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Reisterstown & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49299.18416725554!2d-76.8184800902616!3d39.442233727531494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81610d70d2c1b%3A0x71219558c724220!2sReisterstown%2C%20MD!5e0!3m2!1sen!2sus!4v1784578895931!5m2!1sen!2sus" 
              height="100%"
              width="100%"
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
              { label: "Owings Mills, MD", href: "/service-areas/owings-mills-md", description: "Power washing services in Owings Mills and surrounding neighborhoods." },
              { label: "Pikesville, MD", href: "/service-areas/pikesville-md", description: "Exterior cleaning for Pikesville homes and businesses." },
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
            Ready to restore your Reisterstown property?
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