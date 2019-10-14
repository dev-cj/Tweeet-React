import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {getPosts} from '../redux/actionFeed';

class AddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
           axios.post('http://localhost:3000/comments', {
                "title": this.state.title,
                "body": this.state.body,
           }).then((response) => {
               this.props.updateTheFeed();
               console.log(response);
               this.setState({
                   title: '',
                   body: ''
               })
            }).catch(function (error) {
                console.log(error);
            })
    }
    render() {
        let { title, body } = this.state;
        return (
            <div className="message is-primary addPost">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="title" className="label userName">Title</label>
                    <input type="text" value={title} name="title" placeholder="Add title here" onChange={this.changeHandler} className="input" required />
                    <label htmlFor="body" className="label userName">Body</label>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <textarea className="textarea" value={body} name="body" onChange={this.changeHandler} placeholder="Type here" required/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button is-primary btn">
                        Post  Tweeet
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateTheFeed: () => dispatch(getPosts())
    }
  }
export default connect(null, mapDispatchToProps)(AddPost);