import React, { useState } from "react";
import PenIcon from "@iconscout/react-unicons/icons/uil-pen";

export const Nick = () => {
  const [nick, setNick] = useState("Sow");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="nick">
      <span>Apelido</span>

      {isEdit ? (
        <input
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <p>{nick}</p>
      )}

      <button onClick={() => setIsEdit(!isEdit)}>
        <PenIcon size={14} color="#101011" />
      </button>
    </div>
  );
};
