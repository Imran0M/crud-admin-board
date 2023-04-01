import React, { createContext, useContext, useState } from 'react'
import { Data } from './Data/Data'
import { DataTwo } from './DataTwo/DataTwo'

// creatng context
export const AppContext= createContext(null)
function AppProvider({children}) {
    const [user, setUser]=useState(Data)
    const [teacher, setTeacher]=useState(DataTwo)
  return (
    // set subscribe and provider
  < AppContext.Provider 
  value={
    {
        user,
        setUser,
        teacher, 
        setTeacher,
    }
  }>
    {/* subscriber */}
    {/* App components will be act as a children  */}
     {children}
  </AppContext.Provider>
  )
}

export const AppCon=()=>{
    // use context
    return useContext(AppContext)
}

export default AppProvider