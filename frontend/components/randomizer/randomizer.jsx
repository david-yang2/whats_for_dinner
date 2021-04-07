import React from 'react';
import './randomizer.css';

class Randomizer extends React.Component{

    constructor (props) {
        super(props);
        //good practice to bind the functions, if you are gonig to use it more than once
        this.getRandomInt = this.getRandomInt.bind(this)
        this.randomChef = this.randomChef.bind(this)
        this.state={
            number: 0
        }; 
        //const {chefs} = this.props

        this.chefs = [

            {id: 1, location: "SF", bio: "This is a quick bio.asdf", name: "Jimmy"},
            {id: 2, location: "Cali", bio: "surfer", name: "Ken"},
            {id: 3, location: "england", bio: "likes to hike", name: "Jill"},
            {id: 4, location: "ny", bio: "likes burgers and beer", name: "tom"}
        ]
        
    }
    // componentDidMount(){
    //     this.props.fetchChefs();
    // }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    // when you change the state, it will force a re-render
    randomChef(newIdx){
        this.setState({number: newIdx});
    }   

    render () {
        return (
            <div className ="divRandom">
                <h1>Can't Decide? Use the button to choose your Chef</h1>
                <button onClick={() => 
                    this.randomChef(this.getRandomInt(this.chefs.length))}>Random</button>
                <ul>
                    {
                    Object.values(this.chefs[this.state.number]).map((values, idx) => <li key={idx}>{values}</li>)
                    }
                </ul>
            </div>
        );
    }
}
export default Randomizer;
