import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
  ReactNode,
} from "react";
import { RelinkSource, useRelinkState } from "react-relink";

export type Notification = {
  type: string;
  user: string;
  message: string;
  id: number;
};

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: number) => void;
  removeAllNotifications: () => void;
}

interface NotifyProviderProps {
  children: ReactNode;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export const useNotifications = (): NotificationsContextType => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};

export const PushSource = new RelinkSource({
  key: "pushNotifies",
  default: {
    new: false,
    type: "",
    user: "",
    message: "",
    handleRemoveCard: () => {},
  },
});

const NotificationsProvider: FC<NotifyProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      type: "bank",
      user: "Soweto336",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa odio iste maiores adipisci in",

      id: 3,
    },
  ]);
  const [pushState, setPushNotification, resetPush] =
    useRelinkState(PushSource);

  const addNotification = (notification: Notification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { ...notification, id: prevNotifications.length + 1 },
    ]);
    setPushNotification({
      new: true,
      ...notification,
      handleRemoveCard: () => {},
    });
  };

  const removeNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const removeAllNotifications = () => {
    setNotifications([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      resetPush();
      clearTimeout(timer);
    }, 4000);
  }, [pushState]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        removeAllNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
