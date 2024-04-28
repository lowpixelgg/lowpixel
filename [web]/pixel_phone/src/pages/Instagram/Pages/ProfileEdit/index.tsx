import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import CheckIcon from "@iconscout/react-unicons/icons/uil-check";
import TrashIcon from "@iconscout/react-unicons/icons/uil-trash-alt";
import { Avatar } from "../../../../Components/Avatar";
import { motion } from "framer-motion";

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

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
        <div className="head">
          <button onClick={() => navigate("/instagram/profile")}>
            <CloseIcon size={18} color={theme.text10} />
          </button>

          <h4>Editar perfil</h4>

          <button>
            <CheckIcon size={20} color={theme.text10} />
          </button>
        </div>

        <div className="container1">
          <div className="pic">
            <Avatar size={64} />

            <button>Alterar foto</button>
          </div>

          <div className="row">
            <input type="text" placeholder="nome" />
          </div>

          <div className="row">
            <input type="text" placeholder="nome de usuário" />
          </div>

          <div className="row">
            <input type="text" placeholder="Bio" />
          </div>
        </div>

        <div className="container2">
          <h5>Destaques</h5>

          <div className="highs">
            <div className="item">
              <button className="delete">
                <TrashIcon size={12} />
              </button>

              <img src="src/assets/Images/placeholder6.png" />

              <p contentEditable>Friends</p>
            </div>

            <div className="item">
              <button className="delete">
                <TrashIcon size={12} />
              </button>

              <img src="src/assets/Images/placeholder5.png" />

              <p contentEditable>Sport</p>
            </div>

            <div className="item">
              <button className="delete">
                <TrashIcon size={12} />
              </button>

              <img src="src/assets/Images/placeholder4.png" />

              <p contentEditable>Design</p>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
