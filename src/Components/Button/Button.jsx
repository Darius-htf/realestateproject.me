import React from "react";

function Button({ text }) {
  return (
    <button className="bg-accent text-primary flex px-5 py-2 lg:max-w-[122px] w-full items-center justify-center rounded-lg text-base font-bold">
      {text}
    </button>
  );
}

export default Button;
