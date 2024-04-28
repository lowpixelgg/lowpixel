import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  position: relative;
  animation: fade 0.4s ease-in;

  & > button:first-child {
    position: absolute;
    left: 8px;
  }

  & > button:last-child {
    position: absolute;
    right: 8px;
  }

  svg {
    color: #6638a6;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
