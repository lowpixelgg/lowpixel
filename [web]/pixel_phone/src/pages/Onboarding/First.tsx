import React from "react";
import { motion } from "framer-motion";

import { IoMdArrowDropdown, IoMdArrowForward } from "react-icons/io";

type Page1Props = { setPage: any }

export const Page1 = ({ setPage }: Page1Props) => {
  return (
    <motion.div
      initial={{ x: 0, scale: 0.6, opacity: 0.6 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -200, opacity: 0.2 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      className="page1"
    >
      <h1>Vamos la!</h1>

      <button className="language">
        Portugues (Brazil) <IoMdArrowDropdown />
      </button>

      <button className="next" onClick={() => setPage(2)}>
        <IoMdArrowForward />
      </button>

      <div className="bottom">
        <p>Rocket Community</p>
      </div>
    </motion.div>
  );
};
