import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  // **cart-items state**
  const [cartItems, setCartItems] = useState([]);

  // ** cart-items Post in database**
  const addToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:4000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      const data = await response.json();
      
    } catch (error) {
      throw new Error(error);
    }
    setCartItems([item, ...cartItems]);

    // **Add-cart toastify Popup
    if(addToCart){
    toast.success("add successfully!", {
      position: "bottom-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });}
  };

  // ** cart-items delete from cart and database**
  const removeFromCart = async (itemId) => {
    await axios.delete(`http://localhost:4000/delete-cart/${itemId}`);
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== itemId));

    //**Delete-carts toastify Popup */
    if(removeFromCart){
    toast.success("remove successfully!", {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });}
  };

  return (
    <cartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}

      {/*Toastify-component! */}
      <ToastContainer />
    </cartContext.Provider>
  );
};

// ** cart-items custom hook**
const useCart = () => useContext(cartContext);
export { useCart, CartContextProvider };
