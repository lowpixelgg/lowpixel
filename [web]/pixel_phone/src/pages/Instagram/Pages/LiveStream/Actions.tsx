import { Avatar } from "../../../../Components/Avatar";
import React from "react";
import { ActionsContainer } from "./styles";
import EyeIcon from "@iconscout/react-unicons/icons/uil-eye";
import CloseIcon from "@iconscout/react-unicons/icons/uil-multiply";
import MicOnIcon from "@iconscout/react-unicons/icons/uil-microphone";
import MicOffIcon from "@iconscout/react-unicons/icons/uil-microphone-slash";
import VideoOnIcon from "@iconscout/react-unicons/icons/uil-video";
import VideoOffIcon from "@iconscout/react-unicons/icons/uil-video-slash";
import PlaneIcon from "@iconscout/react-unicons/icons/uil-message";
import { useNavigate } from "react-router-dom";
import { Comments } from "./Comments";

export const OwnerActions = ({ liveState, setLiveState }: any) => {
  const navigate = useNavigate();

  return (
    <ActionsContainer>
      <div className="header">
        <div className="left">
          <Avatar size={20} />
          <p className="shadow">evol3</p>
        </div>

        <div className="right">
          <span className="live">LIVE</span>
          <span className="views">
            <EyeIcon size={12} />
            20
          </span>
          <button onClick={() => navigate(-1)}>
            <CloseIcon className="shadow" size={16} color="#f2f2fa" />
          </button>
        </div>
      </div>

      <div className="rightBtns">
        <button
          onClick={() => setLiveState({ ...liveState, mic: !liveState.mic })}
        >
          {liveState.mic ? (
            <MicOnIcon className="shadow" size={16} color="#f2f2fa" />
          ) : (
            <MicOffIcon className="shadow" size={16} color="#f2f2fa" />
          )}
        </button>

        <button
          onClick={() =>
            setLiveState({ ...liveState, video: !liveState.video })
          }
        >
          {liveState.video ? (
            <VideoOnIcon className="shadow" size={16} color="#f2f2fa" />
          ) : (
            <VideoOffIcon className="shadow" size={16} color="#f2f2fa" />
          )}
        </button>
      </div>

      <div className="bottom">
        <Comments />

        <div className="commentInput">
          <input type="text" placeholder="deixe seu comentário..." />

          <button className="shadow">
            <PlaneIcon size={16} color="#f2f2fa" />
          </button>
        </div>
      </div>
    </ActionsContainer>
  );
};

export const MemberActions = () => {
  const navigate = useNavigate();

  return (
    <ActionsContainer>
      <div className="header">
        <div className="left">
          <Avatar size={20} />
          <p>evol3</p>
        </div>

        <div className="right">
          <span className="live">LIVE</span>
          <span className="views">
            <EyeIcon size={12} />
            20
          </span>
          <button onClick={() => navigate(-1)}>
            <CloseIcon size={16} color="#f2f2fa" />
          </button>
        </div>
      </div>

      <div className="bottom">
        <Comments />

        <div className="commentInput">
          <input type="text" placeholder="deixe seu comentário..." />

          <button>
            <PlaneIcon size={16} color="#f2f2fa" />
          </button>
        </div>
      </div>
    </ActionsContainer>
  );
};
