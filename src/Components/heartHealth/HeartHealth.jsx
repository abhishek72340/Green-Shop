import './HeartHealth.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";
export default function HeartHealth(){

    const { heartHealth} = useProductlist();
    const { addToCart } = useCart();
    return(
        <div>
        <h3 id="product-header">Heart Health</h3>
        <div id="hearthealth-microgreen">
          {heartHealth.map((heart, index) => {
            return (
              <div key={heart.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={heart.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {heart.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {heart.price}
                        <span className="card-price-weight">/20gm</span>
                        <p className="card-product-stock">
                          Stock: {heart.stock}
                        </p>
                      </div>
                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(heart)}
                      >
                        {" "}
                        add
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <span className='particular-category-footer'> Copyright &copy; 2023 Avowal Anthra Pvt. Ltd. All rights reserved</span>

        </div>
    )
}