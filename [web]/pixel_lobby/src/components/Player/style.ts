import styled from 'styled-components';

interface Option {
    active?: string;
}

export const Container = styled.div`
    width: 300px;

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 120px;
    top: 20vh;
    gap: 15px;

`

export const Greetings = styled.h1`
    width: 100%;
    height: 20px;

    position: relative;
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
`

export const Hand = styled.img`
    width: 25px;

    margin-left: 3px;
`

export const Options = styled.div`
    width: 100%;

    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    text-align: right;
`

export const Option = styled.div<Option>`
    width: 147.01px;
    height: 36px;

    transition: all linear 200ms;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    text-align: right;
    padding-left: 10px;
    transform: 2s;
    gap: 10px;
    border-bottom: ${props => props.active == "true" ? "3px solid rgba(255, 255, 255, 0.774);" : "3px solid rgba(255, 255, 255, 0.1);"};

    &:hover {
        cursor: pointer;
        transform: scale(0.97);
        transition: 0.2s;
    }
`

export const OptionText = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff;
`

export const OptionsContainer = styled.div`
    width: 100%;
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;
`

export const Character = styled.div<Option>`
    width: 100%;
    height: 86px;
    
    transition: all linear 200ms;
    position: relative;
    box-sizing: border-box;
    background: ${props => props.active == "true" ? "rgba(256,4,84,0.6)" : "rgba(255, 255, 255, 0.342)"};
    border: ${props => props.active == "true" ? "1px solid rgba(194, 210, 214, 0.349)" : "1px solid rgba(194, 210, 214, 0.349)"};
    border-radius: 7px;
    transition: 0.5s;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(0.99);
    }
`

export const CharacterName = styled.h1`
    height: 20px;
    position: relative;
    top: 8px;
    left: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: rgba(255, 255, 255, 0.95);
`

export const CharacterDescription = styled.p`
    height: 30px;
    position: relative;
    left: 20px;
    top: 15px;

    font-family: 'Inconsolata';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;

    color: rgba(255, 255, 255, 0.46);
`


export const Achivement = styled.div`
    margin-top: 10px;
    width: 100%;

    border-radius: 7px;
    background: rgb(41, 43, 49);
`

export const AchivementName = styled.h1`
    height: 20px;
    position: relative;
    top: 15px;
    left: 20px;
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: rgba(255, 255, 255, 0.95);
`   

export const AchivementDescription = styled.p`
    height: 25px;
    position: relative;
    left: 20px;
    top: 20px;

    color: rgba(255, 255, 255, 0.50);
    font-family: 'Exo 2';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;

`

export const More = styled.p`
    color:white;
    position: relative;
    left: 85%;
    bottom: 30px;
    font-family: 'Exo 2';
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }

`

export const AchivementProgress = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 17px;
    top: 8px;
`

export const AchivementProgressIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`

export const AchivementProgressTitle = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-family: 'Exo 2';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`

export const AchivementProgressValue = styled.p`
    position: relative;
    left: 50%;

    color: #FFF;
    text-align: right;
    font-family: 'Exo 2';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`

export const AchivementProgressWrapper = styled.div`
    top: 7px;
    position: relative;
    width: 88%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;

`

export const AchivementProgressBar = styled.progress`
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.10);

    &::-webkit-progress-bar {
        background: rgba(255, 255, 255, 0.10);
        border-radius: 10px;
    }

    &::-webkit-progress-value {
        background: rgba(252,4,76,0.9);
        border-radius: 10px;
    }

`

export const Date = styled.div`
    width: 90px;
    height: 15px;

    position: relative;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    border-radius: 17px;
    background: rgba(255, 255, 255, 0.06);  
    color: #989CAA;
    font-family: 'Exo 2';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    margin-bottom: 30px;
`