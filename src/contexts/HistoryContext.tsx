import React, { createContext, useState } from "react";

export interface Session {
    id: string;
    type: "work" | "break";
    duration: number;
    date: Date;
}

// type def for the context value
export interface HistoryContextValue {
    history: Session[];
    addHistory: (newSession: Session) => void;
}

// some mock sessions
const mockSessions: Session[] = [
    {
        id: "1",
        type: "work",
        duration: 25 * 60,
        date: new Date(),
    },
    {
        id: "2",
        type: "break",
        duration: 5 * 60,
        date: new Date(),
    },
    {
        id: "3",
        type: "work",
        duration: 25 * 60,
        date: new Date(),
    },
];

export const HistoryContext = createContext<HistoryContextValue>({
    history: [],
    addHistory: (newSession: Session) => {},
});

export const HistoryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [history, setHistory] = useState<Session[]>(mockSessions);

    const addHistory = (newSession: Session) => {
        setHistory((prevHistory) => [...prevHistory, newSession]);
    };

    return (
        <HistoryContext.Provider value={{ history, addHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};
