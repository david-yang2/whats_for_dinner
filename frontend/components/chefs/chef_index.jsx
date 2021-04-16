import React from 'react';
import ChefIndexItem from './chef_index_item';
import CreateChefFormContainer from './create_chef_form_container';
import Randomizer from '../randomizer/randomizer';
// import "./chef_index.css";
import Carousel from "react-elastic-carousel";



class ChefIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showComponent: false,
        }
        this.randomChef = this.randomChef.bind(this);
    };
    componentDidMount() {
        this.props.fetchChefs();
    }
    randomChef(){
        this.setState({showComponent: true})
    }
    render() {
        const {chefs, deleteChef} = this.props;
        if (!chefs) return null;
        
        // adding image limits for Carousel component
        const breakPoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 2},
            {width: 1000, itemsToShow: 3},
            {width: 1500, itemsToShow: 4},
        ]
        // this.state = this.props.chefs
        return (
            
            <div className = "chefcontainer">
                <div className="chef-index">
                    <Carousel className="chef-carousel"breakPoints={breakPoints}>
                        {
                        chefs.map(chef => <ChefIndexItem
                                            chef={chef}
                                            deleteChef={deleteChef}
                                            key={chef.id}
                                            />
                                )   
                        }
                    </Carousel>
                </div>
                <div className="randbtn">
                    <button onClick={this.randomChef}>Pick a chef for me!</button>
                    {this.state.showComponent ? 
                        <Randomizer chefs={chefs} /> : null }
                </div>
            </div>
        );
    }
}
export default ChefIndex;
