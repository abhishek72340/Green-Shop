import './WomenHealth.css';
import { useProductlist } from "../../context/productlist-context";
// import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";
export default function WomenHealth(){

    const { womenHealth} = useProductlist();
    // const { addToCart } = useCart();
    return(
        <div>
        
        <h3 id="product-header">Women Health</h3>
        <div id="womenhealth-microgreen">
          {womenHealth.map((women, index) => {
            return (
              <div key={women.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={women.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {women.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {women.price}
                        <span className="card-price-weight">/20gm</span>
                       {/*   <p className="card-product-stock">
                          Stock: {women.stock}
                        </p>*/}
                      </div>
                      <a href="https://www.whatsapp.com/catalog/917869945347/?app_absent=0">
                      <button
                        className="add-cart-button"
                        // onClick={() => addToCart(women)}
                      >
                        {" "}
                        Buy
                      </button>
                      </a>
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