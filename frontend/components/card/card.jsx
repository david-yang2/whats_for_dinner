import React from "react";
import './card.css';
import RateItem from "../rating/rate_item"
import Cart from "../cart/cart";

class Card extends React.Component{
    constructor(props){
        super(props)
        // this.addToCart = this.addToCart.bind(this)
    }
    // addToCart(currentItem){
    //     debugger
    //     <Cart item ={currentItem} />

    // }
    render (){
        debugger
        return (

            <div className = "card">
                <div className="card-context">
                    <div className = "name-container">
                        <h3>{this.props.item.name}</h3>
                        <RateItem />
                    </div>
                    <div className = "description-container">
                        <p>{this.props.item.description}</p>
                    </div>
                </div>

                <div className = "price-container">
                    <h5>
                        {this.props.item.price}
                    </h5>
                    <button onClick={()=><Cart items={this.props.item}/>}>Pick me!</button>
                </div>

            </div>
        
        )
    }

}

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
