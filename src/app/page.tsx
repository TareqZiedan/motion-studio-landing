import Hero from "@/components/sections/Hero";
import TextArea from "@/components/sections/TextArea";
import About from "@/components/sections/About";
import Showcase from "@/components/sections/Showcase";
import Project from "@/components/sections/Project";
import Service from "@/components/sections/Service";
import Cta from "@/components/sections/Cta";
import AboutSecondary from "@/components/sections/AboutSecondary";
import FunFact from "@/components/sections/FunFact";
import Testimonial from "@/components/sections/Testimonial";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <TextArea />
      <About />
      <Showcase />
      <Project />
      <Service />
      <Cta />
      <AboutSecondary />
      <FunFact />
      <Testimonial />
      <Team />
    </>
  );
}
