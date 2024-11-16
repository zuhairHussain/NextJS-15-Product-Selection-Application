'use server';
import { cookies } from 'next/headers'
import { CartItem } from '../types/Cart';

export const getCartItems = async () => {
  const cookieStore = await cookies()
  const cartItemsString = cookieStore.get('cart')?.value;

  if (cartItemsString) {
    return JSON.parse(cartItemsString) as CartItem[];
  }

  return [];
}

export const placeOrder = async () => {
  const cookieStore = await cookies()
  cookieStore.delete('cart');
}