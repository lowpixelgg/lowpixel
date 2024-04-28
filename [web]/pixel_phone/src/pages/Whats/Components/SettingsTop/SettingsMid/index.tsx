import React from "react";
import { Container } from "./styles"

import { BsKeyFill } from "react-icons/bs";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export const SettingsMid = (props: any) => {

    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/whats/profile");
    }

    return (
        <Container>

            <div className="menuContainer">
                <div className="item">
                    <BsKeyFill />
                    <div onClick={goToProfile} className="rightInfos">
                        <p className="title">Account</p>
                        <p className="description">Privacy, security, change number</p>
                    </div>
                </div>

                <div className="item">
                    <BsFillChatRightTextFill size={16} />
                    <div className="rightInfos">
                        <p className="title">Chats</p>
                        <p className="description">Theme, wallpapers, chat history</p>
                    </div>
                </div>

                <div className="item">
                    <BsBellFill/>
                    <div className="rightInfos">
                        <p className="title">Notifications</p>
                        <p className="description">Message, group & call tones</p>
                    </div>
                </div>

                <div className="item">
                    <MdOutlineDataSaverOff/>
                    <div className="rightInfos">
                        <p className="title">Storage and data</p>
                        <p className="description">Network usage, auto-download</p>
                    </div>
                </div>

                <div className="item">
                    <FiHelpCircle />
                    <div className="rightInfos">
                        <p className="title">Help</p>
                        <p className="description">Help center, contact us, privacy police</p>
                    </div>
                </div>

                <div className="item">
                    <FaUserFriends />
                    <div className="rightInfos">
                        <p className="title">Invite a friend</p>
                    </div>
                </div>

                <div className="appVersion">
                    <p className="versionTop">From</p>
                    <p className="versionBottom">Rocket Community</p>
                </div>
            </div>

        </Container>
    )
}