import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const featured = [
  { name: "Red Printed T-Shirt", price: 999,  image: "/images/product-1.jpg" },
  { name: "Black Shoes",         price: 799,  image: "/images/product-2.jpg" },
  { name: "Track Pants",         price: 599,  image: "/images/product-3.jpg" },
  { name: "Blue Polo T-Shirt",   price: 499,  image: "/images/product-4.jpg" },
];

const categories = [
  { label: "Clothing",    image: "/images/category-1.jpg" },
  { label: "Footwear",    image: "/images/category-2.jpg" },
  { label: "Accessories", image: "/images/category-3.jpg" },
];

const brands = [
  { name: "Coca-Cola", image: "/images/logo-coca-cola.png" },
  { name: "Godrej",    image: "/images/logo-godrej.png" },
  { name: "OPPO",      image: "/images/logo-oppo.png" },
  { name: "PayPal",    image: "/images/logo-paypal.png" },
  { name: "Philips",   image: "/images/logo-philips.png" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">New arrivals every week</span>
          <h1 className="hero-title">
            Shop Smart<br /><em>with Click2Cart</em>
          </h1>
          <p className="hero-sub">
            A student-built e-commerce experience — clean, fast, and packed with style.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn-primary">Explore Products →</Link>
            <Link to="/cart" className="btn-outline">View Cart</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob"></div>
          <img src="/images/image1.png" alt="Shopping" className="hero-img" />
        </div>
      </header>

      {/* ── CATEGORIES ── */}
      <section className="section categories-section">
        <div className="container">
          <p className="section-label">Browse by category</p>
          <h2 className="section-title">What are you looking for?</h2>
          <div className="categories-grid">
            {categories.map(cat => (
              <Link to="/products" className="category-card" key={cat.label}>
                <img src={cat.image} alt={cat.label} />
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Handpicked for you</p>
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featured.map(p => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/products" className="btn-outline">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="section perks-section">
        <div className="container">
          <p className="section-label">Why Click2Cart</p>
          <h2 className="section-title">Shop with confidence</h2>
          <div className="perks-grid">
            <div className="perk-card">
              <span className="perk-icon">🚚</span>
              <h4>Free Delivery</h4>
              <p>On all orders above ₹999</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">↩️</span>
              <h4>Easy Returns</h4>
              <p>7-day hassle-free return policy</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">🔒</span>
              <h4>Secure Payments</h4>
              <p>100% safe & encrypted checkout</p>
            </div>
            <div className="perk-card">
              <span className="perk-icon">🎧</span>
              <h4>24/7 Support</h4>
              <p>We're here whenever you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section gallery-section">
        <div className="container">
          <p className="section-label">Style gallery</p>
          <h2 className="section-title">Wear it your way</h2>
          <div className="gallery-grid">
            <img src="/images/gallery-1.jpg" alt="Style 1" className="gallery-img" />
            <img src="/images/gallery-2.jpg" alt="Style 2" className="gallery-img" />
            <img src="/images/gallery-3.jpg" alt="Style 3" className="gallery-img" />
            <img src="/images/gallery-4.jpg" alt="Style 4" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section className="section app-section">
        <div className="container app-banner">
          <div className="app-text">
            <p className="section-label">Mobile app</p>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>Shop on the go</h2>
            <p className="app-sub">Download the Click2Cart app and get exclusive deals, faster checkout, and order tracking right on your phone.</p>
            <div className="app-btns">
              <img src="/images/app-store.png" alt="App Store" className="store-badge" />
              <img src="/images/play-store.png" alt="Play Store" className="store-badge" />
            </div>
          </div>
          <div className="app-visual">
            <img src="/images/buy-1.jpg" alt="App preview" className="app-img" />
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="section brands-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: "center" }}>Trusted by top brands</p>
          <div className="brands-grid">
            {brands.map(b => (
              <div className="brand-item" key={b.name}>
                <img src={b.image} alt={b.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Click2Cart. Built with ♥ as an academic project.</p>
      </footer>
    </>
  );
}
