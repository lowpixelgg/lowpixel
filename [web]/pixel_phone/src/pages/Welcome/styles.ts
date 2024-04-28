import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  & > img {
    width: 74%;
    animation: show 2s ease;
  }
  .credits {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    position: absolute;
    top: 86%;
    left: 13%;
    font-size: 10px;
    font-weight: 600;
  }

  @keyframes show {
    from {
      transform: scale(0.76);
      opacity: 0.5;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
