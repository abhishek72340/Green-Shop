import "./App.css";
import Supplier from "./Components/supplier/Supplier";
import { Routes, Route } from "react-router-dom";
import Joinus from "./Components/joinUs/Joinus";
import Dashboard from "./Components/dashboard/Dashboard";
import Complain from "./Components/dashboard/Complain";
import Login from "./Components/dashboard/Login";
import Salehistory from "./Components/dashboard/Salehistory";
import Navbar from "./Components/navbar/Navbar";
import Main from "./Components/main/Main";
import UserSignup from "./Components/userSignup/UserSignup";
import UserLogin from "./Components/userLogin/UserLogin";
import CommonApi from "./Components/commonApi/CommonApi";
import AddCart from "./Components/addCart/AddCart";
import PrivateComponent from "./Components/privateComponent/PrivateComponent";
import Anticancerous from "./Components/anticancerous/Anticancerous";
import KidsHealth from "./Components/kidsHealth/KidsHealth";
import HeartHealth from "./Components/heartHealth/HeartHealth";
import WeightControl from "./Components/weightControl/WeightControl";
import AntiDiabetics from "./Components/antiDiabetics/AntiDiabetics";
import BoneStrength from "./Components/boneStrength/BoneStrength";
import EyeHealth from "./Components/EyeHealth/EyeHealth";
import WomenHealth from "./Components/womenHealth/WomenHealth";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import TermCondition from "./Components/termCondition/TermCondition";
import PrivacyPolicy from "./Components/privacyPolicy/PrivacyPolicy";
import RefundPolicy from "./Components/refundPolicy/RefundPolicy";
import HelpCenter from "./Components/helpCenter/HelpCenter";
import Faqs from "./Components/faqs/Faqs";
import Careers from "./Components/careers/Careers";
// import Team from "./Components/team/Team";
import Blog from './Components/blog/Blog';
export default function App() {
  return (
    <div>
      <Navbar />

      {/* authentication page */}
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="logout" element={<h1>Logout</h1>}></Route>
          <Route path="/cart" element={<AddCart />}></Route>
        </Route>

        {/* authentication free page */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/commonapi" element={<CommonApi />}></Route>
        <Route path="/userlogin" element={<UserLogin />}></Route>
        <Route path="/usersignup" element={<UserSignup />}></Route>
        <Route path="/supplier" element={<Supplier />}>
          {" "}
        </Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/complain" element={<Complain />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/salehistory" element={<Salehistory />}></Route>
        <Route path="/anticancerous" element={<Anticancerous />}></Route>
        <Route path="/kidshealth" element={<KidsHealth />}></Route>
        <Route path="/hearthealth" element={<HeartHealth />}></Route>
        <Route path="/weightcontrol" element={<WeightControl />}></Route>
        <Route path="/antidiabetics" element={<AntiDiabetics />}></Route>
        <Route path="/bonestrength" element={<BoneStrength />}></Route>
        <Route path="/eyehealth" element={<EyeHealth />}></Route>
        <Route path="/womenhealth" element={<WomenHealth />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/termcondition" element={<TermCondition />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
        <Route path="/helpcenter" element={<HelpCenter />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        {/* <Route path="/team" element={<Team />}></Route> */}
        <Route path="blog" element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}
