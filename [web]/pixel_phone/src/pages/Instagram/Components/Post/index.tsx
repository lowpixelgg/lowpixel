import React, { useState } from "react";
import { Avatar } from "../../../../Components/Avatar";
import {
  BsThreeDotsVertical,
  BsHeart,
  BsFillHeartFill,
  BsChat,
  BsBookmark,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";


export const Post = ({ seeComments, noRedirect }: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();

  const handleNavigateToPost = () => {
    navigate("/instagram/post");
  };

  return (
    <Container>
      <div className="container1">
        <div className="profile">
          <Avatar id={42} size={24} />

          <p>Soweto</p>
        </div>

        <button>
          <BsThreeDotsVertical size={14} />
        </button>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 }}
        className="postImg"
        src="src/assets/Images/placeholder6.png"
        onClick={() => !noRedirect && handleNavigateToPost()}
      />

      <div className="container3">
        <div>
          <button onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <BsFillHeartFill className="likedHeart" size={14} />
            ) : (
              <BsHeart size={14} />
            )}
          </button>

          <button>
            <BsChat size={14} className="chat" />
          </button>
        </div>

        <button onClick={() => setIsSaved(!isSaved)}>
          {isSaved ? (
            <BsFillBookmarkFill className="savedMark" size={14} />
          ) : (
            <BsBookmark size={14} />
          )}
        </button>
      </div>

      <div className="container4">
        <p>
          <strong>Soweto</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum nesciunt officiis dolor ipsum enim
        </p>
      </div>

      {seeComments && (
        <p className="coments" onClick={() => handleNavigateToPost()}>
          Ver 90 comentários
        </p>
      )}
    </Container>
  );
};
