import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    z-index: 10;
  }

  h1 {
    color: #6638a6;
    text-align: center;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fcf8f4;
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
      color: #552e8c;
      font-weight: 600;
    }
  }
`;
