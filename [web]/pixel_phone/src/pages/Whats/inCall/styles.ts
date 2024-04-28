import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: url("../../../src/assets/whatsCall&MsgBg.svg");

  .center {
    margin-bottom: 40px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .userAvatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .userName {
    font-size: 20px;
    font-weight: 600;
    margin-top: 17px;
    color: #e3e3e3;
  }

  .callStatus {
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
    color: #e3e3e3;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 35px;

    width: 100%;
    height: 40px;

    background-color: #1F2C34;
  }

  .soundIcon {
    position: relative;
    left: 7px;

    font-size: 15px;
  }

  .cameraIcon {
    position: relative;
    left: 7px;

    font-size: 15px;
    border-radius: 100%;
  }

  .microphoneIcon {
    position: relative;
    left: 7px;
  }

  .hangUpIcon {
    font-size: 28px;
    padding: 7px;
    border-radius: 21px;
    background-color: #E91C43;
  }
`;
