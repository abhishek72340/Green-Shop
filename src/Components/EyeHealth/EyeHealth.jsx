import './EyeHealth.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";

export default function(){

    const { eyeHealth} = useProductlist();
    const { addToCart } = useCart();

    return(

        <div>
        <h3 id="product-header">Eye & Skin Health</h3>
        <div id="eyehealth-microgreen">
          {eyeHealth.map((eye, index) => {
            return (
              <div key={eye.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={eye.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {eye.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {eye.price}
                        <span className="card-price-weight">/20gm</span>
                       {/*   <p className="card-product-stock">Stock: {eye.stock}</p>*/}
                      </div>
                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(eye)}
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