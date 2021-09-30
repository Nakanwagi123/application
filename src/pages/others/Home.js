import React from "react";
import './Home.css';

function Home(){
    return(
    <>
   <section class="order">
       <div class="container">
           <div class="split">
           <div class="placeorder"><button><h4>Order a Ride</h4></button></div>
           <div class="slider">picture goes here</div>
           <div class="welcome"><h2>WELCOME TO RabEat</h2></div>
           </div>
       </div>
   </section>
   <section>
       <div class="offers">
           <h3>Top Offers</h3>
           <ul>
               <li><h4>Kampala</h4><p>Travel to Kampala</p></li>
               <li><h4>Wakiso</h4><p>Travel to Wakiso</p></li>
               <li><h4>Ntinda</h4><p>Travel to Ntinda</p></li>
               <li><h4>Kibuye</h4><p>Travel to Kibuye</p></li>
           </ul>
           </div> 
   </section>
        
    </>);
}
export default Home;