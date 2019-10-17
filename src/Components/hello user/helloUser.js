import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {  NavLink } from "react-router-dom";



class HelloUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName
        }
    }
    componentDidMount(props) {
        if (this.props !== props) {
            console.log(this.props)
        };
    }
    componentWillReceiveProps(userName) {
        this.setState(userName);
    }

    logOutHandler() {
        Cookies.remove('name');
        console.log('cookies removed')
        this.props.gUn();
    }

    render() {
        let thisIsUser = this.state.userName;
        switch (thisIsUser) {
            case 'Guest':
                return (
                        <div className="control">
                        <h1 className="userName">Hello {this.state.userName}</h1>
                        {/*<NavLink exact to="/login" activeClassName="has-text-link">Log</NavLink>
                <NavLink exact to="/register" activeClassName="has-text-link">Reg</NavLink>*/}
                        </div>
                )
            default:
                return (
                    <div className="flex userDiv">
                        <h1 className="hidden">hidden h1</h1>
                        <h1 className="userName">Hello {this.state.userName}</h1>
                        <button className="button is-info is-inverted is-outlined btn logOut" onClick={this.logOutHandler.bind(this)}>Log Out</button>
                    </div>
                )
        }
    }
}

export default HelloUser;
