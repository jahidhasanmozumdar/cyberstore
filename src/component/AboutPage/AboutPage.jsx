import React from "react";
import happyImg from "../../assets/Happy-shopping-girls-vector-set-04-removebg-preview.png";
import contactImg from "../../assets/best-contact-us-pages-2-removebg-preview.png";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-6">
              Welcome to our celestial e-commerce store! We are dedicated to
              providing you with the best products and excellent customer
              service.
            </p>
            <p className="mb-6">
              Our team is committed to sourcing high-quality products and
              ensuring that your shopping experience is seamless and enjoyable.
            </p>
            <p className="mb-6">
              If you have any questions or feedback, please do not hesitate to{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                contact us
              </a>
              . We would love to hear from you!
            </p>
          </div>
          <div className="text-center">
            <img
              src={happyImg}
              alt="Image"
              className="mx-auto md:mx-0 w-full md:w-3/4"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-12">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row">
            <form className="max-w-lg mx-auto md:mr-8 mb-8 md:mb-0">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-blue-200 hover:text-blue-900"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="text-center">
              <img
                src={contactImg}
                alt="Image"
                className="mx-auto md:mx-0 w-full md:w-3/4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
