import * as ChefApiUtil from "../util/chef_api_util";

// Reg Action Creators
export const RECEIVE_ALL_CHEFS = "RECEIVE_ALL_CHEFS";
export const RECEIVE_CHEF = "RECEIVE_CHEF";
export const REMOVE_CHEF = "REMOVE_CHEF";
const receiveChefs = chefs => {
    return{
        type: RECEIVE_ALL_CHEFS,
        chefs
    }
};
const recieveChef = chef => {

    return{
        type: RECEIVE_CHEF,
        chef
    }
};
const removeChef = id => {
    return{
        type: REMOVE_CHEF,
        // double check this
        id
    }
};

// THUNK Action Creators
export const fetchChefs = () => dispatch => {
    return ChefApiUtil.fetchChefs()
    .then(chefs => dispatch(receiveChefs(chefs)))
};

export const fetchChef = id => dispatch => {
    return ChefApiUtil.fetchChef(id)
    .then(chef => dispatch(recieveChef(chef)))
};
export const createChef = chef  => dispatch => {
    return ChefApiUtil.createChef(chef)
    .then(createdChef => dispatch(recieveChef(createdChef)))
};

export const updateChef = chef =>dispatch => {

    return ChefApiUtil.updateChef(chef)
    .then(updatedChef => dispatch(recieveChef(updatedChef)))
};
export const deleteChef =id  => dispatch => {
    return ChefApiUtil.deleteChef(id)
    .then(() => dispatch(removeChef(id)))
};