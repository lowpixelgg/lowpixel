/**
 * @overview Global statusBar with handle notifications component for phone
 * @author Vinícius 'evol' Oliveira
 * @copyright (c) Rocket Community
 * @license See LICENSE file on top-level directory
 */

import React, { useContext, useState } from "react";
import { Container } from "./styles";
import {
  MdBatteryStd,
  MdSignalCellular3Bar,
  MdSignalWifi4Bar,
} from "react-icons/md";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { Notifications, PushSource } from "../Notifications";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useRelinkValue } from "react-relink";
import { NotifyCard } from "../Notifications/Cards";

export const Statusbar = () => {
  const { SistemState, notificationsHanldes } = useContext<any>(GlobalContext);
  const pushState = useRelinkValue(PushSource);

  // horario
  const GetHours = () => {
    const now = new Date();

    const zeroFill = (n: any) => {
      return ("0" + n).slice(-2);
    };

    return `${now.getHours()}:${zeroFill(now.getMinutes())}`;
  };

  const [hours, setHours] = useState(GetHours());

  // notificaçoes
  const { HandleY, controls } = notificationsHanldes();

  const handleEnd = (e: any, info: any) => {
    if (HandleY.get() >= -400) {
      controls.start("open");
    } else {
      controls.start("hidden");
    }
  };

  useEffect(() => {
    setInterval(() => {
      setHours(GetHours());
    }, 1000);
  }, []);

  return (
    <Container statusbarstyle={SistemState.statusbarstyle}>
      <div className="left">{hours}</div>

      <div className="right">
        <MdSignalWifi4Bar />

        <MdSignalCellular3Bar />

        <MdBatteryStd />
      </div>

      <motion.div
        drag={!pushState.new && "y"}
        initial="hidden"
        animate={controls}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          hidden: { y: -500 },
          open: { y: 0 },
        }}
        onDragEnd={handleEnd}
        dragConstraints={{ top: -500, bottom: 0 }}
        dragElastic={0}
        dragMomentum={false}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          y: HandleY,
        }}
        className="notifications"
      >
        <Notifications controls={controls} />

        <div className="handle" />

        <AnimatePresence mode="wait">
          {pushState.new && (
            <NotifyCard
              User={pushState.user}
              type={pushState.type}
              Message={pushState.message}
              hanldeRemoveCard={pushState.hanldeRemoveCard}
              push
              id
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};
