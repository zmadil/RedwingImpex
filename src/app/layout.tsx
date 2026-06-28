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
  metadataBase: new URL("https://redwingimpex.com"),
  title: {
    default: "Redwing Impex — Premium Himalayan Salt Exporters | Istanbul",
    template: "%s | Redwing Impex",
  },
  description:
    "Istanbul-based import & export company specializing in premium Himalayan salt products — edible salt, salt lamps, bath salt, culinary products, and more. Global wholesale & private labeling.",
  keywords: [
    "Himalayan salt",
    "pink salt wholesale",
    "salt lamps",
    "edible salt",
    "bath salt",
    "salt exporter Turkey",
    "Himalayan salt supplier",
    "private label salt",
    "bulk salt",
    "Redwing Impex",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Redwing Impex",
    title: "Redwing Impex — Premium Himalayan Salt Exporters",
    description:
      "Istanbul-based Himalayan salt exporter. Edible salt, salt lamps, bath salt, culinary products & more. Wholesale, private labeling, global shipping.",
    images: [{ url: "/images/logo.png", width: 824, height: 954, alt: "Redwing Impex Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Redwing Impex — Premium Himalayan Salt",
    description:
      "Istanbul-based Himalayan salt exporter. Wholesale, private labeling, global shipping.",
    images: ["/images/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Redwing Impex",
  legalName: "REDWING IMPEX İç ve Dış Tic. Pazarlama Ltd. Şti.",
  url: "https://redwingimpex.com",
  logo: "https://redwingimpex.com/images/logo.png",
  description:
    "Istanbul-based import & export company specializing in premium Himalayan salt products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-555-146-43-84",
    contactType: "sales",
    email: "info@redwingimpex.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
