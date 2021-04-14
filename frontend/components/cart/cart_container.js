import {connect} from 'react-redux';
import Cart from './cart';

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps,null)(Cart);
