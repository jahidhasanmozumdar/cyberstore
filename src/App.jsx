import { Route, Routes } from "react-router-dom";
import "./App.css";
import TotalNav from "./component/Navbar/totalNav";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import ProductDetails from "./component/ProductDetails/ProductDetails ";
import AboutPage from "./component/AboutPage/AboutPage";

function App() {
  return (
    <>
      <TotalNav></TotalNav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Checkout" element={<Checkout></Checkout>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
