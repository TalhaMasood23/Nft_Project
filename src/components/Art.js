import React from "react";
import './styles/Art.css';


const Art = (props) => {
return (
    <>
    <div className="Art-card">
    <div className="Art-card-inner">
        <div className="Art-card-image">
        {props.img}
        </div>
        <div className="Art-card-content">
        <h5>{props.name}</h5>
        <p className="Art-card-rating">{props.rating}</p>
        <button className="Art-card-button">{props.heart}</button>
        <p className="Art-card-desc">{props.desc}</p>
        <button className="button-NFT-Art">Place Bid</button>
        </div>

    </div>
    </div>
</>
);
};

export default Art;

