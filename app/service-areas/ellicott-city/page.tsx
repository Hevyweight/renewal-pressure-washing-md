import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "How does Ellicott City's flood history affect exterior cleaning needs?",
    answer: "Ellicott City's historic downtown has experienced significant flooding events in recent years, and the surrounding area's topography means moisture management is a constant concern. Biological growth from standing water and persistent dampness accelerates on home exteriors throughout the area — making professional soft wash cleaning especially important for properties in lower lying areas and near the Patapsco River corridor.",
  },
  {
    question: "Can you clean the historic stone buildings in Old Ellicott City?",
    answer: "Historic stone and granite buildings in Old Ellicott City require extremely careful cleaning — high pressure washing on these materials causes irreversible surface damage and can compromise the structural integrity of aged mortar. We use targeted low pressure soft wash techniques and stone-safe cleaning solutions specifically formulated for historic granite and fieldstone construction.",
  },
  {
    question: "Do you service the newer communities in eastern Ellicott City?",
    answer: "Yes — we serve all of Ellicott City including the newer planned communities in eastern Howard County like River Hill, Turf Valley, and the developments along Route 40. These newer properties feature vinyl, fiber cement, and composite siding that benefits greatly from annual soft wash cleaning to prevent the algae and mildew buildup common in Howard County's humid climate.",
  },
  {
    question: "How often should Ellicott City homeowners schedule exterior cleaning?",
    answer: "Most Ellicott City homeowners benefit from professional exterior cleaning once a year. Properties near the Patapsco River, in wooded areas, or on north-facing slopes may develop biological growth faster and benefit from cleaning every 6-9 months given Howard County's consistently humid conditions.",
  },
];

const photos = [
  { src: "/gallery/house_washing_1.jpg", alt: "House washing in Ellicott City MD" },
  { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning Ellicott City MD" },
  { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Ellicott City MD" },
  { src: "/gallery/residential_1.jpg", alt: "Residential power washing Ellicott City MD" },
  { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Ellicott City MD" },
  { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Ellicott City MD" },
];

export default function EllicottCityPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/ellicott-city-md-hero.jpg"
          alt="Power Washing Ellicott City MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Ellicott City, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Ellicott City&apos;s historic stone buildings, wooded hillside homes, and Howard County&apos;s most established neighborhoods.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Ellicott City, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Ellicott City is one of Maryland&apos;s most historically significant communities — founded in 1772 along the Patapsco River, home to one of the oldest surviving railroad stations in the country, and built largely from the local granite that gives Old Ellicott City its distinctive character. But Ellicott City is also one of Howard County&apos;s most dynamic modern communities — with planned villages like River Hill and Turf Valley, top-rated schools, and a residential landscape that stretches from 18th century stone buildings to newly constructed suburban developments along the Route 40 corridor.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            That range of architecture and geography makes Ellicott City one of the most interesting and demanding exterior cleaning markets in the region. Renewal Pressure Washing serves homeowners and businesses throughout Ellicott City with professional cleaning techniques specifically matched to each property&apos;s surface type — from historic granite in Old EC to vinyl siding in River Hill.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Ellicott City Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Historic Granite & Stone Construction",
                body: "Old Ellicott City's historic district features granite and fieldstone construction that is unlike almost anything else in the Baltimore region. These materials are extraordinarily durable but require equally extraordinary care when cleaning — high pressure washing on historic granite causes surface erosion, destroys aged lime mortar joints, and can permanently alter the appearance of stone that has stood for 200 years. We use stone-safe soft wash solutions and low pressure techniques that clean without causing any damage to these irreplaceable historic surfaces.",
              },
              {
                title: "Hillside Topography & Moisture Concentration",
                body: "Ellicott City's dramatic hillside topography — the steep terrain that makes Old EC so visually striking — also creates significant moisture management challenges for homeowners. Properties on hillside lots concentrate runoff against foundations and lower exterior surfaces, keeping them consistently damp and accelerating biological growth. Homes on Ellicott City's wooded hillsides often develop algae and moss on north-facing and shaded surfaces faster than comparable properties in flatter communities.",
              },
              {
                title: "Planned Villages & HOA Communities",
                body: "Eastern Ellicott City's planned communities — River Hill, Turf Valley, Kings Contrivance, and others — are among Howard County's most desirable residential addresses, with active village associations and HOAs that maintain strict exterior appearance standards. Annual soft wash cleaning is essentially mandatory in many of these communities to meet association requirements and maintain property values in neighborhoods where homes regularly sell above $700,000.",
              },
              {
                title: "Patapsco River Corridor & Flood Zone Properties",
                body: "Properties near the Patapsco River and in Ellicott City's flood-affected areas deal with persistent moisture challenges that accelerate biological growth and surface deterioration. The combination of river proximity, high humidity, and wooded surroundings creates conditions where algae, mold, and mildew develop aggressively on home exteriors — requiring more frequent professional cleaning than properties in drier, more exposed locations.",
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
            We live on a wooded hillside in Ellicott City and our siding and driveway were covered in algae and moss. Renewal did an outstanding job — they clearly understood how to handle the slope and the landscaping around our property. The house looks better than it did when we moved in.
          </p>
          <p className="text-[#181818] font-bold">— Christine L., Ellicott City, MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Ellicott City & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24862!2d-76.7983!3d39.2673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81c3e91c0d8c5%3A0x1234!2sEllicott+City%2C+MD+21043!5e0!3m2!1sen!2sus!4v1234567890"
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
              { label: "Columbia, MD", href: "/service-areas/columbia-md", description: "Power washing services in Columbia and surrounding villages." },
              { label: "Catonsville, MD", href: "/service-areas/catonsville-md", description: "Exterior cleaning for Catonsville homes and businesses." },
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
            Ready to restore your Ellicott City property?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate from Howard County&apos;s trusted exterior cleaning team.
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