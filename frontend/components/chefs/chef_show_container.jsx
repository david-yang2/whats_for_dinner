import { connect } from 'react-redux';
import ChefShow from './chef_show';
import { fetchChef } from '../../actions/chef_actions';


const mapStateToProps = (state, ownProps) =>({

  chef: state.chefs[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchChef: id => dispatch(fetchChef(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ChefShow);
