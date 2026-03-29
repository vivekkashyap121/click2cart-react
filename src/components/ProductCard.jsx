import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ name, price, image, badge }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  function handleAdd() {
    addToCart(name, price, image);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  }

  return (
    <article className="product-card">
      <div className="product-img-wrap">
        {badge && <span className="badge">{badge}</span>}
        <img src={image} alt={name} onError={e => e.target.src = "/images/placeholder.jpg"} />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p className="price">₹{price.toLocaleString()}</p>
        <button className="btn-add" onClick={handleAdd}>
          {toast ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
