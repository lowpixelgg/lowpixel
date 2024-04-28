import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};

  .head {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .container1 {
    width: 100%;
    margin-top: 16px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .pic {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4px;

      button {
        color: #5d5dfc;
        font-size: 10px;
        font-weight: 500;
      }
    }

    .row {
      width: 100%;
      padding: 8px 0;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.border10};

      input {
        width: 94%;
        color: ${({ theme }) => theme.text10};
        font-size: 10px;
      }
    }
  }

  .container2 {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h5 {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .highs {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    overflow-x: auto;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      position: relative;

      .delete {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0px;
        right: -2px;
        border-radius: 50%;
        background: #ff5343;
        color: #f2f2fa;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-bottom: 1px;
        }
      }

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid ${({ theme }) => theme.border10};
        object-fit: cover;
        /* display: flex;
        justify-content: center;
        align-items: center; */

        svg {
          color: ${({ theme }) => theme.text10};
        }
      }

      p {
        max-width: 36px;
        max-height: 12px;
        font-size: 10px;
        overflow: hidden;
        text-align: center;
      }
    }
  }
`;
