"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { contacts } from "@/data/products";

export default function ContactStrip() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--dark)]">
            Speak With Our Team
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.div
              key={c.email}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--stone)] rounded-2xl p-8 text-center w-full sm:w-72"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--amber-light)] flex items-center justify-center mx-auto mb-4 text-2xl">
                👤
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[var(--dark)]">
                {c.name}
              </h3>
              <p className="text-xs text-[var(--amber)] font-semibold uppercase tracking-wider mt-1 mb-4">
                {c.role}
              </p>
              <div className="space-y-2">
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
                {c.email2 && (
                  <a
                    href={`mailto:${c.email2}`}
                    className="flex items-center justify-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--amber)] transition-colors"
                  >
                    <Mail size={13} />
                    {c.email2}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
