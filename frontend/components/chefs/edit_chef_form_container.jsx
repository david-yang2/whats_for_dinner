import React from 'react';
import { connect } from 'react-redux';
import ChefForm from './chef_form';
import { fetchChef, updateChef } from '../../actions/chef_actions';

class EditChefForm extends React.Component {
    componentDidMount(){
        
        this.props.fetchChef(this.props.match.params.id)
        // this.props.match.params.id = 1 for first data
    }


    render(){
        const {action, formType, chef} = this.props;
        console.log(this.props)
        if (!chef) return "chef is uninitialized";
        return (
          <ChefForm
            action={action}
            formType={formType}
            chef={chef} />
        );
      }
    }

const mapStateToProps = (state, ownProps) => ({

    chef: state.chefs[ownProps.match.params.id],
    formType: "Update Chef"
    
});
    
const mapDispatchToProps = dispatch => {
    return{
    action: chef => dispatch(updateChef(chef)),

    fetchChef: id => dispatch(fetchChef(id))
    }
};
    
export default connect(mapStateToProps,mapDispatchToProps)(EditChefForm);