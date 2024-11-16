'use client';
import { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import CartModal from '@/app/components/CartModal';
import { Product } from '@/app/types/Cart';
import { useStore } from '@/app/context/StoreContext';

export default function ProductListing() {
  const { products, cart, handleAddToCart } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-8 text-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          View Cart | {cart?.length}
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Product Selection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>

      {isModalOpen && (
        <CartModal
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}