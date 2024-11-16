import { getCartItems } from './actions/cart';
import { getProducts } from './actions/products';
import Store from './components/Store';

export default async function HomePage() {
  const productList = await getProducts();
  const cartItems = await getCartItems();

  return (
    <Store productList={productList} cartItems={cartItems} />
  );
}