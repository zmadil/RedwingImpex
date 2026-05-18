"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { withBasePath } from "@/lib/basePath";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductCategoriesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[var(--dark)]">
            Eight Product Categories
          </h2>
          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto text-sm leading-relaxed">
            Every product is sourced from the Himalayan mountains and ready for
            global shipment — with full customization on every line.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {productCategories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Link href={`/products#${cat.id}`} className="group block h-full">
                <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <Image
                      src={withBasePath(cat.coverImage)}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient overlay at bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col flex-1 bg-white p-5">
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-base text-[var(--dark)] mb-1.5">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed flex-1">
                      {cat.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--amber)] mt-4 group-hover:gap-2 transition-all duration-200">
                      View products <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--dark)] text-white font-semibold text-sm hover:bg-[var(--amber)] transition-colors duration-200"
          >
            Browse Full Catalogue
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
