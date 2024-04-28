import * as C from './style';
import { Languages } from '../../@types';
import LanguagesText from '../../global/Language.json';
import { useContext, useState,useEffect } from 'react';
import { langContext } from '../../global/LanguageContext';

import more from '../../assets/more.svg';

export const Footer = () => {
    const [tip,setTip] = useState(0);
    const langObj: Languages = LanguagesText;
    const LangCtx = useContext(langContext);
    const texts = langObj[LangCtx?.lang || "eng"];


    useEffect(() => {
        const interval = setInterval(() => {
            const RandomTips = Math.floor(Math.random() * texts.Tips.length);
            setTip(RandomTips);
        }, 3000);

        return () => {
            clearInterval(interval);
        }

    }, []);


    return (
        <C.Container>
            <C.Right>
                <C.Text>play.rocketmta.com <span>🌎</span></C.Text>
                <C.Text>Open Release 0.1 <span>📦</span></C.Text>
                <img src={more} alt="more" width={26} height={26}/>
                <C.Button>{texts.Messages[2]}</C.Button>
            </C.Right>
            <C.Left>
                <C.Title>{texts.Messages[3]}</C.Title>
                <C.Tip 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 0.7 }}
                    key={tip+1}
                >
                    {texts.Tips[tip]}
                </C.Tip>
            </C.Left>
        </C.Container>
    )
}