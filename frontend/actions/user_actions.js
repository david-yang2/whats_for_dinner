import * as UserApiUtil from "../util/user_api_util";

export const CURRENT_USER = "CURRENT_USER";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";


const getCurrentUser = user => ({  
    type: CURRENT_USER,
    user
})

const updatedInstructions = user => ({        
    type: UPDATE_INSTRUCTIONS,
    user
})

const updateReview = updatedReview => ({
    type: UPDATE_REVIEW,
    updatedReview
})



export const fetchCurrentUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
    .then(receivedUser => dispatch(getCurrentUser(receivedUser)))
};

export const updateInstructions = instructions => dispatch => {
    return UserApiUtil.patchInstructions(instructions)
    .then(updated => dispatch(updatedInstructions(updated)))
};


export const updateCartReview = item => dispatch => 
{ 
    return UserApiUtil.updateCart(item)
    .then(updatedCart => dispatch(updateReview(updatedCart)))
}

export const updateCart = item => dispatch => {
    return UserApiUtil.postCart(item)
    // .then(updatedCart => dispatch(updateUsersCart(updatedCart)))
};