import './Footer.css';
import React,{useState,useEffect} from 'react';
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Footer(){

      const navigate = useNavigate();
    const[cartNo,setCartNo]=useState(0);

    const { addToCart,cartItems } = useCart();

     // **No of cart-item length**
  useEffect(()=>{
    setCartNo(cartItems.length)
      },[cartItems]);

      // *navigate footer terms page function*
      const returnShop=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/');
      };
      const term=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/termcondition');
      };
      const privacy=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/privacypolicy');
      };
      const refund=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/refundpolicy');
      };
      const help=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/helpcenter');
      };
      const Partner=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/supplier');
      };
      const faq=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/faqs');
      }
      const about=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/about');
      }
      const careers=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/careers');
      }
      const team=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
        navigate('/team');
      }
    return(
        <div>
         {/* FOOTER-SECTION */}

      <div id="footer-parent">
      <div id="footer">
        {/* Footer-Cart */}
        <span id="footer-cart">
          <span> Your cart</span>
          <span>
            <Badge id="badge-cart" badgeContent={cartNo} color="secondary">
              <ShoppingCartIcon color="action" id="footer-badge-cart"  onClick={()=>navigate('/cart')} />
            </Badge>
          </span>
          <span id="footer-return-shop" onClick={returnShop}>Return to Shop</span>
        </span>

        {/* Footer-Legal */}
        <span id="footer-legal">
          <span className="footer-heading">Legal</span>
          <span onClick={term}>Term & Conditions</span>
          <span onClick={privacy}>Privicy Policy</span>
          <span onClick={refund}>Refund Policy</span>
        </span>

        {/* Footer-Learn */}
        <span id="footer-learn">
          <span className="footer-heading">Learn</span>
          <span>Blog</span>
          <span onClick={help}>Help Center</span>
        </span>

        {/* Footer-Greeners */}
        <span id="footer-greeners">
          <span className="footer-heading"> Contact</span>
          <span onClick={Partner}>Partner With US</span>
          <span onClick={faq}>Faqs For Greeners</span>
        </span>

        {/* Footer-Company */}
        <span id="footer-company">
          <span className="footer-heading">Company</span>
          <span onClick={about}>About us</span>
          <span onClick={careers}>Careers</span>
          <span onClick={team}>Team</span>
        </span>

        {/* Footer-Address */}
        <span id="footer-address">
          <span className="footer-heading">Address</span>
          <span>
            Forum, DLF Cyber City RD, DLF Phase 3,
            <br />
            Gurugram, Haryana 122002
            <br />
            India
          </span>
        </span>
      </div>

      {/* Social Media First Line */}
      <span id="media-line">
        <span id="first-line"></span>

        {/* Social Media */}
        <span className="social-media">
          <a href="https://www.instagram.com/avowalgreens/">
            <BsInstagram className="media-icons-color" />
          </a>
          <a href="https://www.facebook.com/AvowalGreens/">
            <FaFacebookSquare className="media-icons-color" />
          </a>
         <a href="https://youtu.be/9O8FnuINyxI">
            <ImYoutube className="media-icons-color" />
          </a> 
          <a href="https://www.linkedin.com/company/avowal-greens/">
            <FaLinkedin className="media-icons-color" />
          </a>
        </span>

        {/* Social Media Second Line */}
        <span id="second-line"></span>
      </span>

      <span id="copyright">
        <span>
          Copyright &copy; 2023 Avowal Anthra Pvt. Ltd. All rights reserved
        </span>
      </span>
    </div>
        </div>
    )
}