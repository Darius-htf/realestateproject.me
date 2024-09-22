import React from "react";

// Assets
import WeHelpImage from "@/assets/Images/WeHelpYou/Mask group.png";

function WeHelpYou() {
  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center py-20 justify-center bg-primary">
      <div className="WEHELPYOU w-full lg:flex-row flex-col flex gap-10 justify-between items-start max-w-[1280px] px-5 bg-transparent">
        <div className="IMAGE w-full lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={WeHelpImage}
            alt="house"
          />
        </div>
        <div className="TEXT flex w-full lg:w-1/2 h-full flex-col items-start justify-center gap-10 text-start">
          <h1 className="TITLE leading-tight text-4xl text-balance font-bold text-accent">
            We Help You To Find Your Dream Home
          </h1>
          <p className="DESCRIPTION text-balance text-xl font-bold">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>
          <div className="STATS w-full flex justify-between items-start font-bold text-accent">
            <div className="AVAILABE flex justify-start items-start leading-tight flex-col">
              <span className="text-4xl">8K+</span>
              <span>Houses Available</span>
            </div>
            <div className="SOLD flex justify-start items-start leading-tight flex-col">
              <span className="text-4xl">6K+</span>
              <span>Houses Sold</span>
            </div>
            <div className="TRUSTED flex justify-start items-start leading-tight flex-col">
              <span className="text-4xl">2K+</span>
              <span>Trusted Agents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeHelpYou;
