import React from "react";
import { ThemeProvider } from "styled-components";
import Popup from "../popup/popup"

class Card extends React.Component{

    constructor(props){
        super(props)

        // will trigger the popup alert 
        this.state = {
            btnpopup: false,
        }
        this.showPopup = this.showPopup.bind(this);
    }
    showPopup(bool){
        // if true, show pop up
        // false, close pop up
        this.setState({btnpopup: bool})
    }

    render(){
        return(
                <div className="card">
                    <img className="itemimg" src={this.props.item.imagepath} alt="" />
                    <div className="card-context">
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description.toLowerCase()}</p>
                    </div>
                    <div className="price-container">
                        <h5 className="itemprice">
                            ${this.props.item.price}
                        </h5>
                        { this.props.currentUser ?
                        (<button className="savebtn"onClick={()=>{this.props.addToCart(this.props.item);
                                                                this.showPopup(true)}}
                                                            >Save Item!</button>) : (null)}
                        


                        <Popup trigger={this.state.btnpopup}
                                showPopup={this.showPopup}>
                            <h4>You've succesfully added {this.props.item.name} to your cart</h4>
                        </Popup>

                    </div>
                </div>
            
            )
    }
};

export default Card;
