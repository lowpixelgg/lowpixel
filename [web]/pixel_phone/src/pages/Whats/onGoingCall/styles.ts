import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #000000;

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
    margin-bottom: 10px;
    width: 70%;

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;


      .acceptButton {
        margin-top: -10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #09D260;

        width: 30px;
        height: 30px;
        border-radius: 100%;
        
        .callAcceptedIcon {
          font-size: 13px;
          color: #fff;
          transform: rotate(90deg);
        }
      }

      .rejectButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #161a1e;
        
        width: 30px;
        height: 30px;
        border-radius: 100%;

        .callRejectedIcon {
          font-size: 13px;
          color: #ED5774;
          transform: rotate(223deg);
        }
      }

      .chatButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #161a1e;

        width: 30px;
        height: 30px;
        border-radius: 100%;

        .chatIcon {
          font-size: 13px;
        }
      }

    }
  }

.bottomText {
    margin-bottom: 10px;
    font-size: 10px;
    color: #84898C;
  }
`;
