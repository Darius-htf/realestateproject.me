import React from "react";
import Button from "../Button/Button";

function ProductCard({
  LocationIcon,
  SizeIcon,
  RoomsIcon,
  imageSrc,
  location,
  roomCount,
  squareFeet,
  price,
}) {
  return (
    <article className="card flex max-h-[534px] max-w-[382px] flex-col items-start justify-between gap-3 overflow-hidden rounded-3xl bg-card text-accent shadow-lg">
      <aside className="card__aside">
        <figure className="card__figure">
          <img
            src={imageSrc}
            alt="residence image"
            className="card__image object-cover"
          />
        </figure>
      </aside>
      <div className="CARD_BODY flex w-full flex-col items-start justify-between gap-2 px-5 pb-5">
        <header className="card__header flex items-center justify-center gap-1">
          <span>
            <img src={LocationIcon} alt="location icon" />
          </span>
          <h2 className="card__title text-xl font-bold text-accent text-ellipsis overflow-hidden">
            {location}
          </h2>
        </header>
        <div className="card__body flex w-full items-center justify-between">
          <span className="residence__rooms__count flex items-center justify-center gap-1 text-[18px] text-accent">
            <span>
              <img src={RoomsIcon} alt="rooms icon" />
            </span>
            {roomCount} Rooms
          </span>
          <span className="residence__square__feet flex items-center justify-center gap-1 text-[18px] text-accent">
            <span>
              <img src={SizeIcon} alt="size icon" />
            </span>
            {squareFeet}
          </span>
        </div>
        <footer className="card__footer flex w-full items-center justify-between">
          <div className="card__actions">
            <Button text={"Sign up"} />
          </div>
          <div className="residence__price">
            <span className="text-[22px] font-bold text-accent">{price}</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default ProductCard;
