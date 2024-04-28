import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px 4px 0;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;

      h4 {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .right {
      color: #04d361;
      &:disabled {
        color: ${({ theme }) => theme.background40};
      }

      svg {
        transition: 0.4s ease;
      }
    }
  }

  .row {
    width: 100%;
    padding: 8px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #7c7c8a;
  }

  .row1 {
    margin-top: -8px;
    justify-content: space-between;

    button {
      max-width: 50%;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      color: ${({ theme }) => theme.text10};

      p {
        max-height: 14px;
        overflow: hidden;
      }

      svg {
        flex-shrink: 0;
      }
    }
  }

  .rowInput {
    justify-content: center;
    input {
      width: 95%;
      font-size: 10px;
      color: ${({ theme }) => theme.text10};

      &::placeholder {
        color: #8d8d99;
      }
    }
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
