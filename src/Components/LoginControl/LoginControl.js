import React, { Component } from 'react';
import LoginForm from '.././login/login';
import RegisterForm from '.././register/register';
import AddPost from '../addPost/addPost';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import createBrowserHistory from '../../history';



class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
        this.passFuncHandler = this.passFuncHandler.bind(this)
    }
    componentWillReceiveProps(isLoggedIn) {
        this.setState(isLoggedIn);
    }
    //to pass function as prop from {login form} to {App}
    passFuncHandler() {
        console.log("one")
        this.props.gUn();
    }
    //to pass function as a prop from {addPost} to {App}
    UpdateRequired() {
        this.props.updateFeedFromApp();
    }

    componentDidMount(props) {
        console.log(this.props);
    }
    shouldComponentUpdate(isLoggedIn) {
        if (this.isLoggedIn !== isLoggedIn) {
            console.log(this.isLoggedIn);
            return true;
        };
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;

        switch (isLoggedIn) {
            case true:
                console.log("i made this far!");
                createBrowserHistory.push('/addpost');
                return (
                    
                    <div className="control">
                    <AddPost UpdateRequired={this.UpdateRequired.bind(this)} />
                        
                    </div>

                )
            default:
                return (
                    
                        <div>
                            <hr className="hr" />
                            <div className="hero userDiv is-primary loginControlLinks">
                                <NavLink
                                    to="/login" exact
                                    className="has-text-light"
                                    activeClassName="has-text-link"
                                    >Login
                                    </NavLink>
                                <NavLink
                                    to="/" exact
                                    className="has-text-light"
                                    activeClassName="has-text-link"
                                    >Home
                                    </NavLink>
                                <NavLink
                                    to="/register" exact
                                    className="has-text-light"
                                    activeClassName="has-text-link"
                                    >Register
                                    </NavLink>
                                    
                            </div>
                            <div className="flexRow rowToColumn">
                                <Switch>
                                    <Route exact path="/login" render={() => <LoginForm  pFh={this.passFuncHandler}  />} />
                                    <Route exact path="/register" component={RegisterForm} />
                                    <Route exact path="/" render={() => {
                                        return (
                                            <article className="message">
                                                <div className="message-header">
                                                    <p>User not logged in</p>
                                                </div>
                                                <div className="message-body">
                                                    Please Log In to <strong>Add New Post</strong>
                                                </div>
                                            </article>
                                        )
                                    }} />
                                </Switch>
                            </div>
                        </div>
                    

                )
        }

    }
}

export default LoginControl;
// <Route path="/login" component={() => <LoginForm pFh={this.passFuncHandler.bind(this)} />} />