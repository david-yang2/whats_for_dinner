import React from "react";
import {Link} from "react-router-dom";


class Cart extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        if (!this.props.session.currentUser) return null
        this.props.getUsersCart(this.props.session.currentUser.id)
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
                                            <div className ="cartitems">
                                                <img className="cartitemimg" src={item.imagepath} alt="" />
                                                <h3 key={idx}> {item.name}</h3>
                                                <h2>{item.price}</h2>
                                            </div>
                                            )}
                </div>
            )}
    }
}

export default Cart;