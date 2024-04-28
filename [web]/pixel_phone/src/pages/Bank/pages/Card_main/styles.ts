import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #e1e1e6;
  color: #121214;

  & > .head {
    width: 100%;
    display: flex;
    padding: 0 0 48px 0;
    background: #8b3ac2;

    svg,
    h2 {
      color: #f2f2fa;
      font-weight: 500;
    }
  }

  .main {
    margin-top: -44px;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .card {
      width: 100%;
      padding: 8px;
      border-radius: 4px;
      background: #fcf8f4;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      align-items: center;
      gap: 6px;

      img {
        width: 40%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }

      p {
        font-size: 12px;
        font-weight: 500;
        text-align: start;
      }

      span {
        font-size: 10px;
      }
    }
  }

  .limit {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background: #fcf8f4;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h4 {
      font-size: 12px;
      font-weight: 500;
      color: #552e8c;
    }

    .bar {
      width: 100%;
      height: 8px;
      display: flex;
      justify-content: flex-start;
      background: #d9d9d9;
      border-radius: 2px;
      overflow: hidden;

      .fill {
        height: 100%;
        background: #8b3ac2;
      }
    }

    .values {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        font-size: 10px;
        font-weight: 500;
      }

      div:last-child {
        align-items: flex-end;
      }

      p {
        font-size: 12px;
      }

      .used p {
        color: #341959;
      }

      .free p {
        color: #8d8d99;
      }
    }
  }

  .invoice {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    background: #fcf8f4;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h4 {
      font-size: 12px;
      font-weight: 500;
      color: #552e8c;
    }

    .values {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        font-size: 10px;
        font-weight: 500;
      }

      div:last-child {
        align-items: flex-end;
      }

      p {
        font-size: 12px;
      }

      .actual p {
        color: #341959;
      }

      .next p {
        color: #8d8d99;
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btn {
      width: 40%;
      padding: 8px;
      border-radius: 4px;
      background: #fcf8f4;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #202024;
      }
    }
  }

  .password {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    .card {
      padding: 8px;
      background: #fcf8f4;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p {
        color: #575761;
        font-size: 14px;
      }

      .value {
        display: flex;
        align-items: center;
        gap: 4px;

        p {
          font-size: 12px;
          font-weight: 500;
        }

        span {
          width: 45px;
          height: 12px;
          background: #8d8d99;
          border-radius: 4px;
          opacity: 0.6;
        }
      }

      .submit {
        margin-top: 8px;
      }
    }
  }
`;
