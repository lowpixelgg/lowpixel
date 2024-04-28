import React, { useContext, useEffect } from "react";
import { Container } from "./styled";
import BackIcon from "@iconscout/react-unicons/icons/uil-angle-left";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../../Components/SearchInput";
import { Avatar } from "../../../../Components/Avatar";
import { MessageList } from "./MessageList";

export const ChatPage = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);
  const theme = useTheme();

  useEffect(() => {
    SistemDispatch({ type: "showBottomNav" });
    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });

    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: theme.background10,
        color: theme.text10,
      },
    });
  }, []);

  return (
    <Container>
      <div className="header">
        <button onClick={() => navigate(-1)}>
          <BackIcon size={24} />
        </button>

        <h3>Conversas</h3>
      </div>

      <div className="wrap">
        <SearchInput />

        <ul className="searchUserList">
          <SearchUserItem id={4} user="monk" />
          <SearchUserItem id={6} user="monk" />
          <SearchUserItem id={8} user="monk" />
          <SearchUserItem id={2} user="monk" />
          <SearchUserItem id={82} user="monk" />
          <SearchUserItem id={71} user="monk" />
          <SearchUserItem id={60} user="monk" />
          <SearchUserItem id={9} user="monk" />
          <SearchUserItem id={14} user="monk" />
        </ul>

        <MessageList />
      </div>
    </Container>
  );
};

const SearchUserItem = ({ user, id }: any) => {
  return (
    <li>
      <Avatar id={id} size={28} />
      <p>{user}</p>
    </li>
  );
};
