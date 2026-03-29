import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Order() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  const delivery = cartTotal >= 999 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.18);
  const grandTotal = cartTotal + delivery + tax;

  if (cart.length === 0) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <p className="section-label">Your order</p>
            <h1 className="page-title">Order Summary</h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="cart-empty">
              <div className="cart-empty-icon">🛍️</div>
              <h3>No items to order</h3>
              <p>Add some products to your cart first.</p>
              <Link to="/products" className="btn-primary">Shop Now →</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <p className="section-label">Step 1 of 2</p>
          <h1 className="page-title">Order Summary</h1>
        </div>
      </div>

      <section className="section">
        <div className="container order-container">

          {/* ── LEFT: ITEMS + ADDRESS ── */}
          <div className="order-left">

            {/* Items */}
            <div className="order-card">
              <h3 className="order-card-title">🛍️ Items in your order</h3>
              {cart.map(item => (
                <div className="order-item" key={item.name}>
                  <img src={item.image} alt={item.name}
                    onError={e => e.target.src = "/images/placeholder.jpg"} />
                  <div className="order-item-info">
                    <span className="order-item-name">{item.name}</span>
                    <span className="order-item-qty">Qty: {item.qty}</span>
                  </div>
                  <span className="order-item-price">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery Address */}
            <div className="order-card">
              <h3 className="order-card-title">📍 Delivery Address</h3>
              <div className="address-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Vivek Kumar" defaultValue="Vivek Kumar" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 90652 12170" defaultValue="+91 90652 12170" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address Line</label>
                  <input type="text" placeholder="Flat / House No, Street, Area" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="Vellore" defaultValue="Vellore" />
                  </div>
                  <div className="form-group">
                    <label>PIN Code</label>
                    <input type="text" placeholder="632014" />
                  </div>
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" placeholder="Tamil Nadu" defaultValue="Tamil Nadu" />
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT: PRICE SUMMARY ── */}
          <div className="order-right">
            <div className="order-card price-summary">
              <h3 className="order-card-title">💰 Price Summary</h3>

              <div className="price-row">
                <span>Items ({cart.reduce((s, i) => s + i.qty, 0)})</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Delivery</span>
                <span className={delivery === 0 ? "free" : ""}>
                  {delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>
              <div className="price-row">
                <span>GST (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>

              {delivery === 0 && (
                <div className="free-delivery-badge">
                  🎉 You get free delivery!
                </div>
              )}

              <div className="price-total">
                <span>Grand Total</span>
                <span>₹{grandTotal.toLocaleString()}</span>
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%", marginTop: "1.5rem" }}
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment →
              </button>

              <Link to="/cart" className="order-back">← Back to Cart</Link>
            </div>
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Click2Cart. Built with ♥ by VIT Vellore students.</p>
      </footer>
    </>
  );
}