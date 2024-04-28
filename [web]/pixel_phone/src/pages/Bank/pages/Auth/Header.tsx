import React from "react";
import { motion } from "framer-motion";

export const Header = ({ title }: any) => {
  return (
    <motion.header
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <p>{title}</p>

      <img src={"src/assets/Bank-secureImg.png"} alt="shield" />
    </motion.header>
  );
};
