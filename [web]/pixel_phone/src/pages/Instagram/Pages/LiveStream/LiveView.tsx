import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { MemberActions } from "./Actions";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { motion } from "framer-motion";

export const LiveView = () => {
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
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <MemberActions />
      </Container>
    </motion.div>
  );
};
