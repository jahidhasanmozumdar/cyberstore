import "./App.css";
import Banner from "./component/Banner/Banner";
import MainNav from "./component/Navbar/Subnav/MainNav/MainNav";
import SubNav from "./component/Navbar/Subnav/Subnav";
import SubBanner from "./component/SubBanner/SubBanner";

function App() {
  return (
    <>
      <SubNav></SubNav>
      <MainNav></MainNav>
      <Banner></Banner>
      <SubBanner></SubBanner>
    </>
  );
}

export default App;
