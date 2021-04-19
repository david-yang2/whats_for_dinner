import * as ItemApiUtil from "../util/item_api_util";

// Reg Action Creators
export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_CHEFS_ITEMS = "RECEIVE_CHEFS_ITEMS";

const receiveItems = items => {
    return{
        type: RECEIVE_ALL_ITEMS,
        items
    }
};

const receiveChefsItems = chefItems => {
    return{
        type: RECEIVE_CHEFS_ITEMS,
        chefItems
    }
};



// THUNK action creators

export const fetchItems = () => dispatch => {
    return ItemApiUtil.fetchItems()
    .then(items => dispatch(receiveItems(items)))
};

export const fetchChefsItems = chefId => dispatch => {
    return ItemApiUtil.fetchChefsItems(chefId)
    .then(chefItems=> {
        return dispatch(receiveChefsItems(chefItems))
    })
};
