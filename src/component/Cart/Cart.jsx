import React from "react";
import "./custom.css";
import { BiLeftArrowCircle, BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-[50px] bg-zinc-200 h-[70vh]">
      <div>
        <div className="ml-[10px]">
          <p className="flex text-center">
            <span className="text-[25px]">
              <BiLeftArrowCircle />
            </span>
            <span className="text-[18px]">Continue Shopping</span>
          </p>
        </div>
        <div className="max-w-[900px] mx-auto flex justify-between mt-[50px]">
          <div>
            <div className="flex justify-between gap-[300px]">
              <p className="text-[18px]">Shopping cart</p>
              <p className="text-[18px]">sort by:price</p>
            </div>
            <p className="horizontal-line"></p>
            <div className="flex justify-around items-center gap-[20px]  mt-[20px] bg-white shadow-md rounded-md">
              <div className="h-[50px] w-[50px]">
                <img
                  src="https://adminapi.applegadgetsbd.com/storage/media/large/2238-32796.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4>One plus 7 pro</h4>
              </div>
              <div className="flex items-center gap-[8px]">
                <BiPlus className="text-[20px]" />
                <p>1</p>
                <BiMinus className="text-[20px]" />
              </div>
              <div className="flex items-center gap-[10px] ">
                <p>$870</p>
                <MdDelete className="text-[20px]" />
              </div>
            </div>
          </div>
          <div>
            <h1>Cart details</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
