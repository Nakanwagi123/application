import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './pages/fixed/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
      </Router>
    </>
   
  );
}

export default App;
