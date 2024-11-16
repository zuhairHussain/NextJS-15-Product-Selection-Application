'use client';
import { StoreProvider } from '@/app/context/StoreContext';
import ProductListing from './ProductListing';
import { CartItem, Product } from '../types/Cart';

type StoreProps = {
  productList: Product[],
  cartItems: CartItem[]
}

export default function Store({ productList, cartItems }: StoreProps) {
  return (
    <StoreProvider productList={productList} cartItems={cartItems}>
      <ProductListing />
    </StoreProvider>
  );
}