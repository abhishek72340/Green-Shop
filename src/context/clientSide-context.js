import {createContext,useContext,useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastifyContext=createContext();
const ToastifyContextProvider=({children})=>{

    // For Join-Us/Client Register Page!
    const[name,setName]=useState('');
    const[business,setBusiness]=useState('');
    const[mobile,setMobile]=useState('');
    const[email,setEmail]=useState('');

  

    // For Complain Page!
    const[date,setDate]=useState('');
    const[complaintName,setComplaintName]=useState('');
    const[complainEmail,setComplainEmail]=useState('');
    const[complaintRegarding,setComplainRegarding]=useState('');

    // For Client Login Page!
    const[loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('');

    const loginFormSubmit=(e)=>{
e.preventDefault();
setLoginEmail('');
setLoginPassword('');

toast.success('Login successfully!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    }

    const loginEmailChanged=(e)=>{
setLoginEmail(e.target.value);
    }
    const loginPasswordChanged=(e)=>{
setLoginPassword(e.target.value);
    }

    const complainSubmit=(e)=>{
e.preventDefault();
        setDate('');
        setComplaintName('');
        setComplainEmail('');
        setComplainRegarding('');
        toast.success('Send successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
           
    }

    // For Complain Page!
    const dateChanged=(e)=>{
        setDate(e.target.value);
    }
const complaintNameChanged=(e)=>{
    setComplaintName(e.target.value);
}
const complainEmailChanged=(e)=>{
    setComplainEmail(e.target.value);
}
const complaintRegardingChanged=(e)=>{
    setComplainRegarding(e.target.value);
}

   // For Join-Us/Client Register Page!
    const nameInput=(e)=>{
        setName(e.target.value);
        
            }
            const businessInput=(e)=>{
                setBusiness(e.target.value);
            }
            const mobileInput=(e)=>{
                setMobile(e.target.value);
            }
            const emailInput=(e)=>{
                setEmail(e.target.value)
            }
    const formSubmit=(event)=>{
     
        event.preventDefault();
        setName('');
        setBusiness('');
        setMobile('');
        setEmail('');
       
        toast.success('registration successfully!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      
            }
    return(

     
        <toastifyContext.Provider value={{formSubmit,name,business,mobile,email,nameInput,businessInput,mobileInput,emailInput,date,dateChanged,complaintName,complaintNameChanged,complainEmail,complainEmailChanged,complaintRegarding,complaintRegardingChanged,complainSubmit,loginEmail,loginPassword,loginEmailChanged,loginPasswordChanged,loginFormSubmit}}>
        {children}

        {/*Toastify-component! */}
        <ToastContainer />
        </toastifyContext.Provider>
    )
}

// Custom Hook for Toastify!
const useToastify=()=>{
    return useContext( toastifyContext);
}
export {useToastify,ToastifyContextProvider};