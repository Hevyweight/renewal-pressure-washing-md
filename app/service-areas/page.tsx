import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    name: "Pikesville",
    slug: "pikesville",
    description: "Renewal's home base — serving Pikesville's established neighborhoods, brick colonials, and high-value properties throughout the 21208 community.",
    image: "/service-areas/pikesville-md-hero.jpg",
  },
  {
    name: "Towson",
    slug: "towson",
    description: "Baltimore County's largest community — tackling the algae and mildew that Towson's humid climate and heavy tree canopy produce year round.",
    image: "/service-areas/towson-md-hero.jpg",
  },
  {
    name: "Owings Mills",
    slug: "owings-mills",
    description: "One of Baltimore County's fastest growing communities — serving HOA neighborhoods, newer construction, and the Owings Mills Town Center corridor.",
    image: "/service-areas/owings-mills-md-hero.jpg",
  },
  {
    name: "Reisterstown",
    slug: "reisterstown",
    description: "From Main Street's historic homes dating to the 1700s to newer developments west of I-795 — we handle Reisterstown's full range of property types.",
    image: "/service-areas/reisterstown-md-hero.jpg",
  },
  {
    name: "Lutherville-Timonium",
    slug: "lutherville-timonium",
    description: "Lutherville's wooded hillside properties and Timonium's busy York Road corridor — two distinct communities, one standard of clean.",
    image: "/service-areas/lutherville-timonium-md-hero.jpg",
  },
  {
    name: "Catonsville",
    slug: "catonsville",
    description: "Historic rowhouses, Patapsco Valley proximity, and a diverse residential landscape make Catonsville one of our most interesting service areas.",
    image: "/service-areas/catonsville-md-hero.jpg",
  },
  {
    name: "Ellicott City",
    slug: "ellicott-city",
    description: "From Old EC's 200-year-old granite buildings to River Hill's modern planned communities — we clean every surface type Ellicott City has to offer.",
    image: "/service-areas/ellicott-city-md-hero.jpg",
  },
  {
    name: "Columbia",
    slug: "columbia",
    description: "Columbia's ten villages, lakeside properties, and Columbia Association standards — we keep Howard County's most celebrated community looking its best.",
    image: "/service-areas/columbia-md-hero.jpg",
  },
];

export default function ServiceAreasPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Service Areas
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mx-auto mb-6" />
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Renewal Pressure Washing proudly serves Baltimore County and Howard County — bringing professional exterior cleaning to the communities we call home.
        </p>
      </section>

      {/* Map */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto overflow-hidden" style={{ height: "500px" }}>
          <iframe
            src="https://www.google.com/maps/d/u/2/embed?mid=1jui6gpgeYt2bZjCSZjXp4wOenl46H2k&ehbc=2E312F"
            width="100%"
            height="560"
            style={{ border: 0, marginTop: "-60px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group border border-gray-200 hover:border-[#E63946] transition-colors duration-200 p-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <h2 className="text-xl font-bold text-[#181818] group-hover:text-[#E63946] transition-colors mb-3">
                  {area.name}
                </h2>
                <p className="text-[#2A2A2A] text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="text-[#E63946] font-bold text-sm group-hover:underline">
                  Visit Website →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Serving Baltimore & Howard County
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Based in Pikesville, Renewal Pressure Washing covers a wide service area across Baltimore County and Howard County — from Reisterstown in the northwest to Columbia in the south. If you&apos;re in the greater Baltimore area and don&apos;t see your city listed, contact us and we&apos;ll let you know if we can accommodate your location.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Baltimore County — full coverage",
                "Howard County — full coverage",
                "Surrounding areas — contact us",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#2A2A2A]">
                  <span className="text-[#E63946] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/quote"
              className="inline-block bg-[#E63946] text-white font-bold px-8 py-3 hover:bg-red-700 transition-colors duration-200"
            >
              Get Your Free Quote
            </Link>
          </div>
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394411.6279391805!2d-76.92129254876349!3d39.43902758951485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x2774e0a871602819!2sBaltimore%20County%2C%20MD!5e0!3m2!1sen!2sus!4v1784412136032!5m2!1sen!2sus" 
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

      {/* CTA */}
      <section className="bg-[#E63946] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t see your city?
          </h2>
          <p className="text-white text-lg mb-8">
            We may still be able to help. Contact us with your location and we&apos;ll let you know if we can accommodate your property.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#181818] font-bold text-lg px-10 py-4 hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}