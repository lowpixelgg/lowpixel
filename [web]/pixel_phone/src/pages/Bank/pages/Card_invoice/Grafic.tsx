import React from "react";
import { motion } from "framer-motion";

export const Grafic = () => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      className="graph"
    >
      <div className="item">
        <p>R$ 1.000,00</p>

        <span className="bar" style={{ height: "calc(64px * 1 / 4)" }} />

        <small>jul</small>
      </div>

      <div className="item">
        <p>R$ 4.000,00</p>

        <span className="bar" style={{ height: "calc(64px * 3 / 4)" }} />

        <small>ago</small>
      </div>

      <div className="item">
        <p>R$ 2.000,00</p>

        <span className="bar" style={{ height: "calc(64px * 2 / 4)" }} />

        <small>set</small>
      </div>

      <div className="border" />
    </motion.div>
  );
};
