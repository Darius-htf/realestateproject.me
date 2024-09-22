import React from "react";

function SmallCard({ description, title, imageSrc }) {
  return (
    <article className="card rounded-lg shadow-lg bg-secondary text-accent h-[268px] w-full max-w-[275px] flex flex-col items-start justify-center p-3 gap-2">
      <aside className="card__aside">
        <figure className="card__figure bg-white shadow-lg p-3 rounded-lg">
          <img src={imageSrc} alt="Dummy Image" className="card__image" />
        </figure>
      </aside>
      <header className="card__header">
        <h2 className="card__title text-xl">{title}</h2>
      </header>
      <div className="card__body">
        <p className="card__copy text-base text-start">{description}</p>
      </div>
    </article>
  );
}

export default SmallCard;
