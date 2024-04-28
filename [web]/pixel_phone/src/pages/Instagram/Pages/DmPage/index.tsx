import { GlobalContext } from "../../../../Contexts/GlobalContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Container } from "./styles";
import BackIcon from "@iconscout/react-unicons/icons/uil-angle-left";
import InfoIcon from "@iconscout/react-unicons/icons/uil-exclamation-circle";
import PlaneIcon from "@iconscout/react-unicons/icons/uil-message";
import GalleryIcon from "@iconscout/react-unicons/icons/uil-images";
import { Avatar } from "../../../../Components/Avatar";
import { motion } from "framer-motion";

const initialMessages = [
  {
    user: "evol",
    message: "lorem ipsum",
  },
  {
    user: "vini",
    message: "Nullam tristique est tempor porttitor sodales",
  },
  {
    user: "evol",
    message: "eget molestie neque diam a enim",
  },
  {
    user: "vini",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
  {
    user: "evol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
  {
    user: "vini",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
  {
    user: "evol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
  {
    user: "vini",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
  {
    user: "evol",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante dapibus, finibus ex vel, laoreet tortor",
  },
];

export const DmPage = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

  const inputRef = useRef(null);
  const finalRef = useRef(null);
  const [messagesList, setMessagesList] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");



  const handleNewMessage = () => {
    setMessagesList([...messagesList, { user: "vini", message: newMessage }]);
    // @ts-ignore
    inputRef.current.value = "";
  };

  const scrollToBottom = () => {
    // @ts-ignore
    finalRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

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
    scrollToBottom();
  }, [messagesList]);

  return (
    <Container>
      <div className="header">
        <div className="left">
          <button onClick={() => navigate(-1)}>
            <BackIcon size={24} color={theme.text10} />
          </button>

          <Avatar size={20} />

          <h4>Vinicius</h4>
        </div>

        <button>
          <InfoIcon size={18} color={theme.text10} />
        </button>
      </div>

      <div className="messagesList">
        <div className="wrap">
          {messagesList.map((item, index) => {
            return (
              <ChatBox
                key={index}
                isMe={item.user === "vini" ? true : false}
                message={item.message}
              />
            );
          })}
        </div>

        <div ref={finalRef} />
      </div>

      <div className="commentInput">
        <button>
          <GalleryIcon size={16} color={theme.text10} />
        </button>

        <input
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          placeholder="Enviar mensagem..."
          ref={inputRef}
        />

        <button onClick={() => handleNewMessage()}>
          <PlaneIcon size={16} color={theme.text10} />
        </button>
      </div>
    </Container>
  );
};

const ChatBox = ({ isMe, message }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      className={`chatBox ${isMe && "isMe"}`}
    >
      <p>{message}</p>
    </motion.div>
  );
};
