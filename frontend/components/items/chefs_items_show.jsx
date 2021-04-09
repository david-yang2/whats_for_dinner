import React from 'react';
import { Link } from 'react-router-dom';

//chefs/28/items
class ChefsItemsShow extends React.Component{
// this will invoke the connect function
  componentDidMount(){
    // chefs/28/items
    this.props.fetchChefsItems(this.props.match.params.id);
  }

  render() {
    if (!this.props.items) return null
    
    const {items} = this.props;
    return (
      <div>
        <ul>
            {Object.values(items).map(item=> <li key={item.id}>
                                                <h3>
                                                    {item.name}
                                                </h3>
                                                <h5>
                                                    {item.description}
                                                </h5>
                                                <h4>
                                                    {item.price}
                                                </h4>
                                            </li> 
            )}
        </ul>
      </div>
    );
  }
}

export default ChefsItemsShow;
