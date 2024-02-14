import React from "react";
// import BlogPost from "./BlogPost/BlogPost";

const Blog = () => {
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "The Latest Fashion Trends",
  //     content: "Explore the hottest fashion trends of the season...",
  //   },
  //   {
  //     id: 2,
  //     title: "Top 10 Tech Gadgets in 2024",
  //     content: "Discover the cutting-edge technology making waves this year...",
  //   },
  //   // Add more blog posts as needed
  // ];
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample blog post cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.ctfassets.net/wowgx05xsdrr/4hTdQ2y21V9MEajfNZOJwH/f711fdfc12c9190a2158065605e8285b/Molly_Mutt_Customer_Story.png?fm=webp&w=1200&q=75"
              alt="Blog Post"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Molly Mutt Builds a Better Shopping Experience for Dog Owners
              </h2>
              <p className="text-gray-700">
                Let’s face it — anyone with a dog understands the temptation
                that creeps in the second you start shopping for them.
              </p>
              <a href="#" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.ctfassets.net/wowgx05xsdrr/4hTdQ2y21V9MEajfNZOJwH/f711fdfc12c9190a2158065605e8285b/Molly_Mutt_Customer_Story.png?fm=webp&w=1200&q=75"
              alt="Blog Post"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Molly Mutt Builds a Better Shopping Experience for Dog Owners
              </h2>
              <p className="text-gray-700">
                Let’s face it — anyone with a dog understands the temptation
                that creeps in the second you start shopping for them.
              </p>
              <a href="#" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.ctfassets.net/wowgx05xsdrr/4hTdQ2y21V9MEajfNZOJwH/f711fdfc12c9190a2158065605e8285b/Molly_Mutt_Customer_Story.png?fm=webp&w=1200&q=75"
              alt="Blog Post"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Molly Mutt Builds a Better Shopping Experience for Dog Owners
              </h2>
              <p className="text-gray-700">
                Let’s face it — anyone with a dog understands the temptation
                that creeps in the second you start shopping for them.
              </p>
              <a href="#" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
