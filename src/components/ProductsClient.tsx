"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { withBasePath } from "@/lib/basePath";

const ALL = "all";

function SlideshowCard({ cat }: { cat: (typeof productCategories)[number] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (cat.images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % cat.images.length);
    }, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [cat.images.length]);

  return (
    <div
      id={cat.id}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
    >
      {/* Slideshow */}
      <div className="relative h-56 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={withBasePath(cat.images[index])}
              alt={`${cat.name} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4">
          <span className="text-white font-[family-name:var(--font-playfair)] font-bold text-xl drop-shadow-sm">
            {cat.name}
          </span>
        </div>
        {/* Dot indicators */}
        {cat.images.length > 1 && (
          <div className="absolute bottom-3 right-4 flex gap-1">
            {cat.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-xs text-[var(--amber)] font-medium mb-2">{cat.tagline}</p>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{cat.description}</p>

        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Available Variants
          </p>
          <ul className="space-y-1.5">
            {cat.variants.map((v) => (
              <li key={v.name} className="flex items-center justify-between text-sm">
                <span className="text-[var(--text)]">{v.name}</span>
                {v.description && (
                  <span className="text-xs text-[var(--muted)] bg-[var(--stone)] px-2 py-0.5 rounded-full">
                    {v.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {cat.customization && (
          <div className="mb-4 px-3 py-2.5 rounded-lg bg-[var(--amber-light)] text-xs text-[var(--text)]">
            <span className="font-semibold text-[var(--amber)]">Custom: </span>
            {cat.customization}
          </div>
        )}

        <div className="mt-auto">
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--dark)] text-white text-sm font-semibold hover:bg-[var(--amber)] transition-colors duration-200"
          >
            Request Quote
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsClient() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filtered =
    activeFilter === ALL
      ? productCategories
      : productCategories.filter((c) => c.id === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3.5 scrollbar-hide">
            <button
              onClick={() => setActiveFilter(ALL)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                activeFilter === ALL
                  ? "bg-[var(--amber)] text-white"
                  : "bg-[var(--stone)] text-[var(--muted)] hover:text-[var(--amber)]"
              }`}
            >
              All Categories
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  activeFilter === cat.id
                    ? "bg-[var(--amber)] text-white"
                    : "bg-[var(--stone)] text-[var(--muted)] hover:text-[var(--amber)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((cat) => (
              <SlideshowCard key={cat.id} cat={cat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
