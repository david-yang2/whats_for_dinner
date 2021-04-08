import React from 'react';
import { Link } from 'react-router-dom';


class ChefsItemsShow extends React.Component{
  componentDidMount(){
    this.props.fetchChefsItems(this.props.match.params.id);
    console.log("what did i fetch?")
    console.log(this.props)
  }
  render() {
    if (!this.props.item) return null
    const { item } = this.props;

    return (
      <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.spiciness}</p>
          <Link to="/">Back to Index</Link>
      </div>
    );
  }

}

export default ChefsItemsShow;
