import React from 'react';

class ChefForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.chef;

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field){
 
    return e => {

      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(){

    this.props.action(this.state)
  }
  
  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1> {this.props.formType} </h1>
        <label>Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.update('name')}
          />
        </label>
        <label>location
          <input
            type="text"
            value={this.state.location}
            onChange={this.update('location')}
          />
        </label>
        <label>About the Chef
          <textarea
            value={this.state.bio}
            onChange={this.update('bio')}
          />
        </label>
        <input type="submit" value={this.props.formType} />
      </form>
    );
  }
}
export default ChefForm;
