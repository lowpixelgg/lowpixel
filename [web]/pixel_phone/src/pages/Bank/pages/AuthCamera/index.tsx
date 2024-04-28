import React, { useEffect } from "react";
import { Container } from "./styles";
import CamShotIcon from "@iconscout/react-unicons/icons/uil-shutter";
import { useNavigate } from "react-router-dom";
import { useSetRelinkState } from "react-relink";
import { avatarImgSource } from "../Auth";
import { RegisterMTAEvent } from "../../../../hooks/RegisterMTAEvent";
import { useBank } from "../../../../Contexts/BankContext";

export const AuthCamera = () => {
  const navigate = useNavigate();
  const setAvatarImg = useSetRelinkState(avatarImgSource);
  const { registrationData } = useBank();

  const handleCapture = () => {
    setAvatarImg("34");
    handleSubmit();
    navigate("/bank/review");
  };

  useEffect(() => {
    RegisterMTAEvent("execHandleCameraInit", {});
  }, []);

  const handleSubmit = () => {
    RegisterMTAEvent("execBankRegistration", registrationData);
  };

  return (
    <Container>
      <div className="header">
        <p>Registre uma foto para aprovação de abertura de conta</p>

        <img src={"src/assets/Bank-secureImg.png"} alt="shield" />
      </div>

      <div className="cam"></div>

      <div className="action">
        <button onClick={() => handleCapture()}>
          <CamShotIcon size={32} />
        </button>
      </div>
    </Container>
  );
};
