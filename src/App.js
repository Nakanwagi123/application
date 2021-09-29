import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './pages/fixed/navbar';
import Intro from './pages/others/Intro';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Intro}/>  
        </Switch>
      </Router>
    </>
   
  );
}

export default App;
