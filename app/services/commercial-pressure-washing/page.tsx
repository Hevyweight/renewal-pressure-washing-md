import FAQAccordion from "@/app/components/service-areas/faqAccordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "How often should commercial properties be professionally cleaned?",
    answer: "Most commercial properties benefit from professional cleaning 2-4 times per year depending on foot traffic, surrounding vegetation, and local weather conditions. High traffic areas like entrances and parking lots may need more frequent service.",
  },
  {
    question: "Do you work around our business hours?",
    answer: "Yes — we schedule commercial jobs around your hours of operation to minimize disruption. Early morning, evening, and weekend appointments are available for businesses that can't afford downtime during peak hours.",
  },
  {
    question: "Are you insured for commercial work?",
    answer: "Absolutely. Renewal Pressure Washing carries full commercial liability insurance on every job. We can provide proof of insurance and certificates of coverage upon request for property managers and facility directors.",
  },
  {
    question: "Can you handle large commercial properties?",
    answer: "Yes — we have the equipment and crew to handle properties of any size, from small storefronts to large commercial complexes and multi-unit residential buildings.",
  },
];

export default function CommercialPressureWashingPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/commercial_20.jpg"
          alt="Commercial Pressure Washing Baltimore MD"
          fill
          className="object-cover"
          style={{ objectPosition: '70% 35%' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Commercial Pressure Washing
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional large-scale exterior cleaning for commercial properties, management companies, and business owners across the Baltimore area.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Commercial Cleaning That Protects Your Investment
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            The exterior of your commercial property is the first thing clients, tenants, and customers see. Dirt, algae, oil stains, and grime on your building&apos;s facade, parking lot, or entryway send the wrong message before anyone walks through the door. Renewal Pressure Washing provides professional commercial exterior cleaning that restores your property&apos;s appearance, protects your surfaces from long term damage, and keeps your business looking its best year round.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            We work with property management companies, business owners, HOAs, and facility directors across the Baltimore area — scheduling around your hours of operation and providing documentation for compliance and insurance purposes.
          </p>
        </div>
      </section>

      {/* Surface Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Commercial Surfaces We Clean
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Building Exteriors & Facades",
                body: "Dirt, algae, and pollution accumulate on commercial building exteriors over time — dulling the appearance and degrading surface materials. We use the appropriate pressure and cleaning solution for every facade material including brick, EIFS, metal panels, and painted concrete block.",
              },
              {
                title: "Parking Lots & Entryways",
                body: "High traffic areas accumulate oil, grease, gum, and tire marks that standard cleaning can't remove. Our hot water pressure washing systems break down oil based stains at the molecular level, restoring the appearance of concrete and asphalt entryways without damaging the surface.",
              },
              {
                title: "Dumpster Pads & Loading Docks",
                body: "Dumpster areas and loading docks are among the most difficult commercial cleaning challenges — accumulating grease, food waste, and biological contamination. We use commercial grade degreasers and high temperature pressure washing to sanitize and deodorize these areas completely.",
              },
              {
                title: "Awnings & Canopies",
                body: "Commercial awnings collect dirt, bird droppings, and biological growth that damages fabric and metal over time. We clean awnings using solutions matched to the material type — extending their lifespan and restoring their color without causing shrinkage or fading.",
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

      {/* Why Commercial */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Built for Property Managers & Business Owners
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              We understand that commercial cleaning has different requirements than residential work. That&apos;s why we offer flexible scheduling, full liability coverage, and documentation for every job.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Early morning, evening, and weekend scheduling available",
                "Full commercial liability insurance on every job",
                "Certificates of coverage provided upon request",
                "Recurring maintenance contracts available",
                "Multi-property discounts for management companies",
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
                src="/videos/gallery/commercial_video_1.mp4"
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
            Our Commercial Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment & Scheduling",
                body: "We conduct a thorough assessment of your property, identify problem areas, and schedule the job around your hours of operation to minimize disruption to your business.",
              },
              {
                step: "02",
                title: "Property Protection",
                body: "We protect surrounding areas including landscaping, vehicles, and signage before any cleaning begins. Drains are protected to comply with local runoff regulations.",
              },
              {
                step: "03",
                title: "Pre-Treatment",
                body: "Problem areas including oil stains, biological growth, and heavy soiling are pre-treated with appropriate commercial grade cleaning agents before the main wash.",
              },
              {
                step: "04",
                title: "Professional Wash",
                body: "We apply the correct pressure and temperature for each surface type — using hot water systems for grease and oil, and soft wash for building facades and delicate materials.",
              },
              {
                step: "05",
                title: "Final Inspection & Documentation",
                body: "We conduct a full walkthrough with your facility manager before we leave and provide before and after photos along with a service completion report for your records.",
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
              { label: "Parking Garage Cleaning", href: "/services/parking-garage-cleaning", description: "Specialized cleaning for commercial parking structures." },
              { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and parking lots." },
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for residential exteriors." },
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
            Ready to restore your commercial property?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site assessment and custom quote for your commercial property today.
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