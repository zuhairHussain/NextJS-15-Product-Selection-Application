'use server';
import productsData from '@/app/data/products.json';
import { cookies } from 'next/headers'
import { CartItem, Product } from '../types/Cart';

export const getProducts = async (): Promise<Product[]> => {
  const cookieStore = await cookies()
  const cartItemsString = cookieStore.get('cart')?.value;

  if (cartItemsString) {
    const cartItems = JSON.parse(cartItemsString) as CartItem[];
    return productsData.map((product) => {
      const cartItem = cartItems.find((item) => item.id === product.id);
      return cartItem
        ? { ...product, stock: product.stock - cartItem.quantity }
        : product;
    })
  }

  return productsData;
}