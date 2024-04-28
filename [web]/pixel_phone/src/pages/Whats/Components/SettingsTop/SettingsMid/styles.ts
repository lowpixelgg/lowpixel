import styled from "styled-components";

export const Container = styled.div`
  //height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
  margin-left: -12px;

  background: #121B22;

  .menuContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
      color: #84959C;
    }

    .item {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }


    .rightInfos {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 17px;

        color: #F5FCFF;
      }

      .description {
        width: 150px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 15px;

        color: #9AA7AD;
      }
    }
  }

  .appVersion {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 85%;	

    position: absolute;
    bottom: 44px;
    
    .versionTop {
      opacity: 0.5;
      font-family: 'Helvetica';
      font-weight: 400;
      margin-bottom: 2px;

      font-size: 9px;
      color: #9AA7AD;
    }

    .versionBottom {
      font-family: 'Helvetica';
      font-weight: bold;
      font-size: 11px;
      color: #4AD199;
    }
  }
`;
