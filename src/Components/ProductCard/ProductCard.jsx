import React from "react";
import Button from "../Button/Button";

function ProductCard({ imageSrc, title, roomCount, squareFeet, price }) {
  return (
    <article className="card bg-secondary text-accent max-h-[534px] max-w-[382px]">
      <aside className="card__aside">
        <figure className="card__figure">
          <img src={imageSrc} alt="residence image" className="card__image" />
        </figure>
      </aside>
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
      </header>
      <div className="card__body">
        <span className="residence__rooms__count">{roomCount}</span>
        <span className="residence__square__feet">{squareFeet}</span>
      </div>
      <footer className="card__footer">
        <div className="card__actions">
          <Button />
        </div>
        <div className="residence__price">
          <span>{price}</span>
        </div>
      </footer>
    </article>
  );
}

export default ProductCard;
