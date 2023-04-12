import './KidsHealth.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";
export default function KidsHealth(){

    const {   kidsHealth} = useProductlist();
    const { addToCart } = useCart();

    return(
        <div>
        <h3 id="product-header">Kid's Health</h3>
        <div id="kidshealth-microgreen">
          {kidsHealth.map((kids, index) => {
            return (
              <div key={kids.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={kids.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {kids.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {kids.price}
                        <span className="card-price-weight">/20gm</span>
                       {/*   <p className="card-product-stock">
                          Stock: {kids.stock}
                        </p>*/}
                      </div>
                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(kids)}
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