import React from "react";


const Cart =(props) =>{
    return (
        <div>
            <ul>
                {Object.values(props.currentCart).map(item => <li key={item.id}>{item.name}{item.price}</li>)}
            </ul>
        </div>
    )
}

export default Cart;