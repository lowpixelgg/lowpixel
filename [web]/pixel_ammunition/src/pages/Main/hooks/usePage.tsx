import React, { createContext, ReactNode, useEffect, useState } from "react";
import { weapons } from "../weapons";

type MainContextType = {
  category?: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  weapon?: string;
  setWeapon: React.Dispatch<React.SetStateAction<string>>;
};

type ProviderProps = {
  children: ReactNode;
};

export const MainPageContext = createContext({} as MainContextType);

export const MainPageProvider = ({ children }: ProviderProps) => {
  const [category, setCategory] = useState("all");
  const [weapon, setWeapon] = useState("");

  useEffect(() => {
    setWeapon(weapons[0].id);
  }, []);

  return (
    <MainPageContext.Provider
      value={{ category, setCategory, weapon, setWeapon }}
    >
      {children}
    </MainPageContext.Provider>
  );
};
