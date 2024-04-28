import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Calls } from "./calls";
import { Chat } from "./chat";
import { Status } from "./status";
import { Story } from "./story";
import { Init } from "./init";
import { DmChat } from "./dmChat";
import { Camera } from "./camera";
import { Settings } from "./settings";
import { StoryMaker } from "./storyMaker";
import { InCall } from "./inCall";
import { OnGoingCall } from "./onGoingCall";
import { Profile } from "./Profile";

import { NavTop } from "./Components/NavTop";
import { Message, useWhatsApp } from "../../Contexts/WhatsAppContext";
import { useSocket } from "../../Contexts/SocketContext";

export const Whats = () => {
  return (
    <Routes>
      <Route path="/" element={<Init />} />
      <Route path="/inCall" element={<InCall />} />
      <Route path="/onCall" element={<OnGoingCall />} />
      <Route path="/story" element={<Story />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dmChat/:id" element={<DmChat />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/storyMaker" element={<StoryMaker />} />
      <Route path="/settings" element={<Settings />} />

      <Route element={<NavTop />}>
        <Route path="chat" element={<Chat />} />

        <Route path="calls" element={<Calls />} />

        <Route path="status" element={<Status />} />
      </Route>
    </Routes>
  );
};
