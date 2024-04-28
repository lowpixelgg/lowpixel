import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  & > main {
    flex: 1;
    color: ${({ theme }) => theme.text10};
    background-color: ${({ theme }) => theme.background10};
    overflow-y: auto;
  }
  & > nav {
    padding: 0 12px;
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.background10};
    border-top: 2px inset rgba(225, 225, 225, 0.4);
    svg {
      overflow: visible;
      color: ${({ theme }) => theme.text10};
      path {
        stroke: ${({ theme }) => theme.text10};
      }
    }
    .home.active svg {
      fill: ${({ theme }) => theme.text10};
    }
    a.avatar {
      padding: 2px;
      border-radius: 50%;
      &.active {
        border: 1px solid ${({ theme }) => theme.text10};
      }
    }
    & > a {
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease;
      &.active {
        svg {
          stroke-width: 1;
        }
      }
    }
  }
`;
