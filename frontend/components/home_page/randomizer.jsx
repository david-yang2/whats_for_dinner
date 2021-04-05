import React from 'react';
import ChefIndexItem from '../chefs/chef_index_item';

class Randomizer extends React.Component{
    componentDidMount(){
        this.props.fetchChefs();
    }
    
    render () {
        const {chefs} = this.props;
        return (
            <div>
                <p>Can't decide on what to eat for dinner? Feel free to use the Randomizer below:</p>
                <ul>
                    {
                    chefs.map(chef => console.log(chef.name)
                            )   
                    }
                </ul>
            
            </div>

        );
    }
}

export default Randomizer;