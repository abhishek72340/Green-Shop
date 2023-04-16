import './Blog.css';
import React,{useState} from 'react';
export default function Blog(){
    const[blogOne,setBlogOne]=useState(false);

    const seeBlogOne=()=>{
        setBlogOne(true)
    }
    return(
        <div>
            <div id='blog-first'>
        <p><img src="/image/blog1-image.jpg" alt="microgreen" width='500' id='first-blog-image'/></p>
        <p>Microgreens are tiny plants that are harvested at the early stages of growth, typically within 7-21 days after germination. These young plants have been gaining popularity in recent years, and for good reason. They are not only visually appealing, but they also offer a wide range of nutritional and health benefits. Here are some of the key benefits of microgreens:<br/>
        <button onClick={seeBlogOne} id='blog-one-button' style={{opacity:blogOne?'0':'1'}}>see more</button><br/>
        <br/>

{blogOne && <p>1. Rich in Nutrients: Microgreens are packed with a variety of vitamins and minerals, such as vitamin C, vitamin E, beta-carotene, and iron. In fact, some studies have found that microgreens can contain up to 40 times more nutrients than their mature counterparts.<br/>
<br/>
2. Antioxidant Properties: Microgreens are also rich in antioxidants, which help to protect our cells from damage caused by free radicals. This can help to reduce the risk of chronic diseases such as cancer, heart disease, and diabetes.<br/>
<br/>

3. Easy to Grow: Microgreens can be grown easily in a small space, such as a windowsill or countertop. They require very little equipment or expertise, making them an accessible option for anyone looking to grow their own food.<br/>
<br/>
4. Versatile: Microgreens come in a variety of flavors, from spicy to sweet, and can be used in a variety of dishes, including salads, sandwiches, and smoothies. They can also be used as a garnish to add flavor and visual appeal to a variety of dishes.<br/>
<br/>
5. Sustainable: Microgreens are a sustainable option for those looking to reduce their environmental impact. They require less water and space than traditional crops and can be grown year-round.<br/>
<br/>
In conclusion, microgreens are a nutritious, versatile, and sustainable option for anyone looking to add more fresh produce to their diet. They are easy to grow and can be used in a variety of dishes, making them a great addition to any kitchen.</p>}</p>
</div>
        </div>
    )
}
