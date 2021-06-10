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


    // getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }
    
    // when you change the state, it will force a re-render
    randomChef(max){
        const newIdx = Math.floor(Math.random() * max);
        debugger
        this.setState({number: newIdx, generateRandChef: !this.state.generateRandChef})
        return <Redirect to={`/chefs/${this.props.chefs[this.state.number].id}/items`} />
    }   

    render () {
        return (
            <div className ="divRandom">
                {this.state.generateRandChef ?
                this.randomChef(this.props.chefs.length) : null}
                    
                {/* <h3 className="chosen-chef">{this.props.chefs[this.state.number].name}!</h3>
                <Link className="resultlink"to={`/chefs/${this.props.chefs[this.state.number].id}/items`}>Would you like to check out the chef's page?</Link> */}
            </div>
        );
    }
}
export default Randomizer;
