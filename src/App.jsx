import "./App.css";
import Banner from "./component/Banner/Banner";
import Benefits from "./component/Benefites/Benefits";
import EcommerceBanner from "./component/EcommerceBanner/EcommerceBanner";
import FeaturedProduct from "./component/FeaturedProduct/FeaturedProduct";
import Footer from "./component/Footer/Footer";
import TopNav from "./component/Navbar/TopNav/TopNav";
import EndNav from "./component/Navbar/endNav/endNav";
import MiddleNav from "./component/Navbar/middleNav/Middlenav";
import ProductCategory from "./component/ProductCategory/ProductCategory";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <MiddleNav></MiddleNav>
      <EndNav></EndNav>
      <Banner></Banner>
      <Benefits></Benefits>
      <FeaturedProduct></FeaturedProduct>
      <EcommerceBanner></EcommerceBanner>
      <ProductCategory></ProductCategory>
      <Footer></Footer>
    </>
  );
}

export default App;
