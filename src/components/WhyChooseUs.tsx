"use client";

import { motion } from "framer-motion";
import { Award, Settings, Globe, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <Award className="text-[var(--amber)]" size={26} />,
    title: "Premium Quality",
    description:
      "Every product is sourced directly from the Himalayan mountains, ensuring the highest mineral purity and consistency across every order.",
  },
  {
    icon: <Settings className="text-[var(--amber)]" size={26} />,
    title: "Full Customization",
    description:
      "Custom mesh sizes, granule grades, shapes, and finishes. Private labeling and bespoke packaging available for all product lines.",
  },
  {
    icon: <Globe className="text-[var(--amber)]" size={26} />,
    title: "Global B2B Export",
    description:
      "Istanbul-based logistics hub with global reach. We handle bulk shipments for wholesale buyers, distributors, and retailers worldwide.",
  },
  {
    icon: <Leaf className="text-[var(--amber)]" size={26} />,
    title: "Natural & Pure",
    description:
      "All products are free from additives and preservatives — naturally pink, naturally mineral-rich, straight from the source.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--stone)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
            Why Redwing Impex
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[var(--dark)]">
            Built for Serious Buyers
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto text-sm leading-relaxed">
            We partner with importers, distributors, retailers, and wholesalers
            who demand consistency, reliability, and flexibility.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--amber-light)] flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[var(--dark)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
