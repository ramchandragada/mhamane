import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Process } from "@/components/Process";
import { Regions } from "@/components/Regions";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Regions />
      <Work />
      <Process />
      <Leadership />
      <CtaBand />
    </>
  );
}
