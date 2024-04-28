import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoIosWifi } from "react-icons/io";
import { useMta } from "../../Contexts/GameContext";


type Network = {
  id: string;
  mghz: number;
  name: string;
}


export const Page2 = ({ networks, handle, conectedNet }: any) => {

  return (
    <motion.div
      initial={{ x: 100, opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0.2 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      className="page2"
    >
      <h1>Conectividade</h1>

      <p>
        Antes de começar a usar o seu novo Samsung Galaxy A50 Você precisa
        conectar a uma Rede Publica de WI-FI, Se você estiver em um lugar remoto
        ou sem sinal procure uma praça ou lugar publico que possua uma WI-FI
        grátis.
      </p>

      <h4>Clique para selecionar uma Rede:</h4>

      <ul>
        {networks.length > 0 ? (networks.map((item: Network, index: any) => (
          <NetItem
            key={index}
            data = {item}
            conected={conectedNet === item.name ? true : false}
            handle={handle}
          />
        ))): <p>Nenhuma rede disponivel</p>}
      </ul>
    </motion.div>
  );
};


const NetItem = ({ data, conected, handle }: any) => {
  return (
    <li>
      <button onClick={() => {handle(data)}}>
        <IoIosWifi />
        <div>
          <p>{data?.name}</p>
          {conected && <small>Conectado</small>}
        </div>
      </button>
    </li>
  );
};
