import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Can you remove oil stains from my driveway?",
    answer: "Yes — oil and grease stains require a hot water pressure washing system combined with a commercial grade degreaser to break down the hydrocarbons at the surface level. Results depend on how long the stain has been there and how deep it has penetrated, but we can significantly reduce or completely remove most oil stains.",
  },
  {
    question: "Will pressure washing damage my concrete?",
    answer: "Not when done correctly. We use the appropriate pressure level for each concrete surface and age. Older or decorative concrete requires lower pressure and specialized nozzles to prevent surface etching or aggregate exposure. We assess every surface before we start.",
  },
  {
    question: "How long does concrete cleaning take?",
    answer: "A standard residential driveway takes 1-2 hours. Larger areas like parking lots, pool decks, or multi-surface properties may take longer. We'll give you a time estimate during your free quote.",
  },
  {
    question: "How often should I have my concrete cleaned?",
    answer: "Most homeowners benefit from concrete cleaning once a year. High traffic areas, properties with heavy tree coverage, or driveways that see oil drips from vehicles may benefit from more frequent service.",
  },
];

export default function ConcreteCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services/concrete-cleaning-hero.jpg"
          alt="Concrete Cleaning Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Concrete Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Streak-free driveways, walkways, and patios — restored to their original appearance with professional concrete cleaning.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Professional Concrete Cleaning in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Concrete is one of the most durable surfaces around your home — but it&apos;s also one of the most porous, which means it absorbs oil, grease, algae, rust, and dirt deep into its surface over time. Standard hosing and scrubbing can&apos;t reach the contamination that&apos;s settled into the pores of your driveway or walkway. Professional pressure washing can.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing uses professional surface cleaning equipment and targeted pre-treatment solutions to remove years of embedded staining from driveways, sidewalks, pool decks, patios, and more — leaving your concrete looking clean, uniform, and like new.
          </p>
        </div>
      </section>

      {/* Stain Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Stains We Remove
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Oil & Grease Stains",
                body: "Motor oil, transmission fluid, and grease penetrate deep into concrete pores and can't be removed with standard cleaning. We pre-treat oil stains with a commercial hot water degreaser that breaks down hydrocarbons at the surface level before pressure washing — significantly reducing or eliminating even long-set stains.",
              },
              {
                title: "Algae, Mold & Mildew",
                body: "Shaded and damp concrete surfaces develop green and black organic growth that makes surfaces slippery and hazardous. Our cleaning solution kills algae and mildew at the root rather than just washing it off the surface — preventing faster regrowth.",
              },
              {
                title: "Rust Stains",
                body: "Rust stains from metal furniture, fertilizer, or irrigation water leave orange-brown discoloration that standard pressure washing can't remove. We use targeted rust treatment solutions to break down iron oxide deposits before washing for best results.",
              },
              {
                title: "Tire Marks & Traffic Staining",
                body: "Hot tire pickup — where rubber transfers from tires to concrete — and general traffic discoloration makes driveways look worn and dirty. Our surface cleaning process removes tire marks and traffic staining evenly across the entire surface without streaking.",
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

      {/* Surfaces */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Every Concrete Surface Around Your Home
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              We clean all concrete and hard surface areas around residential and commercial properties including:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Driveways — single, double, and multi-car",
                "Sidewalks and walkways",
                "Pool decks and surrounding areas",
                "Garage floors and aprons",
                "Parking lots and commercial lots",
                "Retaining walls and concrete block",
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
              src="/services/concrete-cleaning-2.jpg"
              alt="Concrete driveway cleaning Baltimore MD"
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
            Our Concrete Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Surface Assessment",
                body: "We inspect the concrete for stain types, surface age, and condition to determine the right pressure level, nozzle type, and pre-treatment solution for the job.",
              },
              {
                step: "02",
                title: "Pre-Treatment Application",
                body: "Problem areas including oil stains, rust, and heavy organic growth are pre-treated with targeted cleaning agents and allowed to dwell before washing begins.",
              },
              {
                step: "03",
                title: "Surface Cleaning",
                body: "We use a rotating surface cleaner — not a standard pressure wand — to clean concrete evenly without leaving streaks or wand marks. This gives your driveway or walkway a uniform, professional finish.",
              },
              {
                step: "04",
                title: "Detail & Edge Work",
                body: "Edges, expansion joints, and corners are cleaned by hand with a pressure wand to ensure every inch of the surface is addressed — not just the easy flat areas.",
              },
              {
                step: "05",
                title: "Final Rinse & Inspection",
                body: "The entire surface is rinsed clean and inspected before we leave. We walk the area with you to confirm the results meet our standard before packing up.",
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
              { label: "Patio Cleaning", href: "/services/patio-cleaning", description: "Clean, safe outdoor spaces ready for any occasion." },
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's exterior." },
              { label: "Deck Cleaning", href: "/services/deck-cleaning", description: "Restore your deck's natural beauty safely." },
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
            Ready for a cleaner driveway?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate today and see what professional concrete cleaning can do for your property.
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