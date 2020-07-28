import React, { useContext, useReducer } from "react";
import { auth, authReducer } from "./AuthStore"

const GlobalContext = React.createContext();

function useGlobalContext() {
    return useContext(GlobalContext);
}

function GlobalProvider({value=[], ...props}) {
    const [authState, dispatchAuth] = useReducer(authReducer, auth)

    return (<GlobalContext.Provider value={{
        auth: { authState, dispatchAuth },
    }} 
    {...props}
    />);
}

export default { GlobalProvider, useGlobalContext }