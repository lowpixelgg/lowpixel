import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #121B22;

  .topArrowIcon {
    margin-left: 10px;
    font-size: 20px;
  }

  .userInfos {
    display: flex;
    flex-direction: row;
  }

  .divisor {
    margin-bottom: 2px;
    width: 100%;
    height: 2px;
    background-color: #232E34;
  }
`;
