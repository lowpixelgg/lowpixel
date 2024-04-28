import React from "react";
import { ContentContainer } from "./styles";
import { motion } from "framer-motion";

export const Content = ({ background, textsList, dragRef, setIsDragging }: any) => {
  return (
    <ContentContainer background={background} id="storyContent">
      {textsList.map((item: any) => {
        return (
          <TextCard
            key={item.id}
            id={item.id}
            content={item.text}
            dragRef={dragRef}
            size={item.size}
            bg={item.bg}
            color={item.color}
            setIsDragging={setIsDragging}
          />
        );
      })}
    </ContentContainer>
  );
};

const TextCard = ({ content, id, dragRef, size, bg, color, setIsDragging }: any) => {
  return (
    <motion.div
      drag
      dragConstraints={dragRef}
      dragElastic={0}
      dragMomentum={false}
      onDragStart={() => setIsDragging({ value: true, id: id })}
      onDragEnd={() => setIsDragging({ value: false, id: id })}
      onDoubleClick={() => setIsDragging({ click: true, id: id })}
      className="textCard"
      style={{
        background: bg === "light" ? "#f2f2fa" : bg === "dark" ? "#101011" : "",
        color: color === "light" ? "#f2f2fa" : "#101011",
        scale: size,
      }}
    >
      <p>{content}</p>
    </motion.div>
  );
};
