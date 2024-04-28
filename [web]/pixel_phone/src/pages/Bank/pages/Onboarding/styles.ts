import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: #fcf8f4;

  .illustration {
    width: 104px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;

    .row1 {
      display: flex;
      gap: 4px;
      align-items: center;

      span {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background: #341959;
        flex-shrink: 0;
      }

      h2 {
        font-size: 16px;
        color: #341959;
      }
    }

    .row2 {
      width: 100%;
      padding-right: 8px;
      p {
        font-size: 10px;
      }
    }
  }

  .submit {
    width: 136px;
    padding: 6px 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2f2fa;
    background: #552e8c;
    font-size: 10px;
  }
`;
