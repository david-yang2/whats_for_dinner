import React from 'react';
//import './randomizer.css';

class RandomizerTest extends React.Component{

    constructor (props) {
        super(props);
        //good practice to bind the functions, if you are gonig to use it more than once
        this.getRandomInt = this.getRandomInt.bind(this)
        this.randomChef = this.randomChef.bind(this)
        this.state={
            number: 0
        }; 

    }

    componentDidMount() {
        this.props.randChefs();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    // when you change the state, it will force a re-render
    randomChef(newIdx){
        this.setState({number: newIdx});
    }   

    render () {
        if (this.props) return null
        debugger
        return (
            <div className ="divRandom">
                <h1>Can't Decide? Use the button to choose your Chef</h1>
                <button onClick={() => 
                    this.randomChef(this.getRandomInt(this.props.chefs.length))}>Random</button>
                <ul>
                    {
                    Object.values(this.props.chefs[this.state.number]).map((values, idx) => <li key={idx}>{values}</li>)
                    }
                </ul>
            </div>
        );
    }
}
export default RandomizerTest;
