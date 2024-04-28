import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .react-grid-layout {
    position: relative;
    width: 100%;
    height: 100% !important;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
    }
  }
  .react-grid-item.react-grid-placeholder {
    border: 1px solid #fff;
    border-radius: 8px;
    opacity: 0.4;
  }
  * {
    z-index: 10;
    cursor: default !important;
    user-select: none;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("https://media.discordapp.net/attachments/773208858516258826/1180009504096653324/sci-fi-cyberpunk-android-soldier-cgi-digital-art-phone-wallpaper-4k-uhdpaper.png")
      no-repeat;
    background-size: cover;
    z-index: 5;
  }

  .appIcon {
    width: 36px;
    animation: icon 0.4s ease-in;
  }

  @keyframes icon {
    from {
      transform: scale(0.4);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .MenuList {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 16px;
    padding: 36px 0 44px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .search {
      width: 86%;
      padding: 6px 12px;
      background-color: rgba(255, 255, 255, 0.18);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 82%;
        background: none;
        border: none;
        font-size: 10px;
        color: #fff;
        ::placeholder {
          color: #c4c4cc;
        }
      }
      svg {
        font-size: 12px;
        flex-shrink: 0;
        color: #f2f2fa;
      }
    }
    .carousel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      .control-arrow {
        display: none;
      }

      .slider-wrapper {
        width: 100%;
      }

      .slider-wrapper,
      .slider-wrapper ul {
        height: 100%;
      }
      & > div > ul {
        display: flex;
      }
      .control-dots {
        margin: 8px 0;
        display: flex;
        justify-content: center;
        gap: 8px;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #8d8d99;
          transition: 0.4s ease;
          &.active {
            background-color: #fff;
          }
        }
      }
    }
    .menu--apps {
      margin: 0 auto;
      width: 86%;
      height: 100%;
      padding: 16px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 12px;
      row-gap: 16px;
      li {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
      }
      img {
        width: 36px;
        z-index: 30;
      }
      p {
        font-size: 8px;
        text-align: center;
        word-break: normal;
      }
    }
  }
`;
