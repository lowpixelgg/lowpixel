import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcf8f4;

  section {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .wrap {
      width: 100%;
      max-height: 320px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

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
    padding: 4px 8px;
    background: rgba(225, 225, 230, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(99, 99, 99, 0.2);

    h5 {
      font-size: 12px;
      font-weight: 500;
    }

    .key {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        font-size: 10px;
      }
    }

    strong {
      font-weight: 500;
    }

    .next {
      padding: 4px;
      border-radius: 50%;
      background: #f2f2fa;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  .card--col1,
  .card--col2 {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: flex-start;
  }

  .card--col2 {
    gap: 4px;
    align-items: flex-end;
  }
`;
