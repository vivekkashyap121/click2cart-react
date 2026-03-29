import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/about";
import Contact from "./pages/contact";
import Order from "./pages/Order";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart"     element={<Cart />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/order"    element={<Order />} />
          <Route path="/payment"  element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}