// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const cartQuantity = cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};