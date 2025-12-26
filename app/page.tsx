import Hero from "@/components/Hero";
import CareerAccordion from "@/components/CareerPath/CareerAccordion";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

export default function Home() {
  return (
    <>
      <main className=" cursor-none min-h-screen bg-[#0c0c0c] text-white font-(family-name:--font-plus-jakarta-sans)">
        <Hero />
        <CareerAccordion />
        <Footer />
        <SmoothCursor />
      </main>
    </>
  );
}
