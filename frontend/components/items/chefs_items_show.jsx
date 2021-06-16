import React from 'react';
import { Link } from 'react-router-dom';

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
            <h4>Here's a list of {chef.name}'s dishes:</h4>
            {Object.values(items).map(item=>  <div className="chefs-item" key={item.id}>
                                                <div className="chef-item-header">
                                                  <img className="item-img" src={item.imagepath} alt="" />
                                                </div>
                                                <div className="chef-item-content">
                                                  <h3>{item.name}</h3>
                                                  <h5>Description: {item.description.toLowerCase()}</h5>
                                                  <div className="chef-checkout">
                                                    <h4>Price: {item.price}</h4>
                                                    {/* display save item button if a user is logged in */}
                                                    {this.props.session ?
                                                    <button className="item-btn"
                                                            onClick={()=>this.addToCart({
                                                                                        name:  item.name,
                                                                                        description: item.description,
                                                                                        price: item.price,
                                                                                        imagepath: item.imagepath
                                                                                      })}>Save Item!</button>
                                                    :
                                                    null}
                                                  </div>
                                                </div>
                                              </div> 
            )}
        </div>
      </div>
    );
  }
}

export default ChefsItemsShow;
