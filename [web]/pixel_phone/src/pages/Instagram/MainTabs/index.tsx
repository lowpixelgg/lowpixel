import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch, BsHeart, BsHeartFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Avatar } from "../../../Components/Avatar";
import { useTheme } from "styled-components";

export const MainTabs = () => {
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

  useEffect(() => {
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });

    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });
  }, [theme]);
  return (
    <Container>
      <main>
        <Outlet />
      </main>

      <nav>
        <NavLink to="/instagram/feed" className="home">
          <GrHomeRounded size={12} />
        </NavLink>

        <NavLink to="/instagram/explore">
          <BsSearch size={12} />
        </NavLink>

        <NavLink to="/instagram/cam">
          <FiPlusCircle size={18} />
        </NavLink>

        <NavLink to="/instagram/activity">
          {({ isActive }) =>
            isActive ? <BsHeartFill size={12} /> : <BsHeart size={12} />
          }
        </NavLink>

        <NavLink to="/instagram/profile" className="avatar">
          <Avatar size={18} />
        </NavLink>
      </nav>
    </Container>
  );
};
