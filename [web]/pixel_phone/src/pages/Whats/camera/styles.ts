import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
    padding: 8px 16px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #000000;
    z-index: 2;
  }

  .center {
    width: 100%;
    flex-grow: 1;
    position: relative;
  }

  .center::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0 0 0 16px #000000;
    z-index: 1;
  }

  .closeCamera {
    font-size: 20px;
  }

  .flashIcon {
    font-size: 20px;
  }

  .bottom {
    width: 100%;
    padding: 8px 0 4px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background: #000000;
    z-index: 2;
  }

  .cameraButton {
    margin: 0px 25px;

    width: 45px;
    height: 45px;

    border: 3px solid #e7e7e7;
    border-radius: 100%;
  }

  .cameraIcon {
    margin-top: 9px;
    font-size: 24px;
  }

  .imageIcon {
    margin-top: 9px;
    font-size: 24px;
  }

  .bottomText {
    margin-top: 13px;
    font-weight: 400;
    font-size: 9px;
  }
`;
