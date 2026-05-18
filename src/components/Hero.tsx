"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { heroImage } from "@/data/products";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — dark panel with text */}
      <div className="relative flex items-center bg-[var(--dark)] pt-28 pb-16 px-8 lg:px-14 xl:px-20">
        {/* Subtle amber glow */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[var(--amber)]/10 blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--amber)]/40 text-sm text-[var(--amber)] font-medium mb-8"
          >
            <Globe size={13} />
            Istanbul-based · Global Export
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-6"
          >
            Premium Himalayan Salt,{" "}
            <span className="text-[var(--amber)]">Sourced &amp; Shipped</span>{" "}
            Worldwide.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-gray-400 text-base leading-relaxed mb-10 max-w-md"
          >
            B2B import &amp; export specialists offering the full spectrum of
            Himalayan salt — edible salt, wellness lamps, bath products, culinary
            blocks, and décor tiles — with full customization and private labeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--amber)] text-white font-semibold text-sm hover:bg-[var(--amber-dark)] transition-colors duration-200 shadow-lg shadow-[var(--amber)]/25"
            >
              Explore Products
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right — full-bleed product photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="relative h-64 lg:h-auto"
      >
        <Image
          src={heroImage}
          alt="Himalayan salt products"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle left-edge gradient to blend with dark panel on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/30 via-transparent to-transparent lg:block hidden" />
      </motion.div>
    </section>
  );
}
