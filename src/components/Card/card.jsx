import React from "react";
import { motion } from "framer-motion";
import { Logo, PostDetails, Title } from "../index";

const Card = ({
  id,
  logo,
  background,
  posted,
  contract,
  position,
  company,
  location,
  handleAppliedId,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0.15, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      id={id}
      className="h-64 w-[22rem] bg-white dark:bg-darkBg rounded-lg shadow-lg flex flex-col items-start justify-center gap-2.5 p-5 relative max-[776px]:w-full max-[425px]:p-4"
    >
      <Logo background={background} logo={logo} company={company} />
      <PostDetails posted={posted} contract={contract} />

      <button
        className="text-xl font-bold text-primary text-start dark:text-white _focus-hover hover:text-lightGrey hover:px-1.5 hover:py-1 focus:border-main focus:text-lightGrey focus:px-1.5 focus:py-1 tracking-wide relative group"
        onClick={() => {
          handleAppliedId(id);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {position}
        <span className="lowercase text-sm text-white font-medium bg-[#333333] rounded w-24 py-1.5 flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-12 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100 transition-all duration-300 before:absolute before:-bottom-2 before:border-x-8 before:border-b-[10px] before:border-transparent before:border-b-[#333333] before:rotate-180">
          apply here
        </span>
      </button>

      <Title title={company} styles={"text-lightGrey text-[1.1rem]"} />
      <Title title={location} styles={"text-main text-xl font-bold"} />
    </motion.li>
  );
};

export default Card;
