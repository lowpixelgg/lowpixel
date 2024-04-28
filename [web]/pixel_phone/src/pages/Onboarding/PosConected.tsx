import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterMTAEvent } from "../../hooks/RegisterMTAEvent";

export const Page4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      RegisterMTAEvent("execPhoneCration", {});

      clearTimeout(timer);
    }, 200);
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0.2 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      className="page4"
    >
      <div>
        <h1>Configurando o Aparelho</h1>
        <p>Isso pode levar alguns minutos.</p>
      </div>
      <CircularProgress size={36} color="inherit" />
    </motion.div>
  );
};
