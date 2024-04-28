import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  background: #121B22;

  .divisor {
    margin-top: 10px;
    width: 93%;
    height: 1px;
    background-color: #383B3C;
  }

  .infosTop {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 10px;

    .infosTopText {
        margin-left: 12px;
        font-weight: 600;
        font-size: 14px;
    }

    .topArrowIcon {
        font-size: 19px;
    }
  }

  .infosMid {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
