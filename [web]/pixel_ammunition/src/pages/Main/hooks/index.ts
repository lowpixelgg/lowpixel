import { useContext } from "react";
import { MainPageContext } from "./usePage";

export const useMainPage = () => ({ ...useContext(MainPageContext) });
