import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fcf8f4;

  .wrap {
    width: 100%;
    padding: 0 8px;
  }

  .navs {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    button {
      width: 32%;
      font-size: 12px;
      text-align: center;
      display: block;
    }

    span {
      position: absolute;
      width: 30%;
      height: 2px;
      bottom: 4px;
      left: 8px;
      background: #6638a6;
      transition: 0.2s ease;

      &.Rg {
        left: 8px;
        transform: translate(0);
      }

      &.phone {
        left: 5%;
        transform: translateX(50%);
      }
    }
  }

  .form {
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
  }
`;
