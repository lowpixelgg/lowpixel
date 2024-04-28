import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles";

import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";


export const OnGoingCall = () => {

    const { SistemDispatch } = useContext<any>(GlobalContext);

    useEffect(() => {
        SistemDispatch({ type: "showStatusbar" });
        SistemDispatch({ type: "showBottomNav" });
        SistemDispatch({
            type: "setBottomNavStyles",
            values: {
                background: "#000000",
                color: "#f2f2f2",
            },
        });
        SistemDispatch({
            type: "setStatusBarStyle",
            values: {
                background: "#000000",
                color: "#f2f2f2",
            },
        });
    }, []);
    
    return (
        <Container>
            <div className="center">
                <img src="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048" className="userAvatar" />

                <h2 className="userName">Vitor</h2>
                <h2 className="callStatus">Whatsapp Voice Call</h2>
            </div>

            <div className="bottom">
                <div className="buttons">

                    <div className="rejectButton">
                        <FaPhone className="callRejectedIcon" />
                    </div>

                    <div draggable="true" className="acceptButton">
                        <FaPhone className="callAcceptedIcon" />
                    </div>

                    <div className="chatButton">
                        <BsFillChatRightTextFill className="chatIcon" />
                    </div>

                </div>
            </div>
            <h3 className="bottomText">Swipe to accept</h3>
        </Container>
    )
}