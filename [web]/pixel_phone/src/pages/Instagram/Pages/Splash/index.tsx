import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { useTheme } from "styled-components";

export const Splash = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "transparent",
        color: theme.text10,
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "transparent",
        color: theme.text10,
      },
    });

    const timer = setTimeout(() => {
      navigate("/instagram/conect");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, borderRadius: "100%" }}
      animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Container>
        <div className="background" />

        <img className="logo" src={"src/assets/InstagramLogo.png"} alt="instagram" />

        <div className="rocket">
          <p>from</p>
          <p>Rocket Community</p>
        </div>
      </Container>
    </motion.div>
  );
};
