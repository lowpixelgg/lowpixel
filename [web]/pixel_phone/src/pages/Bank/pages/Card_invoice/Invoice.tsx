import React from "react";
import LeftIcon from "@iconscout/react-unicons/icons/uil-angle-left-b";
import RightIcon from "@iconscout/react-unicons/icons/uil-angle-right-b";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction: any) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: any) => {
    return {
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

export const Invoice = ({ page, direction, setPage }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.1 }}
      className="invoices"
    >
      <button onClick={() => setPage([page - 1, -1])}>
        <LeftIcon size={20} color="#341959" />
      </button>

      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: 0.2, ease: "easeIn" },
            opacity: { duration: 0.2 },
          }}
          className="invoices--card"
        >
          <h4>Fatura aberta</h4>

          <div>
            <p>agosto - 2022</p>

            <p className="value">R$ 1.600,00</p>
          </div>

          <small>Vencimento: 24/08/2022</small>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => setPage([page + 1, 1])}>
        <RightIcon size={20} color="#341959" />
      </button>
    </motion.div>
  );
};
