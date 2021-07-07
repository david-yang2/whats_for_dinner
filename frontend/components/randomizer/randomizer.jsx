import React from 'react';
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom"

class Randomizer extends React.Component{
    constructor (props) {
        super(props);
        //good practice to bind the functions, if you are gonig to use it more than once
        // this.getRandomInt = this.getRandomInt.bind(this)
        this.randomChef = this.randomChef.bind(this)
        this.state={
            number: 0,
            generateRandChef: true
        }; 
    }


    // redirect to a random Chef's page
    randomChef(max){
        const newIdx = Math.floor(Math.random() * max);
        return <Redirect to={`/chefs/${this.props.chefs[newIdx].id}/items`} />
    }

        // this.setState({number: newIdx, generateRandChef: !this.state.generateRandChef})
  


    render () {
        return (
            <div className ="divRandom">
                {this.state.generateRandChef ?
                this.randomChef(this.props.chefs.length) : null}         
            </div>
        );
    }
}
export default Randomizer;
