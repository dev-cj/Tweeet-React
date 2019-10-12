import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css'
import Cookies from 'js-cookie';
import Feed from './Components/feed/feed';
import HelloUser from './Components/hello user/helloUser';
import LoginControl from './Components/LoginControl/LoginControl';
//eslint-disable-next-line
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import createBrowserHistory from './history';
import { connect } from 'react-redux';
import {getPosts} from './Components/redux/actionFeed';
class App extends Component {

  componentDidMount() {
    this.props.getTheFeed();
    this.getUserName();
  }
  getUserName() {
    let thisIsUser = Cookies.get('name');
    if (thisIsUser != null) {
      console.log(thisIsUser)
      this.props.userExist(thisIsUser);
    } else {
      this.props.userNotExist();
    }
  }

  render() {
    return (
      <Router history={createBrowserHistory}>
        <div>
          <div className="hero is-info hero-body">
            <div className="container has-text-centered">
              <p className="title">
                Tweeet
              </p>
            </div>
          </div>
          <section className="hero is-medium is-primary is-bold">
            <div className="hero is-primary">
              <div className="subtitle">
                <HelloUser />
              </div>
            </div>
          </section>
          <LoginControl />
          <Feed />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userNotExist: () => dispatch({ type: "loggedOut", payload: "Guest" }),
    userExist: (thisIsUser) => dispatch({ type: "loggedIn", payload: thisIsUser }),
    getTheFeed: () => dispatch(getPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
