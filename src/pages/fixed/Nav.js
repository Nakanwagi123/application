import React from "react";
import "./navbar.css";

function Nav(){

    
    return(
    <>
    <section>
        <div class="container">
        <div class="split">
        <div class="button"><button class="menu"><i class="fas fa-bars"></i></button></div>

        <div class="overall">
        <div class="profile">
        Profile
        </div>
        <div class="dropdown">
        <ul class="options">
        <li>Home</li>
        <li>RideHistory</li>
        <li>Support</li>
        <li>About</li>
        </ul>
        </div>
        <div class="rest">Signup to drive</div>
        </div>
        </div> 
        </div>
    </section>
        </>
        )
}

export default Nav;