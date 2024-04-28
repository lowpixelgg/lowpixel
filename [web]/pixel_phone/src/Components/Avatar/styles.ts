import styled from "styled-components";


type Props = { size: number; };

export const Container = styled.div<Props>`
  border-radius: 50%;
  img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
  }
`;
