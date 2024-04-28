import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.text10};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  * {
    z-index: 10;
  }

  .icon {
    margin: 12px 0;
    width: 48px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    text-align: center;
    button {
      width: 100%;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      padding: 6px;
      border-radius: 4px;
      width: 180px;
      background-color: #04d361;
      color: ${({ theme }) => theme.text10};
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    a {
      font-weight: 600;
      color: #00875f;
    }
  }

  .rocket {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: ${({ theme }) => theme.text10};
    p:nth-child(2) {
      color: #00b37e;
      font-weight: 500;
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.background10};
    z-index: 5;
  }
`;
