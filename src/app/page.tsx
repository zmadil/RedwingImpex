import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductCategoriesGrid from "@/components/ProductCategoriesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuoteBanner from "@/components/QuoteBanner";
import ContactStrip from "@/components/ContactStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <QuoteBanner />
      <ContactStrip />
    </>
  );
}
