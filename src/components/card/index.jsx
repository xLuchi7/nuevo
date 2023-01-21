import React from "react";
import './style.css';

const Card = ({ product, onSelect }) =>{
    
    const { name, price, image } = product || {};

    return(
        <div onClick={() => onSelect(product)} className="card" >
            <h2 className="card-title">{name}</h2>
            <img className="card-image" src={image} alt={name} />
            <h3 className="card-price">$ {price}</h3>
            <div className="buy-button">
                <a className="buy-button-text"><h6>Ver mas</h6></a>
            </div>
        </div>
    )
}

export default Card;