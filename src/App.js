import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Foot from './pages/fixed/Foot';
import Nav from './pages/fixed/Nav';
import Home from './pages/others/Home';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>  
        </Switch>
        <Foot/>
      </Router>
    </>
   
  );
}

export default App;
