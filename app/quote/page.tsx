'use client'

import { useState } from "react";

const services = [
  "House Washing",
  "Concrete Cleaning",
  "Deck Cleaning",
  "Patio Cleaning",
  "Window Cleaning",
  "Parking Garage Cleaning",
  "Commercial Pressure Washing",
  "Christmas Light Installation",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", address: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#FAFAFA] min-h-screen py-24 px-6 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#181818] mb-2">
          Get a Free Quote
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mb-8" />
        <p className="text-[#2A2A2A] mb-10">
          Fill out the form below and we&apos;ll come out to assess your property and provide an accurate quote at no cost to you.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#2A2A2A] focus:outline-none focus:border-[#E63946]"
          >
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <input
            type="text"
            name="address"
            placeholder="Property Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946]"
          />
          <textarea
            name="description"
            placeholder="Briefly describe what you'd like cleaned..."
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-[#181818] focus:outline-none focus:border-[#E63946] resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="bg-[#E63946] text-white font-bold py-4 px-8 hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Request My Free Quote"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-medium text-center">
              Thanks! We&apos;ll be in touch shortly to schedule your free estimate.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium text-center">
              Something went wrong. Please call us directly at (410) 999 8886.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}