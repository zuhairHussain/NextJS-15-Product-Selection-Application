'use client';
import { useStore } from "@/app/context/StoreContext";
import calculateDiscount from "@/app/utils/calculateDiscount";

interface CartModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ setIsModalOpen }) => {
  const { cart, handleRemoveFromCart, placeOrderHandler } = useStore();
  const originalTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = calculateDiscount(originalTotal);
  const discountedTotal = originalTotal * (1 - discount);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        <ul className="space-y-4">
          {cart.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name} x {item.quantity}</span>
              <span>SAR {item.price * item.quantity}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>Original Total: SAR {originalTotal.toFixed(2)}</p>
          <p>Discount: {discount * 100}%</p>
          <p className="font-bold">Final Total: SAR {discountedTotal.toFixed(2)}</p>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          {cart?.length > 0 &&
            <button
              className="bg-primary text-white py-2 px-4 rounded"
              onClick={placeOrderHandler}
            >
              Confirm Order
            </button>}

          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;