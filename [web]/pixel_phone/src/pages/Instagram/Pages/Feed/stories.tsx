import { Avatar } from "../../../../Components/Avatar";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Stories = () => {
  const navigate = useNavigate();
  return (
    <div className="container2">
      <button className="profile">
        <Avatar id={2} size={32} />

        <div className="btn">
          <IoAddSharp />
        </div>
      </button>

      <button onClick={() => navigate("/instagram/storyView")}>
        <Avatar id={5} size={28} />
      </button>

      <button onClick={() => navigate("/instagram/liveView")}>
        <Avatar id={8} size={28} />
      </button>
      <Avatar id={3} size={28} />
      <Avatar id={7} size={28} />
      <Avatar id={2} size={28} />
      <Avatar id={9} size={28} />
      <Avatar id={1} size={28} />
    </div>
  );
};
