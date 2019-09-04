import React, { Component } from 'react';
import Cookies from 'js-cookie';

class HelloUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName
        }
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
