import React from "react";
import { Container } from "./styles";

import { motion } from "framer-motion";

import {
  UserModalStatus,
  UserDefaultModalStatus,
} from "../Components/UserModal";
import { useWhatsApp } from "../../../Contexts/WhatsAppContext";

export const Status = (props: any) => {
  const { whats } = useWhatsApp();


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        <UserDefaultModalStatus
          className="avatarStatusWithoutDash"
        />

        <h2 className="tag">Recent updates</h2>
        {/* <UserModalStatus
          className="statusAvatarWithDash"
          avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048"
          name="Marcão"
          hours="12:21 PM"
        />

        <UserModalStatus
          className="statusAvatarWithDash"
          avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048"
          name="Marcão2"
          hours="21:05 PM"
        /> */}

        <h2 className="tag">Viewed updates</h2>

        {/* <UserModalStatus
          className="statusAvatarWithDash"
          avatarUrl="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048"
          name="Marcão3"
          hours="00:45 AM"
        /> */}
      </Container>
    </motion.div>
  );
};
