import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { Avatar } from "../../../../Components/Avatar";
import { useTheme } from "styled-components";

export const Conect = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

  const [isFetching, setFetching] = useState(false);

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
  }, []);

  const HandleConect = () => {
    setFetching(true);
    navigate("/instagram/profile");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Container>
        <div className="background" />

        <motion.img
          initial={{ opacity: 0, translateX: -60, translateY: 48 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          exit={{ opacity: 0, translateX: 60, translateY: -48 }}
          transition={{ delay: 0.6, ease: "easeIn", duration: 0.4 }}
          className="icon"
          src={"src/assets/rocketGreen.png"}
          alt="rocket"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, ease: "easeIn", duration: 0.4 }}
          className="form"
        >
          <Avatar size={60} />

          <p>vini_54</p>

          <button onClick={HandleConect}>
            {isFetching ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              "Log in"
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeIn", duration: 0.4 }}
          className="rocket"
        >
          <p>from</p>
          <p>Rocket Community</p>
        </motion.div>
      </Container>
    </motion.div>
  );
};
