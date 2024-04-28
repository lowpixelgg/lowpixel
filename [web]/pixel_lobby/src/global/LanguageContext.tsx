import React,{ createContext, useState } from 'react';

export type LangContextType = {
    lang: string;
    setLang: (lang: string) => void;
}

type Props = {
    children: React.ReactNode;
}

export const langContext = createContext<LangContextType | null>(null);

export const LangProvider = ({children}: Props) => {
    const [lang, setLang] = useState('br');

    return (
        <langContext.Provider value={{ lang, setLang }}>
            {children}
        </langContext.Provider>
    )
};