import React from "react";
import { Link } from "react-router-dom";

// Data
import ServicesListData from "./servicesListData.json";

// Assets
import Next from "@/assets/Images/Testimonials/next.png";

function ServicesList() {
  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="SERVICES_LIST flex w-full max-w-[1280px] flex-col items-start justify-center gap-10 px-5 font-bold leading-tight text-accent">
        <h1 className="text-clamp-title">Our Services And Works</h1>
        <ul className="LIST flex flex-col gap-1">
          {ServicesListData?.map((service) => (
            <li key={service.id}>
              <Link
                to={service.id}
                className="flex flex-col items-start lg:items-center justify-between overflow-hidden rounded-lg bg-card py-2 px-5 transition-all duration-200 ease-in-out hover:scale-105 lg:flex-row"
              >
                <h2 className="SERVICE__NAME text-start text-2xl lg:w-1/3">
                  {service.name}
                </h2>
                <p className="SERVICE__DESCRIPTION text-ellipsis text-balance text-start text-base lg:w-2/3">
                  {service.description}
                </p>
                <span className="ICON hidden lg:block">
                  <img src={Next} alt="icon" />
                </span>
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesList;
