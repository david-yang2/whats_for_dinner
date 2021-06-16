import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            // email: "",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.useDemoLogin = this.useDemoLogin.bind(this)
    }
    
    handleInput(type){
        return (e) => {

            this.setState({[type]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {

        e.preventDefault();
        // const {history} = this.props;
        this.props.login(this.state)
        .then(()=> this.props.history.push(`/`));
    }

    // allows user to use default login
    useDemoLogin(){
        this.props.login({username:"David", password:"DavidDemo"})
        .then(()=> this.props.history.push(`/`));
    }

    // password validation is set to length of 6
    render(){

        return(
            <div className="session">
                <div className="session-container">
                <h2 className="session-header"> Please Login!</h2>
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
                            placeholder="Password:"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <div className="session-btn-container">
                            <button className='session-login-btn'onClick={this.handleSubmit}>Login</button>
                            <button className='session-login-btn'onClick={this.useDemoLogin}>Demo User</button>
                        </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;