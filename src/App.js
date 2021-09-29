import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Nav from './pages/fixed/Nav';
import Intro from './pages/others/Intro';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Intro}/>  
        </Switch>
      </Router>
    </>
   
  );
}

export default App;
