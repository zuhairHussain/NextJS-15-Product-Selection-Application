import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem, Product } from '@/app/types/Cart';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { placeOrder } from "../actions/cart";

const StoreContext = createContext<CartContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode, productList: Product[], cartItems: CartItem[] }> = ({ children, productList, cartItems }) => {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>(cartItems);
  const [products, setProducts] = useState(productList);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    // Decrease stock in the local products state
    setProducts((prevProducts) =>
      prevProducts?.map((item) =>
        item.id === product.id ? { ...item, stock: item.stock - quantity } : item
      ) ?? null
    );

    // Add the item to the cart
    addToCart(product, quantity);
  };

  const handleRemoveFromCart = (productId: string) => {
    const removedItem = cart.find((item) => item.id === productId);
    if (removedItem) {
      setProducts((prevProducts) =>
        prevProducts?.map((product) =>
          product.id === productId
            ? { ...product, stock: product.stock + removedItem.quantity }
            : product
        ) ?? null
      );

      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };

  const placeOrderHandler = () => {
    placeOrder();
    setCart([]);
    router.push('/order-confirmation');
  }

  return (
    <StoreContext.Provider value={{ products, cart, handleAddToCart, handleRemoveFromCart, placeOrderHandler }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a CartProvider");
  }
  return context;
};