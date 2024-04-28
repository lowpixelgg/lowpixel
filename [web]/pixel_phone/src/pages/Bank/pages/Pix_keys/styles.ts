import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h4 {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 0;
      border-bottom: 2px solid #c4c4cc;
      font-family: "Poppins", sans-serif;
    }
  }

  .card {
    width: 100%;
    padding: 8px;
    background: rgba(225, 225, 230, 0.4);
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.2);

    svg,
    button {
      flex-shrink: 0;
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 12px;
      gap: 2px;
    }

    & > p {
      color: #202024;
      font-weight: 500;
    }

    span {
      display: flex;
      column-gap: 2px;
      flex-wrap: wrap;
      color: #575761;
      font-size: 10px;
    }

    strong {
      font-weight: 500;
    }

    button {
      padding: 6px;
      border-radius: 50%;
      background: #fff;
      box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    }
  }
`;
