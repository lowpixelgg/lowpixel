import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 0px 2px 6px);
  }

  .nav {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
  }

  .actions {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changeCam {
    position: absolute;
    left: 16px;
    bottom: 26px;
  }

  .videoCam {
    position: absolute;
    right: 16px;
    bottom: 26px;
  }
`;
