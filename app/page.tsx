import Hero from "@/components/Hero";
import CareerAccordion from "@/components/CareerPath/CareerAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white font-[family-name:var(--font-plus-jakarta-sans)]">
      <Hero />
      <CareerAccordion />
      <Footer />
    </main>
  );
}
