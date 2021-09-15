import React from "react";
import {Link} from "react-router-dom";
import Cartitems from "./cart_items";
import DeliveryInstructions from "./deliver_instructions"


class Cart extends React.Component {
    constructor(props){
        super(props);

        this.updateDeliveryInstructions = this.updateDeliveryInstructions.bind(this);
    }

    componentDidMount(){
        this.props.fetchCurrentUser(this.props.session.currentUser.id)
        if (!this.props.session.currentUser) return null
        this.props.getUsersCart(this.props.session.currentUser.id)

    }

    updateDeliveryInstructions(updatedInstructions){
        this.props.updateInstructions(updatedInstructions)
    }

    render(){
        if (Object.values(this.props.cartitems).length === 0 || Object.values(this.props.user).length === 0 ) return null

        // map through cartitems and create array with their prices
        let subArr = Object.values(this.props.cartitems).map((item) => item.price)
        // get sum and set to 2 decimal places
        let subTotal = subArr.reduce((a, b) => a + b, 0).toFixed(2)

        // create a counts object to keep track of qunatity of same items
        const counts = {}
        Object.values(this.props.cartitems).forEach(x => { counts[x.name] = (counts[x.name] || 0) + 1; });
        

        // get unique item objects from array of cartitems
        const uniqueItems = [...this.props.cartitems.reduce((map,obj) => map.set(obj.name, obj), new Map()).values()]
        
        return (
            <div className="cart-container">
                <div className="cart-header">
                    <h2>There are {this.props.cartitems.length} items in your cart :</h2>
                </div>
                <div className="cart-info">
                    <div className="cart-items-container">
                        {Object.values(uniqueItems).map((item,idx)=>
                                                            <Cartitems 
                                                                key={idx}
                                                                item = {item} 
                                                                counts={counts}/>
                                                                )}
                    </div>
                    <div className="check-out">
                        {/* get subtotal of current cart and render delivery instructions form */}
                        <h2>Your subtotal is: ${subTotal}</h2>
                        <DeliveryInstructions user={this.props.user} 
                                              updateDeliveryInstructions = {this.updateDeliveryInstructions}/>

                    </div>
                </div>
            </div>
        )}

}

export default Cart;






    {/* <form className="instructions-form"
            onSubmit={this.handleSubmit}>
        <textarea className="instructions-box"
            value={this.state.deliveryInstructions}
            // placeholder="Would you like to provide any delivery instructions?"
            onChange = {this.update('deliveryInstructions')}
        />
        <input className="update-btn" type="submit" value="Update Delivery Instructions" />
    </form> */}



    // handleSubmit(){
    //     this.props.updateInstructions({
    //                                         id: this.props.session.currentUser.id,
    //                                         deliveryInstructions: this.state.deliveryInstructions})

    // }

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