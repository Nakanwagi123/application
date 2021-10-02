import React from "react";
import "./Order.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Geolocation from "../hooks/Geolocation";


function Order(){
 
    return(
    <>
    <section>
    <div class="container">
        <div class="split">
        <Router>
            <Geolocation/>
        </Router>
        <div class="form">
        <button></button>
        <p id="locate">Hello</p>
        <form>
            <label for="location">Location</label><br/>
            
            <label for="lname">Destination</label><br/>
            <input type="text" id="destination" name="destination"/><br/>
            <input type="submit" value="Submit"></input>
        </form>
        </div> 
        </div>
    </div>
    </section>
    </>
    );
}

export default Order;