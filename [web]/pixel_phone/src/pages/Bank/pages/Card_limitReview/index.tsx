import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { ActionButton } from "../../components/ActionBtn";
import { useNavigate } from "react-router-dom";

export const LimitReview = () => {
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
      <img src={"src/assets/Bank-reviewImg.png"} alt="desktop" />

      <h4>Em análise</h4>

      <p>
        Recebemos seu pedido e estamos analisando seus dados, em breve
        enviaremos uma notificação com seu novo limite.
      </p>

      <ActionButton title="Inicio" onClick={() => navigate("/bank/init")} />
    </Container>
  );
};
