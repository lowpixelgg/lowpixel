import React, { useContext, useEffect } from "react";
import { Container } from "./styles";
import { Post } from "../../Components/Post";
import { useTheme } from "styled-components";
import { GlobalContext } from "../../../../Contexts/GlobalContext";
import BackIcon from "@iconscout/react-unicons/icons/uil-arrow-left";
import { useNavigate } from "react-router-dom";
import { Comment } from "./Comment";
import { CommentInput } from "./Input";

export const PostPage = () => {
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
      <button className="header" onClick={() => navigate(-1)}>
        <BackIcon color={theme.text10} size={20} />
      </button>

      <div className="wrap">
        <Post noRedirect />

        <div className="comments">
          <Comment content="Lorem, ipsum dolor sit amet consec adipisicing elit" />
          <Comment content="Lorem, ipsum dolor sit amet consec adipisicing elit" />
          <Comment content="Lorem, ipsum dolor sit amet consec adipisicing elit" />
          <Comment content="Lorem, ipsum dolor sit amet consec adipisicing elit" />
          <Comment content="Lorem, ipsum dolor sit amet consec adipisicing elit" />
        </div>
      </div>

      <CommentInput />
    </Container>
  );
};
