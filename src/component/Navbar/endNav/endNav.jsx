import { Link } from "react-router-dom";

const EndNav = () => {
  return (
    <nav>
      <div className="h-[53px] text-black border border-x-4 border-gray-600 hidden xl:flex justify-center items-center">
        <div className="hidden xl:flex justify-between items-center  text-[14px] lg:min-w-[1100px] lg:max-w-[1100px] mx-auto">
          <div className="flex gap-[21px]">
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/shop">Shop</Link>
            </ul>
            <ul>
              <Link to="/blog">Blog</Link>
            </ul>
            <ul>
              <Link to="/about">About Us</Link>
            </ul>
          </div>
          <div className="flex gap-[21px]">
            <span>
              `Call Us Toll Free`
              <a href="tel:(+1)866-540-3229">(+1)866-540-3229</a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EndNav;
