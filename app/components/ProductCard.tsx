'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ProductCardProps } from '@/app/types/Cart';

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover rounded-md"
        width={320}
        height={130}
      />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Price: SAR {product.price}</p>
      <p className="text-gray-600">Stock: {product.stock}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        max={product.stock}
        onChange={e => setQuantity(Math.min(product.stock, Number(e.target.value)))}
        className="w-full border border-gray-300 rounded mt-2 p-2"
      />
      <button
        className={`w-full mt-4 py-2 px-4 rounded text-white ${product.stock > 0
          ? 'bg-primary hover:bg-green-700'
          : 'bg-gray-400 cursor-not-allowed'
          }`}
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;