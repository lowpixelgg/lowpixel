import React, { useState } from "react";
import { Container } from "./styles";

import { AiFillCamera } from "react-icons/ai";
import { MdMic, MdSend } from "react-icons/md";
import {FiTrash2} from "react-icons/fi"
import {BsPause} from "react-icons/bs"

import { useNavigate } from "react-router-dom";

export const TextAreaMsg = () => {
  const navigate = useNavigate();

  let clickButton = (name: any, url: any) => {
    navigate(url);
  };

  const [userMsg, setUserMsg] = useState("");
  const [changeTextAudio, setChangeTextAudio] = useState(true);

  function handleDisplayAudio(){
    setChangeTextAudio(false)
  }

  function handleRemoveDisplayAudio(){
    setChangeTextAudio(true)
  }

  console.log(changeTextAudio);

  return (
    <Container>
      {changeTextAudio ?
        <>
          <div className="textAreaContainer">
            <AiFillCamera
              onClick={() => clickButton("camera", "/whats/camera")}
              className="cameraIcon"
            />
            <input
              onChange={(e) => setUserMsg(e.target.value)}
              className="inputTextArea"
              type="text"
            />
          </div>
          <div className="audioRecorder">
            {userMsg.length > 0 ? (
              <MdSend className="btnIcon" />
            ) : (
              <MdMic className="btnIcon" onClick={handleDisplayAudio}/>
            )}
          </div>
        </> :
        <div className="RecorderAudio">
          <button 
            className="CancelAudio" 
            type="button"
            onClick={handleRemoveDisplayAudio}
          >
            <FiTrash2 size={14}/>
          </button>

          <strong>0:00</strong>
          <p>.......</p>
          
          <button className="PauseAudio" type="button">
            <BsPause color="white" size={16}/>
          </button>

          <button className="SubmitAudio" type="button">
            <MdSend color="white" size={14}/>
          </button>
        </div>
      }
    </Container>
  );
};
//<FiPaperclip className="clipsIcon" />
