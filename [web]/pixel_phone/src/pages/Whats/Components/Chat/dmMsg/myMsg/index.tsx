import React from "react";
import { Container } from "./styles";

export const MyMsgModal = (props: any) => {

    return (
        <Container>
            <div className="myMsgContainer">
                <p className="msgText">{props.text}</p>

                <div className="messageInfo">
                    <p className="msgHours">{props.hours}</p>

                    <svg className="readMessage" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87952 8.59238L12.9943 1.65952L12.2443 0.998047L6.47633 7.53772L5.9592 7.03613L5.26296 7.75394L6.15642 8.62055L6.53274 8.98556L6.87952 8.59238ZM3.38869 8.5745L9.06545 1.64164L8.29173 1.00811L2.96182 7.51738L0.706779 5.30129L0.00585938 6.01453L2.65138 8.61435L3.04185 8.99809L3.38869 8.5745Z"
                            fill={props.read ? "#34B7F1" : "#474849"} />
                    </svg>
                </div>
            </div>
        </Container>
    )
}
