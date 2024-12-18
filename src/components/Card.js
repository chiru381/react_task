import React from "react";

import "./Card.css";
import Carousel from "./Carousel";

const Card = ({ image, name, price }) => {
    return (
        <div className='card'>
            <div className='card_image'>

                <Carousel data={image.land_media} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>Count: {price.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default Card;
