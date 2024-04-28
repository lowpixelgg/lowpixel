import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";
import { motion } from "framer-motion";
import {
  BsFillCameraVideoFill,
  BsFillTelephoneFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { BiCheck, BiCheckDouble, BiLeftArrowAlt } from "react-icons/bi";
import { AudioPlayer } from "./Audio";
import { useRef } from "react";
import { Avatar } from "../../../Components/Avatar";
import { useNavigate, useParams } from "react-router-dom";
import { UserInput } from "./Input";
import {
  Contact,
  Message,
  useWhatsApp,
} from "../../../Contexts/WhatsAppContext";
import { getMessageHour } from "../../../utils/DesignUtilities";
import { useSocket } from "../../../Contexts/SocketContext";
import { RegisterMTAEvent } from "../../../hooks/RegisterMTAEvent";
import { useMta } from "../../../Contexts/GameContext";

export const DmChat = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const { addEventListener } = useMta();
  const { whats, setInitialWhatsApp, addMessageToChatbox } = useWhatsApp();
  const { id } = useParams();
  const [contact, setContact] = useState<Contact>();
  const [userText, setUserText] = useState("");
  const { socket } = useSocket();
  
  const navigate = useNavigate();
  
  const handleSendMessage = () => {
    if (contact) {
      const parsed = {
        from: whats?._id,
        to: contact.data.id,
        content: userText,
        createdAt: Date.now(),
      };
      
      RegisterMTAEvent("execSendWhatsAppMessage", parsed);
      
      addEventListener("execSendWhatsAppMessage", (data: Message) => {
        socket?.emit("whats:onNewMessage", contact?.data.phoneId, data)
      });
    }

    setUserText("");
  };
  

  const handleSetContact = () => {
    if (id) {
      const contact = whats?.chatboxes.find(
        (contact) => contact.data.id === Number(id)
        );
        
        if (contact !== undefined) {
          setContact(contact);
        }
      }
  }




  useEffect(() => { if (contact) { handleSetContact() }}, [whats])
  
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
        background: "#1F2C34",
        color: "#f2f2f2",
      },
    });
  
    handleSetContact();
  
    if (contact) {
      const handleMessage = (message: Message) => {
        addMessageToChatbox(contact.data.id, message);
      };
  
      socket?.once("whats:onNewMessage", handleMessage);
  
      return () => {
        socket?.off("whats:onNewMessage", handleMessage);
      };
    }
  
  }, [socket, contact]);
  
    

    const ref = useRef<HTMLDivElement>(null);
    
    
    useEffect(() => {
      if (contact?.messages.length) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, [contact?.messages.length]);
    


    
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      >
      <Container>
      <div className="head">
      <button className="left" onClick={() => navigate("/whats/chat")}>
      <BiLeftArrowAlt color="#F8F9FA" size={18} />
      
      <Avatar id={contact?.data.picture} size={24} />
      </button>
      
      <div className="name">
      <h4>{contact?.data.name}</h4>
      </div>
      
      <div className="right">
      <button>
      <BsFillCameraVideoFill size={12} color="#F8F9FA" />
      </button>
      
      <button>
      <BsFillTelephoneFill size={12} color="#F8F9FA" />
      </button>
      
      <button>
      <BsThreeDotsVertical size={14} color="#F8F9FA" />
      </button>
      </div>
      </div>
      <div className="messagesList">
      {/* @ts-ignore */}
      <div className="wrap" >
      {contact?.messages
        .sort(
          (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
          )
          .map((item, index) => {
            return (
              <ChatBox
              key={index}
              message={item.content}
              hour={item.createdAt}
              isMe={
                contact?.data.id == (item.from || item.to) ? false : true
              }
              isread={true}
              />
              );
            })}
            
            <div ref={ref} />
            </div>
            </div>
            
            <UserInput
            userText={userText}
            setText={setUserText}
            sendAction={handleSendMessage}
            />
            </Container>
            </motion.div>
            );
          };
          
          const ChatBox = ({ isMe, message, hour, isread }: any) => {
            const isAudio = false;
            
            return (
              <motion.div
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.2 }}
              className={`chatBox ${isMe && "isMe"} ${isAudio && "isAudio"}`}
              >
              {isAudio ? <AudioPlayer audioSrc={""} /> : <p>{message}</p>}
              
              {isMe && (
                <div className="foot">
                <span>{getMessageHour(hour)}</span>
                {isread ? (
                  <BiCheckDouble color="#34B7F1" size={14} />
                  ) : (
                    <BiCheck size={14} />
                    )}
                    </div>
                    )}
                    </motion.div>
                    );
                  };
                  