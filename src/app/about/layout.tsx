import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Redwing Impex | Himalayan Salt Exporters in Istanbul",
  description:
    "Learn about Redwing Impex — an Istanbul-based import & export company specializing in premium Himalayan salt. 8 product categories, 50+ variants, global shipping.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
