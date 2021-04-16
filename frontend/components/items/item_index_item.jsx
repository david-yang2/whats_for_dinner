import React from 'react';
// import { Link } from 'react-router-dom';
// import RateMe from '../rating/rate_me';
import Card from '../card/card';



const ItemIndexItem =(props) =>{
    
    // you can't call id on an null object, so use this to return null
    // if (props.item) {return null}
    // const {items} = this.props
        return (
            <div className="items-container">
                <Card item={props.item} 
                      cart={props.cart} 
                      addToCart={props.addToCart}
                      user={props.user}
                      currentUser = {props.currentUser}
                      />
            </div>
            )
};
export default ItemIndexItem;
