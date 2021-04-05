import React from 'react';
import ChefIndexItem from './chef_index_item';
import CreateChefFormContainer from './create_chef_form_container';

class ChefIndex extends React.Component{
    componentDidMount() {
        this.props.fetchChefs();
    }


    render() {
        const {chefs, deleteChef} = this.props;

        return (
            <div>
                <ul>
                    {
                    chefs.map(chef => <ChefIndexItem
                                        chef={chef}
                                        deleteChef={deleteChef}
                                        key={chef.id}
                                        />
                            )   
                    }
                </ul>
                <CreateChefFormContainer />
            </div>
        );
    }
}
export default ChefIndex;