import selectedBg from "../../../assets/ammunBody.png";
import groupBg from "../../../assets/groupBg.png";
import { Icon } from "@iconify/react";
import Kar97Img from "../../../assets/guns/Winchester_92.png";
import { Stats } from "./Stats";

import Precision from "../../../../src/assets/icons/precision.svg";
import Lock from "../../../../src/assets/icons/lock.svg";
import Amno from "../../../../src/assets/icons/amno.svg";
import { useMainPage } from "../hooks";
import { weapons } from "../weapons";

export const Selected = () => {
  const { weapon: weaponId } = useMainPage();

  const weapon = weapons.find((item) => item.id === weaponId);

  const StatsList = [
    {
      icon: Precision,
      title: "Ataque",
      value: `${weapon?.damage}MM`,
      progress: 80,
      id: "1",
    },
    {
      icon: Lock,
      title: "Peso",
      value: `${weapon?.penetration}KG`,
      progress: 20,
      id: "2",
    },
    {
      icon: Amno,
      title: "Munição",
      value: `${weapon?.clip_size}`,
      progress: 75,
      id: "3",
    },
  ];

  return (
    <div
      style={{ "--selectedBg": `url(${selectedBg})` }}
      className="w-full h-full px-3 flex flex-col justify-between bg-[image:var(--selectedBg)] bg-no-repeat bg-center relative z-[3]"
    >
      <div className="w-full flex justify-between items-start">
        <div
          className="flex items-start gap-2 pb-4 pr-4 p-2 bg-no-repeat"
          style={{
            background: `url(${groupBg}) no-repeat`,
            backgroundSize: "100%",
          }}
        >
          <Icon
            icon="icon-park-solid:config"
            className="mt-2"
            color="#F5C255"
          />

          <div className="flex flex-col">
            <p className="text-lg">{weapon?.name}</p>
            <p className="text-xs">
              {weapon?.full_auto ? "ABTOMAT" : "MANUAL"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 rounded bg-[rgba(255, 255, 255, 0.03)] ring ring-slate-50/5">
          <span className="bg-slate-50 p-[8px] rounded-md">
            <Icon icon="mdi:cart" className="text-black" />
          </span>

          <p className="text-sm font-outfit">Valor p/unidade</p>

          <span className="ml-3 bg-primaryYellow p-2 rounded-lg text-xs text-black font-bold">
            ${weapon?.price}
          </span>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center absolute pb-[5%]">
        <img
          className=" w-[80%] z-[-1]"
          src={weapon?.img}
          alt="Winchester_92"
        />
      </div>

      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col items-stretch gap-1">
          {StatsList.map((item) => (
            <Stats
              key={item.id}
              title={item.title}
              icon={item.icon}
              value={item.value}
              progress={item.progress}
            />
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button className="peer order-last z-[2] bg-primaryYellow rounded text-slate-950 font-semibold text-sm py-2 px-5">
            COMPRAR
          </button>
          <div className="text-sm bg-slate-950 rounded-t z-[1] p-1.5 px-3 transition ease-in duration-500 translate-y-full opacity-0 peer-hover:translate-y-0 peer-hover:opacity-100">
            ${weapon?.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
