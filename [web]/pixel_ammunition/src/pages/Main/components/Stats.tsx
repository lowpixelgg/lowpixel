type StatsProps = {
  icon: string;
  title: string;
  value: string;
  progress: number;
};

export const Stats = ({ icon, title, value, progress }: StatsProps) => {
  return (
    <div className="flex items-stretch gap-2">
      <div className="w-full flex justify-center items-center gap-2 p-3 rounded-lg bg-[#17171C] text-xs">
        <img src={icon} className="w-4" />
        <p>{value}</p>
      </div>

      <div className="flex flex-col items-start gap-1.5 p-2 rounded-lg bg-[#17171C] text-xs">
        <p>{title}</p>

        <div className="w-[120px] h-[6px] rounded-full bg-[#3B3C41]">
          <span
            style={{ width: `${progress}%` }}
            className="flex h-full bg-primaryYellow rounded-full"
          ></span>
        </div>
      </div>
    </div>
  );
};
