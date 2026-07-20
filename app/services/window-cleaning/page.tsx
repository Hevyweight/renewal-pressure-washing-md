import FAQAccordion from "@/app/components/service-areas/faqAccordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Do you clean both interior and exterior windows?",
    answer: "We specialize in exterior window cleaning as part of our pressure washing services. Exterior windows accumulate hard water stains, oxidation, pollen, and environmental buildup that interior cleaning can't address. Contact us to discuss your specific needs and we'll let you know what we can accommodate.",
  },
  {
    question: "Will pressure washing crack or damage my windows?",
    answer: "Not when done correctly. We never direct high pressure water at window glass or frames. We use low pressure soft wash techniques and window-safe cleaning solutions to clean glass and frames without risk of cracking, seal damage, or water intrusion.",
  },
  {
    question: "Can you remove hard water stains from my windows?",
    answer: "Yes — hard water stains from sprinkler systems and mineral deposits require a specialized treatment beyond standard window cleaning. We use a targeted hard water stain remover to dissolve mineral buildup before cleaning for best results.",
  },
  {
    question: "How often should I have my windows professionally cleaned?",
    answer: "Most homeowners benefit from exterior window cleaning twice a year — once in spring to remove winter grime and pollen, and once in fall before the wet season sets in. Homes near busy roads or with irrigation systems that hit the windows may benefit from more frequent service.",
  },
];

export default function WindowCleaningPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/window_cleaning_1.jpg"
          alt="Window Cleaning Baltimore MD"
          fill
          className="object-cover"
          style={{ objectPosition: '70% 35%' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Window Cleaning
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Crystal clear windows that let the light in — streak-free, hard water stain free, and professionally cleaned from the outside in.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            Professional Window Cleaning in Baltimore
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-8" />
          <p className="text-[#2A2A2A] leading-relaxed mb-6">
            Dirty windows do more damage to your home&apos;s appearance than almost anything else — they make an otherwise clean home look neglected from the street and block natural light from the inside. But exterior window cleaning is more than just wiping away dust. Over time, windows accumulate hard water mineral deposits from sprinkler systems, oxidation from the frame, pollen, environmental pollution, and biological buildup that standard cleaning can&apos;t touch.
          </p>
          <p className="text-[#2A2A2A] leading-relaxed">
            Renewal Pressure Washing provides professional exterior window cleaning using soft wash techniques and window-safe solutions that remove years of buildup from glass and frames — without the risk of cracking seals, damaging frames, or leaving streaks behind.
          </p>
        </div>
      </section>

      {/* Stain Breakdown */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2">
            What Builds Up on Your Windows
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mb-10" />
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Hard Water Mineral Deposits",
                body: "Sprinkler systems that hit your windows leave behind calcium and magnesium mineral deposits that etch into the glass surface over time. These white cloudy stains can't be removed with standard glass cleaner — they require a targeted mineral dissolving treatment before cleaning.",
              },
              {
                title: "Oxidation from Window Frames",
                body: "Aluminum window frames oxidize over time and the oxidation washes down onto the glass, leaving grey streaking that makes windows look permanently dirty. We treat frame oxidation separately before cleaning the glass to prevent recontamination during the wash.",
              },
              {
                title: "Pollen & Environmental Buildup",
                body: "Baltimore's heavy spring pollen season coats windows in a thick yellow film that standard rainfall can't wash away. Environmental pollution and road dust compound this buildup on street-facing windows throughout the year.",
              },
              {
                title: "Biological Growth & Bird Droppings",
                body: "Windows in shaded areas develop algae and mold growth on the glass and frame surfaces. Bird droppings are highly acidic and can etch glass permanently if left untreated — early removal is the only way to prevent permanent damage.",
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
              Safe for Glass, Frames & Seals
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Windows are one of the most delicate surfaces on your home&apos;s exterior. We take extra precautions to ensure our cleaning process never compromises your window seals, frames, or glass.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Low pressure soft wash only — never high pressure on glass",
                "Window-safe pH-neutral cleaning solutions that won't damage seals",
                "Frame oxidation treated separately to prevent glass recontamination",
                "Screens removed, cleaned separately, and reinstalled",
                "Window seals and caulking inspected during cleaning",
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
            <Image
              src="/images/gallery/window_cleaning_2.jpg"
              alt="Window cleaning service Baltimore MD"
              fill
              className="object-cover"
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
            Our Window Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12" />
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Window & Frame Assessment",
                body: "We inspect every window for hard water staining, frame oxidation, seal condition, and biological growth before we start — identifying any windows that need specialized pre-treatment.",
              },
              {
                step: "02",
                title: "Screen Removal",
                body: "All window screens are carefully removed, cleaned separately with a soft brush and window-safe solution, and set aside to dry while we clean the glass and frames.",
              },
              {
                step: "03",
                title: "Pre-Treatment of Problem Areas",
                body: "Hard water stains, frame oxidation, and heavy biological growth are pre-treated with targeted solutions and allowed to dwell before the main cleaning begins.",
              },
              {
                step: "04",
                title: "Soft Wash Glass & Frame Cleaning",
                body: "Glass and frames are cleaned using low pressure soft wash and window-safe solutions — removing all buildup without streaking, seal damage, or water intrusion around the frame.",
              },
              {
                step: "05",
                title: "Screen Reinstallation & Final Inspection",
                body: "Clean dry screens are reinstalled and every window is inspected for streaks, missed spots, and seal integrity before we leave. We walk the property with you to confirm results.",
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
              { label: "House Washing", href: "/services/house-washing", description: "Professional soft wash for your home's entire exterior." },
              { label: "Gutter Cleaning", href: "/services/gutter-cleaning", description: "Keep your drainage system flowing freely year round." },
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
            Ready for streak-free windows?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate today and let the light back into your home.
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