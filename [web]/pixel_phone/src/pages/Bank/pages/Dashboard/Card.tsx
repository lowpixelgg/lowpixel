import React from "react";
import CardIcon from "@iconscout/react-unicons/icons/uil-credit-card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardData = {
  limit: 1000,
  invoice: 500,
};

export const Card = () => {
  const navigate = useNavigate();
  const DotValue = (number: string) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return parts.join(",");
  };

  const CalculePercentage = (value: any) => {
    let sum = CardData.limit + CardData.invoice;

    return `${((value / sum) * 100).toFixed(0)}%`;
  };

  return (
    <motion.section
      className="card"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.4, delay: 0.2 }}
    >
      <button onClick={() => navigate("/bank/card")} className="head">
        <CardIcon size={18} color="#6638A6" />

        <p>Credito</p>
      </button>

      <div className="infos">
        <div className="bars">
          <motion.div
            className="bar invoice"
            initial={{ width: 0 }}
            animate={{ width: CalculePercentage(CardData.invoice) }}
            transition={{ ease: "easeIn", duration: 0.2, delay: 0.25 }}
          />

          <motion.div
            className="bar limit"
            initial={{ width: 0 }}
            animate={{ width: CalculePercentage(CardData.limit) }}
            transition={{ ease: "easeIn", duration: 0.2, delay: 0.25 }}
          />
        </div>

        <ul className="values">
          <li>
            <h4>Fatura atual</h4>
            <p>$ 0</p>
          </li>

          <li>
            <h4>Limite disponivel</h4>
            <p>$ 0</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};
