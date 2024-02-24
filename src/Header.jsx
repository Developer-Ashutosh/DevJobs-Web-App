import React from "react";
import { ThemeBtn } from "./components";

const Header = () => {
  return (
    <header className="h-40 w-full bg-[url(../pattern.svg)] bg-no-repeat bg-cover bg-center flex items-center justify-between px-40 pb-10 max-lg:pl-16 max-lg:pr-20 max-[776px]:pl-12 max-[776px]:pr-16 max-[350px]:pl-6 max-[350px]:pr-12 absolute top-0 left-0">
      <a
        href="#"
        className="outline-none border-2 border-transparent border-dashed focus:border-white p-2.5 rounded"
      >
        <img src="./logo.svg" alt="Logo Icon" />
      </a>
      <ThemeBtn />
    </header>
  );
};

export default Header;
