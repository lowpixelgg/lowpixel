import styled from "styled-components";

type Props = { hideBg?: boolean }

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ hideBg }) => (hideBg ? "none" : "#fcf8f4")};

  & > header {
    width: 100%;
    padding: 8px 16px 20px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #8b3ac2;
    border-radius: 0 0 20px 20px;
    transform-origin: top;

    p {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: #f2f2fa;
    }

    img {
      width: 40px;
    }
  }

  main {
    width: 100%;
    flex-grow: 1;
  }

  .form {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .profile {
      width: 56px;
      position: relative;

      button {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #fff;
        padding: 2px;
        border-radius: 50%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
    }

    input {
      width: 100%;
      padding: 4px 0;
      font-size: 10px;
      border-bottom: 1px solid #7c7c8a;
      ::placeholder {
        color: #8d8d99;
      }
    }

    .submit {
      margin-top: 32px;
    }
  }

  .password {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .field {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px 8px;

      label {
        width: 168px;
        font-size: 12px;
        font-weight: 500;
        color: #29292e;
      }

      input {
        width: 36px;
        height: 36px;
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

    .submit {
      margin-top: 12px;
    }
  }
`;
