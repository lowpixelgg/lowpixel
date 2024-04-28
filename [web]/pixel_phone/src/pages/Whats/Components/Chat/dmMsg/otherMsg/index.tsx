import React from "react";
import { Container } from "./styles";

export const OtherMsgModal = (props: any) => {

    return (
        <Container>
            <div className="otherMsgContainer">
                <p className="otherMsgText">{props.text}</p>

                <div className="otherMessageInfo">
                    <p className="otherMsgHours">{props.hours}</p>
                </div>
            </div>
        </Container>
    )
}
