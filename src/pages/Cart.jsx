import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, changeQty, removeItem, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="section-label">Review before checkout</p>
          <h1 className="page-title">Your Cart</h1>
        </div>
      </div>

      <section className="section">
        <div className="container cart-container">

          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added anything yet.</p>
              <Link to="/products" className="btn-primary">Start Shopping →</Link>
            </div>
          ) : (
            <>
              <div className="cart-header-row">
                <span>Product</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              <div id="cart-body">
                {cart.map(item => (
                  <div className="cart-row" key={item.name}>
                    <div className="cart-row-info">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-thumb"
                        onError={e => e.target.src = "/images/placeholder.jpg"}
                      />
                      <div className="cart-row-text">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-unit-price">₹{item.price.toLocaleString()} each</span>
                      </div>
                    </div>

                    <div className="cart-row-controls">
                      <button className="qty-btn" onClick={() => changeQty(item.name, -1)}>−</button>
                      <span className="qty-value">{item.qty}</span>
                      <button className="qty-btn" onClick={() => changeQty(item.name, 1)}>+</button>
                    </div>

                    <div className="cart-row-subtotal">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </div>

                    <button className="remove-btn" onClick={() => removeItem(item.name)}>✕</button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total-row">
                  <span className="cart-total-label">
                    Order Total <small>{cartCount} item{cartCount !== 1 ? "s" : ""}</small>
                  </span>
                  <span className="cart-total-amount">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="cart-actions">
                  <button className="btn-outline btn-clear" onClick={clearCart}>Clear Cart</button>
                  <button className="btn-primary" onClick={() => navigate("/order")}>Proceed to Checkout →</button>
                </div>
              </div>
            </>
          )}

          <div className="cart-back">
            <Link to="/products">← Continue Shopping</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Click2Cart. Built with ♥ as an academic project.</p>
      </footer>
    </>
  );
}