import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};
  overflow-y: hidden;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 8px 8px;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    h4 {
      font-weight: 500;
      font-size: 14px;
    }

    .right svg {
      transition: 0.2s ease;
    }
  }

  .imagesWrap {
    width: 100%;
    display: grid;
    overflow-y: auto;
    display: grid;
    align-content: start;
    gap: 1px;
    grid-template-columns: 1fr 1fr 1fr;

    .item {
      aspect-ratio: 1;
      display: flex;
      position: relative;

      img {
        object-fit: cover;
      }
    }

    .radio {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #f2f2fa;
      background: rgba(141, 141, 153, 0.4);
      color: #f2f2fa;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in;

      &.selected {
        background: #4f4fcf;
      }
    }
  }
`;
