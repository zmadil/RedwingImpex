"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contacts } from "@/data/products";
import QuoteForm from "@/components/QuoteForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52 } },
};

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[var(--dark)] py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--amber)]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white">
              Request a Quote
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl text-sm leading-relaxed">
              Fill out the form below and we&apos;ll get back to you with pricing
              and availability. Alternatively, reach us directly via phone or email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[var(--stone)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--amber-light)] flex items-center justify-center">
                  <MapPin size={15} className="text-[var(--amber)]" />
                </div>
                <h3 className="font-semibold text-[var(--dark)] text-sm">Location</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">Istanbul, Turkey</p>
              <p className="text-xs text-gray-400 mt-0.5">Strategically positioned for global export</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.52, delay: 0.08 } } }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--amber-light)] flex items-center justify-center">
                  <Clock size={15} className="text-[var(--amber)]" />
                </div>
                <h3 className="font-semibold text-[var(--dark)] text-sm">Response Time</h3>
              </div>
              <p className="text-sm text-[var(--muted)]">Within 24 hours</p>
              <p className="text-xs text-gray-400 mt-0.5">Business days, Mon–Fri</p>
            </motion.div>

            {contacts.map((c, i) => (
              <motion.div
                key={c.email}
                initial="hidden"
                animate="visible"
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.14 + i * 0.08 } } }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--amber-light)] flex items-center justify-center text-lg">
                    👤
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark)] text-sm">{c.name}</p>
                    <p className="text-xs text-[var(--amber)]">{c.role}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--amber)] transition-colors"
                  >
                    <Phone size={12} />
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--amber)] transition-colors"
                  >
                    <Mail size={12} />
                    {c.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15 } } }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--dark)] mb-6">
              Tell us about your requirements
            </h2>
            <QuoteForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
