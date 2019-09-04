import React, { Component } from 'react';
import axios from 'axios';

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
               this.anotherFunc();
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
        
        this.setState({
            title: '',
            body: ''
        });
    }
    //this triggers function in LoginControl{its parent component} which then pass props as function in App {parent component} which changes updateRequired state to true
    //addpost => LoginControl => App
    anotherFunc() {
        this.props.UpdateRequired();
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

export default AddPost;