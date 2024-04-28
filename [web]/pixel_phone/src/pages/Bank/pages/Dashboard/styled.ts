import styled from "styled-components";

let pi = 3.14159265359;

let chartPercetages = {
  a1: 50,
  a2: 25,
  a3: 25,
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2fa;
  color: #29292e;

  header {
    width: 100%;
    padding: 8px 12px 40px 12px;
    display: flex;
    justify-content: space-between;
    background: #8b3ac2;
    color: #f2f2fa;

    h3 {
      font-size: 14px;
      font-weight: 300;
    }

    p {
      font-size: 12px;
      font-weight: 500;
    }

    .ballanceSkeleton {
      width: 100%;
      height: 14px;
      background: #dbdbdb;
      border-radius: 4px;
      opacity: 0.6;
    }

    .balance {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }

  .navs {
    width: 100%;
    margin-top: -28px;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;

    & > .navButton {
      width: 31%;
      height: 52px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      background: #fcf8f4;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);

      &.disabled {
        background: rgba(200, 200, 200, 0.2);
      }
    }

    .icon {
      display: flex;
      padding: 6px;
      background: rgba(225, 225, 230, 0.6);
      border-radius: 50%;
      img {
        width: 14px;
      }

      &.disabled {
        fill: rgba(200, 200, 200, 0.5);
        background: rgba(200, 200, 200, 0.5);
      }
    }

    p {
      font-size: 8px;
      font-weight: 500;
    }
  }

  .sections {
    width: 100%;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  section.card {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fcf8f4;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.25);

    .head {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #8d8d99;
      }
    }

    .infos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
    }

    .values {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      h4 {
        font-size: 10px;
        font-weight: 500;
      }

      p {
        font-size: 10px;
        font-weight: 600;
      }

      li:nth-child(1) > p {
        color: #165dff;
      }
      li:nth-child(2) > p {
        color: #8b3ac2;
      }
    }

    .bars {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      border-left: 2px solid #8d8d99;
      gap: 8px;

      .bar {
        margin-left: -1px;
        height: 10px;
        border-radius: 0 2px 2px 0;
      }

      .invoice {
        background: #165dff;
      }

      .limit {
        background: #8b3ac2;
      }
    }
  }

  section.pix {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fcf8f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(99, 99, 99, 0.25);

    .icon {
      width: 32px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        font-size: 12px;
        font-weight: 600;
      }

      p {
        width: 90%;
        font-size: 8px;
        font-weight: 500;
      }
    }
  }

  footer {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    background: #fcf8f4;

    ul {
      display: flex;
      justify-content: space-between;
      gap: 4px;
    }

    li {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      button {
        padding: 6px;
        background: rgba(225, 225, 230, 0.6);
        border-radius: 50%;
      }

      p {
        font-size: 8px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`;
