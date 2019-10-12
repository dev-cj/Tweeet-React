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
//import { Provider } from 'react-redux';
//import store from '../src/Components/redux/store';
import { connect } from 'react-redux';
class App extends Component {


  // componentWillMount() {
  //   this.getUserName();
  // }
  componentDidMount() {
    this.getUserName();
    this.props.getTheFeed();
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
  //updateRequired is received from Add Post component and is passed down to Feed component to render Feed component again
  // updateFeedFromApp() {
  //   this.setState({
  //     updateRequired: true
  //   });
  // }

  //after feed component re-rendered itself again it changes the state {updateRequired} here to avoid infinite loop
  // callBackUpdateFalse() {
  //   if (this.state.updateRequired) {
  //     this.setState({ updateRequired: !this.state.updateRequired });
  //   } else {
  //     console.log("callBackUpdateFalse")
  //   }
  // }

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
    userNotExist: () => dispatch({ type: "loggedOut",payload: "Guest" }),
    userExist: (thisIsUser) => dispatch({ type: "loggedIn", payload: thisIsUser }),
    getTheFeed: () => dispatch({ type: "getFeed" })
  }
}

export default connect(null,mapDispatchToProps)(App);
