import "./CommonApi.css";
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";

export default function CommonApi() {
  // ** cart-context**
  const { addToCart } = useCart();

  // ** Product-List Context**
  const { filteredProducts } = useProductlist();

  return (
    <div id="common-microgreens">
      {/* Iterate Products of Common API */}
      <div id="common-products">
        { filteredProducts.length>0? filteredProducts.map((items) => {
          return (
            <div key={items.id} id="common-products">
              <Card id="card">
                <Card.Body>
                  <Card.Text id="card-image">
                    <img src={items.url} id="images-in-card" alt="microgreen" />
                  </Card.Text>
                  <p id="microgreens-name"> {items.name}</p>
                  <div id="card-button">
                    <div id="card-price-stock">
                      Rs: {items.price}
                      <span id="card-price-weight">/20gm</span>
                     {/* <p>Stock: {items.stock}</p> */} 
                      <p style={{ color: "black" }}>
                        <p id="category">Category: {items.category}</p>
                      </p>
                    </div>

                    <button id="add-button" onClick={() => addToCart(items)}>
                      {" "}
                      add
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        }) :<span id='no-product'><p>Product Not Found</p></span>}
      </div>
    </div>
  );
}
