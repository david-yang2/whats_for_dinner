import {connect} from 'react-redux';
import Cart from './cart';
import {getUsersCart} from '../../actions/cartitem_actions';
import {fetchCurrentUser, updateCartReview, updateInstructions} from '../../actions/user_actions';

// simply fetch and display the current users cart
const mapStateToProps = state => ({
    user: state.user,
    cartitems: state.cartitems,
    session: state.session,
})

const mapDispatchToProps = dispatch => ({
    getUsersCart: userId => dispatch(getUsersCart(userId)),
    updateCartReview: item => dispatch(updateCartReview(item)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    updateInstructions: instruction => dispatch(updateInstructions(instruction))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
