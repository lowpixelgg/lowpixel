import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 24px;
  background: #6638a6;
  color: #f2f2fa;
  border-radius: 4px;
  font-size: 12px;

  .spinner {
    animation: 1s spin linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
