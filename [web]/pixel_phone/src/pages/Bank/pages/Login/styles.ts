import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcf8f4;

  .bankLogo {
    width: 40px;
    position: absolute;
    top: 80px;
  }

  .form {
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;

    h3 {
      font-size: 20px;
      color: #6638a6;
    }

    p {
      font-size: 10px;
      color: #8d8d99;
    }
  }

  .field {
    margin-bottom: 16px;
    width: 160px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0px 8px;

    label {
      padding-left: 4px;
      width: 100%;
      font-size: 10px;
      font-weight: 600;
      color: #29292e;
      text-align: start;
    }

    input {
      width: 32px;
      height: 32px;
      border: 2px solid #8d8d99;
      border-radius: 4px;
      padding: 4px;
      text-align: center;
      -webkit-text-security: disc;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        display: none;
      }

      &.filled {
        background: #ddd7d1;
      }
    }
  }
`;
