import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React from "react";
import { Container } from "./styles";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { FiMoreVertical } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import { motion } from "framer-motion";

export const NavTop = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { SistemDispatch } = useContext<any>(GlobalContext);

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
  }, []);

  return (
    <Container>
      {/* @ts-ignore */}
      <nav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="top">
          <h2>LowApp</h2>

          <div className="icons">
            <BiSearch size={14} />

            <FiMoreVertical
              size={14}
              onClick={() => navigate("/whats/settings")}
            />
          </div>
        </div>

        <div className="nav">
          <div className="camera" onClick={() => navigate("/whats/camera")}>
            <AiFillCamera />
          </div>

          <NavLink to="/whats/chat" className="chats">
            CHATS
          </NavLink>

          <NavLink to="/whats/status" className="status">
            STATUS
          </NavLink>

          <NavLink to="/whats/calls" className="calls">
            CALLS
          </NavLink>
        </div>

        <div className="bar">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ease: "easeIn", duration: 0.2 }}
            style={{
              left:
                location.pathname === "/whats/chat"
                  ? 42
                  : location.pathname === "/whats/status"
                  ? 102
                  : location.pathname === "/whats/calls"
                  ? 164
                  : 0,
            }}
          />
        </div>
      </nav>

      <main className="mainContent">
        <Outlet />
      </main>
    </Container>
  );
};
