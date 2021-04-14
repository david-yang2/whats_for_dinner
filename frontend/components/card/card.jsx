import React from "react";
import './card.css';
import RateItem from "../rating/rate_item"

const Card = (props) => {
    return(
            <div className = "card">
                <h3>{props.user.cart}</h3>
                <div className="card-context">
                    <div className = "name-container">
                        <h3>{props.item.name}</h3>
                        <RateItem />
                    </div>
                    <div className = "description-container">
                        <p>{props.item.description}</p>
                    </div>
                </div>

                <div className = "price-container">
                    <h5>
                        {props.item.price}
                    </h5>
                    { props.currentUser ?
                    (<button onClick={()=>props.addToCart(props.item)}>Save Item!</button>) : (null)}
                </div>
            </div>
        
        )
};

export default Card;
