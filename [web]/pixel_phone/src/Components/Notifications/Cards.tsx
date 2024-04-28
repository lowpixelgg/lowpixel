import { BsInstagram, BsFillGearFill } from "react-icons/bs";
import { PiBankDuotone } from "react-icons/pi";

import { Avatar } from "../Avatar";
import { motion } from "framer-motion";

type Props = {
  type: any;
  id: any;
  User: any;
  Message: any;
  hanldeRemoveCard: any;
  push: any;
};

export const NotifyCard = ({
  type,
  id,
  User,
  Message,
  hanldeRemoveCard,
  push,
}: Props) => {
  const removerCard = (e: any, info: any) => {
    hanldeRemoveCard(id);
  };

  if (type == "bank") {
    return (
      <motion.div
        drag="x"
        onDragEnd={(e, info) => removerCard(e, info)}
        dragConstraints={{ left: 0, right: 80 }}
        dragMomentum={false}
        initial={{ opacity: 0, y: push ? -120 : "none" }}
        animate={{ opacity: 1, x: 0, y: push ? 0 : "none" }}
        exit={{ opacity: 0.5, x: 220 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="NotifyCard card"
      >
        <div className="app">
          <PiBankDuotone />
          <p>Low Bank</p>
        </div>

        <div className="content">
          <div className="content--msg">
            <p>{Message}</p>
          </div>
        </div>

        <ConfigBtn />
      </motion.div>
    );
  }

  if (type === "chat") {
    return (
      <motion.div
        drag="x"
        onDragEnd={(e, info) => removerCard(e, info)}
        dragConstraints={{ left: 0, right: 80 }}
        dragMomentum={false}
        initial={{ opacity: 0.5, x: -220 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.5, x: 220 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="NotifyCard"
      >
        <section>
          <div className="head">
            <Avatar size={32} />

            <img className="appIcon" src={"src/assets/WhatsIcon.png"} />
          </div>

          <div className="content">
            <div className="content--head">
              <h5>{User}</h5>
              <small>12:50</small>
            </div>

            <p className="content--msg">{Message}</p>
          </div>
        </section>

        {!push && (
          <div className="btns">
            <button>Responder</button>

            <span className="divider" />

            <button onClick={() => hanldeRemoveCard(id)}>
              Marcar como lido
            </button>
          </div>
        )}

        <ConfigBtn />
      </motion.div>
    );
  }

  return (
    <motion.div
      drag="x"
      onDragEnd={(e, info) => removerCard(e, info)}
      dragConstraints={{ left: 0, right: 80 }}
      dragMomentum={false}
      initial={{ opacity: 0, y: push ? -120 : "none" }}
      animate={{ opacity: 1, x: 0, y: push ? 0 : "none" }}
      exit={{ opacity: 0.5, x: 220 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="NotifyCard card"
    >
      <div className="app">
        <BsInstagram />

        <p>Instagram</p>
      </div>

      <div className="content">
        <div className="content--msg">
          <h5>{User}</h5>

          <p>{Message}</p>
        </div>

        <Avatar size={32} />
      </div>

      <ConfigBtn />
    </motion.div>
  );
};

// export const NotifyChat = ({ id, User, Message, hanldeRemoveCard }) => {
//   const removerCard = (e, info) => {
//     hanldeRemoveCard(id);
//     // console.log(e, info);
//   };

// };

const ConfigBtn = () => {
  return (
    <button className="configBtn">
      <BsFillGearFill />
    </button>
  );
};
