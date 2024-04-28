/** 
  * @overview Story Page, at this page you can see the story of your whatsapp friends
  * @author Marco 'mayk' Antonio
  * @copyright (c) Rocket Community
  * @license See LICENSE file on top-level directory  
*/

import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles"
import { motion } from "framer-motion";

import { UserDefaultModalStatus } from "../Components/UserModal"

import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const Story = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);

  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#121515",
        color: "#f2f2f2",
      },
    });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#121515",
        color: "#f2f2f2",
      },
    });
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>

      <div className="userModal">

        <div className="loadingBar">
          <motion.div
              initial={{ width: 1 }}
              animate={{ width: "205px" }}
              transition={{ ease: "linear", duration: 4, delay: 0.4 }}
              onAnimationComplete={() => navigate(-1)}
              className="loadingBar2"
            />
        </div>

        <UserDefaultModalStatus className="userStatus" avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048" name="Marcão Lindao" hours="Hoje, 21:20" />

        <AiOutlineClose onClick={handleGoBack} className="closeStory" />
      </div>

    </Container>
  )
}