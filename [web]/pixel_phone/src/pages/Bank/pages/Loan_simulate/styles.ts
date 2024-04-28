import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background: #fcf8f4;
  color: #29292e;

  main {
    margin-top: 24px;
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
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
      padding: 6px 8px;
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

  .portion {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    strong {
      font-weight: 500;
    }
  }

  .total {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    p {
      font-size: 10px;
      font-weight: 500;
    }

    h4 {
      font-size: 20px;
      color: #140726;
      font-weight: 600;
    }

    small {
      font-size: 10px;
      color: #7c7c8a;
    }
  }
`;
