import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputEmail: '',
            inputPassword: '',
            userEmail: '',
            userPass: '',
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        const url = 'http://localhost:3000/posts';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ userEmail: data[1].Email, userPass: data[1].Password })
                if (this.state.inputEmail === this.state.userEmail && this.state.inputPassword === this.state.userPass) {
                    console.log("id matched")
                    Cookies.set('name', data[1].Name);
                    let thisIsUser = data[1].Name;
                    this.props.loginInSuccess(thisIsUser)
                } else {
                    console.log("error")
                }
                this.setState({ inputEmail: '', inputPassword: '' })
            })
    }

    render() {
        const { inputEmail, inputPassword } = this.state
        return (
            <div className="message is-large is-primary divHeight">
                <form onSubmit={this.submitHandler}>
                    <h1 className="userName message-header">Login Form</h1>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" value={inputEmail} name="inputEmail" onChange={this.changeHandler} placeholder="e.g Alex Smith" required />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" value={inputPassword} name="inputPassword" onChange={this.changeHandler} placeholder="e.g. alexsmith@gmail.com" autoComplete="on" required />
                        </div>
                    </div>
                    <button type="submit" className="button is-primary">Login</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginInSuccess: (thisIsUser) => dispatch({ type: "loggedIn", payload: thisIsUser })
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);