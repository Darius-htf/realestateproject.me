import React from "react";

function Button({ maxWidth, text, height }) {
  return (
    <button
      className={`flex w-full items-center justify-center rounded-lg bg-accent px-5 py-2 text-base font-bold text-primary max-w-[${maxWidth}] h-[${height}]`}
    >
      {text}
    </button>
  );
}

export default Button;
