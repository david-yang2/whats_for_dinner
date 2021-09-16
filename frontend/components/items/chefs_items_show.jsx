import React from 'react';

import { Link } from 'react-router-dom';
import ChefsItems from "./chefs_items"

//chefs/28/items
class ChefsItemsShow extends React.Component{

  constructor(props){
    super(props)


    this.addToCart = this.addToCart.bind(this)
  }
// this will invoke the connect function
  componentDidMount(){
    // chefs/28/items
    this.props.fetchChefsItems(this.props.match.params.id)
    this.props.fetchChef(this.props.match.params.id)
  }
  addToCart(item){
    return this.props.updateCart({
                    user_id: this.props.session.currentUser.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    imagepath: item.imagepath,
                    review: ""
    })
  }


  render() {
    if (!this.props.items || !this.props.chef) return null
    
    const {items, chef} = this.props;
    debugger
    return (
      <div className="chef-items">
        <div className="chef-header">
          <img className="chef-portrait" src={chef.imagepath} alt="" />
          <div className="chef-info">
            <h1 className="chef-name">Chef {chef.name}</h1>
            <p className="chef-quote">{chef.bio}</p>
          </div>
        </div>
        <div className="chefs-items-list">
            <h3>Here's a list of {chef.name}'s dishes:</h3>
            {/* Map through chef's items and create a menu on the side
                allow users to add an item to their cart */}
            {Object.values(items).map(item=>  <ChefsItems key={item.id}
                                                          item={item}
                                                          currentUser={this.props.session.currentUser}
                                                          addToCart={this.addToCart}/>
            )}
        </div>
      </div>
    );
  }
}

export default ChefsItemsShow;






















{/* <div className="chefs-item" key={item.id}>
    <div className="chef-item-header">
      <img className="item-img" src={item.imagepath} alt="" />
    </div>
    <div className="chef-item-content">
      <h3>{item.name}</h3>
      <h5>Description: {item.description.toLowerCase()}</h5>
      <div className="chef-checkout">
        <h4>Price: {item.price}</h4>
        display save item button if a user is logged in
        {this.props.session.currentUser ?
        <button className="item-btn"
                onClick={()=>{this.addToCart({
                                            name:  item.name,
                                            description: item.description,
                                            price: item.price,
                                            imagepath: item.imagepath
                                          });
                                this.showPopup(true)}}>Save Item!</button>
        :
        null}
      <Popup trigger={this.state.btnpopup}
        showPopup={this.showPopup}>
      
        <h4>You've succesfully added {item.name} to your cart</h4>
      </Popup>
      </div>

    </div>
  </div>  */}