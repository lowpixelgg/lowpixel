/**
 * @overview Global notification component for phone
 * @author Vinícius 'evol' Oliveira
 * @copyright (c) Rocket Community
 * @license See LICENSE file on top-level directory
 */

import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { HiVolumeUp } from "react-icons/hi";
import { NotifyCard } from "./Cards";
import { Buttons } from "./Buttons";
import { LightBar } from "./LightBar";
import { AnimatePresence, motion } from "framer-motion";
import { DateView } from "./Date";
import { RelinkSource, useRelinkState } from "react-relink";
import {
  useNotifications,
  Notification,
} from "../../Contexts/NotificationsContext";

// State context for push notifications
export const PushSource = new RelinkSource({
  key: "pushNotifies",
  default: {
    new: false,
    type: "",
    user: "",
    message: "",
    hanldeRemoveCard: () => {},
  },
});

export const Notifications = ({ controls }: any) => {
  const { notifications, removeAllNotifications, removeNotification } =
    useNotifications();
  return (
    <Container>
      <DateView />

      <Buttons />

      <div className="light">
        <HiVolumeUp />

        <LightBar />
      </div>

      <motion.div className="notifies">
        <AnimatePresence initial={false}>
          {notifications.map((item: Notification) => {
            return (
              <NotifyCard
                key={item.id}
                User={item.user}
                Message={item.message}
                id={item.id}
                hanldeRemoveCard={removeNotification}
                type={item.type}
                push={false}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="actions">
        <button>Configurações</button>

        <button onClick={() => removeAllNotifications()}>Limpar</button>
      </div>
    </Container>
  );
};
