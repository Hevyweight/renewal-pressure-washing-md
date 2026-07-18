import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/app/components/service-areas/servicesGrid";
import MiniGallery from "@/app/components/service-areas/miniGallery";
import FAQAccordion from "@/app/components/service-areas/faqAccordion";

const faqs = [
  {
    question: "Why do Towson homes develop so much algae and mildew?",
    answer: "Towson's humid subtropical climate creates ideal conditions for biological growth on home exteriors. High heat combined with high moisture levels — especially on shaded north-facing surfaces — causes algae and mildew to develop rapidly on siding, rooftops, and concrete. Professional soft washing kills growth at the root rather than just washing it off the surface.",
  },
  {
    question: "Can you clean older Towson homes without causing damage?",
    answer: "Yes — Towson has a significant stock of homes built before 1970, many featuring brick, older vinyl siding, and painted wood surfaces. We always use soft wash techniques on older materials and adjust our pressure and cleaning solutions based on the age and condition of each surface.",
  },
  {
    question: "Do you service the neighborhoods around Towson University?",
    answer: "Yes — we serve all Towson area neighborhoods including Stoneleigh, Anneslie, Ruxton, Loch Raven Village, Knollwood, Idlewylde, and surrounding areas throughout Baltimore County.",
  },
  {
    question: "How often should Towson homeowners schedule professional cleaning?",
    answer: "Most Towson homeowners benefit from professional exterior cleaning once a year. Given Towson's heavy tree coverage and humid climate, homes with heavy shade or north-facing surfaces may develop biological growth faster and benefit from cleaning every 6-9 months.",
  },
];

const photos = [
  { src: "/gallery/house_washing_1.jpg", alt: "House washing in Towson MD" },
  { src: "/gallery/concrete_cleaning_1.jpg", alt: "Driveway cleaning Towson MD" },
  { src: "/gallery/deck_cleaning_1.jpg", alt: "Deck cleaning service Towson MD" },
  { src: "/gallery/residential_1.jpg", alt: "Residential power washing Towson MD" },
  { src: "/gallery/commercial_1.jpg", alt: "Commercial pressure washing Towson MD" },
  { src: "/gallery/house_washing_2.jpg", alt: "Exterior cleaning Towson MD" },
];

export default function TowsonPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/service-areas/towson-md-hero.jpg"
          alt="Power Washing Towson MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Power Washing in Towson, MD
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional exterior cleaning for Towson homeowners and businesses — fighting the algae, mildew, and grime that Baltimore County&apos;s humid climate produces year round.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Renewal Pressure Washing Serves Towson, MD
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Towson is Baltimore County&apos;s largest community and one of Maryland&apos;s most active suburban hubs — home to a diverse mix of established residential neighborhoods, Towson University, a thriving commercial corridor, and some of Baltimore County&apos;s most desirable single family homes. With a median home value above $500,000 and neighborhoods like Stoneleigh, Ruxton, and Anneslie commanding serious property values, Towson homeowners understand that exterior appearance matters.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            What Towson also has is a climate problem. The area&apos;s humid subtropical conditions — high heat, high moisture, and heavy tree canopy in established neighborhoods — create near-perfect conditions for algae, mold, and mildew growth on home exteriors. Renewal Pressure Washing specializes in the soft wash techniques that eliminate biological growth safely from Towson&apos;s diverse housing stock without causing damage to older materials.
          </p>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Makes Towson Properties Unique
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Humid Climate & Year-Round Biological Growth",
                body: "Towson residents know their climate well — the area's high heat and humidity create conditions where algae, mildew, and mold develop on home exteriors faster than almost anywhere else in Maryland. The north and shaded sides of Towson homes commonly turn green or black from biological growth within a single season. Standard hosing doesn't kill the organism — it just moves it around. Our soft wash treatment eliminates it at the root.",
              },
              {
                title: "Diverse Housing Stock from Pre-1940s to Modern",
                body: "Towson's neighborhoods span over a century of residential development. Older neighborhoods like Anneslie and Stoneleigh feature homes built before 1940 with brick exteriors and original wood details that require extremely careful soft wash techniques. Newer developments along the York Road corridor feature vinyl siding and composite materials with their own cleaning requirements. We assess every surface before we start.",
              },
              {
                title: "Heavy Tree Canopy in Established Neighborhoods",
                body: "Towson's most desirable neighborhoods — Ruxton, Knollwood, Idlewylde — are defined by their mature tree canopy, which is also the primary driver of exterior cleaning demand. Shaded homes stay damp longer after rain, accelerating mold and algae growth on siding, rooftops, decks, and concrete surfaces. Homes under heavy tree coverage in Towson typically need professional cleaning more frequently than sun-exposed properties.",
              },
              {
                title: "Mix of Residential & Commercial Properties",
                body: "Towson's urban-suburban character means commercial properties sit alongside residential neighborhoods throughout the area. From storefronts along York Road to office buildings near the Towson Town Center, commercial exterior cleaning is as important as residential in this market. Renewal handles both — using the right equipment and approach for every property type.",
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
            We have a older home in Stoneleigh and were nervous about pressure washing damaging the brick and original wood trim. Renewal was incredibly careful and the results were better than we expected — the house looks brand new. They clearly know what they&apos;re doing with older homes.
          </p>
          <p className="text-[#181818] font-bold">— Jennifer M., Stoneleigh, Towson MD</p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">
            Serving Towson & Surrounding Areas
          </h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24862!2d-76.6019!3d39.4015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80f6a1a1a1a1a%3A0x1234!2sTowson%2C+MD+21204!5e0!3m2!1sen!2sus!4v1234567890"
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
              { label: "Lutherville-Timonium, MD", href: "/service-areas/lutherville-timonium-md", description: "Exterior cleaning for Lutherville-Timonium homes and businesses." },
              { label: "Owings Mills, MD", href: "/service-areas/owings-mills-md", description: "Professional pressure washing throughout the Owings Mills area." },
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
            Ready to restore your Towson property?
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