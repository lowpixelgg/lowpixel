import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  & > img {
    width: 80px;
    margin-bottom: -8px;
  }

  h4 {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  p {
    width: 90%;
    font-size: 10px;
    text-align: center;
    color: #505059;
    font-family: "Poppins", sans-serif;
  }
`;
