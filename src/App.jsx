import { Route, Routes } from "react-router-dom";
import "./App.css";
import TotalNav from "./component/Navbar/totalNav";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <>
      <TotalNav></TotalNav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </>
  );
}

export default App;
