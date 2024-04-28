import React from "react";
import { Container } from "./styles";
import ConfigIcon from "@iconscout/react-unicons/icons/uil-setting";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import ChangeCam from "@iconscout/react-unicons/icons/uil-camera-change";
import PenIcon from "@iconscout/react-unicons/icons/uil-edit";
import { ActionButton, CamButton } from "../../Components/CamButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const ImageCam = () => {
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
          <button className="shadow">
            <ConfigIcon size={20} color="#fff" />
          </button>

          <button
            className="shadow"
            onClick={() => navigate("/instagram/feed")}
          >
            <CloseIcon size={20} color="#fff" />
          </button>
        </div>

        <div className="actions">
          <div>
            <ActionButton onClick={() => navigate("/instagram/storyCam/text")}>
              <PenIcon size={16} color="#29292e" />
            </ActionButton>

            <CamButton />
          </div>

          <button className="changeCam">
            <ChangeCam size={20} color="#fff" />
          </button>
        </div>
      </Container>
    </motion.div>
  );
};
