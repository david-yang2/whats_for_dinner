import {
    RECEIVE_CHEFS
} from '../actions/randomizer_actions';


const RandReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CHEFS:
            return action.rchefs;
        default:
            return oldState;
    }
}

export default RandReducer;