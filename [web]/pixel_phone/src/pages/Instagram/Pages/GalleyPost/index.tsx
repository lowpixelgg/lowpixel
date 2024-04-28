import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import NextIcon from "@iconscout/react-unicons/icons/uil-arrow-right";
import { Images } from "./Images";
import { motion } from "framer-motion";

export const GalleryPost = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();
  const [selectedImgs, setSelectedImgs] = useState([]);

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
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <div className="head">
          <div className="left">
            <button onClick={() => navigate(-1)}>
              <CloseIcon size={16} color={theme.text10} />
            </button>
            <h4>Galeria</h4>
          </div>

          <button
            onClick={() => navigate("/instagram/createPost")}
            disabled={selectedImgs.length > 0 ? false : true}
            className="right"
          >
            <NextIcon
              size={24}
              color={selectedImgs.length > 0 ? "#3E3EBD" : theme.text40}
            />
          </button>
        </div>

        <Images selectedImgs={selectedImgs} setSelectedImgs={setSelectedImgs} />
      </Container>
    </motion.div>
  );
};
