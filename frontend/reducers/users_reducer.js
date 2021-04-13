import {
    CURRENT_USER
} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);

    switch (action.type) {
        case CURRENT_USER:
            return action.user;

        // case UPDATE_CART:
        //     return action.user;

        default:
            return oldState;
    }
}

export default UsersReducer;