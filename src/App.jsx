import "./App.css";
import Banner from "./component/Banner/Banner";
import Benefits from "./component/Benefites/Benefits";
import FeaturedProduct from "./component/FeaturedProduct/FeaturedProduct";
import TopNav from "./component/Navbar/TopNav/TopNav";
import EndNav from "./component/Navbar/endNav/endNav";
import MiddleNav from "./component/Navbar/middleNav/Middlenav";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <MiddleNav></MiddleNav>
      <EndNav></EndNav>
      <Banner></Banner>
      <Benefits></Benefits>
      <FeaturedProduct></FeaturedProduct>
    </>
  );
}

export default App;
