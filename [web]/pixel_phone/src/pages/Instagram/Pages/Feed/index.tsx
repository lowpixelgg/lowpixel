import React from "react";
import { Container } from "./styles";
import { BsHeart } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Post } from "../../Components/Post";
import { motion } from "framer-motion";
import { Stories } from "./stories";
import { useNavigate } from "react-router-dom";

export const Feed = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      <Container>
        <div className="container1">
          <img src={"src/assets/InstagramBrand.png"} alt="instagram" className="logo" />

          <div className="navs">
            <button onClick={() => navigate("/instagram/activity")}>
              <BsHeart size={16} />
            </button>

            <button onClick={() => navigate("/instagram/chats")}>
              <IoPaperPlaneOutline className="paperIcon" size={16} />
            </button>
          </div>
        </div>

        <Stories />

        <div className="postsContainer">
          <Post seeComments />

          <Post seeComments />

          <Post seeComments />
        </div>
      </Container>
    </motion.div>
  );
};
