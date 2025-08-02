import About from "@/components/About";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import BreakImage from "@/components/BreakImage";
import PerfumeGridSection from "@/components/PerfumeGrid";
import Ribbon from "@/components/Ribbon";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <Ribbon />
      <About />
      <PerfumeGridSection />
      <BreakImage />
    </>
  );
}
