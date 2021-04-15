import { connect } from 'react-redux';
import ChefIndex from './chef_index';
import { fetchChefs, deleteChef } from '../../actions/chef_actions';


// the state will be passed in from the provider in root.jsx
const mapStateToProps = state => ({
    // get the chefs property from the application state
        // which is going to be an array of chef objects
        // we can then use this as a prop in ChefIndex
    chefs: Object.values(state.chefs)
});

//maps the dispatch function as a prop, so we can use it in chef_index
    //takes in the dispatch function as an argument
    // returns an object ({})
const mapDispatchToProps = dispatch => ({

    // fetchChefs will be a prop in ChefIndex
        // which dispatches the fetchChefs argument
    fetchChefs: () => dispatch(fetchChefs()),
    deleteChef: id => dispatch(deleteChef(id))
});

// connect the ChefIndex presentational component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(ChefIndex);