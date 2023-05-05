import './Supplier.css';
import {useNavigate} from 'react-router-dom';
import {MdTaskAlt} from 'react-icons/md';
import {RxAvatar} from 'react-icons/rx';
import {RiShoppingBag3Line} from 'react-icons/ri';

export default function Supplier(){
    const navigate=useNavigate();

    const registerNavigate=()=>{
        navigate('/joinus')
        window.scrollTo({
            top:0,           
            behavior: 'smooth'
          });
    }

    return(

        <div>

        {/*Supplier header Section!*/}
        <div>
        <span id='get-listed'>Get listed on Avowal Greens</span>
        <span id='partner-with-avowal'>Partner with Avowal greens</span>
        <img src="/image/logo.png" alt="" id='supplier-logo'/>
       <img src="/image/banner1.avif" alt="" id='banner-image'/>
       </div>



        {/*Supplier SVG images Section !*/}
       <div id='svg-images'>
       <img src="/image/revenue.svg" alt="" id='revenue-image' />
     
       <img src="/image/customer.svg" alt="" id='customer-image' />
     
       <img src="/image/deliever.svg" alt="" id='deliever-image' />
     

       <img src="/image/brand.svg" alt="" id='brand-image'/>      
       </div>

       
        {/*Supplier Text Under SVG Section!*/}
       <div id='text-under-svg'>
       <span>Increase your revenue</span>
       <span style={{marginLeft:'15px'}}>Reach out to a large customer base</span>
       <span>Acccess to the large deleivery feet</span>
       <span>Increase your brand visibility</span>      
       </div>


       {/* SVG Images design for Mobile  */}
       <div id='mobile-design-svg'>
      <span className='mobile-design-text-SVG'> <img src="/image/revenue.svg" alt="" id='revenue-image' />
       Increase your revenue</span>

       <span className='mobile-design-text-SVG'><img src="/image/customer.svg" alt="" id='customer-image' />
       Reach out to a large customer base
       </span>

       <span className='mobile-design-text-SVG'><img src="/image/deliever.svg" alt="" id='deliever-image' />
       Acccess to the large deleivery feet
       </span>

       <span className='mobile-design-text-SVG'><img src="/image/brand.svg" alt="" id='brand-image'/>
       Increase your brand visibility      
       </span>
       </div>

       <br/><br/><br/><br/>

       
        {/*Supplier Fill UP Register instruction section!*/}
       <div id='started-step'>
       <span id='get-started'>Get started in 3 easy steps</span><br/><br/><br/><br/><br/><br/>
       <div id='started-child'>
     
      <span> <span id='sign-up'>Register  </span><br/>
      <RxAvatar id='sign-up-icon'/>
       <span id='sign-up-down-text'>Start with providing your venture<br/> business details</span></span>
       
      <span> <span id='set-up'>Set Up</span><br/>
      <MdTaskAlt id='set-up-icon'/>
       <span id='set-up-down-text'>Then upload all the required<br/> documents</span></span>
      <span> <span id='sell'>Sell</span><br/>
      <RiShoppingBag3Line id='sell-icon'/>
       <span id='sell-down-text'>Go live and start getting orders</span></span>
       </div>
       </div>
       <br/>

       
        {/*Supplier Join US button section !*/}
<span id='join-us'>
<button id='join-button' onClick={registerNavigate}>Join Us</button>
</span>
    <br/> 
        </div>
    )
}