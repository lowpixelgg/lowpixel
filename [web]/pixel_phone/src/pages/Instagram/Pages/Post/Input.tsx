import React from "react";
import PlaneIcon from "@iconscout/react-unicons/icons/uil-message";

export const CommentInput = () => {
  return (
    <div className="commentInput">
      <input type="text" placeholder="deixe seu comentário..." />

      <button>
        <PlaneIcon size={16} />
      </button>
    </div>
  );
};
