import {
    RECEIVE_ALL_CHEFS,
    RECEIVE_CHEF,
    REMOVE_CHEF,
} from '../actions/chef_actions';


const ChefsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_CHEFS:
            return action.chefs;

        case RECEIVE_CHEF:
            nextState[action.chef.id] = action.chef;
            return nextState;

        case REMOVE_CHEF:
            delete nextState[action.id];
            return nextState;
        default:
            return oldState;
    }
}

export default ChefsReducer;