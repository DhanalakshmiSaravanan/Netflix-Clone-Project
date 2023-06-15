import React, {  createContext,useState } from 'react'
export const UserContext=createContext(null)
const UserContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [searchmovie,setSearchmovie]=useState("")
    const submit=(text)=>{
        setUser(text)
    }
    const userlogout=()=>{
        setUser(null)
    }
     return(
     <UserContext.Provider value={{submit,user,userlogout,setSearchmovie,searchmovie,}}>     
        {children}
     </UserContext.Provider>
  )
}

export default UserContextProvider;