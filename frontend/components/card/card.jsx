import React from "react"
import './card.css'

const Card = (props) => {
    return (

        <div className = "card">
            <div className="card-context">
                <div className = "name-container">
                    <h3>{props.item.name}</h3>
                </div>
                <div className = "description-container">
                    <p>{props.item.description}</p>
                </div>
            </div>

            <div className = "price-container">
                <h5>
                    {props.item.price}
                </h5>
                <button>Pick me!</button>
            </div>

        </div>
    
    )

};

export default Card;


/* <div className = "card">
<div className="card-context">
    <div className = "name-container">
        <h3>{props.chef.name}</h3>
    </div>
    <div className = "bio-container">
        <p>{props.chef.bio}</p>
    </div>
    <div className ="location">
        <h5>{props.chef.location}</h5>
    </div>
</div>
</div> */
