import React from "react";

const ToTopBtn = ({ scrollPosition }) => {
  return (
    <button
      className={`h-12 w-12 p-1 fixed right-6 bottom-6  _focus-hover !rounded-full ${
        scrollPosition > 10
          ? "pointer-events-auto scale-100  opacity-100"
          : "pointer-events-none scale-0  opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="h-full w-full p-1 bg-main text-white text-xl font-extrabold rounded-full flex items-center justify-center">
        &uarr;
      </span>
    </button>
  );
};

export default ToTopBtn;
