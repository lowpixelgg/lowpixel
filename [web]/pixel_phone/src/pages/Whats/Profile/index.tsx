import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";

import { motion } from "framer-motion";

import { BiLeftArrowAlt } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { InfosMidBottom } from "../Components/ProfilePage/InfosMidBottom";
import { InfosMid } from "../Components/ProfilePage/InfosMid";
import { useWhatsApp } from "../../../Contexts/WhatsAppContext";

export const Profile = () => {
  const { whats } = useWhatsApp()
  const { SistemDispatch } = useContext<any>(GlobalContext);

  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#121B22",
        color: "#f2f2f2",
      },
    });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#121B22",
        color: "#f2f2f2",
      },
    });
  }, []);

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        <div className="infosTop">
          <BiLeftArrowAlt onClick={handleGoBack} className="topArrowIcon" />
          <h3 className="infosTopText">Perfil</h3>
        </div>

        <div className="infosMid">
          <InfosMid />
          <InfosMidBottom  />
        </div>
      </Container>
    </motion.div>
  );
};
