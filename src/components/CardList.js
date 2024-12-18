import React from "react";

import Card from "./Card";
import "./CardList.css";

const CardList = ({ data }) => {
    return (
        <div className='card_list'>
            {data.map((d, index) => {
                return (
                    <Card
                        key={index}
                        image={d}
                        name={d.seller.name}
                        price={d.seller.total_lands_count}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
