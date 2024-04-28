import { Avatar } from "../../../../Components/Avatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ user, id, message, type }: any) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToPost = () => {
    navigate("/instagram/post");
  };
  return (
    <li className="card">
      <button onClick={() => navigate("/instagram/user")}>
        <Avatar id={id} size={28} />
      </button>

      <p>
        <strong>{user}</strong> {message}
      </p>

      {type === "follow" ? (
        <button
          className="followBtn"
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? "seguindo" : "seguir"}
        </button>
      ) : (
        <img
          onClick={() => handleToPost()}
          src="src/assets/Images/placeholder8.png"
          alt="pic"
          className="postImg"
        />
      )}
    </li>
  );
};
