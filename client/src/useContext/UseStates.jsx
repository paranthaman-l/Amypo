/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";


const Context = createContext();

export const States = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <Context.Provider
            value={{
                user,
                setUser
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStates = () => useContext(Context);