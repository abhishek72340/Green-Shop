import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



// *Create Context Function**
const productlistContext = createContext();

const ProductlistContextProvider = ({ children }) => {
   const [common, setCommon] = useState([]); 
  const [microgreen, setMicrogreen] = useState("");
  const[isLoading,setIsLoading]=useState(true);
 

  // **UseNavigate Function**
  const navigate = useNavigate();


// **Fetch Common API For All Products **
const micro = async () => {
 
 const resp = await axios.get(
   "http://localhost:4000/products/microgreen");
  setCommon(resp.data);
  setIsLoading(false);

};

  //   ** Call Common API function inside UseEffect
  useEffect(() => {
    micro();
}, []);


 
    // **Anti-Cancerous Filter**
  const antiCancerous=common.filter((cancerous)=>{
    return cancerous.category==='Anti-Cancerous'
  });


  // **Kid's-Health Filter**
  const kidsHealth=common.filter((kids)=>{
    return kids.category==='Kids-Health'
  })

 
    //   **Anti-Diabetic Filter**
  const antiDiabetic=common.filter((diabetic)=>{
    return diabetic.category==='Anti-diabetics'
  })

  //   **Bone-Strength Filter**
 const boneStrength=common.filter((bone)=>{
  return bone.category==='Bone & Muscle Strength'
 })

  //   **Eye-Health Filter**
 const eyeHealth=common.filter((eye)=>{
  return eye.category==='Eye & Skin Health'
 })

  // **Heart-Health API
 const heartHealth=common.filter((heart)=>{
  return heart.category==='Heart Health'
 })

  // **Women-Health API
 const womenHealth=common.filter((women)=>{
  return women.category==='Women Health'
 })

  // **Weight-Control API
 const weightControl=common.filter((weight)=>{
  return weight.category==='Weight Control'
 })


  // **Define Search Field OnChange Function From Navbar**
  const searchMicrogreen = (e) => {
    setMicrogreen(e.target.value);
    navigate("/commonapi");
    if(e.target.value.length===0){
      navigate('/');
    }
  };

  // **Search Filter**
  const filteredProducts = common.filter((product) =>
    product.name.toLowerCase().includes(microgreen.toLowerCase())
  );


  return ( 
    <productlistContext.Provider
      value={{
        antiCancerous,
        kidsHealth,
        antiDiabetic,
        boneStrength,
        eyeHealth,
        heartHealth,
        womenHealth,
        weightControl,
        microgreen,
        searchMicrogreen,
        common,
        filteredProducts,
        isLoading
     
             
      }}
    >
      {children}
    </productlistContext.Provider>
  );
};

// **Custom Hook For Product-List
const useProductlist = () => {
  return useContext(productlistContext);
};
export { useProductlist, ProductlistContextProvider };
