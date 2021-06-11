import React from 'react';
import { Link } from 'react-router-dom';

//chefs/28/items
class ChefsItemsShow extends React.Component{
// this will invoke the connect function
  componentDidMount(){
    // chefs/28/items
    this.props.fetchChefsItems(this.props.match.params.id)
    this.props.fetchChef(this.props.match.params.id)
  }

  render() {
    if (!this.props.items || !this.props.chef) return null
    
    const {items, chef} = this.props;
    return (
      <div className="chef-items">
        <div className="chef-header">
          <img className="chef-portrait" src={chef.imagepath} alt="" />
          <div>
            <h1>Chef {chef.name}</h1>
            <p>{chef.bio}</p>
          </div>
        </div>
        <div className="chefs-items-list">
            <h4>Here's a list of {chef.name}'s dishes:</h4>
            {Object.values(items).map(item=>  <div className="chefs-item" key={item.id}>
                                                <div className="chef-item-header">
                                                  <img className="item-img" src={item.imagepath} alt="" />
                                                  <h5>Price: {item.price}</h5>
                                                </div>
                                                <div className="chef-item-content">
                                                  <h3>{item.name}</h3>
                                                  <h5>Description: {item.description}</h5>
                                                  
                                                </div>
                                              </div> 
            )}
        </div>
      </div>
    );
  }
}

export default ChefsItemsShow;
