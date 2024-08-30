import React, { createContext, useContext, useState } from 'react';
import { ProductFormat } from './format';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProduct, setCartProduct] = useState();
    
    return (
        <CartContext.Provider value={{cartProduct,setCartProduct}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
