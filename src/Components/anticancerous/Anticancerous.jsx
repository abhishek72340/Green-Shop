import './Anticancerous.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";

export default function Anticancerous(){

    const { antiCancerous} = useProductlist();
    const { addToCart } = useCart();

    return(
        <div>
        <h3 id="product-header">Anti Cancerous</h3>
        <div id='anticancerous-microgreen'>
          {antiCancerous.map((cancerous, index) => {
            return (
              <div key={cancerous.id} >
                <Card className="card">
                  <Card.Body id="card-body">
                    <Card.Text className="card-image">
                      <img
                        src={cancerous.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {cancerous.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs:{cancerous.price}
                        <span className="card-price-weight">/20gm</span>
                       {/*  <p className="card-product-stock">
                          Stock: {cancerous.stock}
                        </p> */}
                      </div>
                      <span>
                        <button
                          className="add-cart-button"
                          onClick={() => addToCart(cancerous)}
                        >
                          {" "}
                          add
                        </button>
                      </span>
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