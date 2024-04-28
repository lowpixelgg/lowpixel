import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { RegisterMTAEvent } from "../../../hooks/RegisterMTAEvent";
import { useWhatsApp } from "../../../Contexts/WhatsAppContext";
import { useMta } from "../../../Contexts/GameContext";
import { useSocket } from "../../../Contexts/SocketContext";

export const Init = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { setInitialWhatsApp } = useWhatsApp();
  const { addEventListener } = useMta();

  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#121B22",
        color: "#f2f2f2",
      },
    });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#121B22",
        color: "#f2f2f2",
      },
    });

    RegisterMTAEvent("execRequestWhatsApp", {});

    addEventListener("execRequestWhatsApp", (data) => {
      setInitialWhatsApp(data);

      navigate("/whats/chat");
    });

    return () => {};
  }, []);

  return (
    <Container>
      <img src={"src/assets/whatsLogo.svg"} alt="logo do whatsapp" />

      <div className="credits">
        <h4>from</h4>
        <h3>Low Pixel</h3>
      </div>
    </Container>
  );
};
