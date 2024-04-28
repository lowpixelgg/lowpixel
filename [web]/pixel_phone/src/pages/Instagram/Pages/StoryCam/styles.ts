import styled from "styled-components";

type Props = { background?: any }

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .shadow svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  &.textCam {
    background-color: ${({ background }) => background};
    transition: 0.2s ease-in;

    & > input {
      width: 100%;
      padding: 0 16px;
      font-size: 20px;
      color: #f2f2fa;
      text-align: center;
      &::placeholder {
        text-align: center;
        font-weight: 600;
        color: rgba(225, 225, 230, 0.8);
      }
    }
  }

  .nav {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & > div {
      margin-right: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    &.text > div {
      margin: 0;
    }

    &.text .bgBtn {
      width: 12px;
      height: 18px;
      background: #982649;
      border-radius: 4px;
    }
  }

  .changeCam {
    position: absolute;
    left: 16px;
    bottom: 26px;
  }
`;
