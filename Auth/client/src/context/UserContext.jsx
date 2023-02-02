import {useState, createContext} from 'react';
import io from 'socket.io-client';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id: 0,
        username: "",
        room: ""
    })
    const [socket] = useState(() => io(":8000"))
    return (
        <UserContext.Provider value={{user, setUser, socket}}>
            {children}
        </UserContext.Provider>
    )
}

export  {UserProvider, UserContext}

