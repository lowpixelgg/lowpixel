import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 4% 8%;

  display: flex;
  flex-direction: column;
  color: #202024;

  .nav {
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        font-size: 16px;
      }
      &:disabled {
        cursor: default;
        color: #a8a8b3;
      }
    }
    .next {
      font-size: 12px;
    }
  }

  .page1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    position: relative;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    .language {
      width: fit-content;
      display: flex;
      align-items: center;
      font-size: 10px;
      svg {
        font-size: 16px;
      }
    }
    .next {
      margin-top: 16px;
      padding: 8px;
      width: fit-content;
      display: flex;
      background-color: #008ded;
      border-radius: 50%;
      svg {
        font-size: 20px;
        color: #fff;
      }
    }
    .bottom {
      width: 100%;
      position: absolute;
      bottom: 10px;
      left: 0;
      font-size: 10px;
      text-align: center;
    }
  }

  .page2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    & > p {
      font-size: 8px;
      margin-bottom: 32px;
    }
    h4 {
      width: 85%;
      font-weight: 400;
      font-size: 12px;
    }
    ul {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      li > button {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 10px;
        svg {
          font-size: 16px;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          small {
            width: fit-content;
            font-weight: 500;
            font-size: 6px;
          }
        }
      }
    }
  }

  .page3 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    h1 {
      font-weight: 400;
      font-size: 28px;
    }
    & > p {
      font-size: 10px;
    }
    .input {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      span {
        font-size: 8px;
        color: #ff0000;
      }
    }
    .password {
      border: none;
      background-color: #dddddd;
      padding: 8px 12px;
      font-size: 10px;
      border-radius: 4px;
    }
    .switchContainer {
      display: flex;
      align-items: center;
      gap: 4px;
      & > label.text {
        font-size: 10px;
        cursor: pointer;
      }
    }
    .switch {
      background-color: #e1e1e6;
      border: 1.6px solid #008ded;
      width: 28px;
      height: 16px;
      border-radius: 8px;
      position: relative;
      input {
        opacity: 0;
        width: 0;
        height: 0;
        &:checked + .slider {
          transform: translateX(12px);
        }
      }
      .slider {
        position: absolute;
        cursor: pointer;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        background-color: #008ded;
        transition: 0.4s;
      }
    }

    .conect {
      margin-top: 24px;
      width: 80px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #008ded;
      font-size: 12px;
      color: #e1e1e6;
      border-radius: 20px;
    }
  }

  .page4 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div:first-child {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    h1 {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }
    p {
      font-size: 10px;
      font-weight: 500;
      text-align: center;
    }
    .MuiCircularProgress-root {
      margin: auto;
      color: #5d5dfc;
    }
  }
`;
