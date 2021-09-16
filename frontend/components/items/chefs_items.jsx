import React from "react";
import Popup from "../popup/popup"

class ChefsItems extends React.Component{
    constructor (props){
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
        return  (
        <div className="chefs-item">
            <div className="chef-item-header">
                <img className="item-img" src={this.props.item.imagepath} alt="" />
            </div>
            <div className="chef-item-content">
                <h3>{this.props.item.name}</h3>
                <h5>Description: {this.props.item.description.toLowerCase()}</h5>
                <div className="chef-checkout">
                    <h4>Price: {this.props.item.price}</h4>
                    {/* display save item button if a user is logged in */}
                    {this.props.currentUser ?
                    <button className="item-btn"
                            onClick={()=>{this.props.addToCart({
                                                        name:  this.props.item.name,
                                                        description: this.props.item.description,
                                                        price: this.props.item.price,
                                                        imagepath: this.props.item.imagepath
                                                    });
                                            this.showPopup(true)}}>Save Item!</button>
                    :
                    null}

                    {/* alert users the item they've selected has been added to cart*/}
                    <Popup trigger={this.state.btnpopup}
                        showPopup={this.showPopup}>
                    
                        <h4>You've succesfully added {this.props.item.name} to your cart</h4>
                    </Popup>
                </div>

            </div>
        </div> )
    }
}



export default ChefsItems