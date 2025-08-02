"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission (API call, toast, etc.)
    console.log(form);
  };

  return (
    <div className="bg-[#1b1b1b] text-[#d9b35a] py-16 px-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 bg-[#232121] p-8 rounded-lg shadow-xl border border-[#333]"
      >
        <h2 className="text-3xl font-bold text-center text-[#d9b35a]">
          Get in Touch
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-[#d9b35a] text-white placeholder-[#aaa] focus:outline-none py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-[#d9b35a] text-white placeholder-[#aaa] focus:outline-none py-2"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-[#d9b35a] text-white placeholder-[#aaa] focus:outline-none p-3 rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#d9b35a] text-black font-semibold py-3 rounded hover:bg-[#c6a74a] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
