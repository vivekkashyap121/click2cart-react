import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">Click2Cart</Link>

      {/* Right side */}
      <div className="nav-right">

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Cart */}
        <Link to="/cart" className="cart-link">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}