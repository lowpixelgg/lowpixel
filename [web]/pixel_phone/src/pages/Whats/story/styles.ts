import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  background: #121b22;

  font-size: 0.7rem;

  padding-bottom: 10px;

  background-image: url("https://cdn.discordapp.com/avatars/556704923216117770/883ce5a106e32060ec83063dbfabe528.png?size=2048");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .statusAvatarWithoutDash {
    width: 35px;
    height: 35px;
  }

  .loadingBar {
    width: 205px;
    height: 4px;

    background: #bababa;
    border-radius: 5px;
  }

  .loadingBar2 {
    width: 0px;
    height: 4px;

    background: #ffffff;
    border-radius: 5px;
  }

  .userModal {
    position: absolute;
    top: 55px;
    left: 10px;
  }

  .user {
    position: absolute;
    margin-left: -10px;
  }

  .closeStory {
    position: relative;
    top: 20px;
    left: 184px;
    font-size: 20px;
  }
`;
