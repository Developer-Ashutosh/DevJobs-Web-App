import React from "react";
import { motion } from "framer-motion";

const Logo = ({ background, logo, company }) => {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1, rotate: "360deg" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="absolute -top-7 left-7 h-14 w-14 flex items-center justify-center rounded-lg"
      style={{ backgroundColor: background }}
    >
      <img src={logo} alt={`${company} Logo`} />
    </motion.span>
  );
};

export default Logo;
