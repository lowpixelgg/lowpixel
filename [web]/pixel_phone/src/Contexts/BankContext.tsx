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

export type Key = {
  _id: number;
  bank: string;
  key: string;
  title: string;
};

export type Transaction = {
  _id: number;
  bank: number;
  from: number;
  to: number;
  value: number;
  createdAt: number;
  name?: string;
};

export type Bank = {
  _id: number;
  agency: number;
  balance: number;
  createdAt: number;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
  keys: Key[];
  extract: Transaction[];
  picture: string;
  contacts: Contact[];
};

export type Contact = {
  id: number;
  bank: Bank;
  key: Key;
};

interface BankProviderProps {
  children: ReactNode;
}

export type Transfer = {
  firstname: string;
  lastname: string;
  value: number;
  description: string;
  key: string;
  agency: number;
  bank: number;
};

export type Registration = {
  firstname: string;
  lastname: string;
  password: string;
  confirm: string;
};

export interface BankContextType {
  bank: Bank | undefined;
  registrationData: Registration;
  transfer: Transfer | undefined;
  setInitialBank: Dispatch<SetStateAction<Bank | undefined>>;
  setTransferData: Dispatch<SetStateAction<Transfer | undefined>>;
  setRegistrationData: Dispatch<SetStateAction<Registration>>;
  removeContact: (id: number) => void;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export const useBank = (): BankContextType => {
  const context = useContext(BankContext);

  if (!context) {
    throw new Error("useBank must be used within a BankContext");
  }

  return context;
};

const BankProvider: FC<BankProviderProps> = ({ children }) => {
  const [bank, setInitialBank] = useState<Bank | undefined>();
  const [transfer, setTransferData] = useState<Transfer | undefined>();
  const [registrationData, setRegistrationData] = useState<Registration>({
    firstname: "",
    lastname: "",
    password: "",
    confirm: "",
  });

  const removeContact = (id: number) => {
    setInitialBank({
      ...bank,
      // @ts-ignore
      contacts: bank?.contacts.filter((item) => item.id !== id),
    });
  };

  return (
    <BankContext.Provider
      value={{
        bank,
        transfer,
        setTransferData,
        removeContact,
        setRegistrationData,
        registrationData,
        setInitialBank,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export default BankProvider;
