import "./App.css";
import Banner from "./component/Banner/Banner";
import TopNav from "./component/Navbar/TopNav/TopNav";
import MiddleNav from "./component/Navbar/middleNav/Middlenav";

function App() {
  return (
    <>
      <TopNav></TopNav>
      <MiddleNav></MiddleNav>
      <Banner></Banner>
    </>
  );
}

export default App;
