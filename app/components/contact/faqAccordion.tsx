'use client'

import { useState } from "react";

const faqs = {
  General: [
    {
      question: "How long does a typical pressure washing job take?",
      answer: "Most residential jobs take between 1-3 hours depending on the size of the property and the services requested.",
    },
    {
      question: "Is pressure washing safe for all surfaces?",
      answer: "Not all surfaces should be pressure washed at high pressure. We use soft washing techniques on delicate surfaces like roofs, siding, and painted wood to prevent damage while still getting a deep clean.",
    },
    {
      question: "How often should I have my property professionally cleaned?",
      answer: "Most homeowners benefit from a professional cleaning once a year. Properties with heavy tree coverage, HOA requirements, or high humidity may need more frequent service.",
    },
    {
      question: "Do you use eco-friendly cleaning solutions?",
      answer: "Yes — all of our cleaning solutions are eco-friendly and safe for your landscaping, pets, and family.",
    },
  ],
  Contact: [
    {
      question: "Do I need to be home during the job?",
      answer: "Not necessarily. As long as we have access to the areas being cleaned and a water source, we can complete the job while you're away.",
    },
    {
      question: "How do I get a quote?",
      answer: "Just fill out our quick quote form online or give us a call at (410) 999 8886. We'll come out to assess your property and provide an accurate estimate at no cost to you.",
    },
  ],
};

type Category = keyof typeof faqs;

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<Category>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left — Category Nav */}
        <div>
          <h2 className="text-3xl font-bold text-[#181818] tracking-widest uppercase mb-8">
            FAQs
          </h2>
          <div className="flex flex-col gap-4">
            {(Object.keys(faqs) as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`text-left text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  activeCategory === category
                    ? "text-[#E63946] border-b-2 border-[#E63946] pb-1"
                    : "text-[#2A2A2A] hover:text-[#E63946]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="md:col-span-3">
          <h3 className="text-3xl font-bold text-[#181818] tracking-widest uppercase mb-8">
            {activeCategory}
          </h3>
          <div className="flex flex-col">
            {faqs[activeCategory].map((faq, index) => (
              <div key={index} className="border-t border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#181818] tracking-widest uppercase pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#181818] text-xl shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="text-[#2A2A2A] text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>

      </div>
    </section>
  );
}