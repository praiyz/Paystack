import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePaystackPayment } from "react-paystack";

interface CartItem {
  id: string;
  img: string;
  name: string;
  amount: number;
  price: number;
}

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleChange: (item: CartItem, value: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState<number>(0);

  const handleRemove = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.error("Item removed from cart", { autoClose: 1000 });
  };

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
    setPrice(total);
  }, [cart]);

  const config = {
    reference: new Date().getTime().toString(),
    email: "Jo'smenwears@gmail.com",
    publicKey: import.meta.env.VITE_PAYSTACK_TEST_PUBLIC_KEY as string,
    amount: price * 100,
  };

  const onSuccess = (reference: { reference: string }) => {
    toast.success(`Payment successful! Ref: ${reference.reference}`);
  };

  const onClose = () => {
    toast.error("Payment unsuccessful, try again!");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <>
      <section className="w-full mx-auto container flex justify-center px-4">
        <section className="mt-8 w-full max-w-4xl">
          {cart.length === 0 ? (
            <div className="flex justify-center">
              <p className="text-center font-semibold text-xl">
                Your cart is empty
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 p-4 border-b"
                key={item.id}
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-16 object-cover rounded"
                  />
                  <p className="font-semibold text-lg">{item.name}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-1 text-lg font-bold border rounded"
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.amount}</span>
                  <button
                    className="px-3 py-1 text-lg font-bold border rounded"
                    onClick={() => handleChange(item, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-green-600">
                    ${item.price}
                  </span>
                  <button
                    className="p-2 rounded-lg bg-red-100 text-red-500 hover:text-red-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && (
            <>
              <div className="flex justify-between mt-6 px-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-semibold text-green-600">
                  ${price}
                </span>
              </div>

              <section className="flex justify-center mt-8">
                <button
                  onClick={() => initializePayment({ onSuccess, onClose })}
                  className="w-full max-w-xs bg-green-600 text-white py-3 px-4 text-lg rounded-lg transition duration-300 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600"
                >
                  Checkout
                </button>
              </section>
            </>
          )}
        </section>
      </section>
      <ToastContainer />
    </>
  );
};

export default Cart;
