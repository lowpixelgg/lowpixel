import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fcf8f4;

  & > h3 {
    width: 100%;
    padding: 0 36px 0 12px;
    font-size: 10px;
    font-weight: 500;
  }

  .limit {
    margin-top: 32px;
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;

    small {
      margin-bottom: 2px;
      width: 100%;
      text-align: end;
      font-size: 10px;
      color: #7c7c8a;
    }

    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;

      label {
        font-size: 10px;
        font-weight: 500;

        span {
          color: #ff5343;
        }
      }

      input,
      textarea {
        border: none;
        resize: none;
        width: 100%;
        padding: 8px;
        background: rgb(216, 216, 216, 0.6);
        font-size: 10px;
        border-radius: 4px;
        &::placeholder {
          color: #575761;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          display: none;
        }
      }
    }

    .feedbacks {
      margin-top: 64px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      font-weight: 500;

      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      span {
        width: 12px;
        height: 12px;
        background: #7c7c8a;
        border-radius: 4px;
      }

      .new {
        color: #552e8c;
        font-weight: 600;

        span {
          background: #552e8c;
        }
      }

      .max {
        color: #7c7c8a;
      }
    }
  }

  .submit {
    margin-top: 56px;
  }
`;
