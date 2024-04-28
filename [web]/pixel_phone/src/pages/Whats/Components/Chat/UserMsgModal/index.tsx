import React, { useState } from "react";
import { Container } from "./styles";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

export const UserMsgModal = (props: any) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const goToCall = () => {
    navigate("/whats/InCall");
  };

  const [optionsOn, optionsOff] = useState(false);

  const handleDots = () => {
    optionsOff(!optionsOn);
  };

  const styleOpen = {
    display: "inline",
  };

  const styleClose = {
    display: "none",
  };

  // make a function to handle the style of the options
  const handleOptions = () => {
    if (optionsOn) {
      return styleOpen;
    } else {
      return styleClose;
    }
  };

  return (
    <Container>
      <div className="userMsgContainer">
        <BiLeftArrowAlt onClick={handleGoBack} className="backIcon" />
        <img
          className="userAvatar"
          src={props.userImage}
          alt="This is the user's avatar"
        />
        <h3 className="userName">{props.userName}</h3>

        <div className="iconsNav">
          <BsFillCameraVideoFill className="callIcon" />
          <FaPhone onClick={goToCall} className="phoneIcon" />
          <HiDotsVertical onClick={handleDots} className="dotsIcon" />

          <div style={handleOptions()} className="dotsDiv">
            <h3 className="dotsTxt">Limpar Conversa</h3>
            <h3 className="dotsTxt">Remover Conversa</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
