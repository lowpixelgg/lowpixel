import { Message } from "../Contexts/WhatsAppContext";

export const getLastMessage = (messages: Message[]) => {
  const sortedMessages = messages.sort((a, b) => b.createdAt - a.createdAt);

  return sortedMessages[0];
};

export const getMessageHour = (createdAt: number) => {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours < 12 ? "AM" : "PM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const formattedMinutes = minutes.toString().padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  return formattedTime;
};
