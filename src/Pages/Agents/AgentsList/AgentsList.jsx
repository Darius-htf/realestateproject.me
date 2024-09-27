import React from "react";

// Data
import AgentsData from "./AgentsData.json";
import ImageWithSkeleton from "../../../Components/ImageWithSkeleton/ImageWithSkeleton";

function AgentsList() {
  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="AGENTS__LIST text-accen flex w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-5 font-bold leading-tight">
        <div className="AGENTS">
          {AgentsData?.map((agent, index) => (
            <div className="AGENT__DATA my-10 grid grid-cols-2 place-items-center overflow-hidden rounded-[8px] bg-card">
              <div className="AGENT__IMAGE aspect-square w-full overflow-hidden">
                <ImageWithSkeleton src={agent.img} alt={"agent image"} />
              </div>
              <div className="AGENT__DETAILS flex flex-col items-start justify-between gap-2 px-5">
                <h2 className="AGENT_NAME text-4xl">{agent.name}</h2>
                <h3 className="AGENT__TITLE text-2xl">{agent.title}</h3>
                <p className="AGENT__BIO mt-5 text-balance text-start text-lg">
                  {agent.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="AGENTS__LIST__CHOOSER flex w-full items-center justify-between rounded-[8px] bg-card px-5 py-3">
          {AgentsData?.map((agent) => (
            <div className="flex items-center justify-between">
              <hr className="h-[3px] w-[50px] bg-accent" />
              <span className="AGENT__NAME cursor-pointer rounded-[8px] bg-accent px-3 py-1 text-primary transition-all duration-150 ease-linear hover:bg-card hover:text-accent hover:outline hover:outline-2 hover:outline-accent">
                {agent?.name}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default AgentsList;
