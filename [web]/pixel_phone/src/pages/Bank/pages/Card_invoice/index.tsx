import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ActionButton } from "../../components/ActionBtn";
import { Grafic } from "./Grafic";
import { Invoice } from "./Invoice";
import { Statement } from "./Statement";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CardInvoice = () => {
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);
  const { SistemDispatch } = useContext<any>(GlobalContext);

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#F2F2FA",
        color: "#101011",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#F2F2FA",
        color: "#101011",
      },
    });
  }, []);
  return (
    <Container>
      <Header title="Faturas" left={{ type: "back" }} />

      <Grafic />

      <Invoice page={page} direction={direction} setPage={setPage} />

      <Statement />

      <ActionButton
        title="Pagar"
        onClick={() => navigate("/bank/confirmPay")}
      />
    </Container>
  );
};
