import React from "react";
import BlogPost from "./BlogPost/BlogPost";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Latest Fashion Trends",
      content: "Explore the hottest fashion trends of the season...",
    },
    {
      id: 2,
      title: "Top 10 Tech Gadgets in 2024",
      content: "Discover the cutting-edge technology making waves this year...",
    },
    // Add more blog posts as needed
  ];
  return (
    <div className="max-w-[1300px] mx-auto my-10 p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Our Blog</h1>
      <div className="flex flex-wrap justify-between">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
