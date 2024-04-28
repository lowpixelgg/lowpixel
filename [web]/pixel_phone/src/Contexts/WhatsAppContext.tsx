import React, {
  useContext,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

export type Message = {
  _id: number;
  from: number;
  to: number;
  content: string;
  createdAt: number;
};

export type Contact = {
  data: {
    id: number;
    name: string;
    about?: string;
    stories?: string;
    picture?: string;
    phoneId: string;
  };
  messages: Message[];
};

export type WhatsApp = {
  _id: number;
  about?: string;
  picture?: string;
  chatboxes: Contact[];
};

interface WhatsAppProviderProps {
  children: ReactNode;
}

export interface WhatsAppContextType {
  whats: WhatsApp | undefined;
  addMessageToChatbox: (chatboxId: number, message: Message) => void;
  addTemporaryContact: (data: Contact) => void;
  setInitialWhatsApp: Dispatch<SetStateAction<WhatsApp | undefined>>;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(
  undefined
);

export const useWhatsApp = (): WhatsAppContextType => {
  const context = useContext(WhatsAppContext);

  if (!context) {
    throw new Error("useWhatsApp must be used within a WhatsAppContyext");
  }

  return context;
};

const WhatsAppProvider: FC<WhatsAppProviderProps> = ({ children }) => {
  const [whats, setInitialWhatsApp] = useState<WhatsApp | undefined>();

  const addMessageToChatbox = (chatboxId: number, message: Message) => {
    setInitialWhatsApp((prevState) => {
      if (prevState) {
        const chatboxToUpdate = prevState.chatboxes.find(
          (contact) => contact.data.id === chatboxId
        );

        if (chatboxToUpdate) {
          const messageExists = chatboxToUpdate.messages.find(
            (existingMessage) => existingMessage._id === message._id
          );

          if (!messageExists) {
            const updatedChatboxes = prevState.chatboxes.map((contact) => {
              if (contact.data.id === chatboxId) {
                return {
                  ...contact,
                  messages: [...contact.messages, message],
                };
              }
              return contact;
            });

            return {
              ...prevState,
              chatboxes: updatedChatboxes,
            };
          }
        }
      }
      return prevState;
    });
  };

  const addTemporaryContact = (data: Contact) => {
    if (whats) {
      const updatedChatboxes = whats.chatboxes
        ? [...whats.chatboxes, data]
        : [data];
      const updatedWhatsApp: WhatsApp = {
        ...whats,
        chatboxes: updatedChatboxes,
      };
      setInitialWhatsApp(updatedWhatsApp);
    }
  };

  return (
    <WhatsAppContext.Provider
      value={{
        whats,
        setInitialWhatsApp,
        addMessageToChatbox,
        addTemporaryContact,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export default WhatsAppProvider;
