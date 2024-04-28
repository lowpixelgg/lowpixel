import React from "react";
import { Container } from "./styles";

type Props = { size: number; url?: string; id?: any };

export const Avatar = ({ size, id, url }: Props) => {
  return (
    <Container size={size} className="avatar">
      <img
        src={
          url
            ? url
            : id
            ? `src/assets/Avatars/${id}.png`
            : `src/assets/Avatars/non.png`
        }
        alt="profile picture"
      />
    </Container>
  );
};
