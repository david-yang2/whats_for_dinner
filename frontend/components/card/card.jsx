import React from "react";
import RateItem from "../rating/rate_item"

const Card = (props) => {
    return(
            <div className = "card">
                <img className="itemimg" src={props.item.imagepath} alt="" />
                <div className="card-context">
                    <div className = "name-container">
                        <h3>{props.item.name}</h3>
                    </div>
                    <div >
                        <p>{props.item.description.toLowerCase()}</p>
                    </div>
                </div>

                <div className = "price-container">
                    <h5 className ="itemprice">
                        ${props.item.price}
                    </h5>
                    { props.currentUser ?
                    (<button className="savebtn"onClick={()=>props.addToCart(props.item)}>Save Item!</button>) : (null)}
                </div>
            </div>
        
        )
};

export default Card;
