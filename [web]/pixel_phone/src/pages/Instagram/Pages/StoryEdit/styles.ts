import styled from "styled-components";



export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

type Props = { background: any }

export const ContentContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: 0.2s linear;
  z-index: 10;

  .textCard {
    max-width: 80%;
    display: flex;
    text-align: center;
    padding: 4px 8px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    border-radius: 6px;
    transition: ease;
    overflow-x: hidden;
    position: absolute;

    z-index: 10;
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & button {
    z-index: 10;
  }

  & > input {
    width: 80%;
    padding: 4px 8px;
    font-size: 14px;
    text-align: center;
    border-radius: 8px;
    z-index: 10;
    transition: 0.2s ease;
    &::placeholder {
      text-align: center;
      font-weight: 600;
      color: rgba(225, 225, 230, 0.8);
    }
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .back {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;

      .backIcon {
        margin-right: 2px;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    & > button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #f2f2fa;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .addText {
      padding-bottom: 2px;
      color: #101011;
      position: relative;
      h3 {
        font-size: 10px;
        z-index: 13;
      }

      span {
        position: absolute;
        right: -2px;
        bottom: 0px;
        background-color: #f2f2fa;
        border-radius: 50%;
        display: flex;
        z-index: 12;
      }
    }

    .changeBg span {
      width: 10px;
      height: 16px;
      background: #982649;
      border-radius: 2px;
      transition: 0.2s ease;
      &.input {
        transform: rotate(90deg);
        background: #101011;
      }
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
    }

    .edit {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .delete {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .next {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(16, 16, 17, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        transition: 0.2s ease-in;
      }
      &.submit > svg {
        margin-left: 3px;
        transform: rotate(90deg);
      }
    }

    .scaleBar {
      width: 4px;
      height: 120px;
      border-radius: 4px;
      background-color: rgba(124, 124, 138, 1);
      z-index: 10;
      position: absolute;
      bottom: 8px;
      left: 12px;

      .control {
        width: 12px;
        height: 12px;
        background: #f2f2fa;
        border-radius: 50%;
        margin-left: -4px;
        transition: ease;
      }
    }
  }

  .editLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;
