import "./AddCart.css";
import { useCart } from "../../context/cart-context";

import CartProducts from "../cartItems/CartProducts";
import EmptyCart from "../emptyCart/EmptyCart";

import Checkout from "../checkout/Checkout";

export default function AddCart() {
  // **cart-context**
  const { cartItems } = useCart();
  return (
    <div>
      {cartItems.length > 0 ? (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <h4>Cart Item</h4>
          <p>You have '{cartItems.length}' products in cart</p>
        </div>
      ) : null}
      <hr />

      {cartItems.length > 0 ? <CartProducts /> : <EmptyCart />}

      {cartItems.length > 0 ? <Checkout /> : null}
    </div>
  );
}
