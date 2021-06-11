import React from "react";
import {Link} from "react-router-dom";
import Cartitems from "./cart_items";


class Cart extends React.Component {
    constructor(props){
        super(props);

        this.updateReview = this.updateReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    componentDidMount(){
        this.props.fetchCurrentUser(this.props.session.currentUser.id)
        if (!this.props.session.currentUser) return null
        this.props.getUsersCart(this.props.session.currentUser.id)
        
    }

    update(field){
        return e => {
          this.setState({[field]: e.currentTarget.value});
        }
      }

    handleSubmit(){
        return this.props.updateInstructions({
                                            id: this.props.session.currentUser.id,
                                            deliveryInstructions: this.state.deliveryInstructions})

    }

    updateReview(updatedReview){
        this.props.updateCartReview(updatedReview)
    }

    render(){
        if (!this.props.cartitems || !this.props.user) return null


        // map through cartitems and create array with their prices
        let subArr = Object.values(this.props.cartitems).map((item) => item.price)

        // get sum and set to 2 decimal places
        let subTotal = subArr.reduce((a, b) => a + b, 0).toFixed(2)
        this.state = this.props.user
        return (
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Items in your cart:</h2>
                </div>
                <div className="cart-info">
                    <div className="cart-items-container">
                        {Object.values(this.props.cartitems).map((item,idx)=>
                                                            <Cartitems 
                                                                key={idx}
                                                                item = {item} 
                                                                // updateReview = {this.updateReview}
                                                                />
                                                                )}
                    </div>
                    <div className="check-out">
                        <h2>Your subtotal is: ${subTotal}</h2>
                        <form className="instructions-form"
                                onSubmit={this.handleSubmit}>
                            <textarea className="instructions-box"
                                value={this.state.deliveryInstructions}
                                placeholder="Would you like to provide any delivery instructions?"
                                onChange = {this.update('deliveryInstructions')}
                            />
                            <input type="submit" value="Update Instructions" />
                        </form>
                    </div>
                </div>
            </div>
        )}


    // }

}

export default Cart;









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



        // updateInstructions(instructions){
        //     this.props.updateDeliveryInstructions(instructions)
        // }

        // this.updateInstructions = this.updateInstructions.bind(this)