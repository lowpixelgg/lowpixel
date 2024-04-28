import React, { useState } from "react";
import { Container } from "./styles";
import ConfigIcon from "@iconscout/react-unicons/icons/uil-setting";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import CameraIcon from "@iconscout/react-unicons/icons/uil-camera";
import CheckIcon from "@iconscout/react-unicons/icons/uil-check";
import { ActionButton, CamButton } from "../../Components/CamButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NewStorySource } from "../../InstaContexts";
import { useSetRelinkState } from "react-relink";

const backgroundColors = [
  "#4EA699",
  "#7776BC",
  "#042A2B",
  "#982649",
  "#FF674D",
];

export const TextCam = () => {
  const navigate = useNavigate();
  const setNewStory = useSetRelinkState(NewStorySource);

  const [backgroundColor, setBackground] = useState(
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
  );

  const [newText, setNewText] = useState("");

  const handleSetBackground = () => {
    let searchColors = backgroundColors.filter(
      (item) => item !== backgroundColor
    );

    let newBackground =
      searchColors[Math.floor(Math.random() * searchColors.length)];

    setBackground(newBackground);
  };

  const handleSubmitStory = () => {
    if (newText.length > 0) {
      setNewStory({
        text: newText,
        id: 1,
        background: {
          type: "color",
          value: backgroundColor,
        },
      });

      navigate("/instagram/storyEdit");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.6 }}
      style={{ height: "100%" }}
    >
      <Container className="textCam" background={backgroundColor}>
        <div className="nav">
          <button>
            <ConfigIcon size={20} color="#fff" />
          </button>

          <button onClick={() => navigate("/instagram/feed")}>
            <CloseIcon size={20} color="#fff" />
          </button>
        </div>

        <input
          onChange={(e) => setNewText(e.target.value)}
          type="text"
          placeholder="Toque para digitar"
        />

        <div className="actions text">
          <ActionButton onClick={() => navigate("/instagram/storyCam")}>
            <CameraIcon size={18} color="#29292e" />
          </ActionButton>

          <CamButton onClick={() => handleSubmitStory()}>
            <CheckIcon size={32} color="#29292e" />
          </CamButton>

          <ActionButton onClick={() => handleSetBackground()}>
            <span className="bgBtn" />
          </ActionButton>
        </div>
      </Container>
    </motion.div>
  );
};
