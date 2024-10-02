import React, { useState } from "react";

// Data
import AgentsData from "./AgentsData.json";
import ImageWithSkeleton from "../../../Components/ImageWithSkeleton/ImageWithSkeleton";

function AgentsList() {
  const [selectedAgent, setSelectedAgent] = useState(AgentsData[0]);
  const handleSelectedAgent = (agent) => {
    setSelectedAgent(agent);
  };

  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="AGENTS__LIST text-accen flex h-full w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-5 font-bold leading-tight">
        <div className="AGENTS__LIST__CHOOSER flex gap-2 lg:flex-row flex-col w-full items-center justify-between rounded-[8px] bg-card px-5 py-3">
          {AgentsData?.map((agent, index) => (
            <div
              key={index}
              onClick={() => handleSelectedAgent(agent)}
              className="flex w-full gap-2 items-center justify-between"
            >
              <hr className="h-[3px] w-1/4 bg-accent" />
              <span className="AGENT__NAME h-[40px] w-full grid place-items-center cursor-pointer rounded-[8px] bg-accent px-3 py-1 text-primary transition-all duration-150 ease-linear hover:bg-card hover:text-accent hover:outline hover:outline-2 hover:outline-accent">
                {agent?.name}
              </span>
            </div>
          ))}
        </div>
        <div className="AGENTS flex h-full w-full items-center justify-center">
          {AgentsData?.map((agent, index) => (
            <div
              key={index}
              className="AGENT__DATA my-10 h-full overflow-hidden rounded-[8px] bg-card"
            >
              {selectedAgent === agent && (
                <div className="AGENT__CARD grid h-full grid-cols-1 place-items-center lg:grid-cols-2">
                  <div className="AGENT__IMAGE aspect-square w-full overflow-hidden">
                    <ImageWithSkeleton src={agent.img} alt={"agent image"} />
                  </div>
                  <div className="AGENT__DETAILS flex flex-col items-start justify-between gap-2 p-5">
                    <h2 className="AGENT__NAME text-4xl">{agent.name}</h2>
                    <h3 className="AGENT__TITLE text-start text-2xl">{agent.title}</h3>
                    <div className="AGENT__BIO max-h-[300px] overflow-auto">
                      <p className="mt-5 text-balance text-start text-lg">
                        {agent.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgentsList;
