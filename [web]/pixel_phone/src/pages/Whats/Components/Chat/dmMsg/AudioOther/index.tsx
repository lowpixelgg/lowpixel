import React, { useState } from "react";
import { Container } from "./styles"

import { FaPlay, FaPause } from "react-icons/fa"
import { BsFillMicFill } from "react-icons/bs"


export const AudioOther = (props: any) => {

    const [audioPlay, audioPause] = useState(false);

    const handleAudio = () => {
        audioPause(!audioPlay);
    }


    return (
        <Container>
            <div className="audioContainer">
                <div className="avatar">
                    <img className="userAvatar" src="https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048" alt="User's avatar" />
                    <BsFillMicFill className="micBesideAvatar" />
                </div>
                <div className="rightInfos">
                    <div className="audioInfos">
                    
                        {audioPlay ? <FaPause className="playAudio" onClick={handleAudio} /> : <FaPlay className="stopAudio" onClick={handleAudio} />}

                        <input className="audioTimeBar" value={0} type="range" />
                        <p className="audioTime">{props.audioTime}</p>

                        <div className="bottomAudioInfos">

                            <div className="messageInfo">
                                <p className="msgHours">{props.hours}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Container>
    )
}