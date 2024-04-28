import { List } from "./List";
import { Selected } from "./Selected";

export const Body = () => {
  return (
    <div className="custom-gradient w-full h-[70vh] max-h-[720px] rounded-b-2xl p-6 grid grid-cols-7 gap-3">
      <div className="col-span-2 h-full overflow-y-auto">
        <List />
      </div>
      <div className="col-span-5">
        <Selected />
      </div>
    </div>
  );
};
