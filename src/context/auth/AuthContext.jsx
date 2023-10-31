import { createContext } from "react";

export const AuthContext = createContext({
    isAuthencated: false,
    user: null,
    logIn: ()=>{},
    logOut: ()=>{}
}) 