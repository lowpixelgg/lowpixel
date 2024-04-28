import React, { useEffect, useState } from "react";
import { ActionsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import { v4 as uuidV4 } from "uuid";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useDragControls,
} from "framer-motion";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import BackIcon from "@iconscout/react-unicons/icons/uil-angle-left-b";
import NextIcon from "@iconscout/react-unicons/icons/uil-upload-alt";
import AddIcon from "@iconscout/react-unicons/icons/uil-plus";
import CheckIcon from "@iconscout/react-unicons/icons/uil-check";
import TrashIcon from "@iconscout/react-unicons/icons/uil-trash-alt";
import PenIcon from "@iconscout/react-unicons/icons/uil-edit";

const backgroundColors = [
  "#4EA699",
  "#7776BC",
  "#042A2B",
  "#982649",
  "#FF674D",
];

export const Actions = ({
  background,
  setBackground,
  isDragging,
  textsList,
  setTextsList,
  isEditingText,
  setIsEditingText,
}: any) => {
  const navigate = useNavigate();

  // scale controls
  const handleY = useMotionValue(55);
  const controlValue = useTransform(handleY, [0, 110], [1.25, 0.75]);
  const dragControls = useDragControls();
  const [text, setText] = useState({
    text: "",
    id: uuidV4(),
    size: controlValue,
    controlY: handleY,
    bg: "light",
    color: "dark",
  });

 

  const handleChangeBackground = () => {
    let searchColors = backgroundColors.filter((item) => item !== background);

    let newBackground =
      searchColors[Math.floor(Math.random() * searchColors.length)];

    setBackground(newBackground);
  };

  const handleChangeTextBg = () => {
    if (text.bg === "light") {
      setText({ ...text, bg: "dark", color: "light" });
    } else if (text.bg === "dark") {
      setText({ ...text, bg: "none" });
    } else {
      setText({ ...text, bg: "light", color: "dark" });
    }
  };

  const handleSubmitStory = () => {
    console.log("submit");

    // @ts-ignore
    htmlToImage
    // @ts-ignore
      .toPng(document.getElementById("storyContent"))
      .then((canvas) => {
        console.log(canvas);
      });
  };

  // init edit a new text
  const handleEditNewText = () => {
    // @ts-ignore
    setText({
      text: "",
      id: uuidV4(),
      size: controlValue,
      bg: "light",
      color: "dark",
    });
    setIsEditingText(true);
  };

  const handleColorText = () => {
    if (text.color === "light") {
      setText({ ...text, color: "dark" });
    } else {
      setText({ ...text, color: "light" });
    }
  };

  // submit input newText to new card
  const handleAddText = () => {
    setIsEditingText(false);

    if (textsList.find((item: any) => item.id === text.id)) {
      setTextsList(
        textsList.map((item: any) => {
          if (item.id === text.id) {
            return {
              ...text,
              size: controlValue.get(),
              controlY: handleY.get(),
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setTextsList([
        ...textsList,
        { ...text, size: controlValue.get(), controlY: handleY.get() },
      ]);
    }

    handleY.set(55);
  };

  // exit to edit
  const handleCancelInput = () => {
    setIsEditingText(false);
  };

  const handleDeleteText = (id: any) => {
    setTextsList(textsList.filter((item: any) => item.id !== id));
  };

  const handleEditDragged = (id: any) => {
    const existingText = textsList.find((item: any) => item.id === id);
    handleY.set(existingText.controlY);
    setText({ ...existingText, size: controlValue, controlY: handleY });
    setIsEditingText(true);
  };

  useEffect(() => {
    if (isDragging.click) {
      handleEditDragged(isDragging.id);
    }
  }, [isDragging.click]);

  return (
    <ActionsContainer>
      {isEditingText && <div className="editLayer" />}

      <div className="top">
        <button
          className="back"
          onClick={() => (isEditingText ? handleCancelInput() : navigate(-1))}
        >
          {isEditingText ? (
            <BackIcon className="backIcon" size={16} color="#f2f2fa" />
          ) : (
            <CloseIcon size={16} color="#f2f2fa" />
          )}
        </button>

        <div className="actions">
          <button
            className="addText"
            onClick={() =>
              isEditingText ? handleColorText() : handleEditNewText()
            }
          >
            <h3>Aa</h3>
            {!isEditingText && (
              <span>
                <AddIcon size={12} color="#101011" />
              </span>
            )}
          </button>

          <button
            className="changeBg"
            onClick={() =>
              isEditingText ? handleChangeTextBg() : handleChangeBackground()
            }
          >
            <span className={`${isEditingText && "input"}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isEditingText && (
          <motion.input
            initial={{ opacity: 0.5, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ ease: "easeInOut" }}
            autoFocus
            style={{
              // @ts-ignore
              background:
                text.bg === "light"
                  ? "#f2f2fa"
                  : text.bg === "dark"
                  ? "#101011"
                  : null,
              color: text.color === "light" ? "#f2f2fa" : "#101011",
              scale: controlValue,
            }}
            value={text.text}
            onChange={(e) =>
              setText({
                ...text,
                text: e.target.value,
              })
            }
            type="text"
          />
        )}
      </AnimatePresence>

      <div className="bottom">
        <div>
          <AnimatePresence>
            {isDragging.value && (
              <>
                <motion.button
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  onMouseUp={() => handleDeleteText(isDragging.id)}
                  className="delete"
                >
                  <TrashIcon size={16} color="#f2f2fa" />
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {isEditingText && (
            <div className="scaleBar">
              <motion.div
                drag="y"
                dragControls={dragControls}
                dragMomentum={false}
                dragElastic={0}
                dragConstraints={{ top: 0, bottom: 110 }}
                style={{ y: handleY }}
                className="control"
              />
            </div>
          )}
        </div>

        <button
          className={`next ${!isEditingText && "submit"}`}
          onClick={() =>
            isEditingText ? handleAddText() : handleSubmitStory()
          }
        >
          {isEditingText ? (
            <CheckIcon size={16} color="#f2f2fa" />
          ) : (
            <NextIcon size={16} color="#f2f2fa" />
          )}
        </button>
      </div>
    </ActionsContainer>
  );
};
