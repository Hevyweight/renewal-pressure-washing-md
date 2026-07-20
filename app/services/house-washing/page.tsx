import FAQAccordion from "@/app/components/service-areas/faqAccordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a house wash last?",
    answer: "A professional house wash typically lasts 12-24 months depending on your local tree canopy, humidity levels, and the amount of shade around your home. Homes with heavy tree coverage tend to see algae and mildew return faster.",
  },
  {
    question: "Do I need to be home during the service?",
    answer: "No — as long as your windows are shut and your outdoor water spigots are accessible, we can complete the job while you're away. We'll send you before and after photos when we're done.",
  },
  {
    question: "Will this satisfy my HOA violation notice?",
    answer: "Yes. Our house washing service completely clears HOA exterior cleaning mandates. We can provide documentation of the service upon request if your HOA requires proof of completion.",
  },
  {
    question: "Is soft washing safe for my landscaping and pets?",
    answer: "Absolutely. We pre-wet all surrounding vegetation before we start and rinse plants down throughout the process. Our biodegradable cleaning solutions are safe for pets, children, and landscaping once dry.",
  },
];

export default function HouseWashingPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-40">
        <Image
          src="/images/gallery/residential_4.jpg"
          alt="House Washing Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            House Washing
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Streak-free, mold-killing, eco-friendly, and curb appeal-restoring — with cleaning solutions as safe as they are effective.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Baltimore&apos;s Premier House Washing Service
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Over time, dirt, algae, mold, and mildew accumulate on your home&apos;s exterior — and left untreated, they don&apos;t just look bad. They can damage your siding, stain your paint, and signal neglect to anyone who walks by. Renewal Pressure Washing uses professional soft wash techniques to safely remove years of buildup from your home&apos;s exterior, restoring its original appearance without the risk of damage that high-pressure washing can cause.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Our house washing service is safe for all siding types, eco-friendly, and backed by our 100% satisfaction guarantee. Whether you&apos;re dealing with green algae streaks, black mildew stains, or an HOA violation notice, we have the right solution for your home.
          </p>
        </div>
      </section>

      {/* Siding Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            How We Treat Every Siding Type
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Vinyl Siding",
                body: "High pressure washing on vinyl siding causes oxidation stripes and can force water behind the panels, leading to mold growth inside your walls. Our soft wash system cleans at garden-hose pressure using a professional-grade solution that kills algae and mildew at the root — leaving your vinyl looking new without the risk.",
              },
              {
                title: "Brick & Mortar",
                body: "High pressure destroys aged mortar joints and can cause spalling on older brick. We use a soft wash approach with a targeted cleaning solution that kills deep-rooted moss and algae safely, preserving the integrity of your mortar while restoring the natural color of your brick.",
              },
              {
                title: "Stucco & EIFS",
                body: "Stucco and EIFS are among the most delicate exterior surfaces — high pressure punches holes in the material and voids manufacturer warranties. Our low-pressure chemical wash is the only safe cleaning method for stucco, and it's the approach we use on every job without exception.",
              },
              {
                title: "Wood & Painted Surfaces",
                body: "Wood siding and painted surfaces require careful attention to pressure and chemical dilution. We adjust our approach for every surface type, using lower concentrations and gentler rinse pressure to protect paint adhesion and prevent wood grain damage.",
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

      {/* Eco Friendly */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Safe for Your Family, Pets & Landscaping
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              We know your home isn&apos;t just a building — it&apos;s where your family lives, your pets play, and your garden grows. That&apos;s why every product we use is biodegradable and environmentally responsible.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "We pre-wet all surrounding vegetation before applying any cleaning solution",
                "Plants are rinsed down continuously throughout the washing process",
                "Our solutions are pet and child safe once dry — typically within minutes",
                "We use neutralizers on sensitive areas to restore natural pH balance",
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
                src="/videos/gallery/residential_video_2.mp4"
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
            Our House Washing Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Property Inspection & Prep",
                body: "We walk the entire property before we start — taping off outdoor outlets, covering security cameras, and checking window seals to ensure no water intrusion.",
              },
              {
                step: "02",
                title: "Vegetation Protection",
                body: "All surrounding plants, shrubs, and landscaping are saturated with fresh water to shield them from cleaning solution contact.",
              },
              {
                step: "03",
                title: "Soft Wash Application",
                body: "We apply our professional-grade biodegradable solution at low pressure — similar to a garden hose — allowing it to penetrate and kill organic growth at the root.",
              },
              {
                step: "04",
                title: "Low-Pressure Rinse",
                body: "Once the solution has done its work, we rinse the entire exterior clean, washing away dead algae, dirt, and residue without damaging your siding.",
              },
              {
                step: "05",
                title: "Final Walkthrough",
                body: "We walk the entire property with you to inspect every surface before we pack up. If anything isn't right, we make it right on the spot.",
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
              { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and patios." },
              { label: "Roof Cleaning", href: "/services/roof-cleaning", description: "Safe, low-pressure roof cleaning that extends the life of your shingles." },
              { label: "Deck Cleaning", href: "/services/deck-cleaning", description: "Restore your deck's natural beauty safely and effectively." },
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
            Ready for a cleaner home exterior?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate today. We&apos;ll assess your home and give you a transparent quote with no surprises.
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