import React from "react";

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            email: "",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInput(type){
        return (e) => {

            this.setState({[type]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {

        e.preventDefault();
        // const {history} = this.props;
        this.props.createNewUser(this.state)
        .then(()=> this.props.history.push(`/`));
    }

    // remember password validates the length of 6
    render(){

        return(
            <div className="session">
                <div className="session-container">
                    <h2 className="session-header"> Create New Account</h2>
                    <form className="session-form">
                            <input
                                className="session-input"
                                placeholder="Username:"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                            <input 
                                className="session-input"
                                placeholder="Email:"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <input 
                                className="session-input"
                                placeholder="Password:"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <div className="session-btn-container">
                                <button className="session-signup-btn" onClick={this.handleSubmit}>Sign Up</button>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;