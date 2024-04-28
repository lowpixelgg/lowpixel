import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  margin-left: -12px;
  margin-top: 5px;

  .audioContainer {
    width: 200px;
    height: 50px;

    background: #1f2c34;
    border-radius: 8px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;

    .avatar {
      position: relative;
      left: 20px;

      display: flex;
      flex-direction: row;

      .userAvatar {
        width: 37px;
        height: 37px;

        border-radius: 100%;
      }

      .micBesideAvatar {
        position: relative;
        top: 20px;
        right: 13px;

        background-color: #1f2c34;
        color: #aeb1b4;
        border-radius: 100%;
        font-size: 18px;
        padding: 3px;
      }
    }

    .rightInfos {
      position: relative;
      left: 28px;

      .audioInfos {
        display: flex;
        flex-direction: row;
        align-items: center;

        position: relative;
        bottom: 6px;
        right: 19px;

        .playAudio {
          position: relative;
          right: 11px;
          font-size: 13px;

          color: #8596a0;
        }

        .stopAudio {
          width: 13px;
          height: 13px;

          position: relative;
          right: 11px;
          font-size: 15px;

          color: #8596a0;
        }

        .circleAudioBar {
          font-size: 11px;
        }

        .audioTimeBar {
          margin-right: -65px;
          width: 100px;
          height: 4px;

          background: #317e6e;
          border-radius: 0px 5px 5px 0px;
        }

        .audioTime {
          position: absolute;
          top: 16px;
          left: 13px;
          font-size: 10px;

          color: #e1e1e1;
        }

        .bottomAudioInfos {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }

  .messageInfo {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    left: 51%;
    margin-bottom: -32px;
  }

  .msgHours {
    position: relative;
    left: 20px;

    margin-right: 3px;
    height: 13px;
    //top: -6px;

    font-size: 10px;
    line-height: 13px;
    text-align: right;
    letter-spacing: 0.5px;

    color: #fafafa;
  }

  input[type="range"] {
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #3c4c55;
    border-radius: 20px;
  }
  input[type="range"]::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    border-radius: 17px;
    background: #8596a0;
    margin-top: -3px;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #74a9d8;
  }
`;
