import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./features/home/Components/Home";
import Shop from "./features/Shop/Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./features/About/About";
import Contact from "./features/Contact/contact";
import LoginPage from "./Components/Login/Login";
import LoginPage2 from "./Components/Login/Login2";
import EmptyCart from "./features/Cart/EmptyCart";
import CartPage from "./features/Cart/CartPage";
import Wishlist from "./features/Cart/Wishlist";
import Details from "./features/Details/Components/Details";
import Buynow from "./features/buyNow/Buynow";
import Sizechart from "./features/Details/Sizechart";
import Profile from "./Components/Profile";
import Order from "./features/Cart/Order";

// Create a layout component to handle conditional rendering
const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/login2";

  return (
    <div>
      {!isLoginPage && <Header />}
      
      <main>
        <Routes>
          <Route path="/shop" element={<Home />} />
          <Route path="/cart" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login2" element={<LoginPage2 />} />
          <Route path="/emptycart" element={<EmptyCart />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/buynow" element={<Buynow/>} />
          <Route path="/sizechart" element={<Sizechart/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/order" element={<Order/>} />



          


          

          


          

        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;