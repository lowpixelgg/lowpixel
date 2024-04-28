import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  background: #121b22;
  padding-bottom: 10px;

  & > nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .top {
    padding: 8px 12px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #8b9ca3;
    }

    .icons {
      height: 18px;

      svg {
        margin-left: 10px;
        font-size: 17px;
        color: #6d767c;
      }
    }
  }

  .nav {
    padding: 0 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: #8b9ca3;
    font-size: 9px;

    a {
      width: 60px;
      font-size: 10px;
      font-weight: 600;
      text-align: center;
    }

    .camera {
      height: 16px;
      font-size: 16px;
      margin-left: 4px;
      margin-right: auto;
    }

    .active {
      color: #00a884;
    }
  }

  .bar {
    width: 100%;
    height: 2px;
    position: relative;
    display: flex;

    span {
      width: 56px;
      height: 100%;
      border-bottom: #00a884 2px solid;
      position: absolute;
      left: 44px;
      transition: ease-in;
    }
  }

  .mainContent {
    height: 100%;
    overflow-y: auto;
  }
`;
