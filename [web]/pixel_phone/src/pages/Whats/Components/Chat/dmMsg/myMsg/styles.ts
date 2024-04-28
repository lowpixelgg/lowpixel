import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  margin-left: 24px;
  margin-top: 5px;
  width: 100%;

  .myMsgContainer {
    max-width: 160px;
    height: auto;

    background: #005d4b;
    border-radius: 8px;
  }

  .msgText {
    position: relative;
    margin: 0 8px 12px 8px;
    top: 9px;

    font-size: 12px;
    line-height: 19px;
    letter-spacing: -0.3px;

    color: #fafafa;
  }

  .messageInfo {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    left: 68%;
    margin-bottom: 6px;
  }

  .msgHours {
    margin-right: 3px;
    height: 13px;
    //top: -6px;

    font-size: 10px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.5px;

    color: #fafafa;
  }

  .readMessage {
    height: 13px;

    font-size: 10px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.5px;

    color: #fafafa;
  }

  .userMsgContainer {
    width: 100%;
    background-color: #1f2c34;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .userAvatar {
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  .userName {
    font-size: 13px;
    font-weight: 500;
    margin-left: 5px;
  }
`;
