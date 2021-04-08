import React from 'react';
import RandomizerTest from "../randomizer/randomizertest";
import ChefIndex from "../chefs/chef_index";

class OurChefs extends React.Component{
    render(){
        return(
            <div>
                <RandomizerTest />
                <ChefIndex />
            </div>
        )
    };
}

export default OurChefs;