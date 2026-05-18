"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Product Categories" },
  { value: "50+", label: "Product Variants" },
  { value: "100%", label: "Customizable" },
];

export default function StatsBar() {
  return (
    <div className="bg-[var(--amber)] py-10">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/30">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex flex-col items-center px-4 py-2"
          >
            <span className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
              {s.value}
            </span>
            <span className="text-white/80 text-xs sm:text-sm mt-1 text-center">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
