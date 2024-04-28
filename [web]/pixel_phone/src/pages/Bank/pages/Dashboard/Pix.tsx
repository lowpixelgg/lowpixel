import React from "react";
import NextIcon from "@iconscout/react-unicons/icons/uil-arrow-right";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Pix = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.4, delay: 0.4 }}
      className="pix"
    >
      <img className="icon" src={"src/assets/Bank-pixHand.png"} alt="deposit" />

      <div className="content">
        <h4>Pagar com pix</h4>

        <p>Faça seu pagamento de forma rapida e segura</p>
      </div>

      <button onClick={() => navigate("/bank/pix")}>
        <NextIcon size={24} color="#6638A6" />
      </button>
    </motion.section>
  );
};
