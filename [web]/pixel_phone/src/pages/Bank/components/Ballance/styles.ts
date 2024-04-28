import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #8d8d99;
  border-radius: 4px;
  color: #575761;

  & > p {
    font-size: 10px;
    font-weight: 500;
  }

  .value {
    max-width: 50%;
    display: flex;
    align-items: center;
    gap: 4px;

    p {
      font-size: 10px;
    }

    span {
      width: 64px;
      height: 12px;
      background: #8d8d99;
      border-radius: 4px;
      opacity: 0.6;
    }
  }
`;
