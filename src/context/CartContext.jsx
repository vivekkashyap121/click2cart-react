import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  function saveCart(updated) {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function addToCart(name, price, image) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      saveCart(cart.map(item =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      saveCart([...cart, { name, price, image, qty: 1 }]);
    }
  }

  function changeQty(name, delta) {
    const updated = cart
      .map(item => item.name === name ? { ...item, qty: item.qty + delta } : item)
      .filter(item => item.qty > 0);
    saveCart(updated);
  }

  function removeItem(name) {
    saveCart(cart.filter(item => item.name !== name));
  }

  function clearCart() {
    saveCart([]);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQty, removeItem, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
