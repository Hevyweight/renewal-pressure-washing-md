import Link from "next/link";

const steps = [
  { number: 1, label: "Quote" },
  { number: 2, label: "Schedule" },
  { number: 3, label: "Wash" },
  { number: 4, label: "Final Inspection" },
];

export default function Process() {
  return (
    <section className="bg-[#E63946] py-20 px-4 lg:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-widest mb-12 md:mb-16 uppercase">
          Your Vision. Our Process.
        </h2>

        {/* Steps */}
        <div className="flex items-start justify-center gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="w-12 h-12 md:w-16 lg:h-32 lg:w-32 md:h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-base md:text-2xl lg:text-3xl font-bold">{step.number}</span>
                </div>
              <span className="block text-white text-xs md:text-sm font-medium w-14 sm:w-16 md:w-20 text md:text-center leading-tight">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-6 md:w-16 lg:w-24 h-[2px] bg-white mb-7 md:mb-8 mx-2" />
              )}
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-block mt-12 text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Explore How it Works
        </Link>
      </div>
    </section>
  );
}