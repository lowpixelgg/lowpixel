import React from "react";
import KeyIcon from "@iconscout/react-unicons/icons/uil-key-skeleton";
import Graphicon from "@iconscout/react-unicons/icons/uil-chart";
import UserIcon from "@iconscout/react-unicons/icons/uil-user-circle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <motion.footer
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.4, delay: 0.6 }}
    >
      <ul>
        <li>
          <button onClick={() => navigate("/bank/pix/keys")}>
            <KeyIcon size={24} color="#6638A6" />
          </button>

          <p>Minhas chaves pix</p>
        </li>

        <li>
          <button onClick={() => navigate("/bank/loan/simulate")}>
            <Graphicon size={24} color="#6638A6" />
          </button>

          <p>Simular emprestimo</p>
        </li>

        <li>
          <button onClick={() => navigate("/bank/profile")}>
            <UserIcon size={24} color="#6638A6" />
          </button>

          <p>Conta</p>
        </li>
      </ul>
    </motion.footer>
  );
};
