import React from "react";
import {Link} from "react-router-dom";
import Cartitems from "./cart_items";


class Cart extends React.Component {
    constructor(props){
        super(props);

        this.updateReview = this.updateReview.bind(this)
    }

    componentDidMount(){
        if (!this.props.session.currentUser) return null
        this.props.getUsersCart(this.props.session.currentUser.id)
    }

    updateReview(updatedReview){
        this.props.updateCartReview(updatedReview)
    }

    render(){
        if (!this.props.cartitems) return null
        if (this.props.fromItemContainer){
           return(
               <div>
                    <div>
                        {Object.values(this.props.cartitems).map((item,idx)=> 
                                                <h3 key={idx}> {item.name}</h3>)}
                    </div>
                    <Link to="/cart">Check out your saved items!</Link>
                </div>
                )
            } else {
            return (
                <div>
                    {Object.values(this.props.cartitems).map((item,idx)=>
                                                        <Cartitems 
                                                            key={idx}
                                                            item = {item} 
                                                            updateReview = {this.updateReview}/>
                                                            )}
                </div>
            )}
    }
}

export default Cart;