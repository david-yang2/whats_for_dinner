import {combineReducers} from 'redux';
import ChefsReducer from './chefs_reducer';

const RootReducer = combineReducers({
    chefs: ChefsReducer
});

export default RootReducer;