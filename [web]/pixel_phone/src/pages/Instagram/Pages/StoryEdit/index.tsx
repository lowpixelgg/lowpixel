import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { NewStorySource } from "../../InstaContexts";
import { useTheme } from "styled-components";
import { MainContainer } from "./styles";
import { motion } from "framer-motion";
import { Actions } from "./Actions";
import { Content } from "./Content";
import { useRelinkValue } from "react-relink";

export const StoryEdit = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const newStory = useRelinkValue(NewStorySource);
  const theme = useTheme();
  const dragRef = useRef(null);

  const [textsList, setTextsList] = useState([
    {
      text: newStory.text,
      size: 1,
      controlY: 55,
      id: newStory.id,
      bg: "dark",
      color: "light",
    },
  ]);

  const [isEditingText, setIsEditingText] = useState(false);

  const [background, setBackground] = useState(newStory.background.value);

  const [isDragging, setIsDragging] = useState({
    value: false,
    id: 0,
    click: false,
  });

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ height: "100%", width: "100%" }}
    >
      <MainContainer ref={dragRef}>
        <Content
          background={background}
          textsList={textsList}
          dragRef={dragRef}
          setIsDragging={setIsDragging}
        />

        <Actions
          isDragging={isDragging}
          background={background}
          setBackground={setBackground}
          textsList={textsList}
          setTextsList={setTextsList}
          isEditingText={isEditingText}
          setIsEditingText={setIsEditingText}
        />
      </MainContainer>
    </motion.div>
  );
};
