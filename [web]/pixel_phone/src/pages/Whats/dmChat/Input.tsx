import {
  MdOutlineEmojiEmotions,
  MdPhotoCamera,
  MdOutlineMic,
  MdSend,
} from "react-icons/md";
import { HiCurrencyRupee, HiPaperAirplane } from "react-icons/hi";
import { IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import { FiUnlock, FiTrash2 } from "react-icons/fi";
import { BsPause } from "react-icons/bs";
import { useState } from "react";
import { MotionValue, motion, useMotionValue, useTransform } from "framer-motion";

export const UserInput = ({ sendAction, userText, setText }: any) => {
  const [[isAudio, isLockAudio], setIsRecordAudio] = useState([false, false]);

  const [audioTime, setAudioTime] = useState("0:00");

  return (
    <div className="chatInput">
      {isLockAudio ? (
        <LockAudio setIsRecordAudio={setIsRecordAudio} audioTime={audioTime} />
      ) : isAudio ? (
        <AudioDrag audioTime={audioTime} />
      ) : (
        <TextArea userText={userText} setUserText={setText} />
      )}

      {!isLockAudio &&
        (userText.length > 0 ? (
          <SendButton onCLick={sendAction} />
        ) : (
          <AudioButton setIsRecordAudio={setIsRecordAudio} />
        ))}
    </div>
  );
};

const TextArea = ({ userText, setUserText }: any) => {
  return (
    <div className="inputBox">
      <button>
        <MdOutlineEmojiEmotions size={18} color="#CED4DA" />
      </button>

      <input
        type="text"
        placeholder="Mensagem"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />

      <button>
        <HiCurrencyRupee size={16} color="#DEE2E6" />
      </button>

      <button>
        <MdPhotoCamera size={16} color="#DEE2E6" />
      </button>
    </div>
  );
};

const AudioDrag = ({ audioTime }: any) => {
  return (
    <motion.div
      initial={{ scaleX: 0.2, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      className="audioDrag"
    >
      <div className="left">
        <FiTrash2 color="#D73628" size={14} />

        <p>{audioTime}</p>
      </div>

      <div className="right">
        <IoIosArrowBack size={12} color="#DEE2E6" />
        <p>deslize para cancelar</p>
      </div>
    </motion.div>
  );
};

const LockAudio = ({ setIsRecordAudio, audioTime }: any) => {
  return (
    <div className="RecorderAudio">
      <button
        className="CancelAudio"
        type="button"
        onClick={() => setIsRecordAudio([false, false])}
      >
        <FiTrash2 size={14} />
      </button>

      <strong>{audioTime}</strong>
      <p>.......</p>

      <button className="PauseAudio" type="button">
        <BsPause color="white" size={16} />
      </button>

      <button className="SubmitAudio" type="button">
        <MdSend color="white" size={14} />
      </button>
    </div>
  );
};

//
const SendButton = ({ onCLick }: any) => {
  return (
    <button className="sendbtn" onClick={() => onCLick()}>
      <HiPaperAirplane size={16} color="#f8faf9" style={{ rotate: "90deg" }} />
    </button>
  );
};

//
const AudioButton = ({ setIsRecordAudio }: any) => {
  const [isHandle, setIsHandle] = useState(false);
  const [scale, setScale] = useState(1.5);

  const y = useMotionValue(0);
  const x = useMotionValue(0);

  const scaleY = useTransform(y, [0, -64], [1.5, 1]);
  const scaleX = useTransform(x, [0, -180], [1.5, 1]);

  const dragend = (e: any, i: any) => {
    setIsHandle(false);
    setIsRecordAudio([false, false]);

    if (y.getPrevious() === -64) {
      console.log("lock");
      setIsRecordAudio([true, true]);
    }

    // if (x.getPrevious() === -180) {
    //   console.log("clear");
    // }
  };

  const dirLock = (axis: any) => {
    if (axis === "y") {
      setScale(scaleY as unknown as number);
    } else {
      setScale(scaleX as unknown as number);
    }
  };

  return (
    <button className="audioBtn">
      <motion.div
        className="mic"
        onPointerDown={() => {
          setIsHandle(true);
          setIsRecordAudio([true, false]);
        }}
        onPointerUp={() => {
          setIsHandle(false);
          setIsRecordAudio([false, false]);
        }}
        onDragEnd={(e, i) => dragend(e, i)}
        style={{ scale: isHandle ? scale : 1, y, x }}
        drag
        dragDirectionLock
        onDirectionLock={(axis) => dirLock(axis)}
        dragConstraints={{ bottom: 0, top: -64, right: 0, left: -180 }}
        dragElastic={0}
        dragSnapToOrigin
      >
        <MdOutlineMic size={16} color="#f8faf9" />
      </motion.div>

      {isHandle && (
        <motion.div
          initial={{ scaleY: 0.2, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          className="drag"
        >
          <FiUnlock size={14} color="#f8faf9" />

          <IoIosArrowUp size={12} color="#ADB5BD" />
        </motion.div>
      )}
    </button>
  );
};
