// app/components/service-areas/FAQAccordion.tsx
'use client'

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#181818] mb-2">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-1 bg-[#E63946] mb-10" />
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-base font-bold text-[#181818] pr-4">
                  {faq.question}
                </span>
                <span className="text-[#E63946] text-xl shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-[#2A2A2A] leading-relaxed pb-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}