import React from "react";
import './Home.css';


function Home(){
    return(
    <>
   <section class="order">
       <div class="container">
           <div class="split">
           <div class="placeorder"><p>Lets get you there!</p><button><h4>Order a Ride</h4></button></div>
           <div class="slider"><p>hello</p></div>
           <div class="welcome"><p>WELCOME TO RIDEMYWAY!</p></div>
           </div>
       </div>
   </section>
   <section>
       <div class="containerone">
           <div class="split">
               <div class="title">
                   <p>BROWSE CATEGORIES</p><p><hr/></p>
                </div>
                <div class="categories">
                <ul>
                <li class="card"><div class="figure"></div><div class="alt">Trending</div></li>
                <li class="card"><div class="figure"></div><div class="alt">Top Offers</div></li>
                <li class="card"><div class="figure"></div><div class="alt">Recent</div></li>
                <li class="card"><div class="figure"></div><div class="alt">History</div></li>    
                </ul>

                </div>
           </div>
       </div>
   </section>
  
        
    </>);
}
export default Home;