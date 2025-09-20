import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import TotalNav from "./component/Navbar/totalNav";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import AboutPage from "./component/AboutPage/AboutPage";
import ComingSoon from "./component/Coming_soon/ComingSoon";
import Shop from "./component/Shop/Shop";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import Profile from "./component/Auth/Profile";
import Logout from "./component/Auth/Logout";
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e', // Navy blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd700', // Gold
      contrastText: '#1a237e',
    },
    background: {
      default: '#fff', // White
      paper: '#f5f7fa',
    },
    text: {
      primary: '#1a237e',
      secondary: '#ffd700',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TotalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
