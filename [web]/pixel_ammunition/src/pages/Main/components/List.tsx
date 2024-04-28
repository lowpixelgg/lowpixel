import { Icon } from "@iconify/react";
import Kar97Img from "../../../assets/guns/Winchester_92.png";
import { twJoin, twMerge } from "tailwind-merge";
import { useMainPage } from "../hooks";
import { weapons } from "../weapons";

type SelectItemProps = {
  active?: boolean;
  weapon: (typeof weapons)[0];
};

// handle select weapon
const SelectItem = ({ active, weapon }: SelectItemProps) => {
  const { setWeapon } = useMainPage();
  const handleSelectWeapon = () => {
    setWeapon(weapon.id);
  };

  return (
    <div
      onClick={handleSelectWeapon}
      className={twMerge(
        "w-full h-[200px] flex flex-col justify-between rounded-xl py-3 px-5 text-xs font-bold font-poppins relative bg-[#17171C] text-[#525254] cursor-pointer z-[2]",
        twJoin(active && "bg-primaryYellow text-gray-950")
      )}
    >
      <div className="w-full flex justify-between items-center">
        <p className="tracking-widest font-semibold">{weapon.name}</p>

        <div className="flex gap-1 items-center">
          <Icon icon="bi:gear-fill" className="text-sm -mt-1" />

          <p className="font-semibold">{weapon.clip_size}MM</p>
        </div>
      </div>

      <div className="absolute h-full flex items-center w-[80%] top-0 left-[10%] p-3 z-[-1]">
        <img
          className="w-full object-cover"
          src={weapon.img}
          alt="Winchester_92"
        />
      </div>

      <div className="flex flex-col gap-1 pb-3">
        <p
          className={twMerge(
            "text-base font-bold",
            twJoin(!active && "text-slate-100")
          )}
        >
          {weapon.name}
        </p>

        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1 font-medium">
            <Icon icon="mdi:bullets" className="text-sm -mt-1" />
            <p>{weapon.damage}</p>
          </div>

          <div className="flex items-center gap-1 font-medium">
            <Icon icon="ic:baseline-lock" className="text-sm -mt-1" />
            <p>{weapon.penetration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// fetch and list weapons
export const List = () => {
  const { category, weapon } = useMainPage();

  return (
    <div className="w-full flex flex-col gap-3 pr-2">
      {weapons.map((item) => {
        if (category === "all") {
          return <SelectItem weapon={item} active={weapon === item.id} />;
        }
        if (item.type === category) {
          return <SelectItem weapon={item} active={weapon === item.id} />;
        }
      })}
    </div>
  );
};
