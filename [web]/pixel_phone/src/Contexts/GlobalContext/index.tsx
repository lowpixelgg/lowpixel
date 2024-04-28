import { createContext, useReducer } from "react";
import { useAnimation, useMotionValue } from "framer-motion";

//@ts-ignore
export const GlobalContext = createContext();

const initialState = {
  showBottomNav: false,
  bottomNavStyles: {
    background: "transparent",
    color: "#fff",
  },
  showStatusbar: false,
  statusbarstyle: {
    background: "#f2f2fa",
    color: "#a8a8b3",
  },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "showBottomNav":
      return { ...state, showBottomNav: true };
    case "removeBottomNav":
      return { ...state, showBottomNav: false };
    case "setBottomNavStyles":
      return { ...state, bottomNavStyles: action.values };
    case "showStatusbar":
      return { ...state, showStatusbar: true };
    case "removeStatusbar":
      return { ...state, showStatusbar: false };
    case "setStatusBarStyle":
      return { ...state, statusbarstyle: action.values };
    default:
      break;
  }
};

export const GlobalContextProvider = ({ children }: any) => {
  const [SistemState, SistemDispatch] = useReducer(reducer, initialState);

  const HandleY = useMotionValue(-500);
  const controls = useAnimation();

  const notificationsHanldes = () => {
    return { HandleY, controls };
  };

  return (
    <GlobalContext.Provider
      value={{ SistemState, SistemDispatch, notificationsHanldes }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
