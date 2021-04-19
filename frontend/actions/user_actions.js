import * as UserApiUtil from "../util/user_api_util";

export const CURRENT_USER = "CURRENT_USER";
export const UPDATE_CART = "UPDATE_CART";


const getCurrentUser = user => {
    return{
    type: CURRENT_USER,
    user
    }
};

const updateUsersCart = updatedCart => {
    return{
    type: UPDATE_CART,
    updatedCart
}
};



export const fetchCurrentUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(receivedUser => dispatch(getCurrentUser(receivedUser)))
};

export const updateCart = item => dispatch => {
    return UserApiUtil.postCart(item)
    // .then(updatedCart => dispatch(updateUsersCart(updatedCart)))
};

