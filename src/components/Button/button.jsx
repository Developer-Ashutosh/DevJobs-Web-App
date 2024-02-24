import React from "react";

const Button = ({ desc, px, bg = "bg-main", href, type = "link" }) => {
  return (
    <button
      className={`h-16 w-fit p-1.5 _focus-hover relative ${
        type === "search" &&
        "max-[812px]:absolute max-[812px]:h-16 max-[812px]:left-1/2 max-[812px]:-translate-x-1/2 max-[812px]:-bottom-1/2 max-[812px]:translate-y-1/2 max-[692px]:left-[80%] max-[692px]:-translate-x-[80%] max-[476px]:left-1/2 max-[476px]:-translate-x-1/2 max-[476px]:-bottom-[20%]"
      }`}
    >
      {type === "search" ? (
        <span
          className={`${px} py-3 rounded-md ${bg} text-white text-lg font-semibold capitalize`}
        >
          {desc}
        </span>
      ) : (
        <a
          href={href}
          target="_blank"
          className={`${px} py-3 rounded-md ${bg} text-white text-lg font-semibold capitalize outline-none`}
        >
          {desc}
        </a>
      )}
    </button>
  );
};

export default Button;
