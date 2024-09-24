import React from "react";
import Hero from "./components/Hero/Hero";
import WeHelpYou from "./components/WeHelpYou/WeHelpYou";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import PopularResidences from "./components/PopularResidences/PopularResidences";
import Testimonials from "./components/Testimonials/Testimonials";

function Home() {
  return (
    <div className="HOME flex h-full w-full flex-col items-center justify-center">
      <Hero />
      <WeHelpYou />
      <WhyChooseUs />
      <PopularResidences />
      <Testimonials />
    </div>
  );
}

export default Home;
