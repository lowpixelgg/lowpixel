import { useState, useRef } from "react";
import { BsPlayFill, BsPauseFill, BsMicFill } from "react-icons/bs";
import { useDragControls, useMotionValue } from "framer-motion";

import ReactWaves from "@dschoon/react-waves";
import { Avatar } from "../../../Components/Avatar";

export const AudioPlayer = ({ audioSrc }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ratio, setRatio] = useState(1);
  const audioRef = useRef();

  const changeRange = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="audio">
        {isPlaying ? (
          <button onClick={() => setIsPlaying(false)}>
            <BsPauseFill size={18} color="#CED4DA" />
          </button>
        ) : (
          <button onClick={() => setIsPlaying(true)}>
            <BsPlayFill size={18} color="#CED4DA" />
          </button>
        )}

        {/* @ts-ignore */}
        <ReactWaves
          audioFile={audioSrc}
          className={"react-waves"}
          options={{
            audioRate: ratio,
            barGap: 2,
            barWidth: 1,
            barRadius: 1,
            barHeight: 2,
            cursorWidth: 4,
            cursorColor: "#25d366",
            height: 12,
            hideScrollbar: true,
            progressColor: "#25d366",
            responsive: true,
            waveColor: "#D1D6DA",
            normalize: true,
            fillParent: true,
          }}
          style={{ width: "100%", padding: 0, margin: 0 }}
          volume={1}
          zoom={0}
          playing={isPlaying}
        />

        {isPlaying ? (
          <button
            className="ratio"
            onClick={() => (ratio === 1 ? setRatio(1.5) : setRatio(1))}
          >
            {ratio === 1 ? "1x" : "2x"}
          </button>
        ) : (
          <div className="user">
            <Avatar size={28} id={80} />

            <span>
              <BsMicFill size={10} color="#f8faf9" />
            </span>
          </div>
        )}
      </div>
    </>
  );
};
