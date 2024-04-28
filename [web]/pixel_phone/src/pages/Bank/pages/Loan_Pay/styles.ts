import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fcf8f4;
  color: #29292e;

  main {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  main > h3 {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 0;
    border-bottom: 1px solid #8d8d99;

    span {
      color: #6638a6;
      font-weight: 600;
    }
  }

  .loanList {
    width: 100%;
    max-height: 240px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 8px;
      background: rgba(225, 225, 230, 0.6);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);
    }

    .mark {
      width: 16px;
      height: 16px;
      border: 2px solid #505059;
      border-radius: 4px;
      flex-shrink: 0;
      display: flex;
      transition: 0.2s ease-in-out;

      &.check {
        background: #552e8c;
      }

      svg {
        margin: -2px;
      }
    }

    .infos {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;

      p {
        font-size: 12px;
        font-weight: 500;
      }

      small {
        font-size: 10px;
        color: #575761;
      }
    }

    .price {
      width: 100%;
      text-align: end;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .total {
    width: 100%;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #8d8d99;

    p {
      font-size: 12px;
      font-weight: 600;
      color: #6638a6;
    }

    .submit {
      width: 80px;
    }
  }
`;
