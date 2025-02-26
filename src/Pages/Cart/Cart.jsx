import { useState } from "react";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Organic Apples",
    price: 5.99,
    image: "/images/products/apple.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 3.49,
    image: "/images/products/carrots.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Natural Honey",
    price: 9.99,
    image: "/images/products/honey.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <FaShoppingCart /> Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Continue Shopping
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
