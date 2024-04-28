import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "./Header";
import { Form } from "./Form";
import { Route, Routes, useLocation } from "react-router-dom";
import { Password } from "./Password";
import { AuthCamera } from "../AuthCamera";
import { RelinkSource } from "react-relink";

export const avatarImgSource = new RelinkSource({
  key: "bankAvatar",
  default: "0",
});

export const Auth = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const location = useLocation();

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
        background: "#8B3AC2",
        color: "#f2f2fa",
      },
    });
  }, []);

  useEffect(() => {
    if (location.pathname === "/bank/auth/camera") {
      SistemDispatch({
        type: "setStatusBarStyle",
        values: {
          background: "#140726",
          color: "#f2f2fa",
        },
      });

      SistemDispatch({
        type: "setBottomNavStyles",
        values: {
          background: "#140726",
          color: "#f2f2fa",
        },
      });
    } else {
      SistemDispatch({
        type: "setStatusBarStyle",
        values: {
          background: "#8B3AC2",
          color: "#f2f2fa",
        },
      });

      SistemDispatch({
        type: "setBottomNavStyles",
        values: {
          background: "#FCF8F4",
          color: "#101011",
        },
      });
    }
  }, [location.pathname]);

  return (
    <Container hideBg={location.pathname === "/bank/auth/camera"}>
      {location.pathname !== "/bank/auth/camera" && (
        <Header
          title={
            location.pathname === "/bank/auth"
              ? "Para continuarmos precisamos validar sua identificação"
              : location.pathname === "/bank/auth/password"
              ? "Crie sua senha para operações dentro do app"
              : null
          }
        />
      )}

      <main>
        <Routes>
          <Route path="/" element={<Form />} />

          <Route path="/camera" element={<AuthCamera />} />
        </Routes>
      </main>
    </Container>
  );
};
