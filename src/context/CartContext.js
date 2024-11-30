import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, { ...product, quantity: 1 }]);

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};
