import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { motion, useAnimation } from "framer-motion";
import ReactGridLayout from "react-grid-layout";


import { AppsList } from "./AppList";
import { MenuList } from "./Menu";
import { HourWidget } from "./Widgets/Hour";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { SistemDispatch } = useContext<any>(GlobalContext);

  const controlMenu = useAnimation();

  const [layout, setLayout] = useState({
    widgets: [
      { i: "hour", x: 1, y: 0, w: 2, h: 2 },
      { i: "google", x: 0, y: 7, w: 4, h: 1 },
    ],
    icons: [
      { i: "src/assets/WhatsIcon.png", x: 0, y: 8, w: 1, h: 1 },
      { i: "src/assets/InstagramIcon.png", x: 1, y: 8, w: 1, h: 1 },
      { i: "src/assets/CalculatorIcon.png", x: 2, y: 8, w: 1, h: 1 },
      { i: "src/assets/BankIcon.png", x: 3, y: 8, w: 1, h: 1 },
    ],
  });

  useEffect(() => {
    SistemDispatch({ type: "showStatusbar" });
    SistemDispatch({ type: "showBottomNav" });

    SistemDispatch({
      type: "setBottomNavStyles",
      values: {
        background: "transparent",
        color: "#f2f2f2",
      },
    });
    SistemDispatch({
      type: "setStatusBarStyle",
      values: {
        background: "transparent",
        color: "#f2f2f2",
      },
    });
  }, []);

  const handleAddApp = (newItem: any) => {
    newItem = {
      ...newItem,
      x: layout.icons.filter((item) => item.y === 3).length,
      y: 3,
      w: 1,
      h: 1,
    };

    if (layout.icons.filter((item) => item.i === newItem.i).length > 0) {
      return;
    } // prevent duplicate

    setLayout({ ...layout, icons: [...layout.icons, newItem] });

    console.log(layout);
  };

  const onChangeLayout = (newLayout: any) => {
    setLayout({
      widgets: newLayout.filter(
        (item: any) => item.i === "hour" || item.i === "google"
      ),
      icons: newLayout.filter(
        (item: any) => item.i !== "hour" && item.i !== "google"
      ),
    });
  };

  const handleScrollTop = (e: any) => {
    if (e.deltaY < 0) {
      controlMenu.start("visible");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Container onWheel={(e) => handleScrollTop(e)}>
        <div className="background" />

        <ReactGridLayout
          layout={layout.widgets.concat(layout.icons)}
          onLayoutChange={onChangeLayout}
          cols={4}
          width={228}
          compactType={null}
          rowHeight={36}
          maxRows={9}
          isResizable={false}
          isBounded
          preventCollision
        >
          <div key="hour">
            <HourWidget />
          </div>

          {/* <div key="google">
            <GoogleWidget />
          </div> */}

          {layout.icons.map((item) => {
            const app = AppsList.find((i) => i.icon === item.i);

            return (
              <div
                key={item.i}
                onClick={app?.navigate ? () => navigate(app.navigate) : () => {}}
              >
                <img className="appIcon" src={item.i} alt="icon" />
              </div>
            );
          })}
        </ReactGridLayout>

        <MenuList control={controlMenu} handleAddApp={handleAddApp} />
      </Container>
    </motion.div>
  );
};
