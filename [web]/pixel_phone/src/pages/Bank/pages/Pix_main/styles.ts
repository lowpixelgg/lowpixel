import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcf8f4;
  color: #121214;
  overflow-y: hidden !important;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .btns {
    /* margin-bottom: 16px; */
  }

  .btns .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 30%;
      background: rgba(225, 225, 230, 0.6);
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(99, 99, 99, 0.2);

      .icon {
        display: flex;
        background: #fcf8f4;
        padding: 6px;
        border-radius: 50%;
      }

      p {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }

  .others ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      width: 100%;
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid #c4c4cc;

      p {
        font-size: 12px;
        font-weight: 500;
        flex-grow: 1;
      }
    }
  }

  .statement {
    overflow: hidden;
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
`;
