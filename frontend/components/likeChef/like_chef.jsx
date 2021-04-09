import React from "react";
import {AiFillHeart} from "react-icons/ai";

class LikeChef extends React.Component {
    constructor(props){
        super(props);

        this.state={
            likeChef: false
        }
        this.updateLiking = this.updateLiking.bind(this);
    };

    updateLiking(){
        return this.setState({ likeChef: !this.state.likeChef})
    }


    render (){
        return(
            <AiFillHeart 
                size ={20}
                color={this.state.likeChef ? "FF0000" : "FFC0CB"}
                onClick={()=>this.updateLiking()}
            />
        )
    }
}

export default LikeChef;