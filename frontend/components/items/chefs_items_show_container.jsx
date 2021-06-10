import { connect } from 'react-redux';
import ChefsItemsShow from './chefs_items_show';
import { fetchChefsItems } from '../../actions/item_actions';
import { fetchChef } from '../../actions/chef_actions';


const mapStateToProps = (state, ownProps) =>({
  chef: state.chefs[ownProps.match.params.id],
  items: state.items
})


const mapDispatchToProps = dispatch => ({
  fetchChef: id => dispatch(fetchChef(id)),
  fetchChefsItems: id => dispatch(fetchChefsItems(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChefsItemsShow);
