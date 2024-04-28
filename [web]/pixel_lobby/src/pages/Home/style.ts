import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: table;
    opacity: 1;
    transition: 2s;
    animation: ${appearFromLeft} 1s;
`