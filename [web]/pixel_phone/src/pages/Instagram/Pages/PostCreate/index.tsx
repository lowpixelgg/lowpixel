import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import BackIcon from "@iconscout/react-unicons/icons/uil-arrow-left";
import CheckIcon from "@iconscout/react-unicons/icons/uil-check";
import LocalIcon from "@iconscout/react-unicons/icons/uil-location-point";
import { Avatar } from "../../../../Components/Avatar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const PostCreate = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();
  const [userData, setUserData] = useState({
    description: "",
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
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <div className="head">
          <div className="left">
            <button onClick={() => navigate(-1)}>
              <BackIcon size={20} color={theme.text10} />
            </button>

            <h4>Publicar</h4>
          </div>

          {/* @ts-ignore */}
          <button className="right" disabled={!userData.description.length > 0}>
            <CheckIcon size={20} />
          </button>
        </div>

        <div className="row row1">
          <Avatar size={24} />

          <button>
            <p>Localização atual</p>
            <LocalIcon size={18} color={theme.text10} />
          </button>
        </div>

        <div className="row rowInput">
          <input type="text" placeholder="Marque um amigo" />
        </div>

        <div className="row rowInput">
          <input
            onChange={(e) =>
              setUserData({ ...userData, description: e.target.value })
            }
            type="text"
            placeholder="Escreva uma legenda..."
          />
        </div>

        <div className="images">
          <img src="src/assets/Images/placeholder5.png" alt="pic" />
        </div>
      </Container>
    </motion.div>
  );
};
