import React from "react";

// Data
import WhyChooseUsData from "./WhyChooseUsData.json";
import SmallCard from "@/Components/SmallCards/SmallCard";

function WhyChooseUs() {
  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="WHYCHOOSEUS flex w-full max-w-[1280px] items-center justify-center flex-col gap-2 bg-transparent px-5 text-center font-bold leading-tight text-accent">
        <h1 className="TITLE text-4xl">Why Choose Us</h1>
        <p className="SUBTITLE w-full max-w-[629px] text-xl">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service
        </p>
        <div className="CARDS mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WhyChooseUsData?.map((data) => (
            <SmallCard
              imageSrc={data.img}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
