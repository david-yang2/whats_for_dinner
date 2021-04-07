import {
    RECEIVE_ALL_ITEMS,
    RECEIVE_CHEFS_ITEMS,
} from '../actions/item_actions';


const ItemsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState);


    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items;

        case RECEIVE_CHEFS_ITEMS:
            nextState[action.chef.id] = action.chef;
            return nextState;
        default:
            return oldState;
    }
}

export default ItemsReducer;