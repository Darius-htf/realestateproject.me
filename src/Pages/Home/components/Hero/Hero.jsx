import React from "react";
import Button from "#/Components/Button/Button";

function Hero() {
  return (
    <div className="HERO flex lg:flex-row flex-col bg-secondary h-[906px] w-full items-center justify-start">
      <div className="HERO_TEXT flex lg:w-1/3 flex-col items-start justify-start gap-10 text-start">
        <h1 className="TITLE text-clamp-title h-full font-bold leading-tight text-accent">
          Find Your Dream Home
        </h1>
        <p className="SUBTUTLE text-clamp-para font-bold text-accent">
          Explore our curated selection of exquisite properties meticulously
          tailored to your unique dream home vision
        </p>
        <Button height="58px" maxWidth="170px" text="Sign up" />
      </div>
      {/* <div className="HERO_IMAGE h-[906px] bg-hero w-full lg:w-2/3 bg-contain bg-center lg:bg-right bg-no-repeat"></div> */}
    </div>
  );
}

export default Hero;
