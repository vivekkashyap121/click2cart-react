import ProductCard from "../components/ProductCard";

const products = [
  { name: "Red Printed T-Shirt", price: 999,  image: "/images/product-1.jpg" },
  { name: "Black Shoes",         price: 799,  image: "/images/product-2.jpg" },
  { name: "Track Pants",         price: 599,  image: "/images/product-3.jpg" },
  { name: "Blue Polo T-Shirt",   price: 499,  image: "/images/product-4.jpg" },
  { name: "Sports Shoes",        price: 1500, image: "/images/product-5.jpg" },
  { name: "Green T-Shirt",       price: 700,  image: "/images/product-6.jpg" },
  { name: "Socks",               price: 200,  image: "/images/product-7.jpg" },
  { name: "Black Watch",         price: 2000, image: "/images/product-8.jpg" },
  { name: "Denim Watch",         price: 1999, image: "/images/product-9.jpg" },
  { name: "Running Shoes",       price: 1799, image: "/images/product-10.jpg" },
  { name: "Grey Sneakers",       price: 1299, image: "/images/product-11.jpg" },
  { name: "Jogger Pants",        price: 899,  image: "/images/product-12.jpg" },
  { name: "Smart Band",          price: 3499, image: "/images/exclusive.png", badge: "Exclusive" },
];

export default function Products() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <p className="section-label">Everything we stock</p>
          <h1 className="page-title">Our Products</h1>
        </div>
      </div>

      {/* ── QUICK BUY BANNER ── */}
      <section className="section buy-banner-section">
        <div className="container">
          <div className="buy-banner">
            <div className="buy-banner-item">
              <img src="/images/buy-1.jpg" alt="Deal 1" />
              <div className="buy-banner-text">
                <span>Up to 40% off</span>
                <h3>T-Shirts & Tops</h3>
              </div>
            </div>
            <div className="buy-banner-item">
              <img src="/images/buy-2.jpg" alt="Deal 2" />
              <div className="buy-banner-text">
                <span>New arrivals</span>
                <h3>Footwear Collection</h3>
              </div>
            </div>
            <div className="buy-banner-item">
              <img src="/images/buy-3.jpg" alt="Deal 3" />
              <div className="buy-banner-text">
                <span>Best sellers</span>
                <h3>Casual Wear</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <p className="section-label">All items</p>
          <h2 className="section-title">Shop Everything</h2>
          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p.name} {...p} />
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
