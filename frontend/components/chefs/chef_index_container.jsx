import { connect } from 'react-redux';
import ChefIndex from './chef_index';
import { fetchChefs, deleteChef } from '../../actions/chef_actions';

const mapStateToProps = state => ({
    chefs: Object.values(state.chefs)
});

const mapDispatchToProps = dispatch => ({

    fetchChefs: () => dispatch(fetchChefs()),
    deleteChef: id => dispatch(deleteChef(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChefIndex);