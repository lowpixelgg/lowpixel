import React, { useState } from "react";
import { motion } from "framer-motion";
import LockIcon from "@iconscout/react-unicons/icons/uil-lock-alt";
import EyeIcon from "@iconscout/react-unicons/icons/uil-eye";
import EyeSlashIcon from "@iconscout/react-unicons/icons/uil-eye-slash";
import { ActionButton } from "../../components/ActionBtn";
import { ClickAwayListener } from "@mui/material";

export const Password = ({ setViewPasscard }: any) => {
  const [isViewPass, setIsViewPass] = useState(true);
  return (
    <motion.div
      initial={{ background: "rgba(0, 0, 0, 0)" }}
      animate={{ background: "rgba(0, 0, 0, 0.4)" }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="password"
    >
      <ClickAwayListener onClickAway={() => setViewPasscard(false)}>
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 }}
          className="card"
        >
          <LockIcon size={32} color="#341959" />

          <p>Sua senha:</p>

          <div className="value">
            {isViewPass ? <p>564897</p> : <span />}

            <button onClick={() => setIsViewPass(!isViewPass)}>
              {isViewPass ? (
                <EyeSlashIcon size={18} color="#341959" />
              ) : (
                <EyeIcon size={18} color="#341959" />
              )}
            </button>
          </div>

          <ActionButton title="Fechar" onClick={() => setViewPasscard(false)} />
        </motion.div>
      </ClickAwayListener>
    </motion.div>
  );
};
