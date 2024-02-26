import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subtotal = searchParams.get("subtotal");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Perform form validation if needed

    const { result, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: clientName,
        phone: clientPhone,
      },
    });

    if (result && result.error) {
      console.error(result.error.message);
    } else {
      console.log(paymentMethod);
      setPaymentSuccess(true); // Set payment success to true
      // Proceed with payment processing...
    }
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: clientName,
            phone: clientPhone,
          },
        },
      }
    );

    if (error) {
      console.error("Error confirming payment:", error);
      // Handle the error appropriately, such as displaying it to the user
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Payment successful!");
      setPaymentSuccess(true); // Set payment success to true
      // Proceed with any additional actions after successful payment
    }
  };

  useEffect(() => {
    // Fetch clientSecret when the component mounts
    fetch("https://cyberstore-serverside.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subtotal }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error creating PaymentIntent:", error));
  }, [subtotal]);

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Secure Checkout</h2>
      {paymentSuccess ? ( // Conditional rendering for success message
        <div className="text-green-600 font-semibold mb-6">
          Payment successful! Thank you for your purchase.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="clientName" className="block mb-2 text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="clientName"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="clientPhone" className="block mb-2 text-gray-800">
              Phone Number
            </label>
            <input
              type="tel"
              id="clientPhone"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              required
            />
          </div>
          <label htmlFor="cardNumber" className="block mb-2 text-gray-800">
            Card Number
          </label>
          <CardElement
            id="cardNumber"
            className="border border-gray-300 rounded-md p-2 mb-4"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={!stripe || clientSecret}
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
