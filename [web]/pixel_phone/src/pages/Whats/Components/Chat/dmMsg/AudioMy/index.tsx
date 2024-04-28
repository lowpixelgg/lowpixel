/** 
  * @overview Audio Page, audio page is used to send audio to your friends
  * @author Marco 'mayk' Antonio
  * @copyright (c) Rocket Community
  * @license See LICENSE file on top-level directory  
*/

import React, { useState } from "react";
import { Container } from "./styles"

import { FaPlay, FaPause } from "react-icons/fa"
import { BsFillMicFill } from "react-icons/bs"


export const AudioMy = (props: any) => {

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

                                <svg className="readMessage" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87952 8.59238L12.9943 1.65952L12.2443 0.998047L6.47633 7.53772L5.9592 7.03613L5.26296 7.75394L6.15642 8.62055L6.53274 8.98556L6.87952 8.59238ZM3.38869 8.5745L9.06545 1.64164L8.29173 1.00811L2.96182 7.51738L0.706779 5.30129L0.00585938 6.01453L2.65138 8.61435L3.04185 8.99809L3.38869 8.5745Z"
                                        fill={props.read ? "#34B7F1" : "#474849"} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Container>
    )
}