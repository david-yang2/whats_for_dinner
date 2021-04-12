import * as UserApiUtil from "../util/user_api_util";

export const CURRENT_USER = "CURRENT_USER";
export const UPDATE_CART = "UPDATE_CART";

const getCurrentUser = user => ({
    type: CURRENT_USER,
    user
});

const updateUsersCart = user => ({
    type: UPDATE_CART,
    user
});

export const currentUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(receivedUser => dispatch(getCurrentUser(receivedUser)))
};

export const updateCart = userId => dispatch => {
    return UserApiUtil.postUser(userId)
    .then(usersCart => dispatch(updateUsersCart(usersCart)))
};