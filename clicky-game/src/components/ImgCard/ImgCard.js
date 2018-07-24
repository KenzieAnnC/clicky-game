import React from 'react';
import "./ImgCard.css";

const ImgCard = props => (
	<div 
	className="col-sm-4" 
	key={ props.id }
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
        <img 
        className= "center-block"
		id={ props.name }
		src={ props.image }
		alt={ props.name }
		/>
	</div>
);

export default ImgCard;