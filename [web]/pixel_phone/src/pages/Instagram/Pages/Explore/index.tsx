import React from "react";
import { Container } from "./styles";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../../Components/SearchInput";

const ImgsLinks = [
  "src/assets/Images/placeholder1.png",
  "src/assets/images/placeholder2.png",
  "src/assets/Images/placeholder3.png",
  "src/assets/Images/placeholder4.png",
  "src/assets/Images/placeholder6.png",
  "src/assets/Images/placeholder5.png",
  "src/assets/Images/placeholder8.png",
  "src/assets/Images/placeholder2.png",
  "src/assets/Images/placeholder7.png",
  "src/assets/Images/placeholder6.png",
  "src/assets/Images/placeholder3.png",
  "src/assets/Images/placeholder1.png",
];

export const Explore = () => {
  const navigate = useNavigate();

  const handleToPost = () => {
    navigate("/instagram/post");
  };

  return (
    <Container>
      <SearchInput />

      <div className="imgsContainer">
        {ImgsLinks.map((item, index) => {
          return (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.4,
                delay: 0.1 * (index - 1),
              }}
              key={index}
              src={item}
              alt="pub"
              onClick={() => handleToPost()}
            />
          );
        })}
      </div>
    </Container>
  );
};
