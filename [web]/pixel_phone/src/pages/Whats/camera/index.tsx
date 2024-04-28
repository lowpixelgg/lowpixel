/** 
  * @overview Camera Page, this page is used to take photos/videos of you and your beautiful friends
  * @author Marco 'mayk' Antonio
  * @copyright (c) Rocket Community
  * @license See LICENSE file on top-level directory  
*/

import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";

import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";
import {
  IoFlashSharp,
  IoImageOutline,
  IoCameraReverseOutline,
} from "react-icons/io5";

import { IoIosFlashOff } from "react-icons/io";

import { useNavigate } from "react-router-dom";

export const Camera = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);

  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#000000",
        color: "#f2f2f2",
      },
    });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#000000",
        color: "#f2f2f2",
      },
    });
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [flashOn, flashOff] = useState(false);

  const handleFlash = () => {
    flashOff(!flashOn);
  }

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ ease: "easeIn", duration: 10.2 }}
    >
      <Container>
        <div className="top">
          <AiOutlineClose onClick={handleGoBack} className="closeCamera" />

          {flashOn ? <IoFlashSharp onClick={handleFlash} className="flashIcon" /> : <IoIosFlashOff onClick={handleFlash} className="flashIcon" />}
        </div>

        <div className="center" />

        <div className="bottom">
          <IoImageOutline className="imageIcon" />

          <div className="cameraButton"></div>

          <IoCameraReverseOutline className="cameraIcon" />
          <h3 className="bottomText">Segure para video, clique para foto</h3>
        </div>
      </Container>
    </motion.div>
  );
};
