import React from "react";

const ComingSoon = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-8">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          <button className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
