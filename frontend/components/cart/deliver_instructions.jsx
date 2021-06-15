import React from "react";

class DeliveryInstructions extends React.Component{
    constructor(props){
        super(props)
        
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
          this.setState({[field]: e.currentTarget.value});
        }
      }

    handleSubmit(){
        return this.props.updateDeliveryInstructions(this.state)
    }

    render(){
        return(
            <div className="instructions-container">
                <form className="instructions-form"
                        onSubmit={this.handleSubmit}>
                    <textarea className="instructions-box"
                        value={this.state.deliveryInstructions}
                        placeholder="Would you like to leave any delivery instructions?"
                        onChange = {this.update('deliveryInstructions')}
                    />
                    <input className="update-btn" type="submit" value="Update Delivery Instructions" />
                </form> 
            </div>

        )
    }
}

export default DeliveryInstructions;