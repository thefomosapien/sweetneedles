"use client";

import { useState } from "react";
import { artists } from "@/data/artists";

interface FormState {
  name: string;
  email: string;
  phone: string;
  artist: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ defaultArtist = "" }: { defaultArtist?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    artist: defaultArtist,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", artist: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="border-2 border-ink-black p-8 text-center">
        <svg className="w-12 h-12 text-shop-mint mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 className="font-bebas text-3xl tracking-widest text-ink-black mb-2">Message Sent!</h3>
        <p className="font-inter text-ink-black/70 mb-6">
          We&apos;ve received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline-dark text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Name <span className="text-flash-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? "error" : ""}`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 font-inter text-xs text-flash-red">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email <span className="text-flash-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? "error" : ""}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 font-inter text-xs text-flash-red">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Preferred Artist */}
      <div>
        <label htmlFor="artist" className="form-label">Preferred Artist</label>
        <select
          id="artist"
          name="artist"
          value={form.artist}
          onChange={handleChange}
          className="form-input bg-white"
        >
          <option value="">No preference / Not sure</option>
          {artists.map((a) => (
            <option key={a.slug} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Tell Us About Your Tattoo Idea <span className="text-flash-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`form-input resize-none ${errors.message ? "error" : ""}`}
          placeholder="Describe your idea, placement, size, any reference images you have in mind..."
        />
        {errors.message && <p className="mt-1 font-inter text-xs text-flash-red">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="font-inter text-sm text-flash-red border border-flash-red px-4 py-3">
          Something went wrong. Please try again or call us at (385) 528-2491.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="font-inter text-xs text-mortar-gray text-center">
        Or call us directly: <a href="tel:3855282491" className="text-ink-black hover:text-flash-red transition-colors font-medium">(385) 528-2491</a>
      </p>
    </form>
  );
}
