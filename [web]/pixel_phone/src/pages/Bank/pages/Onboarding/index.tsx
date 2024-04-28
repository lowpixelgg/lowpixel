import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Onboarding = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#FCF8F4",
        color: "#101011",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#FCF8F4",
        color: "#101011",
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ filter: "blur(1px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Container>
        <img className="illustration" src={"src/assets/Bank-illustration1.png"} alt="cards" />

        <div className="content">
          <div className="row1">
            <span />
            <h2>Sobre nosso banco</h2>
          </div>

          <div className="row2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              iaculis dui. Aenean arcu turpis, vehicula id euismod ut, mattis eu
              elit. Pellentesque consequat nisi sit amet maximus posuere.
              Maecenas lacinia vitae nulla eu lobortis. Nam ante nunc, efficitur
              nec dictum vel, luctus sagittis enim.
            </p>
          </div>
        </div>

        <button onClick={() => navigate("/bank/auth")} className="submit">
          Abrir conta
        </button>
      </Container>
    </motion.div>
  );
};
