import React from "react";
import { Container } from "./styles"

import { BiLeftArrowAlt } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useWhatsApp } from "../../../../../Contexts/WhatsAppContext";
import { Avatar } from "../../../../../Components/Avatar";

export const SettingsTop = (props: any) => {
    const { whats } = useWhatsApp()
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <div className="settingsTop">
                <div className="infosTop">
                    <BiLeftArrowAlt onClick={handleGoBack} className="topArrowIcon" />
                    <h3 className="infosTopText">Settings</h3>
                </div>

                <div className="userInfos">
                    <Avatar id={whats?.picture} size={44} />

                    <div className="rightInfos">
                        <h3 className="userName">Character</h3>
                        <h3 className="userStatus">{whats?.about}</h3>
                    </div>
                </div>
            </div>

        </Container>
    )
}