import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fcf8f4;
  color: #101011;

  header {
    background: #8b3ac2;
    color: #fcf8f4;
    padding-bottom: 16px;
    border-radius: 0 0 12px 12px;

    svg {
      color: #fcf8f4;
    }

    .user {
      width: 100%;
      padding: 0 12px;
      display: flex;
      gap: 8px;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        font-size: 12px;
      }

      span {
        font-size: 10px;
        font-weight: 300;
      }
    }

    .avatar {
      border: 2px solid white;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 16px;
  }

  .nick {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    gap: 4px;
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: 1px solid #c4c4cc;

    span {
      color: #696975;
    }

    p {
      width: 100%;
      text-align: end;
    }

    input {
      width: 100%;
      text-align: end;
      font-size: 12px;
      background: rgba(225, 225, 230, 0.8);
      padding: 2px 4px;
      border-radius: 4px;
    }

    svg {
      flex-shrink: 0;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    h3 {
      width: 100%;
      padding: 4px 0;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #c4c4cc;
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

  .version {
    margin-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    font-weight: 500;
    padding: 4px 0;
    border-bottom: 1px solid #c4c4cc;
  }
`;
