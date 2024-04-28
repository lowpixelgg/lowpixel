import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    z-index: 10;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.background20};
    z-index: 5;
  }

  .logo {
    width: 48px;
  }

  .rocket {
    position: absolute;
    bottom: 64px;
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
`;
