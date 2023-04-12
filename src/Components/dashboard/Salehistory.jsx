import './Salehistory.css';
export default function SaleHistory(){

    return(

        <div >
        
        <div id='sale-history-navbar'> Sale Products Details</div>

        {/*Sale Data In Tabel! */}
        <div id='sale-data-tabel'>
        <table border="1" >
  
        <tr>
        <th>PRODUCTS</th>
            <th>DATE/TIME</th>
            <th>CLIENT NAME</th>
            <th>TRANSACTION ID</th>
            <th>TOTAL AMMOUNT</th>
        </tr>
        <tr>
        <td><img src="/image/microgreen1.jpeg" alt="" className='sale-image' /></td>
            <td>10January/11:30AM</td>
            <td>Abhisek Singh</td>
            <td>98725462836284</td>
            <td>250₹</td>
          
        </tr>
     
        <tr>
     
        <td><img src="/image/microgreen2.jpeg" alt="" className='sale-image'/></td>
            <td>11January/1:00PM</td>
            <td>Abhisek Jha</td>
            <td>21374633974374</td>
            <td>100₹</td>
        </tr>
        <tr>
        <td><img src="/image/microgreen3.jpeg" alt="" className='sale-image'/></td>
            <td>12January/2:00PM</td>
            <td>Aditya Singh</td>
            <td>21374692774374</td>
            <td>150₹</td>
        </tr>
        <tr>
        <td><img src="/image/microgreen4.jpeg" alt="" className='sale-image'/></td>
            <td>13January/5:00PM</td>
            <td>Rohan kapoor</td>
            <td>21393753974374</td>
            <td>120₹</td>
        </tr>
        <tr>
        <td><img src="/image/microgreen5.jpeg" alt="" className='sale-image' /></td>
            <td>15January/3:30PM</td>
            <td>Vishal </td>
            <td>21310937674374</td>
            <td>300₹</td>
        </tr>
    </table>
     
        </div>
        </div>
    )
}