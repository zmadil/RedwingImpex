import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { contacts } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl"></span>
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-bold text-base">
                  Redwing Impex
                </p>
                <p className="text-[10px] text-[var(--amber)] tracking-widest uppercase">
                  Himalayan Salt
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Istanbul-based import &amp; export specialists in premium Himalayan
              salt products. Serving global markets with quality, consistency,
              and full customization.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={13} className="text-[var(--amber)] shrink-0" />
              Istanbul, Turkey
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--amber)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              {contacts.map((c) => (
                <li key={c.email} className="text-sm text-center">
                  <p className="text-white font-medium">{c.name}</p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-1.5 text-gray-400 hover:text-[var(--amber)] transition-colors mt-1"
                  >
                    <Phone size={12} />
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center justify-center gap-1.5 text-gray-400 hover:text-[var(--amber)] transition-colors mt-1"
                  >
                    <Mail size={12} />
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} REDWING IMPEX İç ve Dış Tic. Pazarlama
            Ltd. Şti. — VKN: 734 254 7700
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
