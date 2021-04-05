import React from 'react';

class Randomizer extends React.Component{
    componentDidMount(){
        this.props.fetchChefs();
    }
    
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    render () {
        const {chefs} = this.props;
        const oldArray = [];
        chefs.map(chef => oldArray.push(chef.name));
        const newArray = this.shuffle(oldArray);

        return (
            <div>
                <h1></h1>
                <p>It's 6 p.m. and you can't decide on what to eat. You can either use the 
                    Randomizer below or browse through our selection of chefs and/or plates.</p>
                <form>
                    <input type="submit" value="Pick a plate for me"/>
                </form>
                <h2>this is the random chef {newArray[0]}.</h2>
            </div>

        );
    }
}

export default Randomizer;