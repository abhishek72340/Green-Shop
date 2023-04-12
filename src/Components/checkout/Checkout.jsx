import "./Checkout.css"
import { useCart } from "../../context/cart-context";

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
export default function Checkout() {
  // **cart-context
  const { cartItems } = useCart();
  return (
    <div>
      {/* Checkout-UI */}
      {cartItems.length > 0 ? (
        <section >
          <MDBContainer className="py-5 " >
            <MDBCard id='checkout-card'>
              <MDBCardBody >
                <MDBRow>
                  <MDBCol>
                    <div className="d-flex gap-5" id='checkout-subtotal'>
                      <p>Subtotal</p>
                      <p>₹23.49</p>
                    </div>

                    <div
                      className="d-flex gap-5 "
                      id='checkout-shipping'
                    >
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">₹2.99</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex  gap-5 mb-4"
                     id='checkout-total'
                    >
                      <p>Total</p>
                      <p>₹26.48</p>
                    </div>

                    <MDBBtn id='checkout-button'>
                      <div>
                        <span>proceed to Checkout</span>
                      </div>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </section>
      ) : null}
    </div>
  );
}
