import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;

  .container1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 72px;
      filter: ${({ theme }) => theme.instaLogo};
    }

    .navs {
      display: flex;
      align-items: center;
      gap: 8px;

      button {
        color: inherit;
      }
    }
  }

  .container2 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    overflow-x: auto;

    .profile {
      position: relative;
      .avatar {
        border: none;
      }
      .btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 16px;
        height: 16px;
        background-color: #2879d4;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.background10};
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .avatar {
      border: 2px solid #fa7e1e;
      padding: 2px;
    }
  }

  .postsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
