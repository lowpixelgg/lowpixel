import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  overflow: auto;

  h1 {
    font-size: 16px;
    font-weight: 500;
  }

  h2 {
    font-size: 12px;
    font-weight: 500;
  }

  .list {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      width: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      strong {
        font-weight: 600;
      }
      p {
        flex: 1;
        font-size: 10px;
        max-height: 24px;
        overflow: hidden;
      }
      .postImg {
        width: 32px;
        height: 32px;
        object-fit: cover;
      }
      .followBtn {
        margin: auto;
        background: #4f4fcf;
        color: #e1e1e6;
        padding: 4px;
        font-size: 8px;
        font-weight: 500;
        border-radius: 4px;
        transition: 0.2s ease;
      }
    }
  }
`;
