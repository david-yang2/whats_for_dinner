import { connect } from 'react-redux';
import ItemIndex from './item_index';
import { fetchItems} from '../../actions/item_actions';

const mapStateToProps = state => ({
    
    items: Object.values(state.items)
});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);