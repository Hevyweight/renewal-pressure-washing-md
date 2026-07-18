import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Us
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mx-auto" />
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Our Story
            </h2>
            <div className="w-12 h-1 bg-[#E63946] mb-8" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Renewal Pressure Washing was built on a simple belief — every property deserves to look its best. What started as a passion for delivering real results has grown into one of Baltimore&apos;s most trusted exterior cleaning companies, with over 7 years of experience and 150+ five star reviews from homeowners and businesses across the DMV.
            </p>
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              We treat every property like it&apos;s our own. Whether it&apos;s a residential driveway or a commercial parking garage, we show up on time, use the right equipment for every surface, and don&apos;t leave until the job is done right.
            </p>
            <p className="text-[#2A2A2A] leading-relaxed">
              From house washing to Christmas light installation, we&apos;re your year round exterior maintenance partner — so you never have to worry about how your property looks.
            </p>
          </div>
          <div className="relative h-160 bg-gray-200 overflow-hidden">
            <Image
              src="/images/gallery/power_washing_3.jpg"
              alt="Renewal Pressure Washing team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { stat: "7+", label: "Years in Business" },
            { stat: "150+", label: "Five Star Reviews" },
            { stat: "24/7", label: "Available" },
          ].map((item) => (
            <div key={item.stat} className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold text-[#E63946]">{item.stat}</span>
              <span className="text-[#2A2A2A] font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#181818] mb-2 text-center">
            The Renewal Promise
          </h2>
          <div className="w-16 h-1 bg-[#E63946] mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Transparency",
                description: "No surprise fees, no vague estimates. You'll always know exactly what you're paying for before we start.",
              },
              {
                title: "Quality",
                description: "Professional grade equipment and eco-friendly solutions matched to your specific surfaces every time.",
              },
              {
                title: "100% Satisfaction",
                description: "We're not done until you're happy. If something isn't right, we make it right. No questions asked.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-lg font-bold text-[#181818] mb-3">{value.title}</h3>
                <p className="text-[#2A2A2A] leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E63946] py-20 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to restore your property?
          </h2>
          <p className="text-white text-lg mb-8">
            Get a free on-site estimate and see the Renewal difference for yourself.
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