import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { OwnerActions } from "./Actions";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import VideoOffIcon from "@iconscout/react-unicons/icons/uil-video-slash";
import { AnimatePresence, motion } from "framer-motion";

export const LiveOwner = () => {
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const [liveState, setLiveState] = useState({
    mic: true,
    video: true,
  });

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "#101011",
        color: "#f2f2fa",
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "#101011",
        color: "#f2f2fa",
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <Container>
        <OwnerActions liveState={liveState} setLiveState={setLiveState} />

        <AnimatePresence>
          {!liveState.video && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              className="videoOffOverlay"
            >
              <VideoOffIcon size={24} color="#f2f2fa" />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};
