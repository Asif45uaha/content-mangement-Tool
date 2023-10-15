import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [uId, setUid] = useState({})
    return (
        <AuthContext.Provider value={{ uId, setUid }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return (
        useContext(AuthContext)
    )
}