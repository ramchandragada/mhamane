import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { OneStop } from "@/components/OneStop";
import { Process } from "@/components/Process";
import { Regions } from "@/components/Regions";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OneStop />
      <Services />
      <Regions />
      <Work />
      <Process />
      <Testimonials />
      <Leadership />
      <Faq />
      <CtaBand />
    </>
  );
}
