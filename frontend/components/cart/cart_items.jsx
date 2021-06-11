import React from "react";
import RateItem from "../rating/rate_item"

class Cartitems extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.item;

    }
    
    render(){
        return (                                
        <div className="cart-cell">
            <div className="cartitems">
                <img className="cartitemimg" src={this.state.imagepath} alt="" />
                <div className="cartitem-desc">
                    <h3>{this.state.name}</h3>
                    <h5>{this.state.description}</h5>
                    <h5>${this.state.price}</h5>
                </div>
                <div className="item-interactive">
                    <RateItem key={this.state.id}/>
                </div>  
            </div>
        </div>)
    }
}

export default Cartitems;




    {/* <form className="review-form"
            onSubmit={this.handleSubmit}>
        <textarea className="review-box"
            value={this.state.review}
            onChange = {this.update('review')}
        />
        <input type="submit" value="Update Review" />
    </form> */}




    // update(field){
    //     return e => {
    //       this.setState({[field]: e.currentTarget.value});
    //     }
    //   }

    // handleSubmit(){
    //     return this.props.updateReview(this.state)
    // }


    // this.handleSubmit = this.handleSubmit.bind(this);