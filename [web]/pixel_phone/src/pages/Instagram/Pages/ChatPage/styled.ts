import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.background10};
  color: ${({ theme }) => theme.text10};
  overflow-y: hidden;

  .header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    svg {
      color: ${({ theme }) => theme.text10};
    }
    h3 {
      font-size: 14px;
    }
  }

  .wrap {
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .searchInput {
    margin: 0;
    width: 100%;
  }

  .searchUserList {
    flex-shrink: 0;
    margin: 8px 0;
    max-width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      p {
        font-size: 10px;
        max-width: 28px;
        max-height: 24px;
        overflow: hidden;
      }
    }
  }

  .MessageList {
    margin: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: 12px;
    }
  }

  .MessageList--list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      .content {
        width: 100%;
        font-size: 8px;

        strong {
          font-size: 10px;
          font-weight: 500;
        }

        p {
          max-width: 100%;
          max-height: 20px;
          overflow: hidden;
        }
      }

      span {
        color: ${({ theme }) => theme.text40};
        font-size: 10px;
        flex-shrink: 0;
        font-weight: 500;
      }
    }
  }
`;
