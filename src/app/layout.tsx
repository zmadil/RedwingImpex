import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redwing Impex — Premium Himalayan Salt",
  description:
    "Istanbul-based import & export company specializing in premium Himalayan salt products — edible salt, salt lamps, bath salt, culinary products, and more. Global wholesale & private labeling.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Redwing Impex — Premium Himalayan Salt",
    description:
      "Istanbul-based import & export company specializing in premium Himalayan salt products — edible salt, salt lamps, bath salt, culinary products, and more.",
    images: [{ url: "/images/logo.png", width: 824, height: 954 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Redwing Impex — Premium Himalayan Salt",
    description:
      "Premium Himalayan salt products — edible salt, salt lamps, bath salt, and more. Global wholesale & private labeling.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
