import './CartProducts.css';
import React, { useState } from "react";
import { useCart } from "../../context/cart-context";
import {RxCross2} from 'react-icons/rx';


import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function CartProducts() {
  const [quantity,setQuantity] = useState(1);


  // **cart-context**
  const { cartItems, removeFromCart } = useCart();


 
   
     

 

  return (
    <div>
    {/*Cart-Items  */}
      {cartItems.map((items) => {
        return (
          <div>
            <div>
              <MDBContainer className="py-3 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol>
                    <MDBTable responsive>
                      <MDBTableHead>
                        <tr >
                          <th scope="col" className="h6"></th>

                          <th scope="col" className="h6"  id='cart-product-header'>
                            category
                          </th>
                          <th scope="col" className="h6" id='cart-product-header'>
                            Quantity
                          </th>
                          <th scope="col" className="h6" id='cart-product-header'>
                            Price
                          </th>
                          <th scope="col" className="h6" id='cart-product-header'>
                            Remove
                          </th>
                        
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center">
                              <img
                                src={items.url}
                                fluid
                                className="rounded-3"
                                
                                alt="Book"
                                id='cart-product-image'
                              />
                              <div className="flex-column ms-4">
                                <p
                                id='cart-product-name'
                                  className="mb-2"
                                  
                                >
                                  {items.name}
                                </p>
                              </div>
                            </div>
                          </th>
                          <td className="align-middle">
                            <p className="mb-0" id='cart-product-category'>{items.category}</p>
                          </td>
                          <td className="align-middle">
                            <div class="d-flex flex-row align-items-center">
                              <MDBBtn className="px-2" color="link">
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>

                              <MDBInput
                                min={0}
                                type="number"
                                size="sm"
                            
                                id='cart-product-quantity'
                                defaultValue={quantity}
                              //  onClick={()=>incrementQuantity(cartItems._id)}
                              />

                              <MDBBtn className="px-2" color="link">
                                <MDBIcon fas icon="plus" />
                              </MDBBtn>
                            </div>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" id='cart-product-price'>₹{items.price}</p>
                          </td>
                          <td className="align-middle">
                            {/* Delete cart-item button */}
                            <p
                              className="mb-0"
                              style={{ cursor: "pointer" }}
                              onClick={() => removeFromCart(items._id)}
                            >
                              <RxCross2 />
                            </p>
                          </td>
                          </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}
