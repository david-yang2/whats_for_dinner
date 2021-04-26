import React from "react";
import RateItem from "../rating/rate_item"

class Cartitems extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.item;
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    update(field){
 
        return e => {
    
          this.setState({[field]: e.currentTarget.value});
        }
      }

    handleSubmit(){
        debugger 
        return this.props.updateReview(this.state)

    }

    render(){
        debugger
        return (                                
        <div className ="cart">
            <div className="cartitems">
                <img className="cartitemimg" src={this.state.imagepath} alt="" />
                <div className="cartitem-desc">
                    <h3> {this.state.name}</h3>
                    <h2>{this.state.price}</h2>
                </div>

                <form className="review-form"
                        onSubmit={this.handleSubmit}>
                    <textarea className="review-box"
                        value={this.state.review}
                        onChange = {this.update('review')}
                    />
                    <input type="submit" value="Update Review" />
                </form>
            </div>
            <div>
                <RateItem key={this.state.id}/>
            </div>  
        </div>)
    }


}

export default Cartitems;