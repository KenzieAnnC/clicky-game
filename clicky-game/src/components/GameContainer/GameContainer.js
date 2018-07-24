import React, { Component } from 'react';
import ImgCard from '../ImgCard';
import images from "../../images.json";
import "./GameContainer.css";

class GameContainer extends Component {
    state = {
        images,
        alert: "Click any image to begin!",
        score: 0,
        highScore: 0

    };

    handleClick = (id, clicked) => {

        const currentImgs = this.state.images;



    };


    render() {
        return (
            <div className="container-fluid gameCont">
                <div className="text-center">
                    <p>Score: {this.state.score}</p>
                    <p>High Score: {this.state.highScore}</p>
                </div>
                <div className="container-fluid">

                    <div className="row">
                        {this.state.images.map(image => (
                            <ImgCard
                                key={image.id}
                                id={image.id}
                                name={image.name}
                                clicked={image.clicked}
                                image={image.image}
                                handleClick={this.handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    //// handleClick

    // if the image has NOT been clicked...
    // increase score by 1 
    // shuffle image positions  
    // add id of clicked image to 'clicked' arr

    // if the image HAS been clicked...
    // add 'score' value to high score if it is greater than current high score stored in 'highScore' var
    // restart game
    // 




    // render
    //// img randomly deposited into ImgCard component

}


export default GameContainer;
