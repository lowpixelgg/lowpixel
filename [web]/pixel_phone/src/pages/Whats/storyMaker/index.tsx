import React, { useContext, useEffect, useState} from "react";
import { Container } from "./styles";
import { GlobalContext } from "../../../Contexts/GlobalContext";

import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiText } from "react-icons/bi";
import { IoColorPaletteSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

export const StoryMaker = () => {

    const [ bgColor, applyBgColor ] = useState("#fff");
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

    const bgColors = [
        {color: "#4F7655"},
        {color: "#F56040"},
        {color: "#3030A4"}
    ];

    const handleChangeBgColor = () => {
        const random = Math.floor(Math.random() * bgColors.length);
        applyBgColor(bgColors[random].color);
    }

    const sendStory = () => {
        navigate(-1);
    }

    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
        <Container style={{
            background: bgColor
        }}>
            <><div style={{
            background: bgColor
        }} className="top">
                <AiOutlineClose onClick={handleGoBack} className="closeCamera" />

                <div className="topRight">
                    <BiText className="textIcon" />
                    <IoColorPaletteSharp onClick={handleChangeBgColor} className="colorIcon" />
                </div>
            </div><div className="center">
                    <input className="statusText" placeholder="Type a status" maxLength={14} draggable="true" type="text" />
                </div><BsFillArrowRightCircleFill onClick={sendStory} className="nextIcon" /></>
        </Container>
    </motion.div>
    )
}
