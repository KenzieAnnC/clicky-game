import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import GameContainer from "./components/GameContainer";
import "./App.css";


const App = () => (
  <div className="container-fluid main center-block">
    <Jumbotron />
    <GameContainer /> 
  </div>
);


export default App;
