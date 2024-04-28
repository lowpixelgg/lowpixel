import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  main {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .head {
    width: 100%;
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-end;
    border-bottom: 2px solid #8d8d99;

    h4 {
      width: 100%;
      text-align: start;
      font-size: 10px;
      font-weight: 500;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: #341959;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-height: 240px;
    overflow-y: auto;

    .item {
      width: 100%;
      padding: 8px;
      background: rgba(225, 225, 230, 0.8);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      align-items: center;
      gap: 8px;

      .infos {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
      }

      svg,
      button {
        flex-shrink: 0;
      }

      p {
        font-weight: 500;
      }

      span {
        font-size: 10px;
        color: #575761;
      }

      button {
        background: #fff;
        padding: 2px;
        border-radius: 50%;
      }
    }

    .empty {
      width: 100%;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .submit {
    position: absolute;
    top: 400px;
  }
`;
