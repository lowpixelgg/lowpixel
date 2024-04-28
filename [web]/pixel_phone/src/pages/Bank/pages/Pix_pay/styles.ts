import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      width: 90%;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .form {
    position: absolute;
    top: 42%;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    font-size: 12px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

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

    .submit {
      margin-top: 16px;
    }
  }
`;
