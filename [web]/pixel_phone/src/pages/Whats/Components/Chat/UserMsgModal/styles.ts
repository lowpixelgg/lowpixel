import styled from "styled-components";

export const Container = styled.div`
  /* height: 100%; */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 32px;

  .userMsgContainer {
    padding-left: 8px;
    height: 32px;

    width: 228px;
    background-color: #1f2c34;

    display: flex;
    flex-direction: row;
    align-items: center;

    z-index: 1;
  }

  .backIcon {
    font-size: 22px;
  }

  .userAvatar {
    margin-left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
  }

  .userName {
    font-size: 13px;
    font-weight: 500;
    margin-left: 5px;
  }

  .callIcon {
    margin-left: 15px;
  }

  .phoneIcon {
    margin-left: 15px;
    font-size: 13px;
    transform: rotate(90deg);
  }

  .dotsIcon {
    font-size: 16px;
    margin-left: 12px;
  }

  .iconsNav {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 40px;
  }

  .dotsDiv {
    display: none;
    position: absolute;
    top: 77px;
    right: 8px;

    width: 130px;
    height: auto;

    font-size: 10px;

    background-color: #192730;

    .dotsTxt {
      padding: 10px 9px;

      font-weight: 400;
      font-size: 11px;
    }

    .dotsTxt:hover {
      background-color: #1f2c34;
    }
  }
`;
