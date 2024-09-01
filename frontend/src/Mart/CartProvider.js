import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([]);

    return (
        <CartContext.Provider value={{ cartProduct, setCartProduct }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
