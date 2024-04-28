import { Avatar } from "../../../../Components/Avatar";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const MessageList = () => {
  return (
    <div className="MessageList">
      <h3>Mensagens</h3>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.4 }}
        className="MessageList--list"
      >
        <UserItem
          id={6}
          user="mayk"
          message="Lorem ipsum dolor sit amet"
          status="Online"
        />
        <UserItem
          id={50}
          user="orion"
          message="Lorem ipsum dolor sit amet"
          status="15m"
        />
        <UserItem
          id={43}
          user="sow"
          message="Lorem ipsum dolor sit amet"
          status="12m"
        />
        <UserItem
          id={16}
          user="vini"
          message="Lorem ipsum dolor sit amet"
          status="1h"
        />
        <UserItem
          id={74}
          user="konn"
          message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          status="Online"
        />
        <UserItem
          id={102}
          user="mel"
          message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic nesciunt, beatae dolore consectetur unde accusantium, odio et quaerat molestiae laudantium in iusto officia amet quam commodi saepe quisquam officiis."
          status="Online"
        />
        <UserItem
          id={84}
          user="evol"
          message="Lorem ipsum dolor sit amet"
          status="6h"
        />
        <UserItem
          id={65}
          user="eyu"
          message="Lorem ipsum dolor sit amet"
          status="1d"
        />
        <UserItem
          id={42}
          user="clebin"
          message="Lorem ipsum dolor sit amet"
          status="6m"
        />
        <UserItem
          id={63}
          user="baz"
          message="Lorem ipsum dolor sit amet"
          status="Online"
        />
      </motion.ul>
    </div>
  );
};

const UserItem = ({ user, message, status, id }: any) => {
  const navigate = useNavigate();
  return (
    <li>
      <Avatar id={id} size={28} />

      <div className="content" onClick={() => navigate("/instagram/dm")}>
        <p>
          <strong>{user}</strong>
        </p>
        <p>{message}</p>
      </div>

      <span>{`· ${status}`}</span>
    </li>
  );
};
