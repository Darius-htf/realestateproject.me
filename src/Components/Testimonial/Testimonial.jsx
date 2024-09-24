import React from "react";

import Star from "@/assets/Images/Testimonials/Star 1.png";

function Testimonial({
  imageSrc,
  rating,
  location,
  comment,
  name,
  profileImage,
}) {
  return (
    <article className="card h-[430px] shadow-lg flex flex-col items-center justify-between max-w-[382px] overflow-hidden rounded-[18px] bg-card text-accent">
      <div className="card__header w-[382px] h-[168px] bg-primary">
        <figure className="card__figure">
          <img src={imageSrc} alt="place image" className="card__image object-cover" />
        </figure>
      </div>
      <div className="card__body flex flex-col items-center justify-between gap-2 p-5">
        <div className="user__details flex w-full items-center justify-between">
          <div className="user flex items-center justify-between gap-2">
            <div className="user__image overflow-hidden rounded-full">
              <img src={profileImage} alt="user image" />
            </div>
            <div className="name__location text-start font-bold text-accent">
              <h4 className="user__name text-xl">{name}</h4>
              <p className="user__location text-base">{location}</p>
            </div>
          </div>
          <div className="rating flex items-center justify-center bg-primary rounded-md gap-1 w-[59px] h-[24px]">
            <span>
              <img src={Star} alt="star" />
            </span>
            {rating}
          </div>
        </div>
        <p className="comment text-start font-bold text-accent">{comment}</p>
      </div>
    </article>
  );
}

export default Testimonial;
