"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { EASE_EDITORIAL } from "@/lib/motion";

const INDUSTRIES = [
  "Property & Real Estate",
  "Architecture",
  "Healthcare",
  "Luxury Brand",
  "Hospitality",
  "Restaurant / Café",
  "Law Firm",
  "Financial Services",
  "Manufacturing",
  "Automobile",
  "Retail",
  "SaaS",
  "AI Product",
  "Education",
  "Other",
];

const BUDGETS = [
  "Select a range",
  "< $10k",
  "$10k — $25k",
  "$25k — $60k",
  "$60k — $120k",
  "$120k — $250k",
  "$250k +",
];

const PROJECT_TYPES = [
  "Select a type",
  "New Website",
  "Rebrand + Website",
  "Custom Dashboard",
  "Billing / Portal",
  "CRM",
  "AI Product",
  "Landing Page",
  "Consultation",
];

const TIMELINES = ["Select a timeline", "ASAP", "1 — 3 months", "3 — 6 months", "6 — 12 months", "12 months +"];

const COUNTRIES = [
  "Select a country",
  "France",
  "United Kingdom",
  "Switzerland",
  "Italy",
  "Germany",
  "United States",
  "United Arab Emirates",
  "Singapore",
  "India",
  "Other",
];

const fieldLabel = "block font-body text-[10px] uppercase tracking-widest2 text-ivory-muted mb-2";
const fieldInput =
  "w-full rounded-[10px] border border-line bg-ink px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory-muted/50 outline-none transition-colors duration-500 focus:border-gold/70";
const fieldSelect = fieldInput + " appearance-none";

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  budget: string;
  projectType: string;
  timeline: string;
  details: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  country: COUNTRIES[0]!,
  industry: INDUSTRIES[0]!,
  budget: BUDGETS[0]!,
  projectType: PROJECT_TYPES[0]!,
  timeline: TIMELINES[0]!,
  details: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handle =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setState((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: wire to a real submission endpoint when the backend is ready.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
        className="flex flex-col items-start rounded-[24px] border border-line bg-ink-900 p-10 md:p-14"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check size={22} strokeWidth={1.4} />
        </div>
        <h3 className="mt-6 font-display text-[36px] italic leading-tight text-ivory md:text-[48px]">
          Merci, {state.name.split(" ")[0] || "friend"}.
        </h3>
        <p className="mt-4 max-w-[440px] font-body text-[15px] leading-[1.7] text-ivory-muted">
          Your brief has landed in the atelier. We&rsquo;ll respond personally within two business
          days with next steps and a short questionnaire.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
      className="rounded-[24px] border border-line bg-ink-900 p-8 md:p-12"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10">
        <label className="block">
          <span className={fieldLabel}>Full name</span>
          <input
            required
            className={fieldInput}
            placeholder="Your name"
            value={state.name}
            onChange={handle("name")}
          />
        </label>
        <label className="block">
          <span className={fieldLabel}>Business name</span>
          <input
            className={fieldInput}
            placeholder="Your company"
            value={state.business}
            onChange={handle("business")}
          />
        </label>
        <label className="block">
          <span className={fieldLabel}>Email</span>
          <input
            required
            type="email"
            className={fieldInput}
            placeholder="you@brand.com"
            value={state.email}
            onChange={handle("email")}
          />
        </label>
        <label className="block">
          <span className={fieldLabel}>Phone</span>
          <input
            type="tel"
            className={fieldInput}
            placeholder="+91 93292 05534"
            value={state.phone}
            onChange={handle("phone")}
          />
        </label>
        <label className="block">
          <span className={fieldLabel}>Country</span>
          <select required className={fieldSelect} value={state.country} onChange={handle("country")}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={fieldLabel}>Industry</span>
          <select required className={fieldSelect} value={state.industry} onChange={handle("industry")}>
            {INDUSTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={fieldLabel}>Estimated budget</span>
          <select required className={fieldSelect} value={state.budget} onChange={handle("budget")}>
            {BUDGETS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={fieldLabel}>Project type</span>
          <select required className={fieldSelect} value={state.projectType} onChange={handle("projectType")}>
            {PROJECT_TYPES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className={fieldLabel}>Timeline</span>
          <select required className={fieldSelect} value={state.timeline} onChange={handle("timeline")}>
            {TIMELINES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className={fieldLabel}>Project details</span>
          <textarea
            required
            rows={5}
            className={fieldInput + " resize-none"}
            placeholder="Tell us about your vision, inspirations, and any constraints..."
            value={state.details}
            onChange={handle("details")}
          />
        </label>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-[360px] font-body text-xs leading-[1.7] text-ivory-muted">
          We only respond to briefs we&rsquo;re genuinely excited about. Please share as much
          detail as you can.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-ink transition-all duration-500 ease-luxury hover:bg-gold-soft disabled:opacity-60"
        >
          <span className="relative z-10">{status === "submitting" ? "Sending…" : "Submit Brief"}</span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.2}
            className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </motion.form>
  );
}
