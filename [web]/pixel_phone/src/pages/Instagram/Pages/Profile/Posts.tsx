import { motion } from "framer-motion";

import { BsGrid3X3 } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const ImgsArray = [
  "src/assets/Images/placeholder1.png",
  "src/assets/Images/placeholder2.png",
  "src/assets/Images/placeholder3.png",
  "src/assets/Images/placeholder4.png",
  "src/assets/Images/placeholder5.png",
  "src/assets/Images/placeholder6.png",
  "src/assets/Images/placeholder7.png",
  "src/assets/Images/placeholder8.png",
  "src/assets/Images/placeholder1.png",
  "src/assets/Images/placeholder2.png",
  "src/assets/Images/placeholder3.png",
  "src/assets/Images/placeholder4.png",
  "src/assets/Images/placeholder5.png",
  "src/assets/Images/placeholder6.png",
  "src/assets/Images/placeholder7.png",
];

export const Posts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container4">
        <div className="grid active">
          <BsGrid3X3 size={14} />
        </div>

        <div className="Tag">
          <MdOutlinePersonPin size={18} />
        </div>
      </div>

      <div className="container5">
        {ImgsArray.map((item, index) => {
          return (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.4,
                delay: 0.05 * (index - 1),
              }}
              key={index}
              src={item}
              alt="picture"
              onClick={() => navigate("/instagram/post")}
            />
          );
        })}
      </div>
    </>
  );
};
