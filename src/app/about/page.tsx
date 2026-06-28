"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { contacts } from "@/data/products";

const values = [
  {
    emoji: "💎",
    title: "Quality",
    body: "We source only the finest Himalayan salt, with rigorous checks to ensure mineral purity, consistent granule sizing, and zero adulteration.",
  },
  {
    emoji: "🔧",
    title: "Customization",
    body: "Your specs are our starting point. We offer custom mesh grades, colors, sizes, shapes, and full private-label packaging.",
  },
  {
    emoji: "🤝",
    title: "Relationships",
    body: "We build long-term partnerships with importers, distributors, and retailers worldwide — reliability and responsiveness are non-negotiable.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52 } },
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-white">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark)] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--amber)]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold text-white max-w-2xl leading-tight">
              Salt is ancient. Our approach is modern.
            </h1>
            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed text-sm">
              Redwing Impex is an Istanbul-based import &amp; export company
              specializing in the full spectrum of Himalayan salt products. We
              bridge the Himalayan mountains to global markets — bringing purity,
              reliability, and flexibility to every order.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[var(--dark)] mb-6">
              Istanbul-based. <br /> Himalayan-sourced. <br /> Globally shipped.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4 text-sm">
              Operating under the full legal name{" "}
              <strong className="text-[var(--text)]">
                REDWING IMPEX İç ve Dış Tic. Pazarlama Ltd. Şti.
              </strong>
              , we are a registered Turkish trading company (VKN: 734 254 7700)
              with deep expertise in Himalayan salt sourcing and international
              logistics.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-4 text-sm">
              Our product range spans eight categories — from everyday edible
              salt and bath products to decorative lamps, culinary accessories,
              aromatherapy products, and animal lick salt. Every product can be
              customized to your specifications and shipped globally.
            </p>
            <p className="text-[var(--muted)] leading-relaxed text-sm">
              We work with wholesalers, retailers, spa brands, health food
              companies, and agricultural suppliers. If you need Himalayan salt
              — in any form, any quantity — we are your partner.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Product Categories", value: "8" },
              { label: "Product Variants", value: "50+" },
              { label: "Custom Options", value: "∞" },
              { label: "Markets Served", value: "Global" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--stone)] rounded-2xl p-8 text-center"
              >
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--amber)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--muted)] mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--stone)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--dark)]">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.52, delay: i * 0.1 } },
                }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="text-3xl mb-5">{v.emoji}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--dark)] mb-3">
                  {v.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
              Meet the Team
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--dark)]">
              The People Behind Redwing Impex
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contacts.map((c, i) => (
              <motion.div
                key={c.email}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } },
                }}
                className="bg-[var(--stone)] rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[var(--amber-light)] flex items-center justify-center mx-auto mb-5 text-4xl">
                  👤
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-[var(--dark)]">
                  {c.name}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--amber)] transition-colors"
                  >
                    <Phone size={13} />
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--amber)] transition-colors"
                  >
                    <Mail size={13} />
                    {c.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location bar */}
      <section className="py-14 bg-[var(--dark)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--amber)]/20 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[var(--amber)]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Based in Istanbul, Turkey</p>
              <p className="text-gray-400 text-xs mt-0.5">Strategically positioned for global export</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--amber)] text-white font-semibold text-sm hover:bg-[var(--amber-dark)] transition-colors shrink-0"
          >
            Get in Touch
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
