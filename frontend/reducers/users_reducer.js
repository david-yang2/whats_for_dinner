import {
    CURRENT_USER,
    UPDATE_CART,
} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case CURRENT_USER:
            // user is the payload for the CURRENT_USER action
            return action.user;

        case UPDATE_CART:
            nextState = action.updatedCart;
    
            return nextState;

        default:
            return oldState;
    }
}

export default UsersReducer;