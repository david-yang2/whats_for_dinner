import React from 'react';
import { Link } from 'react-router-dom';


class ChefShow extends React.Component{
  componentDidMount(){
    this.props.fetchChef(this.props.match.params.id);
  }
  render() {

    const { chef } = this.props;
    console.log(this.props)
    return (
      <div>
          <h1>{chef.name}</h1>
          <p>{chef.location}</p>
          <p>{chef.bio}</p>
          <Link to="/">Back to Index</Link>
      </div>
    );
  }

}

export default ChefShow;
