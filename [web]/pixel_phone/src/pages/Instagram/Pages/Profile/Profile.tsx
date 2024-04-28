import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import BackIcon from "@iconscout/react-unicons/icons/uil-angle-left";
import { Avatar } from "../../../../Components/Avatar";
import { Posts } from "./Posts";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const Profile = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

  const [isFollowing, setIsFollowing] = useState(false);

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
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <div className="container1">
          <div className="left back">
            <button onClick={() => navigate(-1)}>
              <BackIcon size={20} color={theme.text10} />
            </button>

            <p>monk</p>
          </div>
        </div>

        <div className="container2">
          <Avatar id={64} size={40} />

          <div className="infos follow">
            <div className="info">
              <strong>54</strong>
              <p>Posts</p>
            </div>

            <div className="info">
              <strong>834</strong>
              <p>Sequidores</p>
            </div>

            <div className="info">
              <strong>162</strong>
              <p>Sequindo</p>
            </div>

            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className="follow"
            >
              {isFollowing ? "Seguindo" : "Seguir"}
            </button>
          </div>
        </div>

        <div className="container3 margin">
          <p className="username">vitor ribeiro</p>

          <div className="bio">
            <p>Digital goodies designer @pixsellz</p>
            <p>Everything is designed.</p>
          </div>
        </div>

        <div className="highsContainer">
          <div className="item">
            <button>
              <img src="src/assets/Images/placeholder4.png" />
            </button>

            <p>Friends</p>
          </div>

          <div className="item">
            <button>
              <img src="src/assets/Images/placeholder5.png" />
            </button>

            <p>Sport</p>
          </div>

          <div className="item">
            <button>
              <img src="src/assets/Images/placeholder6.png" />
            </button>

            <p>Design</p>
          </div>
        </div>

        <Posts />
      </Container>
    </motion.div>
  );
};
