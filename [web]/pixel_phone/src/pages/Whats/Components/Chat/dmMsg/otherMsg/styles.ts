import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  margin-left: -24px;
  margin-top: 5px;
  width: 100%;

  .otherMsgContainer {
    max-width: 160px;
    height: auto;

    background: #1f2c34;
    border-radius: 8px;
  }

  .otherMsgText {
    position: relative;
    margin: 0 8px 12px 8px;
    top: 9px;

    font-size: 12px;
    line-height: 19px;
    letter-spacing: -0.3px;

    color: #fafafa;
  }

  .otherMessageInfo {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    left: 79%;
    margin-bottom: 6px;
  }

  .otherMsgHours {
    margin-right: 3px;
    height: 13px;
    //top: -6px;

    font-size: 10px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.5px;

    color: #fafafa;
  }
`;
