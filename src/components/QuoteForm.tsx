"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { productCategories } from "@/data/products";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Quote Request — ${data.product}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct Interest: ${data.product}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:kashif@redwingimpex.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-[var(--amber)] mb-4" />
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--dark)] mb-2">
          Your email client has opened!
        </h3>
        <p className="text-gray-500 max-w-sm">
          Please send the pre-filled email to complete your quote request. We'll
          respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            type="text"
            placeholder="John Smith"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company
          </label>
          <input
            type="text"
            placeholder="Acme Corp"
            {...register("company")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+1 555 000 0000"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors"
          />
        </div>
      </div>

      {/* Product interest */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Product Interest <span className="text-[var(--amber)]">*</span>
        </label>
        <select
          {...register("product", { required: "Please select a product" })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors bg-white"
        >
          <option value="">Select a category…</option>
          {productCategories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
          <option value="Multiple / Other">Multiple / Other</option>
        </select>
        {errors.product && (
          <p className="mt-1 text-xs text-red-500">{errors.product.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-[var(--amber)]">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your requirements — quantities, specifications, delivery location…"
          {...register("message", { required: "Please include a message" })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--amber)]/30 focus:border-[var(--amber)] transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--amber)] text-white font-semibold hover:bg-[var(--amber-dark)] transition-colors duration-200 disabled:opacity-60 shadow-lg shadow-[var(--amber)]/25"
      >
        <Send size={16} />
        Send Quote Request
      </button>
    </form>
  );
}
