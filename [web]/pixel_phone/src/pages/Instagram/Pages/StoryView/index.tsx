import { Avatar } from "../../../../Components/Avatar";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import AddIcon from "@iconscout/react-unicons/icons/uil-plus-circle";
import OptionsIcon from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const StoryView = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#101011",
        color: "#f2f2fa",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#101011",
        color: "#f2f2fa",
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        <img
          src="src/assets/Images/placeholder3.png"
          alt="story"
          className="background"
        />

        <div className="top">
          <div className="viewBar">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ ease: "linear", duration: 3, delay: 0.4 }}
              onAnimationComplete={() => navigate(-1)}
              className="fill"
            />
          </div>

          <div className="head">
            <div className="left">
              <Avatar size={20} id={61} />
              <p>evol</p>
            </div>

            <button onClick={() => navigate(-1)}>
              <CloseIcon size={16} color="#f2f2fa" />
            </button>
          </div>
        </div>

        <div className="bottom">
          <button>
            <AddIcon size={20} color="#f2f2fa" />
          </button>

          <button>
            <OptionsIcon size={20} color="#f2f2fa" />
          </button>
        </div>
      </Container>
    </motion.div>
  );
};
