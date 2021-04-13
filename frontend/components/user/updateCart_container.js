import { connect } from 'react-redux';
import UpdateCart from "./user/updateCart";


const mapStateToProps = (state) =>{


};

const mapDispatchToProps = dispatch => ({
    updateCart: post => dispatch(updateCart(post))

});

export default connect(mapStateToProps,mapDispatchToProps)(UpdateCart);
