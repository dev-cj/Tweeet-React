import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css'
import Cookies from 'js-cookie';
import Feed from './Components/feed/feed';
import HelloUser from './Components/hello user/helloUser';
import LoginControl from './Components/LoginControl/LoginControl';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import createBrowserHistory from './history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => []);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      isLoggedIn: null,
      updateRequired: false
    }
  }
  // state: userName is passed to Hello User as props
  //isLoggedIn is passed to LoginControl to check whether to show Login/Register or Dialog to add Post

  componentWillReceiveProps(isLoggedIn) {
    this.setState(isLoggedIn);
  }

  componentWillMount() {
    this.getUserName();
  }

  getUserName() {
    let thisIsUser = Cookies.get('name');
    if (thisIsUser != null) {
      this.setState({
        userName: thisIsUser,
        isLoggedIn: true
      })
    } else {
      this.setState({
        userName: 'Guest',
        isLoggedIn: false
      })
    }
  }
  //updateRequired is received from Add Post component and is passed down to Feed component to render Feed component again
  updateFeedFromApp() {
    this.setState({
      updateRequired: true
    });
  }

  //after feed component re-rendered itself again it changes the state {updateRequired} here to avoid infinite loop
  callBackUpdateFalse() {
    if (this.state.updateRequired) {
      this.setState({ updateRequired: !this.state.updateRequired });
    } else {
      console.log("callBackUpdateFalse")
    }
  }

  render() {
    return (
      <Provider store={store}>
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
                  <HelloUser userName={this.state.userName}
                    gUn={this.getUserName.bind(this)} />
                </div>
              </div>
            </section>

            <LoginControl
              isLoggedIn={this.state.isLoggedIn}
              gUn={this.getUserName.bind(this)}
              updateFeedFromApp={this.updateFeedFromApp.bind(this)} />
            <Feed
              updateRequired={this.state.updateRequired}
              callBackFalse={this.callBackUpdateFalse.bind(this)}
            />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
