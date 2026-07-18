import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "How often should I have my gutters cleaned?",
    answer: "Most homes benefit from gutter cleaning twice a year — once in late spring after pollen and seed season, and once in late fall after the leaves have dropped. Homes with heavy tree coverage overhead may need cleaning 3-4 times per year.",
  },
  {
    question: "What happens if I don't clean my gutters?",
    answer: "Clogged gutters cause water to overflow and pool around your foundation, leading to basement flooding, foundation damage, fascia rot, and landscape erosion. In winter, clogged gutters contribute to ice dam formation which can damage your roof and interior walls.",
  },
  {
    question: "Do you clean the downspouts too?",
    answer: "Yes — every gutter cleaning service includes flushing all downspouts to ensure water flows freely from the gutters all the way to the ground. We also check for and clear any blockages in underground downspout extensions.",
  },
  {
    question: "Do I need to be home for gutter cleaning?",
    answer: "No — as long as we have access to the perimeter of your home, we can complete the job while you're away. We'll send you before and after photos and notify you when the job is done.",
  },
];

export default function GutterCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services/gutter-cleaning-hero.jpg"
          alt="Gutter Cleaning Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gutter Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Protect your home from water damage with professional gutter cleaning that keeps your drainage system flowing freely year round.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Baltimore&apos;s Trusted Gutter Cleaning Service
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Gutters are your home&apos;s first line of defense against water damage — but only when they&apos;re clean and flowing freely. In the Baltimore area, heavy tree coverage and seasonal storms mean gutters fill up fast with leaves, seeds, shingle grit, and organic debris. When gutters clog, water has nowhere to go but over the sides and down toward your foundation, fascia, and landscaping.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing provides thorough, professional gutter cleaning that removes all debris, flushes every downspout, and inspects your system for damage — giving you peace of mind that your home is protected before the next heavy rain.
          </p>
        </div>
      </section>

      {/* Debris Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Clogs Baltimore Gutters
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Leaves & Twigs",
                body: "The most common culprit — especially in fall. Wet leaves compact into a dense mat that blocks water flow completely. Even a small accumulation can cause significant overflow during a heavy rain event.",
              },
              {
                title: "Shingle Granules",
                body: "As asphalt shingles age they shed granules that wash into your gutters and settle at the bottom. Over time this granule buildup restricts water flow and accelerates gutter corrosion — a sign your roof may also need attention.",
              },
              {
                title: "Seed Pods & Pollen",
                body: "Baltimore's tree canopy produces heavy seed and pollen loads in spring that accumulate in gutters and downspouts. These organic materials decompose into a soil-like sludge that clogs downspouts and promotes moss and plant growth inside the gutter channel.",
              },
              {
                title: "Moss & Algae Growth",
                body: "Gutters that stay damp and shaded develop moss and algae growth that holds moisture against the gutter material, accelerating rust and corrosion on metal gutters and causing vinyl gutters to become brittle over time.",
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

      {/* Why Clean */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              The Real Cost of Neglected Gutters
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              A gutter cleaning service costs a fraction of what clogged gutters can cost you in repairs. Here&apos;s what overflowing gutters lead to over time:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Foundation damage from water pooling around your home's base",
                "Basement flooding and interior water intrusion",
                "Fascia and soffit rot from constant moisture contact",
                "Landscape erosion from uncontrolled water overflow",
                "Ice dam formation in winter that damages roofing and walls",
                "Pest infestations — standing water in gutters attracts mosquitoes",
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
              src="/services/gutter-cleaning-2.jpg"
              alt="Gutter cleaning service Baltimore MD"
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
            Our Gutter Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Property Walkthrough",
                body: "We walk the perimeter of your home before we start to assess gutter condition, identify problem areas, and check for signs of damage or improper drainage.",
              },
              {
                step: "02",
                title: "Debris Removal",
                body: "All leaves, twigs, seed pods, shingle granules, and compacted sludge are removed from every gutter channel by hand and with professional tools. All debris is bagged and removed from your property.",
              },
              {
                step: "03",
                title: "Downspout Flushing",
                body: "Every downspout is flushed with pressurized water to clear blockages and confirm that water flows freely from the gutter all the way to the ground level discharge point.",
              },
              {
                step: "04",
                title: "Gutter Flush & Flow Test",
                body: "We flush the entire gutter system with water to confirm proper flow and pitch — identifying any sections that pool water or drain slowly that may need adjustment.",
              },
              {
                step: "05",
                title: "Inspection & Report",
                body: "We inspect gutters for cracks, separations, loose hangers, and rust while we work. If we find damage we'll document it with photos and let you know before we leave.",
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
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's exterior." },
              { label: "Roof Cleaning", href: "/services/roof-cleaning", description: "Safe low-pressure roof cleaning that extends shingle life." },
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
            Protect your home before the next heavy rain.
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your gutter cleaning today and keep your drainage system flowing freely all year long.
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