import React from 'react';
import {IoFastFoodSharp} from 'react-icons/io5';

class RateItem extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            rating: null,
            hover: null
        };
    }
    
    setRating(newValue){
        this.setState ({ rating: newValue})
    }

    setHover(newValue){
        this.setState ({ hover: newValue})
    }

    render() {
        return(
            <div>
                {[...Array(5)].map((item, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input 
                                type="radio"
                                style={{display:'none'}}
                                value = {ratingValue}
                                onClick = {() => this.setRating(ratingValue)}
                            />
                            <IoFastFoodSharp 
                                size={20}
                                color={ratingValue <= (this.state.hover ||this.state.rating) ? "ffc107" : "#e4e5e9"}
                                onMouseEnter={()=> this.setHover(ratingValue)}
                                onMouseExit={()=> this.setHover(null)}
                                />
                        </label>
                    )

                } )}
            </div>
                    

        )
        }
}


export default RateItem;