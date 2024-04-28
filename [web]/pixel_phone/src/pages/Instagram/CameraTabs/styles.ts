import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > main {
    flex-grow: 1;
    position: relative;

    * {
      z-index: 2;
    }
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 8px;
      box-shadow: 0 0 0 16px ${({ theme }) => theme.background10};
      z-index: 1;
    }
  }

  .tabs {
    width: 100%;
    padding: 16px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background10};
    position: relative;

    .gallery {
      position: absolute;
      left: 8px;
      bottom: 12px;
      z-index: 3;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 10px;
      color: ${({ theme }) => theme.text40};

      a {
        transition: 0.4s ease;
      }

      .active {
        color: ${({ theme }) => theme.text10};
        font-weight: 500;
      }
    }
  }
`;
