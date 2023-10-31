import React, { Children, useState } from 'react'
import { AuthContext } from './AuthContext'

function AuthProvider({children}) {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [user,setUser]=useState(null)

    const logIn = (userData)=>{
        localStorage.setItem("token",userData.token)
        setIsAuthenticated(true);
        setUser(userData.user);
    }
    const logOut = ()=>{
        setIsAuthenticated(false);
        setUser(null);
    }

    const updatedValues = {
        isAuthenticated,
        user,
        logIn,
        logOut
    } 
  return (
    <AuthContext.Provider value={updatedValues}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;