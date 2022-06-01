import { createContext, useState } from 'react';

const CartContext = createContext({
    products: [],
    modal: {},
    closeModal: () => {},
    addItem: () => {},
    removeItem: () => {},
    isInCart: () => {},
    clear: () => {},
    quantityItem: () => {},
    totalPrice: () => {},
    initial: Number
});

export const CartContextProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);
    const [isModal, setIsModal] = useState({
        title: "",
        content: "",
        isOpen: false
    });

    const closeModal = () => setIsModal({isOpen: false})

    const initial = 1;

    const addItem = (product, count) => {
        isInCart(product)
            ? product.stock >= productsList.find(item => item.id === product.id).quantity + count
                ? setProductsList(productsList.map(item => item.id === product.id ? {...item, quantity: item.quantity + count} : item))
                : setIsModal({
                    title: product.title,
                    content: `No tenemos suficiente stock de ${product.title}`,
                    isOpen: true
                })
            : setProductsList([{quantity: count, ...product}, ...productsList])
    }

    const removeItem = (id) => {
        setProductsList(productsList.filter(item => item.id !== id))
    }

    const isInCart = (product) => {
        return productsList.map(item => item.id).indexOf(product.id) !== -1;
    }

    const clear = () => {
        setProductsList([]);
    }

    const totalPrice = () => {
       return productsList.reduce((total, item) => total + item.quantity * item.price, 0)
    }

    const quantityItem = () => {
        return productsList.reduce((total, item) => total + item.quantity, 0)
    }

    return(
        <CartContext.Provider value={{
            products: productsList,
            modal: isModal,
            closeModal,
            addItem,
            removeItem,
            isInCart,
            clear,
            totalPrice,
            quantityItem,
            initial
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;