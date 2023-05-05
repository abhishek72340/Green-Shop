import './RefundPolicy.css';
import {useNavigate} from 'react-router-dom';
import Footer from "../footer/Footer";
import {FcCheckmark} from 'react-icons/fc';

export default function RefundPolicy(){

    const navigate=useNavigate();
    return(

        <div>
        <h1 id='refund-policy-main-header'><FcCheckmark /> Refund & Return Policy</h1>
        <div id='refund-policy'>
        <p>
        <b>
        At Avowal Greens, we want you to be completely satisfied with your purchase. If for any reason
you are not satisfied with your purchase, we offer a refund within 24 hours of receiving your
order. Here are the details of our refund policy:</b>
        </p>
      <h4> <FcCheckmark /> Eligibility for Refund</h4>
        <p>
        a. To be eligible for a refund, you must contact us within 24 hours of receiving your order.<br/>
b. The item must be unused and in the same condition that you received it.<br/>
c. The item must be in its original packaging.
        </p>

        <h4><FcCheckmark /> Refund Process</h4>
        <p>
a. To request a refund, please contact us at <b>Whatsapp +917869945347 or
avowalgreens@gmail.com.</b><br/>
b. We will review your request and provide instructions on how to return the item.<br/>
c. Once we receive the item and verify its condition, we will process your refund.<br/>
d. Refunds will be issued to the original form of payment.</p>
<h4><FcCheckmark /> Shipping Costs</h4>
<p>
a. Shipping costs are non-refundable.<br/>
b. You are responsible for paying for the shipping costs associated with returning the item.</p>
<h4><FcCheckmark /> Damaged or Defective Items</h4>
<p>
a. If the item you received is damaged or defective, please contact us immediately.<br/>
b. We will provide instructions on how to return the item and will cover the shipping costs.<br/>
c. Once we receive the item and verify its condition, we will process your refund.</p>
<h4><FcCheckmark /> Refund Timeline</h4> 
<p>
a. Refunds will be processed within 7-10 business days of receiving the returned item.<br/>
b. The time it takes for the refund to appear in your account may vary depending on your
financial institution.<br/>
If you have any questions or concerns about our refund policy. Please <p onClick={()=>navigate('/contact')}style={{color:'blue',fontSize:'1.1rem',cursor:'pointer'}}>contact us </p>
</p>
        </div>
        <Footer/>
        </div>
    )
}