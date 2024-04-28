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
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    h3 {
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .name {
        color: #696975;
      }
    }

    .col {
      display: flex;
      flex-direction: column;

      &:nth-child(2) {
        align-items: flex-end;
      }
    }
  }

  .submit {
    margin-top: 48px;
  }
`;
