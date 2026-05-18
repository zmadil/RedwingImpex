"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function QuoteBanner() {
  return (
    <section className="py-20 bg-[var(--dark)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to place an order?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Tell us what you need — we&apos;ll get back to you with a competitive
            quote, tailored to your specifications and volume requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--amber)] text-white font-semibold hover:bg-[var(--amber-dark)] transition-colors duration-200 shadow-xl shadow-[var(--amber)]/25"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
