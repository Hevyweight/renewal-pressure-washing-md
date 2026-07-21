'use client'

import Link from "next/link";
import { useState } from "react";
import FAQAccordion from "../components/contact/faqAccordion";


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setStatus("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };

  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
          How Can We Help?
        </h1>
        <div className="w-80 h-1 bg-[#E63946] mx-auto" />
      </section>

      {/* FAQs */}
      <FAQAccordion />

      {/* CTA */}
      <section className="bg-[#E63946] py-16 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Quick and Easy Free Quote
          </h2>
          <p className="text-white text-lg mb-8">
            Fill out our quick form and we&apos;ll come out to assess your property at no cost to you.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-[#181818] font-bold text-lg px-10 py-4 hover:bg-gray-100 transition-colors duration-200"
          >
            Request Your Free Quote
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#181818] mb-2">
              Serving Baltimore & Surrounding Areas
            </h2>
            <div className="w-16 h-1 bg-[#E63946] mb-6" />
            <p className="text-[#2A2A2A] leading-relaxed mb-6">
              Based in Pikesville, MD, Renewal Pressure Washing proudly serves homeowners and commercial properties throughout the greater Baltimore area. Whether you&apos;re in the city or the suburbs, we bring the same standard of clean to every job.
            </p>
            <Link
              href="/service-areas"
              className="text-[#181818] font-bold underline underline-offset-4 hover:text-[#E63946] transition-colors"
            >
              See All Service Areas →
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

      {/* Contact Info + Form */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#181818] mb-2">
              Get In Touch
            </h2>
            <div className="w-12 h-1 bg-[#E63946] mb-8" />
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold text-[#E63946] uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:4109998886" className="text-[#181818] text-lg font-medium hover:text-[#E63946] transition-colors">
                  (410) 999 8886
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#E63946] uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:info@renewalpressurewashing.com" className="text-[#181818] text-lg font-medium hover:text-[#E63946] transition-colors">
                  info@renewalpressurewashing.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#E63946] uppercase tracking-widest mb-1">Hours</p>
                <p className="text-[#181818] text-lg font-medium">Open 24/7</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#E63946] uppercase tracking-widest mb-1">Service Area</p>
                <p className="text-[#181818] text-lg font-medium">Baltimore & Surrounding Areas</p>
              </div>
            </div>
          </div>

          {/* Small Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#181818] mb-2">
              Send Us a Message
            </h2>
            <div className="w-12 h-1 bg-[#E63946] mb-8" />
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
                />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946] resize-none"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="bg-[#E63946] text-white font-bold py-3 px-8 hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="text-green-600 font-medium text-center">
                    Message sent! We&apos;ll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium text-center">
                    Something went wrong. Please call us at (410) 999 8886.
                  </p>
                )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}