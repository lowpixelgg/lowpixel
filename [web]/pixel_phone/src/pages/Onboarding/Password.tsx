import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircularProgress, ClickAwayListener } from "@mui/material";


export const Page3 = ({ network, handleConect }: any) => {
  const [check, setCheck] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [warning, setWarning] = useState(false);
  const [password, setPassword] = useState("");

  const handle = () => {
    setIsFetching(true);

    const timer = setTimeout(() => {
      handleConect(network, password);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0.2 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0.2 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      className="page3"
    >
      <h1>Wifi</h1>

      <p>
        Você está prestes a se conectar a <strong>{network?.name}</strong>
      </p>

      <div className="input">
        {warning && <span>Senha incorreta</span>}
        <input
          type="password"
          className="password"
          placeholder="Senha da Rede"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="switchContainer">
        <label className="switch">
          <input
            type="checkbox"
            name="switch"
            id="switch"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <span className="slider" />
        </label>
        <label className="text" htmlFor="switch">
          Auto Reconectar Nesta Rede
        </label>
      </div>

      <ClickAwayListener onClickAway={() => setWarning(false)}>
        <button onClick={() => handle()} className="conect">
          {isFetching ? (
            <CircularProgress size={12} color="inherit" />
          ) : (
            "Conectar"
          )}
        </button>
      </ClickAwayListener>
    </motion.div>
  );
};
