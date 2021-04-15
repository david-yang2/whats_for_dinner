import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChefForm from './chef_form';
import { createChef } from '../../actions/chef_actions';

const mapStateToProps = state => ({
    chef: {
        // can be empty strings so it acts as a placeholder
        location: '',
        bio: '',
        name: '',
      },
      formType: "Create Chef"
    });
    
const mapDispatchToProps = dispatch => ({
  // remember it's shared b/t createchef and editchef containers
  // takes in a chef object and dispatches the createChef action with the chef object
    // invoked

  action: chef => dispatch(createChef(chef))
});
    
export default connect(mapStateToProps, mapDispatchToProps)(ChefForm);