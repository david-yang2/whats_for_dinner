import { CART_ITEMS} from "../actions/cartitem_actions";

const CartitemsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case CART_ITEMS:
            return action.cartItems;
        default:
            return oldState;
    }
}

export default CartitemsReducer;