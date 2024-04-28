import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import { FaPhone } from "react-icons/fa";
import { useWhatsApp } from "../../../../Contexts/WhatsAppContext";
import { Avatar } from "../../../../Components/Avatar";

// export const UserModalChat = (props: any) => {
//   const { whats } = useWhatsApp();
//   const navigate = useNavigate();

//   let goToChat = (url: any) => {
//     navigate(url);
//   };

//   return (
//     <Container>
//       <div onClick={() => goToChat("/whats/dmChat")} className="user">
//         <img src={props.avatarUrl} className="avatar" />
//         <Avatar id={whats?.picture} size={35} />

//         <div className="userRight">
//           <div className="chatInfos">
//             <h3>Character</h3>

//             <svg
//               width="13"
//               height="9"
//               viewBox="0 0 13 9"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M6.87952 8.59238L12.9943 1.65952L12.2443 0.998047L6.47633 7.53772L5.9592 7.03613L5.26296 7.75394L6.15642 8.62055L6.53274 8.98556L6.87952 8.59238ZM3.38869 8.5745L9.06545 1.64164L8.29173 1.00811L2.96182 7.51738L0.706779 5.30129L0.00585938 6.01453L2.65138 8.61435L3.04185 8.99809L3.38869 8.5745Z"
//                 fill={props.lastMessage ? "#34B7F1" : "#474849"}
//               />
//             </svg>

//             <h4>{props.message}</h4>
//           </div>
//           <h4 className="hourOfMsg">{props.hours}</h4>
//         </div>
//       </div>
//     </Container>
//   );
// };

export const UserModalCalls = (props: any) => {
  const navigate = useNavigate();
  const goToIncallPage = () => {
    navigate("/Whats/inCall");
  };

  return (
    <Container>
      <div className="userCalls">
        <div className="user">
          <img src={props.avatarUrl} className="avatar" />

          <div className="userRight">
            <div className="callInfos">
              <h3>{props.name}</h3>

              <h4>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className={props.callStatus ? "callAcepted" : "callRejected"}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z"
                    fill={props.callStatus ? "#35C16B" : "#ED5774"}
                  ></path>
                </svg>

                {props.hours}
              </h4>
            </div>
            <FaPhone onClick={goToIncallPage} className="callIcon" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export const UserModalStatus = (props: any) => {
  const navigate = useNavigate();

  let goToStory = (url: any) => {
    navigate(url);
  };

  return (
    <Container>
      <div onClick={() => goToStory("/whats/story")} className="user">
        <img src={props.avatarUrl} className="statusAvatar" />

        <div className="userRight">
          <div className="chatInfos">
            <h3>{props.name}</h3>
            <h4>{props.hours}</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const UserDefaultModalStatus = (props: any) => {
  const { whats } = useWhatsApp()
  const navigate = useNavigate();
  const handleGoToStoryMaker = () => {
    navigate("/whats/storyMaker");
  };

  return (
    <Container>
      <div onClick={handleGoToStoryMaker} className="user">
        <Avatar id={whats?.picture} size={40} />
        {/* <img src={props.avatarUrl} className="statusAvatarWithoutDash" /> */}

        <div className="userRight">
          <div className="chatInfos">
            <h3>Character</h3>
            <h4>Adicionar um status</h4>

            <svg
              className="addIcon"
              width={true ? "19" : "0"}
              height={true ? "19" : "0"}
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="17"
                height="17"
                rx="8.5"
                fill="#04A87E"
                stroke="#121B22"
                stroke-width="2"
              />
              <path
                d="M9.9375 9.0625V6.4375C9.9375 6.19588 9.74162 6 9.5 6C9.25838 6 9.0625 6.19588 9.0625 6.4375V9.0625H6.4375C6.19588 9.0625 6 9.25838 6 9.5C6 9.74162 6.19588 9.9375 6.4375 9.9375H9.0625V12.5625C9.0625 12.8041 9.25838 13 9.5 13C9.74162 13 9.9375 12.8041 9.9375 12.5625V9.9375H12.5625C12.8041 9.9375 13 9.74162 13 9.5C13 9.25838 12.8041 9.0625 12.5625 9.0625H9.9375Z"
                fill="#F3F8F9"
              />
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
};
