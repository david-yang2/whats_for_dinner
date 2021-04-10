import React from "react";


const Cart =(props) =>{
    return (
        <div>
            <ul>
                {Object.values(props.currentCart).map((item,idx) => <li key={idx}>{item.name}{item.price}</li>)}
            </ul>
        </div>
    )
}

export default Cart;