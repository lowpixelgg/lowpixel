import React from "react";
import { Container } from "./styles";
import ConfigIcon from "@iconscout/react-unicons/icons/uil-setting";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import ChangeCam from "@iconscout/react-unicons/icons/uil-camera-change";
import VideoCam from "@iconscout/react-unicons/icons/uil-video";
import { CamButton } from "../../Components/CamButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const MainCam = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.6 }}
      style={{ height: "100%" }}
    >
      <Container>
        <div className="nav">
          <button>
            <ConfigIcon size={20} color="#fff" />
          </button>

          <button onClick={() => navigate("/instagram/feed")}>
            <CloseIcon size={20} color="#fff" />
          </button>
        </div>

        <div className="actions">
          <button className="videoCam">
            <VideoCam size={20} color="#fff" />
          </button>

          <CamButton />

          <button className="changeCam">
            <ChangeCam size={20} color="#fff" />
          </button>
        </div>
      </Container>
    </motion.div>
  );
};
