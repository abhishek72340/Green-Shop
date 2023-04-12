import './Category.css';
import {useNavigate} from 'react-router-dom';
export default function Category(){
const navigate = useNavigate();

    return(
        <div>
         {/* Categories-Logo */}
         <h3 className="category-text">Categories</h3>
         <div id="categories-container">
           <div id="first-four-category-container">
             {/* Anti-cancerous-logo */}
             <span className="category">
               <p>
                 {" "}
                 <img
                   src="/image/anticancerous.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/anticancerous')}
                 />
               </p>
               <p className="categories-name">Anti-Cancerous</p>
             </span>
 
             {/* Kid's Health-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/kidshealth.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/kidshealth')}
                 />
               </p>
               <p className="categories-name">Kid's Health</p>
             </span>
 
             {/* Heart-Health-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/hearthealth.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/hearthealth')}
                 />
               </p>
               <p className="categories-name">Heart-Health</p>
             </span>
 
             {/* Weight-Controls-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/weight.png"
                   alt="category"
                   className="category-logo"
                    onClick={()=>navigate('/weightcontrol')}
                 />
               </p>
               <p className="categories-name">Weight-Control</p>
             </span>
           </div>
           <div id="second-four-category-container">
             {/* Anti-Diabetics-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/antidiabetic.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/antidiabetics')}
                 />
               </p>
               <p className="categories-name">Anti-Diabetics</p>
             </span>
 
             {/* Bone & Muscles-Strength-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/bone.png"
                   alt="category"
                   className="category-logo"
                   
                   onClick={()=>navigate('/bonestrength')}
                 />
               </p>
               <p className="categories-name" >Bone & Muscles</p>
             </span>
 
             {/* Eye & Skin Health-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/eyehealth.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/eyehealth')}
                 />
               </p>
               <p className="categories-name">Eye & Skin Health</p>
             </span>
 
             {/* Women Health-logo */}
             <span className="category">
               <p>
                 <img
                   src="/image/womenhealth.png"
                   alt="category"
                   className="category-logo"
                   onClick={()=>navigate('/womenhealth')}
                 />
               </p>
               <p className="categories-name">Women-Health</p>
             </span>
           </div>
         </div>
         
        
        </div>
    )
}