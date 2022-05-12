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
        productsList.find(item => item.id === id).quantityCart = 0
        setProductsList(productsList.filter(item => item.id !== id))
    }

    const isInCart = (product,count) => {
        productsList.find(item => item.id === product.id)
        ? product.quantityCart = product.quantityCart + count
        : addItem(product, count)
    }

    const clear = () => {
        productsList.map(item => item.quantityCart = 0)
        setProductsList([])
    }

    const totalPrice = () => {
        return productsList.map(item =>item).reduce((total, item) => total + item.quantityCart * item.price, 0)
    }
    
    const quantityItem = () => {
        return productsList.map(item => item.quantityCart).reduce((total, item) => total + item, 0);
    }

    return(
        <CartContext.Provider value={{
            products: productsList,
            addItem: addItem,
            removeItem: removeItem,
            isInCart: isInCart,
            clear: clear,
            totalPrice: totalPrice,
            quantityItem: quantityItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;