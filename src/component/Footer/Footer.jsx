import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-28">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col space-y-4 lg:space-y-0">
          <h3 className="text-xl font-bold">Customer Service</h3>
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Stores
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-300">
            FAQ
          </a>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-0">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <a href="#" className="hover:text-gray-300">
            My Account
          </a>
          <a href="#" className="hover:text-gray-300">
            Order Tracking
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing Plans
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms & Conditions
          </a>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-0">
          <h3 className="text-xl font-bold">Sign up to Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex items-center mt-6 lg:mt-0">
          <p className="text-sm text-gray-500 mr-4">
            © 2024, All Rights Reserved
          </p>
          <img
            src="https://i.ibb.co/TW74DLx/payments.png"
            alt="Payment methods"
            className="h-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
