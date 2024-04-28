import React from "react";
import { motion } from "framer-motion";

export const Statement = () => {
  return (
    <motion.section
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 }}
      className="statement"
    >
      <h4>Extrato da fatura</h4>

      <ul className="statement--list">
        <li>
          <div>
            <p>Mercado</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 400,00</p>
        </li>

        <li>
          <div>
            <p>Mecânica</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 200,00</p>
        </li>

        <li>
          <div>
            <p>Combustível</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 50,00</p>
        </li>

        <li>
          <div>
            <p>Concessionária</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 100,00</p>
        </li>

        <li>
          <div>
            <p>Mecânica</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 2400,00</p>
        </li>

        <li>
          <div>
            <p>Combustivel</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 80,00</p>
        </li>

        <li>
          <div>
            <p>Mercado</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 20,00</p>
        </li>

        <li>
          <div>
            <p>Mercado</p>
            <span>03/07/22</span>
          </div>

          <p className="value">R$ 80,00</p>
        </li>
      </ul>
    </motion.section>
  );
};
