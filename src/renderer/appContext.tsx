import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextProviderProps {
    children?: React.ReactNode | React.ReactNode[]
}

const AppContext = createContext({});

export const AppContextProvider:React.FC<AppContextProviderProps> = ({children}) => {

    return (<AppContext.Provider value={{}}>{children}</AppContext.Provider>)
};

export const useAppContext = () => {
    const value = useContext(AppContext);
    return value;
}