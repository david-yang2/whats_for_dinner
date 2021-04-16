import {connect} from 'react-redux';
import Cart from './cart';
import {getUsersCart} from '../../actions/cartitem_actions';

// simply fetch and display the current users cart
const mapStateToProps = state => {
    return{
    cartitems: state.cartitems,
    session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return{
    getUsersCart: userId => dispatch(getUsersCart(userId))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
