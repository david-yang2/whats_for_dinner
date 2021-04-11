import {RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER} from "./actions/sessions_api_util";

const _nullSession = {
    currentUser: null,
};


export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user});

        case LOG_OUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};