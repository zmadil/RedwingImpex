import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Products — Redwing Impex",
  description:
    "Browse our full range of Himalayan salt products: edible salt, salt lamps, bath salt, culinary blocks, aromatherapy products, animal lick salt, candle holders, and décor tiles.",
};

export default function ProductsPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-white min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <p className="text-[var(--amber)] text-xs font-semibold uppercase tracking-widest mb-3">
          Our Catalogue
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[var(--dark)]">
          Himalayan Salt Products
        </h1>
        <p className="mt-4 text-[var(--muted)] max-w-xl text-sm">
          Eight distinct product categories, hundreds of variants, all sourced
          from the Himalayan mountains. Full customization and private labeling
          available on every line.
        </p>
      </div>

      <ProductsClient />
    </div>
  );
}
