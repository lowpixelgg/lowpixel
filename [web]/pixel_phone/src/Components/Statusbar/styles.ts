import styled from "styled-components";

type Props = { statusbarstyle: any }

export const Container = styled.div<Props>`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background: ${({ statusbarstyle }) => statusbarstyle.background};
  transition: all 0.4s ease-in-out;
  z-index: 100;

  * {
    z-index: 100;
  }

  svg {
    font-size: 13px;
    color: ${({ statusbarstyle }) => statusbarstyle.color};
  }

  .left {
    max-width: 48%;
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    font-size: 10px;
    font-weight: 600;
    color: ${({ statusbarstyle }) => statusbarstyle.color};
  }

  .right {
    max-width: 48%;
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    gap: 2px;
  }

  .notifications {
    z-index: 20;
    .handle {
      width: 100%;
      height: 38px;
    }
  }

  .NotifyCard {
    width: 90%;
    margin: 0 auto;
    padding: 8px;
    background-color: rgba(80, 81, 79, 1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    color: #f6f6f6;

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
`;
