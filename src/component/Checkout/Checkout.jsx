// import React, { useEffect, useState } from "react";

const Checkout = () => {
  // const [checkTotal, setCheckTotal] = useState();
  // useEffect(() => {
  //   let getTotal = Number(JSON.parse(localStorage.getItem("totalPrice")));
  //   setCheckTotal(getTotal);
  // }, []);
  // console.log(checkTotal);
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-center mb-5">Checkout</h1>
      <div>
        <div className="mb-5">
          <h2 className="text-xl mb-3">Billing Address</h2>
          <form>
            {/* Billing address fields */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-input w-full border"
                required
              />
            </div>
            {/* Add more address fields as needed */}
          </form>
        </div>

        <div className="mb-5">
          <h2 className="text-xl mb-3">Payment</h2>
          <form>
            {/* Payment fields */}
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block mb-1 ">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="form-input w-full border"
                required
              />
            </div>
            {/* Add more payment fields as needed */}
          </form>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
