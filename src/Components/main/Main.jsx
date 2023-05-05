import "./Main.css";
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import Category from "../category/Category";
import Footer from "../footer/Footer";
import Slides from '../slide/Slide';
import Popup from "../popup/Popup";

import Card from "react-bootstrap/Card";
export default function Main() {
  // **Cart-Context**
  const { addToCart } = useCart();

  // **Product-context**
  const {
    antiCancerous,
    kidsHealth,
    antiDiabetic,
    boneStrength,
    eyeHealth,
    heartHealth,
    womenHealth,
    weightControl,
    isLoading,
  } = useProductlist();

  return (
    <div>
      <br />

      {/* carousel section */}
      <Slides />

      {/* Popup section */}
      <Popup />
      {/* Anti Cancerous Microgreens */}
      {isLoading ? (
        <p id="loading">
          <img src="/image/loading.gif" alt='loading' style={{ width: "10rem" }} />
        </p>
      ) : (
        <div id="products-list-container">
          <h3 className="product-header">Anti Cancerous</h3>
          <div className="microgreen-products">
            {antiCancerous.map((cancerous, index) => {
              return (
                <div key={cancerous.id}>
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
                          {/*   <p className="card-product-stock">
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

          {/* Kids-Health Microgreens */}
          <h3 className="product-header">Kid's Health</h3>
          <div className="microgreen-products">
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
                          {/*  <p className="card-product-stock">
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

          {/* category-section */}
          <Category />

          {/* Anti Diabetic Microgreens */}
          <h3 className="product-header">Anti Diabetic</h3>
          <div className="microgreen-products">
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

          {/* Bone & Muscles Health Microgreens */}
          <h3 className="product-header">Bone & Muscle Strength</h3>
          <div className="microgreen-products">
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
                          {/*  <p className="card-product-stock">
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

          {/* Eye & Skin Health Microgreens */}
          <h3 className="product-header">Eye & Skin Health</h3>
          <div className="microgreen-products">
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
                          {/*  <p className="card-product-stock">Stock: {eye.stock}</p>*/}
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

          {/* Heart Health Microgreens */}
          <h3 className="product-header">Heart Health</h3>
          <div className="microgreen-products">
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
                          {/*  <p className="card-product-stock">
                          Stock: {heart.stock}
                        </p> */}
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

          {/* Women Health Microgreens*/}
          <h3 className="product-header">Women Health</h3>
          <div className="microgreen-products">
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
                          {/*  <p className="card-product-stock">
                          Stock: {women.stock}
                        </p>  */}
                        </div>
                        <button
                          className="add-cart-button"
                          onClick={() => addToCart(women)}
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

          {/* Weight Control Microgreens */}
          <h3 className="product-header">Weight Control</h3>
          <div className="microgreen-products">
            {weightControl.map((weight, index) => {
              return (
                <div key={weight.id}>
                  <Card className="card">
                    <Card.Body>
                      <Card.Text className="card-image">
                        <img
                          src={weight.url}
                          className="images-in-card"
                          alt="microgreen"
                        />
                      </Card.Text>
                      <p className="microgreens-name"> {weight.name}</p>
                      <div className="card-button">
                        <div className="card-price-stock">
                          Rs: {weight.price}
                          <span className="card-price-weight">/20gm</span>
                          {/*   <p className="card-product-stock">
                          Stock: {weight.stock}
                        </p>*/}
                        </div>
                        <button
                          className="add-cart-button"
                          onClick={() => addToCart(weight)}
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

          <h3 className="feature-text">Features</h3>
          <div id="features">
            <span>
              <img
                src="/image/Features-01.jpg"
                alt="feature"
                className="feature-image"
              />
            </span>
          
          </div>
        </div>
      )}
      {/* Footer section */}
      <Footer />
    </div>
  );
}
