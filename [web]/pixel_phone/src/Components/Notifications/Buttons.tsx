import { useState } from "react";
import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import {
  MdWifi,
  MdWifiOff,
  MdFlashlightOn,
  MdFlashlightOff,
  MdAirplanemodeActive,
  MdAirplanemodeInactive,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import { Press } from "./styles";

export const Buttons = () => {
  return (
    <div className="btnsContainer">
      <Button active IconOn={<MdWifi />} IconOff={<MdWifiOff />} />

      <Button active IconOn={<FaVolumeUp />} IconOff={<FaVolumeOff />} />

      <Button
        IconOn={<MdAirplanemodeActive />}
        IconOff={<MdAirplanemodeInactive />}
      />

      <Button IconOn={<MdPause />} IconOff={<MdPlayArrow />} />

      <Button IconOn={<MdFlashlightOn />} IconOff={<MdFlashlightOff />} />

      <Button IconOn={<MdFlashlightOn />} IconOff={<MdFlashlightOff />} />

      <Button IconOn={<MdFlashlightOn />} IconOff={<MdFlashlightOff />} />
    </div>
  );
};


const Button = ({ active, IconOn, IconOff }: any) => {
  const [isActive, setActive] = useState(active);
  

  return (
    <Press onClick={() => setActive(!isActive)} active={String(isActive)}>
      {isActive ? IconOn : IconOff}
    </Press>
  );
};
