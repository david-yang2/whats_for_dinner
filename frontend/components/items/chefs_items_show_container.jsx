import { connect } from 'react-redux';
import ChefsItemsShow from './chefs_items_show';
import { fetchChefsItems } from '../../actions/item_actions';


const mapStateToProps = (state) =>{
  // chefItems already includes a specific slice of the state
    // belonging to the chef. The id of 28 is fetched from /api/chefs/28/item
    // from item_api_util -> fetchChefsItems
  return {items: state.items}
};

const mapDispatchToProps = dispatch => ({
  //chefs/28/items
  // id = 28
  fetchChefsItems: id => dispatch(fetchChefsItems(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChefsItemsShow);
