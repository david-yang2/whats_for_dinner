import {combineReducers} from 'redux';
import ChefsReducer from './chefs_reducer';
import ItemsReducer from './items_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './users_reducer';
import CartitemsReducer from "./cartitems_reducer";

const RootReducer = combineReducers({
    chefs: ChefsReducer,
    items: ItemsReducer,
    session: SessionReducer,
    user: UserReducer, 
    cartitems: CartitemsReducer,
});

export default RootReducer;