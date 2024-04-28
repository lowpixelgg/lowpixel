import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f2f2fa;
  position: relative;

  * {
    z-index: 10;
  }

  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .viewBar {
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: #7c7c8a;

    .fill {
      width: 100%;
      height: 100%;
      background: #f2f2fa;
      border-radius: 4px;
      transform-origin: left center;
    }
  }

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: 4px;
    z-index: 2;
  }
`;
