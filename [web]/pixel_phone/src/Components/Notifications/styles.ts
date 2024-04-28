import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 8px 48px;
  background-color: rgba(16, 16, 17, 0.8);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 110;
  color: #f6f6f6;
  font-size: 11px;
  font-weight: 500;
  overflow: hidden;

  .date {
    font-size: 10px;
  }

  .btnsContainer {
    width: 100%;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    flex-shrink: 0;
    svg {
      font-size: 16px;
    }
  }

  .light {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 18px;
      color: #c4c4cc;
      flex-shrink: 0;
    }

    .lightBar {
      width: 100%;
      height: 4px;
      border-radius: 8px;
      background-color: rgba(124, 124, 138, 1);

      .controll {
        margin-top: -8px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #f6f6f6;
        transition: linear;
      }

      .fillbar {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #2a66ff;
        transform-origin: 0% 50%;
        transition: linear;
      }
    }
  }

  .notifies {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    overflow-y: auto;

    .NotifyCard {
      width: 100%;
      padding: 8px;
      background-color: rgba(124, 124, 138, 0.4);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: relative;

      & > section {
        display: flex;
        gap: 8px;
      }

      .head {
        flex-shrink: 0;
        display: flex;
        align-items: flex-start;
        position: relative;

        .avatar img {
          border-radius: 8px !important;
        }

        .appIcon {
          position: absolute;
          top: 20px;
          right: -4px;
          width: 16px;
          border-radius: 50%;
        }
      }

      .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        p {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .content--head {
          display: flex;
          align-items: center;
          gap: 4px;

          h5 {
            font-size: 9px;
            font-weight: 500;
          }

          small {
            font-size: 8px;
            font-weight: 300;
          }
        }

        .content--msg {
          display: flex;
          align-items: flex-start;
          max-height: 32px;
          font-size: 8px;
          font-weight: 400;
          overflow-y: hidden;
        }
      }

      .btns {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        button {
          color: #38eed8;
          font-size: 9px;
          font-weight: 600;
        }

        span.divider {
          width: 1px;
          height: 100%;
          background: #38eed8;
        }
      }

      &.card {
        gap: 4px;
        .app {
          display: flex;
          align-items: center;
          gap: 8px;

          svg {
            font-size: 12px;
            color: #f6f6f6;
          }

          p {
            font-size: 10px;
          }
        }

        .content--msg {
          flex-direction: column;
          max-height: none;
          gap: 2px;

          h5 {
            font-size: 9px;
            font-weight: 500;
          }

          p {
            font-size: 8px;
            max-height: 32px;
          }
        }

        .content {
          flex-direction: row;
          gap: 8px;
        }
      }

      .configBtn {
        position: absolute;
        right: 8px;
        top: 4px;

        svg {
          font-size: 10px;
          color: #7c7c8a;
        }
      }
    }
  }

  .actions {
    margin-top: -8px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    button {
      font-size: 9px;
      font-weight: 500;
      color: #f6f6f6;
    }
  }
`;


type Props = { active?: any };

export const Press = styled.button<Props>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#2A66FF" : "#7c7c8a")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s linear;

  svg {
    font-size: 16px;
    color: #f2f2f2;
  }
`;
