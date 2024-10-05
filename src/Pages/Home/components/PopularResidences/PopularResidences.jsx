import React from "react";
import ProductCard from "#/Components/ProductCard/ProductCard";

// Data
import PopularResidencesData from "./popularResidences.json";

// Assets
import LocationIcon from "@/assets/Icons/location.png";
import SizeIcon from "@/assets/Icons/size.png";
import RoomsIcon from "@/assets/Icons/rooms.png";

function PopularResidences() {
  return (
    <div className="flex h-full w-screen max-w-[1440px] items-center justify-center bg-primary py-20">
      <div className="POPULARRESIDENCES grid w-full max-w-[1280px] place-items-center grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        {PopularResidencesData?.map((residence) => (
          <ProductCard
            key={residence.id}
            imageSrc={residence.img}
            location={residence.location}
            roomCount={residence.roomCount}
            squareFeet={residence.squareFeet}
            price={residence.price}
            RoomsIcon={RoomsIcon}
            LocationIcon={LocationIcon}
            SizeIcon={SizeIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularResidences;
