import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    padding: 16px 16px 20px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    transform-origin: top;
    background: #140726;

    p {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: #f2f2fa;
    }

    img {
      width: 40px;
    }
  }

  .cam {
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 48px;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0);

    ::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 8px;
      box-shadow: 0 0 0 16px #140726;
      z-index: 1;
    }

    div {
      width: 64px;
      height: 64px;
      position: relative;

      span {
        background: #f2f2fa;
        border-radius: 4px;
        position: absolute;
      }
    }

    .top {
      width: 100%;
      height: 4px;
      top: 0;
    }
    .bottom {
      width: 100%;
      height: 4px;
      bottom: 0;
    }
    .left {
      width: 4px;
      height: 100%;
      left: 0;
    }
    .right {
      width: 4px;
      height: 100%;
      right: 0;
    }
  }

  .action {
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #140726;

    & > button {
      padding: 8px;
      border-radius: 50%;
      background: #f2f2fa;
      color: #403d3b;
    }
  }
`;
