import * as CartApiUtil from "../util/cartitem_api_util";



export const CART_ITEMS = "CART_ITEMS";

const usersCart = cartItems => {
    return{
        type: CART_ITEMS,
        cartItems
    }
}


export const getUsersCart = userId => dispatch => {
    return CartApiUtil.getCartItems(userId)
    .then(cartItems => dispatch(usersCart(cartItems)))
};
