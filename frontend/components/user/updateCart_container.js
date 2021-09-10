import { connect } from 'react-redux';
import UpdateCartComp from "./updatecart";
import {updateCart, fetchCurrentUser} from "../../actions/user_actions";


const mapStateToProps = (state) =>({
    user: state.user,
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    updateCart: user => dispatch(updateCart(user)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
});

export default connect(
                        mapStateToProps,
                        mapDispatchToProps)(UpdateCartComp);
