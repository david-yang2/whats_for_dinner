import {connect} from 'react-redux';
import Cart from './cart';
import {getUsersCart} from '../../actions/cartitem_actions';
import {updateCartReview} from '../../actions/user_actions';

// simply fetch and display the current users cart
const mapStateToProps = state => {
    return{
    cartitems: state.cartitems,
    session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return{
    getUsersCart: userId => dispatch(getUsersCart(userId)),
    updateCartReview: item => dispatch(updateCartReview(item))

}}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
