import styled from 'styled-components';

export const LogoContainer = styled.div`
    width: fit-content;
    height: 47px;
    
    display: flex;
    position: absolute;

`

export const Logo = styled.img`

    padding: 10px 20px;
`

export const PlayerContainer = styled.div`
    width: fit-content;
    height: 47px;

    display: flex;
    float: right;
    position: relative;
    flex-direction: row;
    align-items: center;
    text-align: right;
    padding: 20px 20px;
    gap: 15px;

    img:hover {
        transition: all 500ms;
        cursor: pointer;
        opacity: 0.7;
    }
`

export const NotificationContainer = styled.div`
    display:flex;
    position:relative;
    
    &:hover {
        transition: all 500ms;
        cursor: pointer;
        opacity: 0.7;
    }
`

export const NotificationCircle = styled.div`
    width: 7px;
    height: 7px;

    border-radius: 50%;
    border: 1px solid #2a2b2f;
    background-color: #7878f4;
    position: absolute;
    top: 0;
    right: 0;
`

export const DateText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    text-align: right;
    outline: 0px solid transparent;
    color: rgba(255, 255, 255, 0.521);
`

export const Avatar = styled.img`
    position: relative;
    width: 43px;
    height: 43px;
    border-radius: 100%;
    background-size: cover;

    &:hover {
        transition: all 1s;
        transform: scale(0.98);
        cursor: pointer;
        opacity: 0.7;
    }
`