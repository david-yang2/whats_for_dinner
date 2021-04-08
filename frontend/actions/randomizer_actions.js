import randomChefs from '../util/rand_api_util';

export const RECEIVE_CHEFS = "RECEIVE_CHEFS"

const chefsRandom = rchefs => {
    return{
        type: RECEIVE_CHEFS,
        rchefs
    }
};


export const randChefs = () => dispatch => {
    return randomChefs()
    .then(rchefs => dispatch(chefsRandom(rchefs)))
};