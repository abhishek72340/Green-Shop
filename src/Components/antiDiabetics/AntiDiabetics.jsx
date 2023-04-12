import './AntiDiabetics.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";

export default function AntiDiabetics(){
    const { antiDiabetic} = useProductlist();
    const { addToCart } = useCart();
    return(
        <div>
        <h3 id="product-header">Anti Diabetic</h3>
        <div id="antidiabetics-microgreen">
          {antiDiabetic.map((diabetic, index) => {
            return (
              <div key={diabetic.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={diabetic.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {diabetic.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {diabetic.price}
                        <span className="card-price-weight">/20gm</span>
                       {/*   <p className="card-product-stock">
                          Stock: {diabetic.stock}
                        </p>*/}
                      </div>
                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(diabetic)}
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
        <span className='particular-category-footer'>Copyright &copy; 2023 Avowal Anthra Pvt. Ltd. All rights reserved</span>

        </div>
    )
}