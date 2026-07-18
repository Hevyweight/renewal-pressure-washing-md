import Image from "next/image";
import Hero from "./components/hero";
import Problem from "./components/problem";
import WhyUs from "./components/whyUs";
import Services from "./components/services";
import Process from "./components/process";
import Reviews from "./components/reviews";
import CTA from "./components/cta";
import BeforeAndAfter from "./components/beforeAndAfter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <WhyUs />
      <Services />
      <Process />
      <Reviews />
      <CTA />
      <BeforeAndAfter />
    </div>
  );
}
