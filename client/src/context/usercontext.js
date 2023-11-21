import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

export const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (!user) {
            
            axios.get('http://localhost:8000/api/profile').then(({data}) =>{
                setUser(user);
                setReady(true)

            })
        }
      
    
      
    }, [])
    
    return (
        <UserContext.Provider value ={{user,setUser, ready}}>
            {children}
        </UserContext.Provider>
    )
    
}