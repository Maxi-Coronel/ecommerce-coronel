import { createContext, useState } from 'react';
import { getCollection } from '../Services/firebase';

const UserContext = createContext({
    user: {},
    orders: [],
    getOrders: () => {},
    set: () => {},
    close: () => {}
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState()

    const set = obj => setUser(obj);

    const close = () => setUser({})
    
    const getOrders = () => {
         getCollection('orders', 'user', user)
            .then(res => {
                setOrders(res.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0)))
            })
            .catch(err => alert(`error en promise`))
    }

    return(
        <UserContext.Provider value={{
            user,
            orders,
            getOrders,
            set,
            close
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;