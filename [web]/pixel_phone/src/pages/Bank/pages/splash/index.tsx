import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";
import { useMta } from "../../../../Contexts/GameContext";
import { useBank } from "../../../../Contexts/BankContext";

export const Splash = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { setInitialBank } = useBank();
  const { addEventListener } = useMta();

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "transparent",
        color: "#101011",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "transparent",
        color: "#101011",
      },
    });

    RegisterMTAEvent("execRequestBank", {});

    addEventListener("execRequestBank", (data) => {
      if (data) {
        setInitialBank(data);
        navigate("/bank/login");
      } else {
        navigate("/bank/onboard");
      }
    });

    return () => {};
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, borderRadius: "40%" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "32px" }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container>
        <div className="background" />

        <h1>Bank of Rocket</h1>

        <div className="rocket">
          <p>from</p>
          <p>Rocket Community</p>
        </div>
      </Container>
    </motion.div>
  );
};
