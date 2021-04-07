import {combineReducers} from 'redux';
import ChefsReducer from './chefs_reducer';
import ItemsReducer from './items_reducer';

const RootReducer = combineReducers({
    chefs: ChefsReducer,
    items: ItemsReducer
});

export default RootReducer;