import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ActionButton } from "../../components/ActionBtn";
import { motion } from "framer-motion";

export const ConfirmPay = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

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
    <Container>
      <Header
        title="Transação"
        left={{ type: "close", action: () => navigate("/bank/init") }}
      />

      <div className="middle">
        <motion.img
          initial={{ opacity: 0.4, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.4 }}
          src={"src/assets/bank-confirmPayImg.svg"}
          alt="certificate illustration"
        />

        <h2>Transferência realizada com sucesso!</h2>
      </div>

      <ActionButton title="Inicio" onClick={() => navigate("/bank/init")} />
    </Container>
  );
};
