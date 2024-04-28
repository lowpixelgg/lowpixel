import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Onboarding } from "../pages/Onboarding";
import { HomeScreen } from "../pages/Home";
import { Welcome } from "../pages/Welcome";
import { Instagram } from "../pages/Instagram";
import { Whats } from "../pages/Whats";
import { Bank } from "../pages/Bank";
import { useMta } from "../Contexts/GameContext";
import { Contacts } from "../pages/Contacts";
import WhatsAppProvider from "../Contexts/WhatsAppContext";
import { SocketProvider, useSocket } from "../Contexts/SocketContext";
import { useEffect, useState } from "react";
import { RegisterMTAEvent } from "../hooks/RegisterMTAEvent";
import {
  useNotifications,
  Notification,
} from "../Contexts/NotificationsContext";
import { useBank } from "../Contexts/BankContext";

export const Routing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addEventListener } = useMta();
  const { setInitialBank } = useBank();

  const { addNotification, removeNotification, removeAllNotifications } =
    useNotifications();

  useEffect(() => {
    RegisterMTAEvent("onNUILoaded", {});
  }, []);

  addEventListener("setPhoneRoute", (data: { route: string }) => {
    return navigate(data.route);
  });

  addEventListener("addPushNotification", (data: Notification) => {
    addNotification(data);
  });

  addEventListener("removePushNotification", (id: number) => {
    removeNotification(id);
  });

  addEventListener("removeAllPushNotifications", () => {
    removeAllNotifications();
  });

  addEventListener("execBankUpdateData", (data) => {
    setInitialBank(data);
  });

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/onboarding/*" element={<Onboarding />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/instagram/*" element={<Instagram />} />
        <Route path="/instagram/*" element={<Instagram />} />

        <Route path="/whats/*" element={<Whats />} />

        <Route path="/bank/*" element={<Bank />} />
        <Route path="/contacts/*" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
};
