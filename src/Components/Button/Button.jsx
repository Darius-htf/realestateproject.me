import React from "react";

function Button({ type, maxWidth, text, height }) {
  return (
    <button
      type={type}
      className={`flex w-full items-center justify-center rounded-lg bg-accent px-5 py-2 text-base font-bold text-primary ${maxWidth} ${height}`}
    >
      {text}
    </button>
  );
}

export default Button;
