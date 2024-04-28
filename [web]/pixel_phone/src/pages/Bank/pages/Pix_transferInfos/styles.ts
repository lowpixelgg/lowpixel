import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #fcf8f4;
  color: #202024;

  section {
    width: 100%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

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

  .MuiCheckbox-root {
    padding: 0;
    padding-left: 8px;
    color: #6638a6;
    &.Mui-checked {
      color: #6638a6;
    }
  }

  .MuiSvgIcon-root {
    font-size: 16px;
  }

  .MuiTypography-root {
    font-size: 10px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    align-self: end;
  }

  .submit {
    margin-top: 32px;
  }
`;
