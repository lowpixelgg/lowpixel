/**
 * @overview Calls Page, this page is used to make calls to other users
 * @author Marco 'mayk' Antonio
 * @copyright (c) Rocket Community
 * @license See LICENSE file on top-level directory
 */

import React from "react";
import { Container } from "./styles";

import { motion } from "framer-motion";

import { UserModalCalls } from "../Components/UserModal";

export const Calls = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        {/* <UserModalCalls
          avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048"
          name="MarcoMaciass"
          callStatus={true}
          hours="27 de Dezembro 22:50"
        />

        <UserModalCalls
          avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048"
          name="MarcoMaciass"
          callStatus={false}
          hours="12 de Fevereiro 05:08"
        /> */}
      </Container>
    </motion.div>
  );
};
