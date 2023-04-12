import './About.css';
import Footer from "../footer/Footer";

export default function About(){

    return(
        <div>
    
        <div id='about-container'>
     <img src="/image/about-section-image.jpeg" alt="" id='about-section-image' />
  
    <p id='about-text'>
    A very Hearty & Happy Welcome to Avowal Greens! We are a team of passionate individuals dedicated to promoting sustainability and eco-friendliness through our microgreens. Our brand name, Avowal Greens, reflects our commitment to nature and all its beings.

Our microgreens are grown with care and attention to detail, using sustainable farming practices. We believe that small steps can make a big difference in mitigating climate change, and our microgreens are one such step. By supporting us, you are not only benefiting your health but also contributing to a healthier planet.

Our team comprises three co-founders – <b>Niharika Rajput, Vasu Jain, and Vishnu R Pillai</b> – who bring diverse skill sets and expertise to the table. Along with them, we have two talented web development interns – <b>Abhishek Singh and Abhishek Jha</b> – who have created our website.

At Avowal Greens, we strive to provide our customers with the best quality microgreens that are both delicious and healthy. Our microgreens are grown in a controlled environment to ensure that they are free from harmful chemicals and toxins. We also believe in transparency and honesty, and we want our customers to know exactly what they are getting.

We are located in Gurugram, Haryana, India, and our address is <b>Forum, DLF Cyber City Rd, DLF Phase 3, Gurugram, Haryana 122002, India.</b> We welcome you to visit us and see our microgreens for yourself.

Thank you for choosing Avowal Greens, where we strive to make a positive impact on the planet, one microgreen at a time.
    </p> 
     </div>
   
     <div id='about-footer'>
     {/* footer section   <Footer/>*/}
     <Footer/>
     </div>
        
  
     </div>
    );
}