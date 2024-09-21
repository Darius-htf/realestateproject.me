import React from "react";

function Testimonial() {
  return (
    <article className="card bg-secondary text-accent max-h-[430px] max-w-[382px]">
      <div className="card__header">
        <figure className="card__figure">
          <img src={imageSrc} alt="" className="card__image" />
        </figure>
      </div>
      <div className="card__body">
        <div className="user__details">{userDetails}</div>
        <p className="comment">{comment}</p>
      </div>
    </article>
  );
}

export default Testimonial;
