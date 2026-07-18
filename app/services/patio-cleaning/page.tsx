import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Can you clean pavers without damaging them?",
    answer: "Yes — pavers require lower pressure than poured concrete to avoid dislodging the sand between joints or damaging the surface texture. We adjust our pressure and use paver-safe cleaning solutions to clean thoroughly without disturbing the joint sand or paver surface.",
  },
  {
    question: "Will cleaning my patio remove the polymeric sand between my pavers?",
    answer: "Standard pressure washing can dislodge polymeric sand if done incorrectly. We use controlled low pressure techniques specifically to avoid this — but if your joint sand is already degraded or loose we'll let you know before we start so you can plan for re-sanding after the clean.",
  },
  {
    question: "How long does patio cleaning take?",
    answer: "Most residential patio cleaning jobs take 1-2 hours depending on the size of the area and the extent of staining. We'll give you a time estimate during your free quote.",
  },
  {
    question: "Should I seal my pavers after cleaning?",
    answer: "Sealing pavers after cleaning is highly recommended — it locks in the color, prevents future staining, stabilizes joint sand, and makes future cleaning easier. We recommend waiting 24-48 hours after cleaning before applying any sealer to allow the surface to fully dry.",
  },
];

export default function PatioCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services/patio-cleaning-hero.jpg"
          alt="Patio Cleaning Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Patio Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Restore your outdoor living space to its original beauty — clean, safe, and ready for entertaining.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Professional Patio Cleaning in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Your patio is an extension of your home — a space for relaxing, entertaining, and enjoying the outdoors. But patios take constant abuse from weather, foot traffic, fallen leaves, and organic growth that leaves surfaces stained, slippery, and looking worn. Standard hosing and sweeping can&apos;t remove the embedded dirt, algae, and staining that builds up in paver joints and on stone surfaces over time.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing provides professional patio cleaning for all surface types — pavers, natural stone, concrete, brick, and flagstone — using the right pressure and cleaning solution for each material to restore your outdoor space without causing damage.
          </p>
        </div>
      </section>

      {/* Surface Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Every Patio Surface We Clean
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Concrete Pavers",
                body: "Concrete pavers are durable but porous — they absorb organic staining, develop algae and moss between joints, and fade over time from UV exposure. We use a surface cleaner and paver-safe solutions to clean evenly across the entire surface without streaking or dislodging joint sand.",
              },
              {
                title: "Natural Stone — Bluestone, Flagstone & Slate",
                body: "Natural stone patios are beautiful but require careful handling. High pressure and acidic cleaners can etch the surface and permanently damage the stone. We use pH-neutral cleaning solutions and controlled low pressure to clean natural stone safely without affecting its texture or finish.",
              },
              {
                title: "Brick Patios",
                body: "Brick develops deep organic staining and efflorescence — the white salt deposits that leach through the surface from moisture movement beneath. We use brick-safe cleaning agents that break down efflorescence and organic growth without damaging the mortar joints or brick face.",
              },
              {
                title: "Stamped & Decorative Concrete",
                body: "Stamped concrete requires the most careful approach of any patio surface — high pressure strips the sealer and can damage the surface texture permanently. We clean stamped concrete at low pressure with a degreaser safe for sealed surfaces to restore appearance without compromising the finish.",
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

      {/* Safety Section */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Safe for Your Family, Pets & Garden
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Your patio is where your family gathers — we make sure every product we use is safe for the people and pets who use that space every day.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Biodegradable cleaning solutions safe for children and pets once dry",
                "Surrounding garden beds and landscaping pre-wetted and protected",
                "pH-neutral solutions used on sensitive stone and sealed surfaces",
                "No harsh chemical residue left on surfaces your family touches",
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
              src="/services/patio-cleaning-2.jpg"
              alt="Patio cleaning service Baltimore MD"
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
            Our Patio Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Surface & Material Assessment",
                body: "We identify your patio material, assess the condition of joint sand and sealer, and determine the appropriate pressure level and cleaning solution before we start.",
              },
              {
                step: "02",
                title: "Furniture Removal & Plant Protection",
                body: "Patio furniture is moved and surrounding garden beds and landscaping are pre-wetted to protect them from cleaning solution runoff.",
              },
              {
                step: "03",
                title: "Pre-Treatment of Problem Areas",
                body: "Heavily stained areas, organic growth, and efflorescence deposits are pre-treated with targeted solutions and allowed to dwell before the main wash begins.",
              },
              {
                step: "04",
                title: "Surface Cleaning",
                body: "The entire patio surface is cleaned using a rotating surface cleaner or hand wand depending on the material — delivering even, streak-free results across every square foot.",
              },
              {
                step: "05",
                title: "Final Rinse & Inspection",
                body: "The surface is thoroughly rinsed and we walk the entire patio with you to confirm the results before we leave. We'll also advise on sealing or re-sanding if needed.",
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
              { label: "Deck Cleaning", href: "/services/deck-cleaning", description: "Restore your deck's natural beauty safely and effectively." },
              { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and parking lots." },
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's exterior." },
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
            Ready to reclaim your outdoor space?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate today and have your patio looking its best before your next gathering.
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