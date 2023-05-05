import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useProductlist } from "../../context/productlist-context";
import { useCart } from "../../context/cart-context";
import { useSidenav } from "../../context/sidenav-context";
import { RxAvatar } from "react-icons/rx";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [noOfItemsInCArt, setNoOfItemsInCart] = useState(0);

  // **Cart-context**
  const { cartItems } = useCart();

  const { handleClose, handleShow, show } = useSidenav();

  // ** Value From Product-List Context**
  const { searchMicrogreen, microgreen } = useProductlist();

  useEffect(() => {
    setNoOfItemsInCart(cartItems.length);
  }, [cartItems]);

  // **UseNavigate Function**
  const navigate = useNavigate();

  // **Get-user from localStorage**
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/usersignup");
  };

  const sideNav=()=>{
    navigate('/');

  }

  return (
    <div>
      <div id="sidenav">
        <Offcanvas show={show} onHide={handleClose} id='sidenav-body' >
          <Offcanvas.Header
            closeButton
            id="sidenav-close-icon"
   
          ></Offcanvas.Header>
          <Offcanvas.Body >
            <nav id="sidenav-list" style={{cursor:'pointer'}}>
              <p onClick={sideNav}>Home</p>
              <p onClick={()=>navigate('/blog')}>Blog</p>
              <p onClick={()=>navigate('about')}>About</p>
              <p onClick={()=>navigate('/contact')}>Contact Us</p>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {/*Navbar Logo*/}
      <nav id="navbar-parent">
        <img
          src="/image/logo.jpg"
          alt=""
          id="navbar-logo"
          onClick={() => navigate("/")}
        />

        {/*Navbar Search Field & nav-list*/}

        <GiHamburgerMenu onClick={handleShow} id="hamburger-icon" />
        <span>
          <nav id="navbar-list">
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>       
            </nav>
          <input
            type="seacrh"
            placeholder="search"
            id="search-field"
            value={microgreen}
            onChange={searchMicrogreen}
          />
        </span>
        {/*Navbar Add-Cart & Account-Avatar*/}
        <span id="avatar-cart-parent">
          {auth ? (
            <Link onClick={logout} to="/usersignup" id="logout-button">
              Logout <br />({JSON.parse(auth).name})
            </Link>
          ) : (
            <RxAvatar id="avatar" onClick={() => navigate("/userSignup")} />
          )}


          <Badge
            id="badge-cart"
            badgeContent={noOfItemsInCArt}
            color="secondary"
          >
            <ShoppingCartIcon
              color="action"
              id="cart"
              onClick={() => navigate("/cart")}
            />
          </Badge>
        </span>
      </nav>
    </div>
  );
}
