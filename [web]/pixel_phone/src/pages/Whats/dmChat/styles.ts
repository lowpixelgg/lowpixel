import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 4px;

  background: url("src/assets/whatsbg.svg");

  .head {
    width: 100%;
    padding: 2px 8px 4px 8px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background: #1f2c34;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .name {
      width: 100%;

      h4 {
        font-size: 12px;
        font-weight: 500;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  .messagesList {
    padding: 0 8px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    transition: 0.2s ease;
    display: flex;
    flex-direction: column;

    .wrap {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 4px;
      font-size: 10px;
    }

    .chatBox {
      display: flex;
      max-width: 75%;
      padding: 6px 8px;
      align-self: flex-start;
      background: #272837;
      border-radius: 6px;
      color: #f2f2fa;
      column-gap: 8px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      align-items: flex-end;
    }

    .isAudio {
      width: 100%;
      /* height: 40px; */

      .user {
        position: relative;

        span {
          width: 14px;
          height: 14px;
          position: absolute;
          bottom: -4px;
          right: 0;
          background: #272837;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .foot {
      display: flex;
      align-items: flex-end;
      font-size: 8px;
      gap: 2px;

      svg {
        margin-bottom: -2px;
      }
    }

    .audio {
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        flex-shrink: 0;
      }

      .ratio {
        background: #128c7e;
        color: inherit;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 10px;
      }
    }

    .react-waves {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .chatBox.isMe {
      align-self: flex-end;
      background: #075e54;

      .user span {
        background: #075e54;
      }

      .user,
      .ratio {
        order: -1;
      }
    }
  }

  .chatInput {
    width: 100%;
    display: flex;
    padding: 4px 8px;
    gap: 4px;

    .inputBox {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      background: #1f2c34;
      border-radius: 16px;
    }

    .audioDrag {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 10px;
      background: #1f2c34;
      border-radius: 16px;
      font-size: 10px;
      transform-origin: center right;

      .left {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 10px;
      }

      .right {
        display: flex;
        align-items: flex-end;
        gap: 2px;
        color: #dee2e6;
      }
    }

    input {
      width: 100%;
      font-size: 12px;
      color: #f8f9fa;
    }

    .audioBtn {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      aspect-ratio: 1;
      position: relative;

      .mic {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #008069;
        transition: ease-in;
        z-index: 5;
      }

      .drag {
        padding: 8px;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        background: #1f2c34;
        border-radius: 16px;
        z-index: 2;
        position: absolute;
        bottom: 8px;
        right: 0;
      }
    }

    .sendbtn {
      width: 30px;
      height: 30px;
      padding-left: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #008069;
      aspect-ratio: 1;
    }

    .RecorderAudio {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      justify-content: space-between;
      width: 100%;
      height: 30px;
      background-color: #1f2c34;

      transition: all 0.5s;

      .CancelAudio {
        color: white;
        & > svg:hover {
          color: #a84242;
          transition: all 0.3s;
        }
      }

      .PauseAudio:hover {
        transition: all 0.3s;
        filter: brightness(0.8);
      }

      .SubmitAudio {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 1.563rem;
        border-radius: 4px;
        background-color: #018865;

        transition: all 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      strong {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }
`;
