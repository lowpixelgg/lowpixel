import React, { useEffect, useState, useContext, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

interface SocketProviderProps {
  children: React.ReactNode;
}

type SocketContextType = {
  socket: Socket | undefined,
  connect: (conn: string) => void;
}

const SocketContext = React.createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const socketRef = useRef<Socket>();

  const connect = (conn: string) => {
    if (!isConnected && !socketRef.current) {
      socketRef.current = io('http://26.255.75.156:4096/game/phone', {
        query: {
          id: conn
        }
      });

      socketRef.current.on('connect', () => {
        setIsConnected(true);
      });
    }
  };

  return (
    <SocketContext.Provider value={{ connect, socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket deve ser usado dentro de um SocketProvider');
  }
  return context;
};
