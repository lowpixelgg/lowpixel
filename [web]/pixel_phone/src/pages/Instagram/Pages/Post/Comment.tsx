import { Avatar } from "../../../../Components/Avatar";
import React from "react";
import OptionsIcon from "@iconscout/react-unicons/icons/uil-ellipsis-v";

export const Comment = ({ content }: any) => {
  return (
    <div className="comments--item">
      <Avatar size={24} />

      <div className="item--content">
        <h3>Soweto</h3>
        <p>{content}</p>
      </div>

      <button className="item--options">
        <OptionsIcon size={16} />
      </button>
    </div>
  );
};
