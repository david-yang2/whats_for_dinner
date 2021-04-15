import React from 'react';
import ChefIndexItem from './chef_index_item';
import CreateChefFormContainer from './create_chef_form_container';
import Randomizer from '../randomizer/randomizer';
import "./chef_index.css";
import Carousel from "react-elastic-carousel";



class ChefIndex extends React.Component{
    componentDidMount() {
        this.props.fetchChefs();
    }

    render() {
        const {chefs, deleteChef} = this.props;
        if (!chefs) return null;

        const breakPoints = [
            {width: 500, itemsToShow: 1},
            {width: 1000, itemsToShow: 3},
        ]
        this.state = this.props.chefs
        return (
            
            <div>
                <div className="chef-index">
                    <Carousel>
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
            </div>
        );
    }
}
export default ChefIndex;


// class ChefIndex extends React.Component{
//     componentDidMount() {
//         this.props.fetchChefs();
//         this.getRandomInt = this.getRandomInt.bind(this)
//         this.randomChef = this.randomChef.bind(this)
//         this.state={
//             number: 0
//         }; 
//     }

//     getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     }

//     randomChef(newIdx){
//         this.setState({number: newIdx});
//     }   

//     render() {
//         const {chefs, deleteChef} = this.props;
//         if (!chefs) return null;
        
//         this.state = this.props.chefs
//         return (
            
//             <div>
//                 <div>

//                     <Randomizer getRandomInt ={this.getRandomInt()}
//                     randomChef={this.randomChef()}
//                     chefs={chefs}
//                     number ={this.state.number}
//                     /> 
//                 </div>
                
//                 <div className="chef-card">
//                     {
//                     chefs.map(chef => <ChefIndexItem
//                                         chef={chef}
//                                         deleteChef={deleteChef}
//                                         key={chef.id}
//                                         />
//                             )   
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
// export default ChefIndex;