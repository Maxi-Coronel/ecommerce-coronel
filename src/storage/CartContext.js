import { createContext, useState } from 'react';

const CartContext = createContext({
    products: [],
    addItem: () => {},
    removeItem: () => {},
    isInCart: () => {},
    clear: () => {}
});

export const CartContextProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);

    const addItem = (product, count) => {
        setProductsList([product, ...productsList])
        product.quantityCart + count <= product.stock
        ? product.quantityCart = product.quantityCart + count
        : alert('no hay suficiente stock')
    }

    const removeItem = id => {
        productsList.find((i) => i.id === id).quantityCart = 0
        setProductsList(productsList.filter(i => i.id !== id))
    }

    const isInCart = (product,count) => {
        productsList.find((i) => i.id === product.id)
        ? product.quantityCart = product.quantityCart + count
        : addItem(product, count)
    }

    const clear = () => {
        productsList.map(e => e.quantityCart = 0)
        setProductsList([])
    }

    return(
        <CartContext.Provider value={{
            products: productsList,
            addItem: addItem,
            removeItem: removeItem,
            isInCart: isInCart,
            clear: clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;