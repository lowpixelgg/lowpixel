import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #f2f2fa;
  overflow: hidden !important;

  .graph {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    font-size: 10px;
    text-align: center;
    position: relative;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      p {
        font-weight: 500;
      }

      .bar {
        width: 8px;
        max-height: 64px;
        border-radius: 2px 2px 0 0;
        background: #8b3ac2;
      }

      small {
        margin-top: -2px;
        font-size: 10px;
      }
    }

    .border {
      width: 84%;
      height: 1px;
      position: absolute;
      bottom: 14px;
      left: 8%;
      background: #8d8d99;
    }
  }

  .invoices {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .invoices--card {
      width: 100%;
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      background: #fcf8f4;
      border-radius: 8px;
      box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      h4 {
        font-size: 12px;
        font-weight: 500;
        width: 100%;
        color: #552e8c;
      }

      p {
        font-size: 10px;
        text-align: center;
      }

      .value {
        font-size: 14px;
        font-weight: 600;
        color: #341959;
      }

      small {
        font-size: 10px;
        color: #7c7c8a;
      }
    }
  }

  .statement {
    overflow: hidden;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .statement--list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;

    svg,
    p {
      flex-shrink: 0;
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;

      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          font-size: 10px;
          font-weight: 500;
        }

        span {
          color: #125050;
          font-size: 10px;
        }
      }

      .value {
        font-size: 10px;
        font-weight: 600;
        color: #341959;
      }
    }
  }

  .submit {
    flex-shrink: 0;
  }
`;
