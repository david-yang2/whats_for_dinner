import React from 'react';
import ChefIndexItem from './chef_index_item';
import CreateChefFormContainer from './create_chef_form_container';
import Randomizer from '../randomizer/randomizer';


class ChefIndex extends React.Component{
    componentDidMount() {
        this.props.fetchChefs();
        console.log("here")
    }


    render() {
        const {chefs, deleteChef} = this.props;

        console.log(chefs)
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
