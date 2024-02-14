import "./custom.css";
import { BiLeftArrowCircle, BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeToCart,
} from "../../Redux/actionCreator/actionCreator";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const calculateSubtotal = (cart) => {
    return cart
      ?.reduce((total, item) => total + item.price * item.quantity, 0)
      ?.toFixed(2);
  };
  let cartData = JSON.parse(localStorage.getItem("bookingCart"));
  console.log("cartData", cartData);

  useEffect(() => {
    calculateSubtotal(cartData);
  }, [state]);

  return (
    <div className="max-w-7xl mx-auto mt-8 bg-zinc-200 min-h-[70vh] shadow-xl rounded-md p-4 md:p-8">
      <div className="md:flex justify-between">
        <div className="md:w-2/3 pr-4">
          <div className="mb-4">
            <Link
              to="/"
              className="flex items-center text-[18px] text-blue-500 hover:text-blue-700"
            >
              <BiLeftArrowCircle className="text-[25px]" />
              <span className="ml-2">Continue Shopping</span>
            </Link>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-gray-500">
              <p className="text-lg md:text-xl font-semibold">Shopping cart</p>
              <p className="text-lg md:text-xl">Sort by: price</p>
            </div>
            {cartData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-around items-center bg-white shadow-md rounded-md mb-4 md:mb-6"
              >
                <div className="h-[50px] w-[50px] flex justify-center items-center">
                  <img src={item.image_url} alt={item.name} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                </div>
                <div className="flex items-center gap-2 md:gap-8">
                  <button>
                    <BiPlus
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="text-[20px]"
                    />
                  </button>
                  <p>{item.quantity}</p>
                  <button>
                    <BiMinus
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="text-[20px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-20 md:gap-10">
                  <p>${item.price * item.quantity}</p>
                  <MdDelete
                    onClick={() => dispatch(removeToCart(item))}
                    className="text-[20px] text-red-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <div className="bg-white rounded-md shadow-md p-4 md:p-6 mt-20">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Order Summary
            </h2>

            {/* Cart Items List */}
            {/* Add your cart items here */}

            {/* Subtotal */}
            <div className="flex justify-between items-center border-b border-gray-300 py-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">${calculateSubtotal(cartData)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between items-center border-b border-gray-300 py-2">
              <span className="text-gray-600">Shipping</span>
              <span className="font-bold">$50.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-b border-gray-300 py-2">
              <span className="text-gray-600">Total</span>
              <span className="font-bold text-green-600">
                ${parseFloat(calculateSubtotal(cartData)) + 50.0}
              </span>
            </div>

            {/* Checkout Button */}
            <Link to="/Checkout">
              <button className="bg-green-500 text-white rounded-md py-2 mt-4 w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
