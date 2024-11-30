import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Store cart items, and allow updates with setCart
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = (name, email, password) => {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user)); 
    setMessage('Registration successful!');
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      setIsAuthenticated(true);
      setMessage('Login successful!');
    } else {
      setIsAuthenticated(false);
      setMessage('Invalid credentials.');
    }
  };

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart); 
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); 
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <AuthContext.Provider value={{ register, login, isAuthenticated, message, cart, setCart, addToCart, getTotalItems }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
