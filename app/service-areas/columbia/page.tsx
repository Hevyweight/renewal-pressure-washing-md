import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "How does Columbia's village system affect exterior cleaning needs?",
    answer: "Columbia's planned village system means most residential properties fall under a village association with exterior maintenance standards enforced by the Columbia Association. Annual soft wash cleaning is essentially required in many Columbia villages to maintain compliance with community appearance standards — especially for siding, rooftops, and driveways that develop visible biological growth.",
  },
  {
    question: "Do you service all of Columbia's villages?",
    answer: "Yes — we serve all of Columbia's ten villages including Wilde Lake, Owen Brown, Kings Contrivance, Hickory Ridge, Long Reach, Oakland Mills, Harper's Choice, Dorsey's Search, River Hill, and Town Center. Each village has its own character and housing mix and we adjust our approach for each property type.",
  },
  {
    question: "Can you clean townhomes and condos in Columbia?",
    answer: "Yes — Columbia has a significant stock of townhomes, condos, and attached housing throughout its villages. We clean townhome exteriors, shared driveways, patios, and decks. For condo associations and HOAs managing multiple units we offer multi-property pricing — contact us to discuss your community's needs.",
  },
  {
    question: "How often should Columbia homeowners schedule exterior cleaning?",
    answer: "Most Columbia homeowners benefit from professional exterior cleaning once a year. Columbia's planned landscape features significant tree coverage throughout its villages — especially around the lake system — which keeps properties shaded and damp and accelerates biological growth. Properties near the lakes or in heavily wooded areas may benefit from cleaning every 6-9 months.",
  },
];

const photos = [
  { src: "/gallery/house_washing_1.jpg", alt: "House washing in Columbia MD" },
  { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning Columbia MD" },
  { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Columbia MD" },
  { src: "/gallery/residential_1.jpg", alt: "Residential power washing Columbia MD" },
  { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Columbia MD" },
  { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Columbia MD" },
];

export default function ColumbiaPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/columbia-md-hero.jpg"
          alt="Power Washing Columbia MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Columbia, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Columbia&apos;s planned villages, lakeside properties, and Howard County&apos;s most thoughtfully designed community.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Columbia, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Columbia is one of America&apos;s most celebrated planned communities — founded in 1967 by developer James Rouse with a vision of a racially and economically integrated city built around green space, lakes, and walkable village centers. Today Columbia is home to over 100,000 residents spread across ten distinct villages, each with its own community center, parks, and neighborhood identity. It consistently ranks among the best places to live in Maryland and the United States.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Columbia&apos;s intentional landscape design — abundant tree coverage, man-made lakes, and extensive green corridors connecting the villages — creates the natural beauty that residents love and the exterior cleaning challenges that come with living in a lush, humid, shaded environment. Renewal Pressure Washing serves homeowners and property managers throughout Columbia&apos;s villages with professional exterior cleaning that keeps this exceptional community looking its best.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Columbia Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Columbia Association Standards & Village HOAs",
                body: "Columbia's governance structure — the Columbia Association overseeing the entire planned community, with individual village associations managing neighborhood-level standards — means exterior maintenance expectations are clearly defined and consistently enforced. Many Columbia homeowners receive annual notices about siding cleanliness, driveway appearance, and rooftop algae that must be addressed to remain in compliance. Professional soft wash cleaning is the most effective and efficient way to meet these standards and avoid repeated notices.",
              },
              {
                title: "Lakeside Properties & Elevated Moisture Levels",
                body: "Columbia's ten villages are built around a series of man-made lakes — Lake Kittamaqundi in Town Center, Wilde Lake in its namesake village, Lake Elkhorn in Owen Brown, and others. Properties near these lakes experience elevated ambient moisture levels year round that significantly accelerate biological growth on home exteriors. Lakeside homes in Columbia typically develop algae and mildew on siding and rooftops faster than inland properties and benefit from more frequent professional cleaning.",
              },
              {
                title: "Aging 1960s-1980s Housing Stock",
                body: "Columbia's oldest villages — Wilde Lake, Harper's Choice, and Oakland Mills — were developed in the late 1960s and 1970s, producing housing stock that is now 50+ years old. These properties feature original wood siding, older brick, and aging vinyl that requires careful soft wash techniques rather than high pressure washing. Surfaces this age can be damaged permanently by improper cleaning — we assess every property's materials and condition before we start.",
              },
              {
                title: "Diverse Housing Mix Across All Price Points",
                body: "Columbia's founding vision of economic diversity is reflected in its housing stock — from affordable condos and townhomes in villages like Oakland Mills to luxury single family homes in River Hill and Clary's Forest. This diversity means we serve a wide range of property types throughout Columbia with the right approach for each. Whether it's a townhome deck in Long Reach or a large colonial driveway in Kings Contrivance, we bring the same standard of clean to every job.",
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
            We live near Wilde Lake and our siding and deck were covered in green algae from the moisture off the water. Renewal came out and completely transformed the exterior — the siding looks brand new and the deck is clean and safe again. We got a compliance notice from the village association and Renewal solved it in one visit.
          </p>
          <p className="text-[#181818] font-bold">— Angela S., Wilde Lake, Columbia MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Columbia & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49724!2d-76.8610!3d39.2037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81c3e91c0d8c5%3A0x1234!2sColumbia%2C+MD+21044!5e0!3m2!1sen!2sus!4v1234567890"
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
              { label: "Catonsville, MD", href: "/service-areas/catonsville-md", description: "Exterior cleaning for Catonsville homes and businesses." },
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
            Ready to restore your Columbia property?
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