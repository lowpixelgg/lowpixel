import React from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

import { Card } from "./Cards";

export const Activity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <h1>Atividade</h1>

        <section>
          <h2>Recente</h2>
          <ul className="list">
            <Card id={86} user="vinioli" message="Curtiu sua foto" />

            <Card
              id={110}
              user="craig_love"
              message="Mencionou você em um comentário"
            />

            <Card
              id={5}
              user="marcoMarcias"
              message="Começou a lhe seguir"
              type="follow"
            />

            <Card
              id={32}
              user="monk"
              message="Mencionou você em um comentário"
            />

            <Card id={51} user="vinioli" message="Curtiu sua foto" />
          </ul>
        </section>

        <section>
          <h2>Este mês</h2>
          <ul className="list">
            <Card id={7} user="vinioli" message="Curtiu sua foto" />

            <Card
              id={61}
              user="craig_love"
              message="Mencionou você em um comentário"
            />

            <Card
              id={37}
              user="marcoMarcias"
              message="Começou a lhe seguir"
              type="folow"
            />

            <Card
              id={91}
              user="monk"
              message="Mencionou você em um comentário"
            />

            <Card
              id={76}
              user="vinioli"
              message="Começou a lhe seguir"
              type="folow"
            />
          </ul>
        </section>
      </Container>
    </motion.div>
  );
};
