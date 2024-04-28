import styled from "styled-components";

export const Container = styled.ul`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #121b22;
  font-size: 12px;
  margin-top: 8px;

  .chat {
    padding: 8px 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .center {
      width: 120px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;

      h3 {
        font-size: 12px;
        font-weight: 500;
      }

      p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        font-size: 10px;
        color: #869399;
      }
    }

    .infos {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: flex-start;
      p {
        font-size: 8px;
        color: #98a3a9;
      }
    }
  }

  .newBtn {
    aspect-ratio: 1;
    padding: 10px;
    border-radius: 50%;
    background-color: #00a884;
    position: absolute;
    right: 12px;
    bottom: 64px;
    z-index: 10;

    svg {
      transform: rotateY(180deg);
    }
  }
`;
