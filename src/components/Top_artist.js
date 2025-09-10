import React from "react";
import "./styles/Top_artist.css";

const Top_artist = (props) => {
    return (
        <>

    
        <div
  className="top-artist-container"
  style={{
    background: "rgba(187, 187, 187, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "0%"
  }}
>
        {props.img}
        <h3 className="top-artist-name">{props.name}</h3>
        <p className="top-artist-description">{props.description}</p>
        </div>
</>
);

}

export default Top_artist