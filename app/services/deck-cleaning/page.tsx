import FAQAccordion from "@/app/components/service-areas/faqAccordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Can you clean all types of decks?",
    answer: "Yes — we clean pressure treated wood, cedar, redwood, composite decking, and painted or stained wood surfaces. Each material requires a different approach and we adjust our pressure and cleaning solution accordingly to avoid damage.",
  },
  {
    question: "Will pressure washing damage my deck boards?",
    answer: "High pressure washing absolutely can damage wood decking — it raises the wood grain, causes splintering, and strips stain and sealant. We use low pressure soft wash techniques on all wood surfaces to clean safely without causing damage.",
  },
  {
    question: "Should I seal my deck after cleaning?",
    answer: "Yes — a freshly cleaned deck is the ideal time to apply a new coat of sealant or stain. We recommend allowing the deck to dry for 48-72 hours after cleaning before applying any sealant or stain product.",
  },
  {
    question: "How often should I have my deck cleaned?",
    answer: "Most decks benefit from professional cleaning once a year, ideally in spring before outdoor entertaining season begins. Decks under heavy tree coverage or in shaded areas may develop mold and mildew faster and benefit from more frequent service.",
  },
];

export default function DeckCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/commercial_24.jpg"
          alt="Deck Cleaning Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Deck Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Restore your deck&apos;s natural beauty safely and effectively — without the damage that high pressure washing causes to wood surfaces.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Professional Deck Cleaning in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Your deck takes more abuse than almost any other surface around your home. Constant exposure to sun, rain, foot traffic, and organic debris causes wood to grey, darken, and develop mold and mildew that makes surfaces slippery and unappealing. Without regular cleaning, that organic growth penetrates deep into the wood grain — accelerating rot and dramatically shortening the life of your deck.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing uses low pressure soft wash techniques specifically designed for wood and composite deck surfaces — removing years of dirt, mold, and algae buildup without raising the grain, causing splintering, or stripping your existing stain or sealant.
          </p>
        </div>
      </section>

      {/* Surface Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            How We Clean Every Deck Type
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Pressure Treated Wood",
                body: "Pressure treated lumber is the most common deck material in Baltimore — but it's also prone to greying, mold growth, and tannin staining. We use a wood-safe brightening solution that restores the natural color of treated lumber while killing organic growth at the root.",
              },
              {
                title: "Cedar & Redwood",
                body: "Cedar and redwood are naturally resistant to rot but still develop surface mold, algae, and grey weathering over time. These premium wood species require lower pressure and more diluted cleaning solutions to preserve their natural oils and prevent damage to the wood fibers.",
              },
              {
                title: "Composite Decking",
                body: "Composite decking like Trex and TimberTech is low maintenance but not maintenance free — it develops algae, mold, and organic staining between the boards and on the surface. We use composite-safe cleaning solutions and low pressure to clean without voiding manufacturer warranties.",
              },
              {
                title: "Painted & Stained Surfaces",
                body: "Painted and stained deck surfaces require careful pressure control to clean without lifting or stripping the existing finish. We assess the adhesion and condition of the paint or stain before we start and adjust our approach to preserve as much of the existing finish as possible.",
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
              Safe for Your Family, Pets & Surrounding Landscaping
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Decks are where your family spends time — we treat them accordingly. Every product we use is biodegradable and safe for children and pets once dry.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Biodegradable cleaning solutions safe for pets and children once dry",
                "Surrounding plants and landscaping pre-wetted and protected",
                "Low pressure technique prevents wood damage and splintering",
                "No harsh chemicals that leave residue on surfaces your family touches",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#2A2A2A]">
                  <span className="text-[#E63946] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative h-100 overflow-hidden rounded-sm">
              <video
                src="/videos/gallery/deck_cleaning_video_1.mp4"
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            </div>
            <p className="text-[#2A2A2A] text-sm text-center italic">
              Renewal Pressure Washing — Commercial exterior cleaning in Baltimore, MD
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#E63946] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            Our Deck Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Deck Assessment",
                body: "We inspect the deck material, existing finish condition, and areas of concern before we start — identifying any rot, loose boards, or structural issues we notice during the assessment.",
              },
              {
                step: "02",
                title: "Furniture & Plant Protection",
                body: "All deck furniture is moved and surrounding plants and landscaping are pre-wetted to protect them from cleaning solution contact.",
              },
              {
                step: "03",
                title: "Cleaning Solution Application",
                body: "A wood-safe or composite-safe cleaning solution is applied to the entire deck surface and allowed to dwell — penetrating the wood grain to kill mold and algae at the root.",
              },
              {
                step: "04",
                title: "Low Pressure Soft Wash Rinse",
                body: "The entire deck is rinsed at low pressure to remove the cleaning solution along with all loosened dirt, mold, and organic debris — without raising the wood grain or damaging the surface.",
              },
              {
                step: "05",
                title: "Final Inspection",
                body: "We walk the deck with you to inspect every board and railing before we leave. We'll also advise on the best time to apply a new sealant or stain if needed.",
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
      <FAQAccordion faqs={faqs} />

      {/* Internal Links */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Explore More Services</h2>
          <div className="w-12 h-1 bg-[#E63946] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Patio Cleaning", href: "/services/patio-cleaning", description: "Clean, safe outdoor spaces ready for any occasion." },
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's exterior." },
              { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and patios." },
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
            Ready to enjoy your deck again?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate today and have your deck looking its best before the season starts.
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