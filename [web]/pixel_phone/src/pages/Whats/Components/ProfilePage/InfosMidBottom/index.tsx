import React from 'react';
import { Container } from './styles'

import { BiUserCircle } from "react-icons/bi";
import { RiInformationLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { useWhatsApp } from '../../../../../Contexts/WhatsAppContext';

export const InfosMidBottom = (props: any) => {
    const { whats } = useWhatsApp()

    return (
        <Container>
            <div className="infosMidBottom">
                <div className="userInfos">
                    <div className="nameInfo">
                        <BiUserCircle className="userIcon" />
                        <div className="userInfoName">
                            <h3 className="infoTag">Nome</h3>
                            <input className="secondText" type="text" placeholder={"Character"} maxLength={28} />
                            <h3 className="tagDesc">Esse é o seu nome de usuário. Seu nome só será visível para o seus contatos.</h3>
                        </div>
                    </div>

                    <div className="divisor"></div>

                    <div className="aboutInfo">
                        <RiInformationLine className="infoIcon" />
                        <div className="userInfoAbout">
                            <h3 className="infoTag">Sobre</h3>
                            <input className="secondText" type="text" placeholder={whats?.about} maxLength={28} />
                        </div>
                    </div>

                    <div className="divisor"></div>

                    <div className="phoneInfo">
                        <FaPhone className="phoneIcon" />
                        <div className="userInfoPhone">
                            <h3 className="infoTag">Telefone</h3>
                            <h3 className="secondText">777-666</h3>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}