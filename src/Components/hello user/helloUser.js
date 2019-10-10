import React, { Component } from 'react';
import Cookies from 'js-cookie';
//import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';


class HelloUser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userName: this.props.userName
    //     }
    // }
    componentDidMount(props) {
        if (this.props !== props) {
            console.log(this.props)
        };
    }
    // componentWillReceiveProps() {
    // }

    logOutHandler() {
        Cookies.remove('name');
        console.log('cookies removed')
        this.props.dispatchLogOut();
    }

    render() {
        switch (this.props.helloUserName) {
            case 'Guest':
                return (
                    <div className="control">
                        <h1 className="userName">Hello {this.props.helloUserName}</h1>
                        {/*<NavLink exact to="/login" activeClassName="has-text-link">Log</NavLink>
                <NavLink exact to="/register" activeClassName="has-text-link">Reg</NavLink>*/}
                    </div>
                )
            default:
                return (
                    <div className="flex userDiv">
                        <h1 className="hidden">hidden h1</h1>
                        <h1 className="userName">Hello {this.props.helloUserName}</h1>
                        <button className="button is-info is-inverted is-outlined btn logOut" onClick={this.logOutHandler.bind(this)}>Log Out</button>
                    </div>
                )
        }
    }
}
const mapStateToProps = state => {
    return {
        helloUserName : state.userName
    }
}
const mapDispatchToProps = dispatch => {
    return {
      dispatchLogOut: () => dispatch({ type: "loggedOut",payload: "Guest" })
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HelloUser);
