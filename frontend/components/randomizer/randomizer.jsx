import React from 'react';

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
        this.setState({number: newIdx, generateRandChef: !this.state.generateRandChef});
    }   

    render () {
        return (
            <div className ="divRandom">
                {this.state.generateRandChef ?
                this.randomChef(this.props.chefs.length) : null}
                    
                <h3>{this.props.chefs[this.state.number].name}</h3>

            </div>
        );
    }
}
export default Randomizer;
