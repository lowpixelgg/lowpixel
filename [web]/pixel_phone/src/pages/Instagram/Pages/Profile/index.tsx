import React from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { BsGear } from "react-icons/bs";
import { Avatar } from "../../../../Components/Avatar";
import { Posts } from "./Posts";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { useRelinkState } from "react-relink";
import { ThemeSource } from "../../InstaContexts";

import MoonIcon from "@iconscout/react-unicons/icons/uil-moon";
import SunIcon from "@iconscout/react-unicons/icons/uil-sun";

export const Personal = () => {
  const navigate = useNavigate();

  const [themeName, setTheme] = useRelinkState(ThemeSource);

  return (
    <motion.div
      initial={{ translateX: 200 }}
      animate={{ translateX: 0 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <div className="container1">
          <div className="left">
            <p>evol</p>

            <MdVerified size={12} color="#3249CB" />
          </div>

          <div className="right">
            {themeName === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <SunIcon size={16} />
              </button>
            ) : (
              <button onClick={() => setTheme("dark")}>
                <MoonIcon size={16} />
              </button>
            )}

            <BsGear size={14} />
          </div>
        </div>

        <div className="container2">
          <Avatar id={31} size={40} />

          <div className="infos">
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
          </div>
        </div>

        <div className="container3">
          <p className="username">MonkA+</p>

          <div className="bio">
            <p>Digital goodies designer @pixsellz</p>
            <p>Everything is designed.</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/instagram/profileEdit")}
          className="edit"
        >
          Editar perfil
        </button>

        <div className="highsContainer">
          <div className="item">
            <button>
              <AiOutlinePlus size={16} />
            </button>

            <p>New</p>
          </div>

          <div className="item">
            <button>
              <img src="src/assets/Images/placeholder4.png" />
            </button>

            <p>Friends</p>
          </div>

          <div className="item">
            <button>
              <img src="src/assets/Images/placeholder3.png" />
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
