import React, { createContext, useContext, useState } from "react"

type CartItem = {
  id: string;
  price: number;
  image: string;
  title: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const ContextoCarrinho = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item])
  }

  return <ContextoCarrinho.Provider value={{ cart, addToCart }}>{children}</ContextoCarrinho.Provider>
}

export const useCart = () => {
  const context = useContext(ContextoCarrinho)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
