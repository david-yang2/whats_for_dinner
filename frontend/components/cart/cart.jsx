import React from "react";


class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentCart: []
        };
        this.updateCart = this.updateCart.bind(this)
    }

    updateCart(newItem){
        return this.setState({currentCart: currentCart.push({newItem})})
    }
    
    render (){
        return <h1>why dont you work</h1>
        // debugger
        // return (
        //     <div>
        //         <h3>You have {this.state.currentCart.length} items in your cart!</h3>
        //         <div>{this.updateCart(this.props)}</div>
        //     </div>
        // )
        }

}

export default Cart;