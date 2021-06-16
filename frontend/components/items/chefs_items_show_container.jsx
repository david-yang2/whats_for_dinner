import { connect } from 'react-redux';
import ChefsItemsShow from './chefs_items_show';
import { fetchChefsItems } from '../../actions/item_actions';
import { fetchChef } from '../../actions/chef_actions';
import { updateCart } from "../../actions/user_actions";


const mapStateToProps = (state, ownProps) =>({
  chef: state.chefs[ownProps.match.params.id],
  items: state.items,
  session: state.session
})


const mapDispatchToProps = dispatch => ({
  fetchChef: id => dispatch(fetchChef(id)),
  fetchChefsItems: id => dispatch(fetchChefsItems(id)),
  updateCart: user => dispatch(updateCart(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChefsItemsShow);
