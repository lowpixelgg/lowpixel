import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #121b22;

  .settingsTop {
    width: 100%;
    position: absolute;
    top: 38px;
  }

  .infosTop {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .topArrowIcon {
    font-size: 19px;
  }

  .infosTopText {
    margin-left: 12px;
    font-size: 13px;
    font-weight: 500;
  }

  .userInfos {
    margin-top: 14px;
    margin-left: 16px;
    position: relative;
  }

  .rightInfos {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .userName {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: #f5fcff;
  }

  .userStatus {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;

    color: #9aa7ad;
  }

  .userStatus::placeholder {
    color: #9aa7ad;
  }
`;
