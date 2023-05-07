import './userSignup.css';
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

export default function UserSignup() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // **Navigate Function**
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })

    // **Onsubmitfunction of User Signup Data**
  const userSubmit = async (event) => {
     event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setMobile('');
  
    
    const result = await fetch("https://green-shop-server-dfz5.onrender.com/usersignup", {
      method: "POST",
      body: JSON.stringify({ name,mobile, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data=await result.json();
      if(data){
    localStorage.setItem('user', JSON.stringify(data.result));
    localStorage.setItem('token', JSON.stringify(data.auth));
    localStorage.setItem('userId', (data.userId));
     navigate('/');
    };

    // *User SignUp Toastify Popup*
    if(data){
    toast.success('signup successfully!', {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
  };
  

     // **User Signup Onchange Function**
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const mobileChange=(e)=>{
    setMobile(e.target.value);
  }
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };


   return (


    <div id='user-signup-parent'>

        {/*Toastify-component! */}
        <ToastContainer />

    <div id='user-account-page'>

    {/**User-Signup-Form */}
    <form action="" onSubmit={userSubmit} id="user-signup">
    <h3 id="welcome">Create Your Account</h3>

        {/**User-Signup-Input-Field */}
      <span >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={nameChange}
          required
          className='user-signup-input-field'
        />
      </span>
      <span>
      <input
        type="number"
        placeholder=" Mobile"
        value={mobile}
        onChange={mobileChange}
        required
        className='user-signup-input-field'
      />
    </span>
      <span>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={emailChange}
          required
          className='user-signup-input-field'
        />
      </span>
      <span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChange}
          required
          className='user-signup-input-field'
        />
              </span>
       

         {/**User-Signup-Button */}
      <span>
        <button type="submit"  className='user-signup-button'>Sign Up</button>
        <div id='user-signup-or'>OR</div>
      </span>
 
         {/**User-Login-Button */}
     <button type="submit"  className='user-login-button' onClick={()=>navigate('/userlogin')}>Login</button>
     
    </form>
    </div>
    </div>
  );
}
