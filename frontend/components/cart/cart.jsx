import React from "react";
import {Link} from "react-router-dom";


class Cart extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
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
                debugger
            return (
                <div>
                    {Object.values(this.props.cartitems).map((item,idx)=>
                                            <div>
                                                <img className="itemimg" src={item.imagepath} alt="" />
                                                <h3 key={idx}> {item.name}</h3>
                                            </div>
                                            )}
                </div>
            )}
    }
}

export default Cart;