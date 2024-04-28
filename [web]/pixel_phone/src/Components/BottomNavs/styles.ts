import styled from "styled-components";

type Props = { bottomstyles: any }

export const Container = styled.div<Props>`
  width: 100%;
  padding: 12px 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  * {
    z-index: 100;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background: ${({ bottomstyles }) => bottomstyles.background};
  }

  .bars {
    transform: rotate(90deg);
  }
  svg {
    color: ${({ bottomstyles }) => bottomstyles.color};
    font-size: 12px;
  }
`;
