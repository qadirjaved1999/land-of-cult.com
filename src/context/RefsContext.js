"use client";
import { createContext, useContext, useRef } from "react";

const RefsContext = createContext(null);

export function RefsProvider({ children }) {
    const refs = {
        myAccount: useRef(null),
        documentation: useRef(null),
        discover: useRef(null),
        newWorld: useRef(null),
        community: useRef(null),
    };

    return <RefsContext.Provider value={refs}>{children}</RefsContext.Provider>;
}

export function useRefs() {
    return useContext(RefsContext);
}
