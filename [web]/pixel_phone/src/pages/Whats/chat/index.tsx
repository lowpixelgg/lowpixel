import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { Avatar } from "../../../Components/Avatar";
import { SiGooglemessages } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import {
  Contact,
  Message,
  useWhatsApp,
  WhatsApp,
} from "../../../Contexts/WhatsAppContext";
import { getLastMessage, getMessageHour } from "../../../utils/DesignUtilities";
import { useSocket } from "../../../Contexts/SocketContext";


export const Chat = () => {
  const { whats, setInitialWhatsApp, addMessageToChatbox } = useWhatsApp();
  const { socket } = useSocket();

 const navigate = useNavigate();

  useEffect(()  => {
    socket?.on("whats:onNewMessage", (message: Message) => {
      addMessageToChatbox(message.from, message)
    })

  }, [socket])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        {whats?.chatboxes.map((_contact) => (
          <ChatItem
            key={_contact.data.id}
            picture={_contact.data.picture}
            id={_contact.data.id}
            name={_contact.data.name}
            lastMsgStr={getLastMessage(_contact.messages)?.content}
            lastMsgHour={getMessageHour(getLastMessage(_contact.messages)?.createdAt) || ""}
          />
        ))}

        <button className="newBtn" onClick={() => { navigate ("/whats/dmChat/5")}}>
          <SiGooglemessages color="#F8FFFF" size={14} />
        </button>
      </Container>
    </motion.div>
  );
};

type ChatItemType = {
  id: number;
  picture: string | undefined;
  name: string;
  lastMsgStr?: string;
  lastMsgHour?: string;
};

const ChatItem = ({
  id,
  picture,
  name,
  lastMsgStr,
  lastMsgHour,
}: ChatItemType) => {
  const navigate = useNavigate();

  return (
    <li className="chat" onClick={() => navigate("/whats/dmChat/" + id)}>
      <Avatar id={picture} size={32} />

      <div className="center">
        <h3>{name}</h3>
        {lastMsgStr ? <p>{lastMsgStr}</p> : <p></p>}
      </div>

      <div className="infos">
        {lastMsgHour ? <p>{lastMsgHour}</p> : <p></p>}
      </div>
    </li>
  );
};
