import React from "react";
import "./navbar.css";

function Nav(){

    
    return(
    <>
    <header>
        <h1 class="logo">Logo</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <nav>
            <ul>
            <li><a href="#">Profile</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">RideHistory</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Signup to drive</a></li>
            </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
    </header>
    </>
        );
}

export default Nav;