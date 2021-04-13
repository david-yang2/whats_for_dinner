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
            // in the items_action
            // RECEIVE_CHEFS_ITEMS returns chefItems
            nextState= action.chefItems;
            
            return nextState;
        default:
            return oldState;
    }
}

export default ItemsReducer;