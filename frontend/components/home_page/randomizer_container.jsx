import {connect} from 'react-redux';
import Randomizer from './randomizer';
import { fetchChefs} from '../../actions/chef_actions';

const mapStateToProps = state => ({
    chefs: Object.values(state.chefs)
});

const mapDispatchToProps = dispatch => ({
    fetchChefs: () => dispatch(fetchChefs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Randomizer);

