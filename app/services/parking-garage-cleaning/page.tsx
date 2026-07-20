import FAQAccordion from "@/app/components/service-areas/faqAccordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "How often should a parking garage be professionally cleaned?",
    answer: "Most commercial parking garages benefit from professional cleaning 2-4 times per year depending on traffic volume, the presence of oil leaks, and local weather conditions. High traffic garages in urban areas may require monthly or quarterly service to maintain safety and appearance standards.",
  },
  {
    question: "Can you clean parking garages while they are in use?",
    answer: "Yes — we work in sections to minimize disruption to garage operations. We coordinate with your facility manager to schedule cleaning during off-peak hours or section off areas as we work so the garage can remain operational throughout the process.",
  },
  {
    question: "Do you handle the wastewater from parking garage cleaning?",
    answer: "Yes — parking garage cleaning produces wastewater that contains oil, heavy metals, and other contaminants that can't be allowed to enter storm drains. We use containment and recovery methods to capture and properly dispose of all wastewater in compliance with local environmental regulations.",
  },
  {
    question: "Can you remove oil stains from the garage floor?",
    answer: "Yes — oil and fluid stains from vehicles are the most common parking garage cleaning challenge. We use hot water pressure washing combined with commercial grade degreasers to break down petroleum based stains at the surface level — significantly reducing or eliminating even long-set oil deposits.",
  },
];

export default function ParkingGarageCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/parking_garage_cleaning_2.jpg"
          alt="Parking Garage Cleaning Baltimore MD"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Parking Garage Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Professional parking garage cleaning that removes oil stains, tire marks, and biological buildup — keeping your facility safe, compliant, and presentable.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Commercial Parking Garage Cleaning in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Parking garages are among the most demanding commercial cleaning environments — high traffic, vehicle fluid contamination, tire marks, biological growth in damp areas, and the constant challenge of maintaining safety markings and clear signage. Left uncleaned, parking garages develop oil slicks, grease buildup, and organic growth that creates slip hazards, damages concrete, and reflects poorly on the property and its management.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing provides professional parking garage cleaning for property management companies, commercial real estate operators, and facility directors throughout the Baltimore area — using hot water pressure washing, commercial degreasers, and environmentally compliant wastewater management to deliver a thorough clean without disrupting your operations.
          </p>
        </div>
      </section>

      {/* Surface Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What We Clean in Your Parking Garage
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Garage Floors & Driving Lanes",
                body: "Garage floors accumulate oil, transmission fluid, coolant, tire rubber, and general traffic grime that creates dangerous slip conditions and accelerates concrete deterioration. We use hot water pressure washing and commercial degreasers to restore floor surfaces and remove petroleum based contamination effectively.",
              },
              {
                title: "Parking Stalls & Oil Stain Areas",
                body: "Individual parking stalls develop heavy oil and fluid staining from stationary vehicles over time. We pre-treat these areas with targeted degreasers before washing to break down hydrocarbon contamination at the surface level — restoring stall appearance and removing slip hazards.",
              },
              {
                title: "Walls, Columns & Structural Surfaces",
                body: "Garage walls and columns accumulate exhaust deposits, biological growth in damp areas, and impact marks from vehicles. We clean structural surfaces to improve lighting reflectivity and maintain the overall appearance of the facility.",
              },
              {
                title: "Stairwells & Pedestrian Areas",
                body: "Stairwells and pedestrian walkways in parking garages are high priority safety areas — they accumulate gum, biological growth, and tracked-in contamination that creates slip hazards. We pay special attention to these areas to ensure they meet safety standards.",
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

      {/* Commercial Focus */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Built for Property Managers & Facility Directors
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              We understand the operational and compliance demands of managing a commercial parking facility. Our parking garage cleaning service is designed to work around your schedule and deliver documentation for your records.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Environmentally compliant wastewater containment and disposal",
                "Flexible scheduling including nights and weekends",
                "Full commercial liability insurance on every job",
                "Service completion documentation and before/after photos",
                "Recurring maintenance contracts available",
                "Multi-facility discounts for management companies",
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
                src="/videos/gallery/parking_garage_cleaning_video_1.mp4"
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
            Our Parking Garage Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Facility Assessment & Scheduling",
                body: "We conduct a walkthrough of the facility to assess contamination levels, identify problem areas, and coordinate a cleaning schedule that minimizes disruption to garage operations.",
              },
              {
                step: "02",
                title: "Wastewater Containment Setup",
                body: "Drain covers and containment barriers are placed before cleaning begins to capture all wastewater and prevent contaminated runoff from entering storm drains — keeping your facility in compliance with local environmental regulations.",
              },
              {
                step: "03",
                title: "Pre-Treatment of Oil & Grease Areas",
                body: "Heavy oil stains, grease deposits, and contaminated areas are pre-treated with commercial degreasers and allowed to dwell before the main wash to maximize stain removal.",
              },
              {
                step: "04",
                title: "Hot Water Pressure Washing",
                body: "We work systematically through the facility section by section using hot water pressure washing to remove all contamination from floors, walls, columns, and pedestrian areas.",
              },
              {
                step: "05",
                title: "Wastewater Recovery & Final Inspection",
                body: "All wastewater is recovered and properly disposed of in compliance with local regulations. We conduct a final walkthrough with your facility manager and provide before and after documentation.",
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
              { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing", description: "Large scale exterior cleaning for commercial properties." },
              { label: "Concrete Cleaning", href: "/services/concrete-cleaning", description: "Streak-free driveways, walkways, and parking lots." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", description: "Keep your drainage system flowing freely year round." },
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
            Ready to clean up your facility?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site assessment and custom quote for your parking garage today.
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