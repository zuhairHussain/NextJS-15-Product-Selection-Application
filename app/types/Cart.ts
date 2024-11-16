export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  products: Product[],
  cart: CartItem[];
  handleAddToCart: (product: Product, quantity: number) => void;
  handleRemoveFromCart: (productId: string) => void;
  placeOrderHandler: () => void;
}

export interface ProductCardProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}