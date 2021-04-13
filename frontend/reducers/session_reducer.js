import {RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER} from "../actions/session_actions";

const _nullSession = {
    currentUser: null,
};


const SessionReducer = (state = _nullSession, action) => {
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

export default SessionReducer;