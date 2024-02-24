import React, { useState } from "react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(document.documentElement.className);
  document.documentElement.className =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";

  const transform = {
    light: "-translate-x-[1.45rem]",
    dark: "translate-x-1",
  };

  return (
    <button
      className="h-[1.625rem] w-[3.25rem] bg-white rounded-full relative before:absolute before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-5 before:bg-[url(../icon-sun.svg)] before:bg-no-repeat before:bg-contain before:bg-center before:-left-7 after:absolute after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-4 after:bg-[url(../icon-moon.svg)] after:bg-no-repeat after:bg-contain after:bg-center after:-right-[1.625rem] outline-none border-2 border-transparent border-dashed focus:border-main"
      onClick={() => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
      }}
    >
      <span
        className={`h-[1.15rem] w-[1.15rem] bg-main rounded-full absolute top-1/2 -translate-y-1/2 ${transform[theme]} transition-all duration-300`}
      ></span>
    </button>
  );
};

export default ThemeBtn;
