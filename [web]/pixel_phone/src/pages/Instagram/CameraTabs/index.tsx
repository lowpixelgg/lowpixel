import { GlobalContext } from "../../../Contexts/GlobalContext";
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import { Tabs } from "./Tabs";

export const CameraTab = () => {
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
    <Container>
      <main>
        <Outlet />
      </main>

      <Tabs />
    </Container>
  );
};
