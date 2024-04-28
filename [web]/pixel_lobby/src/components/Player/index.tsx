import * as C from './style';
import { useEffect, useState, useContext } from 'react';
import LanguagesText from '../../global/Language.json';
import { getGreeting } from '../../utils/getGreeting';
import { langContext } from '../../global/LanguageContext';
import { Languages } from '../../@types';

import hand from '../../assets/hand.gif';
import list from '../../assets/list.svg';
import plus from '../../assets/plus.svg';
import icon from '../../assets/icon.png';

interface Character {
    name: string;
    job: string;
    playtime: string;
}

interface Achievement {
    name: string;
    description: string;
    progress?: number;
    progresstotal: number;
    date: string;
}


export const PlayerBar = () => {
    
    const [optionactive, setOptionActive] = useState(0);
    const [characters, setCharacters] = useState<Character[]>([])
    const [achievements, setAchievements] = useState<Achievement[]>([])
    const [select, setSelect] = useState(-1)

    const LangCtx = useContext(langContext);

    const index = getGreeting();
    const langObj: Languages = LanguagesText;
    const texts = langObj[LangCtx?.lang || "eng"];

    useEffect(() => {
        setCharacters([
            {
                name: 'João Silva',
                job: texts['Jobs'][0],
                playtime: '1h 30m',
            },
            {
                name: 'Vitor Ribeiro',
                job: texts['Jobs'][1],
                playtime: '1h 30m',
            },
            {
                name: 'Pedro Henrique',
                job: texts['Jobs'][1],
                playtime: '1h 30m',

            }
        ]);

        setAchievements([
            {
                name: 'Novo Começo',
                description: 'Entrar no jogo pela primeira vez',
                progress: 1,
                progresstotal: 1,
                date: '24 Aug 2023'
                
            },
            {
                name: 'Rookie',
                description: 'Completar o tutorial',
                progress: 0,
                progresstotal: 1,
                date: '24 Aug 2023'
            },
            {
                name: 'Starter',
                description: 'Chegue ao nivel 3',
                progress: 2,
                progresstotal: 3,
                date: '24 Aug 2023'
            }
        ])
        
    }, [LangCtx?.lang])

    return (
        <C.Container>
            <C.Greetings>
                {texts['Greetings'][index -1]}, Z4.
                <C.Hand src={hand} alt="Hand Icon" width={25}/>
            </C.Greetings>
            <C.Options>
                <C.Option active={optionactive == 0 ? "true" : "false"} onClick={() => setOptionActive(0)}>
                    <img src={list} alt="List Icon" width={17} height={18}/>
                    <C.OptionText>{texts['Options'][0]}</C.OptionText>
                </C.Option>
                <C.Option active={optionactive == 1 ? "true" : "false"} onClick={() => setOptionActive(1)}>
                    <img src={plus} alt="List Icon" width={17} height={18}/>
                    <C.OptionText>{texts['Options'][1]}</C.OptionText>
                </C.Option>
            </C.Options>
            
            <C.OptionsContainer>
                {optionactive == 0 && characters.map((character, index) => (
                    <C.Character key={index} onClick={() => setSelect(index)} active={select == index ? "true" : "false"}>
                        <C.CharacterName>{character.name}</C.CharacterName>
                        <C.CharacterDescription>
                            {texts["Messages"][0]}: {character.job} <br/>
                            {texts["Messages"][1]}: {character.playtime}
                            </C.CharacterDescription>
                    </C.Character>
                ))}
                {optionactive == 1 && achievements.map((achievement, index) => (
                    <C.Achivement key={index}>
                        <C.AchivementName>{achievement.name}</C.AchivementName>
                        <C.AchivementDescription>{achievement.description}</C.AchivementDescription>
                        <C.More>...</C.More>
                        <C.AchivementProgress>
                            <C.AchivementProgressIcon src={icon} alt='...' />
                            <C.AchivementProgressTitle>Progresso</C.AchivementProgressTitle>
                            <C.AchivementProgressValue>{achievement.progress || 0}/{achievement.progresstotal}</C.AchivementProgressValue>
                        </C.AchivementProgress>
                        <C.AchivementProgressWrapper>
                            <C.AchivementProgressBar value={(achievement.progress || 0) / achievement.progresstotal} />
                            <C.Date>{achievement.date}</C.Date>
                        </C.AchivementProgressWrapper>
                    </C.Achivement>
                ))}
            </C.OptionsContainer>
            
        </C.Container>
    )
}