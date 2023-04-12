import './BoneStrength.css';
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Card from "react-bootstrap/Card";
export default function BoneStrength(){

    
    const { boneStrength} = useProductlist();
    const { addToCart } = useCart();


    return(
        <div>
        <h3 id="product-header">Bone & Muscle Strength</h3>
        <div id="bonestrength-microgreen">
          {boneStrength.map((bone, index) => {
            return (
              <div key={bone.id}>
                <Card className="card">
                  <Card.Body>
                    <Card.Text className="card-image">
                      <img
                        src={bone.url}
                        className="images-in-card"
                        alt="microgreen"
                      />
                    </Card.Text>
                    <p className="microgreens-name"> {bone.name}</p>
                    <div className="card-button">
                      <div className="card-price-stock">
                        Rs: {bone.price}
                        <span className="card-price-weight">/20gm</span>
                      {/*    <p className="card-product-stock">
                          Stock: {bone.stock}
                        </p>*/}
                      </div>
                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(bone)}
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