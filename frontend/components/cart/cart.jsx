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

        // if (this.props.fromItemContainer){
        //    return(
        //        <div >
        //             <div className="cart-container">
        //                 {Object.values(this.props.cartitems).map((item,idx)=> 
        //                                         <h3 key={idx}> {item.name}</h3>)}
        //             </div>
        //             <Link to="/cart">Check out your saved items!</Link>
        //         </div>
        //         )
        //     } else {


        // map through cartitems and create array with their prices
        let subArr = Object.values(this.props.cartitems).map((item) => item.price)

        // get sum and set to 2 decimal places
        let subTotal = subArr.reduce((a, b) => a + b, 0).toFixed(2)

        return (
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Items in your cart:</h2>
                    <h2>Your subtotal is: ${subTotal}</h2>
                </div>
                
                <div className="cart-items-container">
                    {Object.values(this.props.cartitems).map((item,idx)=>
                                                        <Cartitems 
                                                            key={idx}
                                                            item = {item} 
                                                            updateReview = {this.updateReview}/>
                                                            )}
                </div>
            </div>
        )}


    // }

}

export default Cart;