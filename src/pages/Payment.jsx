import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const delivery = cartTotal >= 999 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.18);
  const grandTotal = cartTotal + delivery + tax;

  const [method, setMethod] = useState("upi");
  const [upi, setUpi]       = useState("");
  const [card, setCard]     = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handlePay() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  }

  if (success) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <p className="section-label">Payment successful</p>
            <h1 className="page-title">Order Placed! 🎉</h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="payment-success">
              <div className="success-animation">✅</div>
              <h2>Thank you, Vivek Kumar!</h2>
              <p>Your order has been placed successfully. You will receive a confirmation on <strong>vicku.cpr@gmail.com</strong></p>
              <div className="order-id">
                Order ID: <strong>#VIT{Math.floor(Math.random() * 900000 + 100000)}</strong>
              </div>
              <div className="success-actions">
                <button className="btn-primary" onClick={() => navigate("/products")}>
                  Continue Shopping →
                </button>
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

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="container">
          <p className="section-label">Step 2 of 2</p>
          <h1 className="page-title">Payment</h1>
        </div>
      </div>

      <section className="section">
        <div className="container order-container">

          {/* ── LEFT: PAYMENT METHODS ── */}
          <div className="order-left">
            <div className="order-card">
              <h3 className="order-card-title">💳 Choose Payment Method</h3>

              {/* Method Tabs */}
              <div className="payment-tabs">
                {[
                  { id: "upi",  label: "🏦 UPI" },
                  { id: "card", label: "💳 Card" },
                  { id: "cod",  label: "💵 Cash on Delivery" },
                ].map(tab => (
                  <button
                    key={tab.id}
                    className={`payment-tab ${method === tab.id ? "active" : ""}`}
                    onClick={() => setMethod(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* UPI */}
              {method === "upi" && (
                <div className="payment-form">
                  <div className="form-group">
                    <label>UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={upi}
                      onChange={e => setUpi(e.target.value)}
                    />
                  </div>
                  <p className="payment-note">
                    ✅ Supported: GPay, PhonePe, Paytm, BHIM UPI
                  </p>
                </div>
              )}

              {/* Card */}
              {method === "card" && (
                <div className="payment-form">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      value={card.number}
                      onChange={e => setCard({ ...card, number: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Vivek Kumar"
                      value={card.name}
                      onChange={e => setCard({ ...card, name: e.target.value })}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        value={card.expiry}
                        onChange={e => setCard({ ...card, expiry: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="password"
                        placeholder="•••"
                        maxLength="3"
                        value={card.cvv}
                        onChange={e => setCard({ ...card, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                  <p className="payment-note">🔒 Your card details are encrypted and secure.</p>
                </div>
              )}

              {/* COD */}
              {method === "cod" && (
                <div className="payment-form">
                  <div className="cod-box">
                    <span className="cod-icon">💵</span>
                    <h4>Cash on Delivery</h4>
                    <p>Pay with cash when your order arrives at your doorstep. No extra charges.</p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ── RIGHT: TOTAL + PAY BUTTON ── */}
          <div className="order-right">
            <div className="order-card price-summary">
              <h3 className="order-card-title">🧾 Order Total</h3>

              <div className="price-row">
                <span>Subtotal</span>
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

              <div className="price-total">
                <span>Grand Total</span>
                <span>₹{grandTotal.toLocaleString()}</span>
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%", marginTop: "1.5rem" }}
                onClick={handlePay}
                disabled={loading}
              >
                {loading ? "Processing..." : `Pay ₹${grandTotal.toLocaleString()} →`}
              </button>

              <p className="secure-note">🔒 100% Secure & Encrypted Payment</p>
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