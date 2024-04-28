import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: table-footer-group;
`

export const Right = styled.div`
    width: fit-content;
    height: 38px;

    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;
    gap: 21px;
    position: absolute;
    right: 0;
    bottom: 0;
`

export const Text = styled.p`
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    text-align: right;
    outline: 0px solid transparent;
    color: rgba(255, 255, 255, 0.521);

    span {
        color: rgb(255, 255, 255);
    }
`

export const Button = styled.button`
    width: 124px;
    height: 38px;

    background: rgba(253,1,80,0.6);
    border-radius: 19px;

    font-family: "Exo 2";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    border: none;
    text-decoration: none;
    outline: none;
    color: #ffffff;

    transition: all linear 0.4s;

    &:hover {
        cursor: pointer;
        opacity: 40%;
        transform: scale(0.98);
    }
`

export const Left = styled.div`
    width: 431px;

    padding: 30px 50px;
`

export const Title = styled.h1`
    height: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    transition: 2s;
`

export const Tip = styled(motion.p)`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: #c4c4cc;
    opacity: 1;
    transition: opacity 5s ease-in;
`