import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  .middle {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    img {
      width: 160px;
    }

    h2 {
      width: 80%;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }
  }

  .submit {
    margin-top: 8px;
  }
`;
