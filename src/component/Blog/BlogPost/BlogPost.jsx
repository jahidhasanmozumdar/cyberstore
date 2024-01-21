import React from "react";

const BlogPost = ({ title, content }) => {
  return (
    <div className="w-48 mb-4 p-3 bg-red-200 shadow-sm rounded">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">{content}</p>
      <button className="bg-blue-500 text-white border-none px-4 py-2 cursor-pointer rounded-md">
        Read More
      </button>
    </div>
  );
};

export default BlogPost;
