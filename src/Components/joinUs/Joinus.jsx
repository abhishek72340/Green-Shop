import "./Joinus.css";
import { GoAlert } from "react-icons/go";
import {useToastify} from '../../context/clientSide-context';
export default function Joinus() {

// From Toastify Context!
    const {formSubmit,name,business,mobile,email,nameInput,businessInput,mobileInput,emailInput}=useToastify();


  return (
    <div>
  
    {/* Overall Register form Container!*/}
      <form action="" id="main-form" onSubmit={formSubmit}>
        <div id="form-strip">
         
            {/*Register form Navbar !*/}
       
           <span> <GoAlert id="alert" /></span> <span >Please provide a valid mobile number. This
            number will be registered to send all important communications from
            Avowal Greens.</span>
        
     
        
        </div>

            {/*Register form Container !*/}
        <div id="form-container">

            {/*Register Name !*/}
          <span>
            <label htmlFor="name">
              {" "}
              Name<span className="star">*</span>
            </label>
            <input type="text" placeholder='full name' id="name" onChange={nameInput} value={name} required />
          </span>

             {/*Register Business !*/}
          <span>
            {" "}
            <label htmlFor="business">
              Business<span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder="company/venture name"
              id="business"
              onChange={businessInput}
              value={business}
              required
            />

               {/*Register Mobile !*/}
          </span>
          <span>
            {" "}
            <label htmlFor="mobile">
              Mobile<span className="star">*</span>
            </label>
            <input type="number" id="mobile" placeholder='phone ' onChange={mobileInput} value={mobile} required/> 
          </span>

             {/*Register Email !*/}
          <span>
            {" "}
            <label htmlFor="email">
              Email<span className="star">*</span>
            </label>
            <input type="email" id="email" placeholder='e-mail' onChange={emailInput} value={email} required />
          </span>
          <button type="submit" id="register-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
