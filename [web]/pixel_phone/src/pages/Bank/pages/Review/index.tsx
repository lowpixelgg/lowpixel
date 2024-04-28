import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Container } from "./styles";

export const Review = () => {
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
        Recebemos seus dados e estamos analisando seu pedido, em breve
        enviaremos uma notificação com o resultado.
      </p>
    </Container>
  );
};
