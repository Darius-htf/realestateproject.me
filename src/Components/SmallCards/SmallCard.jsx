import React from "react";

function SmallCard({ description, title, imageSrc }) {
  return (
    <article className="card bg-secondary text-accent max-h-[268px] max-w-[275px]">
      <aside className="card__aside">
        <figure className="card__figure">
          <img src={imageSrc} alt="Dummy Image" className="card__image" />
        </figure>
      </aside>
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
      </header>
      <div className="card__body">
        <p className="card__copy">{description}</p>
      </div>
    </article>
  );
}

export default SmallCard;
