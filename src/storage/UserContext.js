import { createContext, useState } from 'react';

const UserContext = createContext({
    user: {},
    set: () => {},
    close: () => {}
});

export const UserContextProvider = ({ children }) => {
    const [userList, setUserList] = useState({});

    const set = obj => setUserList(obj);

    const close = () => setUserList({})

    return(
        <UserContext.Provider value={{
            user: userList,
            set,
            close
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;