import './Complain.css';
import {useToastify} from '../../context/clientSide-context';

export default function Complain(){

    // From Toastify Context!
    const{date,dateChanged,complaintName,complaintNameChanged,complainEmail,complainEmailChanged,complaintRegarding,complaintRegardingChanged,complainSubmit}=useToastify();
    return(

        <div>
        {/*Navbar */}
        <div id='assist-container'><span>We are here to assist you!</span>
        <span id='please-complete-form'>Please complete the form below for your complaints</span>
        </div>

   {/*Complain Form */}
  <form action="" onSubmit={complainSubmit} id='complain-form'>


  <div id='complain-form-container'>

   {/*Filling Date Field !*/}
  <span className='field-container' >
  <label htmlFor="filling-date-field">Date of filling the form</label>
  <input type='date' id='filling-date-field' value={date} onChange={dateChanged}  required/></span>

     {/*Complaint's Name Field!*/}
  <span className='field-container'><label htmlFor="Complaint-name-field">Complaint's Name</label>  
  <input type='text' placeholder='full name' id='complaint-name-field' value={complaintName} onChange={complaintNameChanged} required/>
  </span>

     {/*Email Field !*/}
  <span className='field-container'><label htmlFor="email-field">Email</label>
  <input type='email' id='email-field' value={complainEmail} onChange={complainEmailChanged} required/>
  </span>

       {/*Complaint Regarding Field !*/}
  <span><label htmlFor="label">The Complaint is regarding </label>
  <textarea  placeholder='here write your complain!'  cols="50" rows="5" id='text-area' value={complaintRegarding} onChange={complaintRegardingChanged} required></textarea>
  
  </span>
  <button type='submit' id='send-button'>Send</button>
  </div>
  </form>

        </div>
    )
}