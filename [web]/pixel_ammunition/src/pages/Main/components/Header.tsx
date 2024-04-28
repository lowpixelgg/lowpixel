import { twJoin, twMerge } from "tailwind-merge";
import HeaderBg from "../../../assets/headerBG.png";
import { useMainPage } from "../hooks";

type buttonProps = {
  title: string;
  value: string;
  className?: string;
};

// category selection
export const Header = () => {
  const { category, setCategory } = useMainPage();

  const ButtomCategory = ({ title, value, className }: buttonProps) => {
    const active = category === value;

    const handleCategory = () => {
      setCategory(value);
    };

    return (
      <button
        onClick={handleCategory}
        className={twMerge(
          "py-2 ring-gray-600/50 leading-3 rounded-md transition text-sm bg-gray-700/25 ring-2",
          className,
          twJoin(active && "bg-primaryYellow ring-0 text-slate-950 font-medium")
        )}
      >
        {title}
      </button>
    );
  };

  return (
    <div
      style={{ "--headerBg": `url(${HeaderBg})` }}
      className="bg-[image:var(--headerBg)] flex flex-col justify-start gap-5 p-6 rounded-t-2xl"
    >
      <h1 className="text-5xl font-parisienne">Ammunation</h1>

      <div className="flex gap-4 justify-start items-center overflow-x-auto p-1 noScrollbar">
        <ButtomCategory title="All" value="all" className="px-3" />
        <ButtomCategory title="Rifles" value="rifle" className="px-[32px]" />
        <ButtomCategory title="Pistolas" value="pistol" className="px-[32px]" />
        <ButtomCategory
          title="Snipers"
          value="sniper_rifle"
          className="px-[32px]"
        />
        <ButtomCategory
          title="Machinegun"
          value="machinegun"
          className="px-[32px]"
        />
        <ButtomCategory title="Subs" value="smg" className="px-[32px]" />
        <ButtomCategory
          title="Revolvers"
          value="shotgun"
          className="px-[32px]"
        />
        <ButtomCategory title="Pistolas" value="pistol" className="px-[32px]" />
      </div>
    </div>
  );
};
