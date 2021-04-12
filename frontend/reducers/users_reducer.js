import {
    CURRENT_USER,
    UPDATE_CART
} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case CURRENT_USER:
            return action.user;

        case UPDATE_CART:
            return action.user;

        default:
            return oldState;
    }
}

export default UsersReducer;