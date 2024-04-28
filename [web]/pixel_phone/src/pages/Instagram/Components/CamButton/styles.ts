import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & > button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.actionBtn {
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
  }
`;
