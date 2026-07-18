import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "Can you clean the historic homes in Catonsville's older neighborhoods?",
    answer: "Yes — Catonsville has significant historic housing stock including the Oella mill village and Academy Heights neo-Colonial rowhouses dating back over a century. These properties require careful soft wash techniques rather than high pressure washing to protect original brick, aged mortar joints, and historic wood surfaces. We assess every surface before we start and adjust our approach accordingly.",
  },
  {
    question: "How does Catonsville's location near the Patapsco Valley affect exterior cleaning needs?",
    answer: "Catonsville borders Patapsco Valley State Park which means homes on the western edge of the community sit in a heavily wooded, high-humidity environment that accelerates biological growth significantly. The valley's moisture-rich air keeps home exteriors damp longer after rain — making annual soft wash cleaning especially important for properties near the park.",
  },
  {
    question: "Do you service the rowhouses and attached homes in Catonsville?",
    answer: "Yes — rowhouses and attached homes require a slightly different approach than detached single family homes since shared walls and tight access points need to be accounted for. We have experience cleaning attached housing throughout the Baltimore County area and can work efficiently in these environments.",
  },
  {
    question: "How often should Catonsville homeowners schedule professional exterior cleaning?",
    answer: "Most Catonsville homeowners benefit from professional cleaning once a year. Properties near Patapsco Valley State Park or in heavily shaded neighborhoods may develop algae and mildew faster and benefit from service every 6-9 months to maintain their appearance.",
  },
];

const photos = [
  { src: "/gallery/house_washing_1.jpg", alt: "House washing in Catonsville MD" },
  { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning Catonsville MD" },
  { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Catonsville MD" },
  { src: "/gallery/residential_1.jpg", alt: "Residential power washing Catonsville MD" },
  { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Catonsville MD" },
  { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Catonsville MD" },
];

export default function CatonsvillePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/catonsville-md-hero.jpg"
          alt="Power Washing Catonsville MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Catonsville, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Catonsville&apos;s historic rowhouses, wooded neighborhoods, and family homes — where Baltimore County meets the Patapsco Valley.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Catonsville, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Catonsville occupies a unique position in Baltimore County — a community with deep historical roots, a charming downtown, and some of the region&apos;s most diverse residential architecture, all situated on the edge of Patapsco Valley State Park. From the historic Oella mill village dating to 1808 and the neo-Colonial rowhouses of Academy Heights, to newer single-family developments and the busy Frederick Road commercial corridor, Catonsville offers a mix of housing types and property challenges that require a flexible, experienced exterior cleaning approach.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing serves homeowners and business owners throughout Catonsville with professional soft wash and pressure washing services calibrated to each property&apos;s specific surface types and local environmental conditions. We know Catonsville&apos;s neighborhoods and we understand what it takes to keep these diverse properties looking their best year round.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Catonsville Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Historic Architecture & Century-Old Homes",
                body: "Catonsville has some of Baltimore County's most historically significant residential architecture — from the Oella mill village on the National Register of Historic Places, with structures dating to 1808, to the hundreds of neo-Colonial rowhouses in Academy Heights built in the early 20th century. These historic structures require soft wash techniques without exception. High pressure washing on century-old brick destroys aged mortar joints, causes surface spalling, and can permanently damage historic materials that simply cannot be replaced.",
              },
              {
                title: "Patapsco Valley Humidity & Biological Growth",
                body: "Catonsville's position adjacent to Patapsco Valley State Park gives the community its natural beauty — and its most persistent exterior cleaning challenge. The valley creates a high-humidity microclimate that keeps home exteriors in western Catonsville consistently damp, accelerating the growth of algae, moss, mildew, and lichen on siding, rooftops, decks, and concrete surfaces. Properties backing up to the park or situated in wooded areas of neighborhoods like Woodbridge Valley see some of the fastest biological growth rates in the Baltimore area.",
              },
              {
                title: "Diverse Housing Stock Requiring Different Approaches",
                body: "Catonsville's residential landscape includes attached rowhouses, semi-detached twins, classic single-family colonials, and newer construction — all within close proximity to each other in different neighborhoods. Each housing type presents different cleaning challenges: rowhouses have shared walls and tight side access, older colonials have delicate original siding and trim, and newer construction has vinyl and fiber cement that needs regular soft washing to stay clean. A one-size approach doesn't work here.",
              },
              {
                title: "Frederick Road Commercial Corridor",
                body: "Frederick Road is Catonsville's main commercial artery — lined with local restaurants, retail shops, service businesses, and professional offices that depend on exterior appearance to attract customers. Commercial properties along Frederick Road accumulate traffic grime, biological growth, and general weathering that requires regular professional cleaning to maintain the inviting appearance that brings customers through the door.",
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
            We have an older home in Catonsville near the park and the back of the house was covered in green algae every summer. Renewal came out and did an incredible job — completely transformed the back of the house. They were careful with our garden and the results lasted well into the following year.
          </p>
          <p className="text-[#181818] font-bold">— Thomas W., Catonsville, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Catonsville & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24862!2d-76.7319!3d39.2723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81c3e91c0d8c5%3A0x1234!2sCatonsville%2C+MD+21228!5e0!3m2!1sen!2sus!4v1234567890"
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
              { label: "Ellicott City, MD", href: "/service-areas/ellicott-city-md", description: "Power washing services in Ellicott City and surrounding neighborhoods." },
              { label: "Columbia, MD", href: "/service-areas/columbia-md", description: "Exterior cleaning for Columbia homes and businesses." },
              { label: "Pikesville, MD", href: "/service-areas/pikesville-md", description: "Professional pressure washing throughout Pikesville." },
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
            Ready to restore your Catonsville property?
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