import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css'
import Feed from './Components/feed/feed';
import HelloUser from './Components/hello user/helloUser';
import LoginControl from './Components/LoginControl/LoginControl';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from './history';
import { connect } from 'react-redux';
import { getPosts } from './Components/redux/actionFeed';
import { confirmLogin } from './Components/redux/actionUser';
class App extends Component {

  componentDidMount() {
    this.props.getTheFeed();
    this.props.checkLogin();
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
    checkLogin: () => dispatch(confirmLogin()),
    getTheFeed: () => dispatch(getPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
