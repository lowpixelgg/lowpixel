import styled from "styled-components";

export const Container = styled.div`
  padding-left: 10px;

  .user {
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    /* .avatar {
            width: 35px;
            height: 35px;
            border-radius: 100%;
        } */

    .userRight {
      margin-left: 7px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;

      .chatInfos {
        h3 {
          font-size: 11.5px;
          font-weight: 500;
        }

        h4 {
          display: inline-block;
          padding-top: 2.5px;
          font-size: 10.5px;
          font-weight: 400;
          color: #869399;
        }

        .message {
          display: inline;
          margin-bottom: 0px;
          width: 11px;
          height: 8px;
          color: #ed5774;
        }
      }

      .hourOfMsg {
        margin-left: 23px;
        margin-bottom: 14px;
        color: #98a3a9;
        font-size: 8px;
      }
    }
  }

  .userCalls {
    margin-top: 12px;
    .user {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      .avatar {
        width: 35px;
        height: 35px;
        border-radius: 100%;
      }
      .userRight {
        margin-left: 7px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        .callInfos {
          h3 {
            font-size: 11.5px;
            font-weight: 500;
          }

          h4 {
            padding-top: 1px;
            font-size: 10.5px;
            font-weight: 400;
            color: #869399;
          }
          .callAcepted {
            margin-right: 1px;
            margin-bottom: -2px;
            font-size: 13px;
            color: #35c16b;
            transform: rotate(175deg);
          }
          .callRejected {
            margin-right: 1px;
            margin-bottom: -2px;
            font-size: 13px;
            color: #ed5774;
          }
        }

        .callIcon {
          position: absolute;
          margin-left: 145px;
          color: #16b08e;
          font-size: 12px;
          transform: rotate(90deg);
        }
      }
    }
  }

  .addIcon {
    position: absolute;
    top: 140px;
    right: 174px;
  }

  .statusAvatar {
    padding: 3.5px;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%236F7C84FF' stroke-width='3' stroke-dasharray='23%25%2c 5%25' stroke-dashoffset='64' stroke-linecap='butt'/%3e%3c/svg%3e");
  }

  .statusAvatarWithoutDash {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;
