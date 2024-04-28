import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";

import { motion } from "framer-motion";

import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";
import { MdMicOff, MdOutlineMic } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";

import { useNavigate } from "react-router-dom";

export const InCall = () => {

    const { SistemDispatch } = useContext<any>(GlobalContext);

    useEffect(() => {
        SistemDispatch({ type: "showStatusbar" });
        SistemDispatch({ type: "showBottomNav" });
        SistemDispatch({
            type: "setBottomNavStyles",
            values: {
                background: "#1F2C34",
                color: "#f2f2f2",
            },
        });
        SistemDispatch({
            type: "setStatusBarStyle",
            values: {
                background: "#0B1B24",
                color: "#f2f2f2",
            },
        });
    }, []);

    const [camOn, camOff] = useState(false);

    const [micOn, micOff] = useState(false);

    const [soundOn, soundOff] = useState(false);

    const navigate = useNavigate();
    const goBackPage = () => {
        navigate(-1);
    }

    const handleSound = () => {
        soundOff(!soundOn);
    }

    const handleMic = () => {
        micOff(!micOn);
    }

    const handleCam = () => {
        camOff(!camOn);
    }

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
      >
        <Container>
            <div className="center">
                <img src="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048" className="userAvatar" />

                <h2 className="userName">Vitor</h2>
                <h2 className="callStatus">Calling</h2>
            </div>
            <div className="bottom">
                {soundOn ? <svg onClick={handleSound} className="soundIcon" width="17" height="13" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.8L15.4 13M15.4 5.8L21 13M1 5.8V13H5L11.4 17.8V1L5 5.8H1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 13V5.8H5L11.4 1V17.8L5 13H1Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                    :
                    <svg onClick={handleSound} className="soundIcon" width="17" height="13" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3846 1.76923C19.4615 3.30769 21 5.61538 21 9.07692C21 12.5385 19.4615 14.8462 16.3846 16.3846M1 5.61538V12.5385H4.84615L11 17.1538V1L4.84615 5.61538H1ZM14.8462 6.38462C14.8462 6.38462 16.3846 7.15385 16.3846 9.07692C16.3846 11 14.8462 11.7692 14.8462 11.7692V6.38462Z" stroke="#FFFEFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 12.5385V5.61538H4.84615L11 1V17.1538L4.84615 12.5385H1Z" fill="white" stroke="#FFFEFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }

                {camOn ? <BsFillCameraVideoOffFill className="cameraIcon" onClick={handleCam} /> : <BsFillCameraVideoFill className="cameraIcon" onClick={handleCam} />}

                {micOn ? <MdMicOff className="soundIcon" onClick={handleMic} /> : <MdOutlineMic className="soundIcon" onClick={handleMic} />}

                <ImPhoneHangUp onClick={goBackPage} className="hangUpIcon" />

            </div>
        </Container>
      </motion.div>
    )
}