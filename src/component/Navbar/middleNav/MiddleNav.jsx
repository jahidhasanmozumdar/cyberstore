import { useEffect, useState } from "react";
import { BiCartAdd, BiHeart, BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MiddleNav = () => {
  const state = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);

  const totalPrice = cart?.cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart?.cart?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("bookingCart"));
    // Ensure cartData is an array before setting it
    setCart(cartData);
  }, [state]);

  return (
    <div className="navbar h-[123px] lg:min-w-[1100px] lg:max-w-[1100px] mx-auto flex justify-between   items-center">
      <div>
        <img
          src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/09/logo-default.png"
          alt="Logo"
          className="w-full h-[26px]"
        />
      </div>
      <div className="hidden lg:flex justify-center items-center gap-[15px] ">
        <div className="border flex justify-center items-center">
          <div className="dropdown px-[4px] py-[12px]">
            <button className="text-[12px] font-[500px] w-[153px]">
              All Category
            </button>
            <ul className="dropdown-content menu rounded">
              <li>
                <a>Dropdown Item 1</a>
              </li>
              <li>
                <a>Dropdown Item 2</a>
              </li>
              <li>
                <a>Dropdown Item 3</a>
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="outline-none w-[400px]"
          />
          <BiSearch className="text-[40px]"></BiSearch>
        </div>
        <div className="flex gap-[10px] cursor-pointer">
          <p>
            <BiHeart className="text-[34px]"></BiHeart>
          </p>
          <Link to="/cart" className="flex justify-center items-center">
            <BiCartAdd className="text-[34px] relative">
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-black px-2 py-1 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </BiCartAdd>
            (${totalPrice?.toFixed(2)})
          </Link>
        </div>
      </div>
      <button className="lg:hidden btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MiddleNav;
