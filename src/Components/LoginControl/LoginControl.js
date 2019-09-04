import React, { Component } from 'react';
import LoginForm from '.././login/login';
import RegisterForm from '.././register/register';
import AddPost from '../addPost/addPost';


class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }
    componentWillReceiveProps(isLoggedIn) {
        this.setState(isLoggedIn);
    }
    //to pass function as prop from {login form} to {App}
    passFuncHandler() {
        this.props.gUn();
    }
    //to pass function as a prop from {addPost} to {App}
    UpdateRequired() {
        this.props.updateFeedFromApp();
    }
    
    render() {
        let isLoggedIn = this.state.isLoggedIn;
        switch (isLoggedIn) {
            case true:
                return (
                    <div className="control">
                        <AddPost UpdateRequired={this.UpdateRequired.bind(this)} />
                    </div>
                )
            default:
                return (
                    <div className="flexRow">
                        <LoginForm pFh={this.passFuncHandler.bind(this)}/>
                        <RegisterForm />
                    </div>
                )
        }
    }
}

export default LoginControl;
