import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #4F7655;

  .top {
    position: absolute;
    top: 40px;

    padding: 8px 16px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #4F7655;
    z-index: 2;
  }

  .closeCamera {
    color: #c9c9c9;
    font-size: 20px;
  }

  .flashIcon {
    color: #c9c9c9;
    font-size: 20px;
  }

  .statusText {
    width: auto;
    max-width: 200px;
    
    font-size: 25px;
    font-weight: 500;

    color: #FFFFFF;
    opacity: 0.3;
  }

  .nextIcon {
    position: absolute;
    bottom: 45px;
    right: 20px;
    
    font-size: 23px;
    color: #c9c9c9;
  }

  .textIcon {
    color: #c9c9c9;
    margin-right: 13px;
  }

  .colorIcon {
    color: #c9c9c9;
  }
`;
