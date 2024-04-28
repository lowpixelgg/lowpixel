import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 0 16px #101011;
    z-index: 1;
  }

  .videoOffOverlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #505059;

    svg {
      margin-bottom: 40px;
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .shadow {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f2f2fa;

    .left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 4px;

      .live {
        display: flex;
        padding: 4px 6px;
        background: rgba(226, 0, 55, 0.8);
        border-radius: 4px;
        font-size: 8px;
        color: #f2f2fa;
      }

      .views {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 2px 4px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        font-size: 10px;
        color: #f2f2fa;
      }
    }
  }

  .rightBtns {
    position: absolute;
    top: 36px;
    right: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .bottom {
    max-height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
  }

  .comments {
    max-height: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #f2f2fa;
    overflow-y: auto;

    h4 {
      font-weight: 500;
      text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
    }

    p {
      text-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 10px;
    }
  }

  .commentInput {
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      padding: 4px 8px;
      width: 100%;
      flex-grow: 1;
      border: 2px solid rgba(225, 225, 230, 0.6);
      color: #f2f2fa;
      border-radius: 20px;
      font-size: 10px;

      ::placeholder {
        color: rgba(225, 225, 230, 0.6);
      }
    }

    button {
      flex-shrink: 0;
    }
  }
`;
