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
        <div class="formy">
        <form class="form">
            <label for="destname"><h2>WHERE ARE YOU HEADING?</h2></label><br/>
            <input type="text" id="destination" name="destination" placeholder="Destination?"/><br/>
            <input type="submit" value="Confirm" class="submit"></input>
        </form>
        </div> 
        </div>
    </div>
     <Router>
        <Geolocation/>
    </Router>
    </section>
    </>
    );
}

export default Order;