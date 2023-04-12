import './Dashboard.css';
import {useNavigate} from 'react-router-dom';
import {MdDashboard} from'react-icons/md';
import {RiStoreFill} from 'react-icons/ri';
import {MdSell} from 'react-icons/md';
import{MdSdCardAlert} from 'react-icons/md';
import{MdReviews} from 'react-icons/md';
import{FiLogIn} from 'react-icons/fi';

import{RiBankFill} from 'react-icons/ri';

export default function Dashboard(){
const navigate=useNavigate();

    return(

        <div>
        <div id='dashboard-left-container'>
        <div id='dashboard-content'>    
        <span id='dashboard-my-account'>My Account <hr/></span>
        <span className='dashboard-icon-content'><MdDashboard/> Dashboard</span>
        <span className='dashboard-icon-content' onClick={()=>navigate('/store')}><RiStoreFill/> Store</span>
        <span className='dashboard-icon-content' onClick={()=>navigate('/salehistory')}><MdSell/> Sale History</span>
        <span className='dashboard-icon-content' onClick={()=>navigate('/complain')}><MdSdCardAlert/> Complain</span>
        <span className='dashboard-icon-content'><MdReviews/> Review/Ratings</span>
        <span className='dashboard-icon-content' onClick={()=>navigate('/login')}><FiLogIn/> Login</span>
        <span className='dashboard-icon-content'><RiBankFill/> Bank Account Details</span>
        </div>
        </div>
        </div>
    )
}