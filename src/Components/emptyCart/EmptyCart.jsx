import './EmptyCart.css';
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div>
      <div id='empty-cart-container'>
       <p><img src="/image/emptycart.gif" alt="empty-cart" /></p>
          <h5>Your cart is empty!</h5>      
            <button
            id='empty-cart-shop-now-button'
             onClick={() => navigate("/")}>
              shop now
            </button>    
      </div>
    </div>
  );
}
