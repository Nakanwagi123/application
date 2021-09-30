import React from "react";
import "./navbar.css";

function Nav(){

    
    return(
    <>
    <header>
        <h1 class="logo">Logo</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <nav>
        <div class="profile"><h2>Profile</h2></div>
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">RideHistory</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div class="rest">Signup to drive</div>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
    </header>
    </>
        );
}

export default Nav;