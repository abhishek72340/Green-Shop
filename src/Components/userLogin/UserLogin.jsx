import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate=useNavigate();
  // **User Login Onsubmit Functin With Post Data To Backend**
  const loginUserSubmit = async (event) => {
      event.preventDefault();
       setEmail("");
    setPassword("");
    const result = await fetch("http://localhost:4000/userlogin", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      }   
    });
     const data=await result.json();
 
    if(data.auth){
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.auth));
      localStorage.setItem('userId', (data.userId));
      navigate('/');
    }else{
      
    // *User's invalid login data Toastify Popup*
      toast.error('invalid data!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    // *User login Toastify Popup*
    if(data.auth){
    toast.success('Login successfully!', {
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

    // **User Login Onchange Function**
  const userEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const userPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
    
       {/*Toastify-component! */}
       <ToastContainer />

    <div id='user-signup-parent'>
   
    <div id='user-account-page'>

    {/**User-Signup-Form */}
    <form action="" onSubmit={loginUserSubmit} id="user-signup">
    <h3 id="welcome">Login</h3>

        {/**User-Signup-Input-Field */}    
   
      <span>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={userEmailChange}
          required
          className='user-signup-input-field'
        />
      </span>
      <span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={userPasswordChange}
          required
          className='user-signup-input-field'
        />
      </span>

         {/**User-Login-Button */}
      <span>
        <button type="submit"  className='user-signup-button'>Login</button>
       
      </span>
 
     
    </form>
    </div>
    </div>
    
    </div>
  );
}