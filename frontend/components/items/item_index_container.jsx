import { connect } from 'react-redux';
import ItemIndex from './item_index';
import { fetchItems} from '../../actions/item_actions';
import {fetchCurrentUser, updateCart} from "../../actions/user_actions";

const mapStateToProps = state => {
    return{
    items: Object.values(state.items),
    user: state.user,
    session: state.session
}};

const mapDispatchToProps = dispatch => {
    return{
    fetchItems: () => dispatch(fetchItems()),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    updateCart: user => dispatch(updateCart(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);