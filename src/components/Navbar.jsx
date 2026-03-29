import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Click2Cart</Link>

      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>

      <Link to="/cart" className="cart-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </nav>
  );
}
