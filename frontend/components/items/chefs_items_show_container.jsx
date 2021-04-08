import { connect } from 'react-redux';
import ChefsItemsShow from './chefs_items_show';
import { fetchChefsItems } from '../../actions/item_actions';


const mapStateToProps = state =>{
  return state
};

const mapDispatchToProps = dispatch => ({
  //chefs/28/items
  // id = 28
  fetchChefsItems: id => dispatch(fetchChefsItems(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChefsItemsShow);
