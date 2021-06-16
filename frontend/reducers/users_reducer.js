import {
    CURRENT_USER,
    UPDATE_REVIEW,
    UPDATE_INSTRUCTIONS

} from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case CURRENT_USER:
            // user is the payload for the CURRENT_USER action
            return action.user;

        case UPDATE_INSTRUCTIONS:
            // return user with updated instructions
            return action.user;

        case UPDATE_REVIEW:
            nextState = action.updatedReview;
            return nextState;

        default:
            return oldState;
    }
}

export default UsersReducer;