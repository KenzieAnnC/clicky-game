import React from 'react';
import "./Jumbotron.css";
import images from "../../images.json";
import GameContainer from '../GameContainer';


const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">Infomercial Memory Game!</h1>
    <p className="lead">Click on an informercial product photo to earn points, only click each photo once!</p>
    <h3 className="message">{images.message}</h3>
  </div>
</div>
);

export default Jumbotron;