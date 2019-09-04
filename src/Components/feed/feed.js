import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidUpdate(updateRequired) {
        console.log(this.props);
        if (this.props.updateRequired === true) {
            this.anotherFunc();
        } else {
            console.log("update not required")
        }    
    }

    anotherFunc() {
        this.setState({ posts: [] });
            console.log(this.state.posts)
            this.getPosts()
            this.callBackUpdateFalse()
    }
    //triggers function in App to change updateRequired value to false
    callBackUpdateFalse() {
        this.props.callBackFalse();
    }    
    
     componentDidMount() {
        this.getPosts();
    }
    
    getPosts() {
        const url = 'http://localhost:3000/comments';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    PostCount: data.length, posts: data
                });
            })
    }
    render() {
        this.card = this.state.posts.map((posts, key) =>
            <div key={posts.id} className=" card message is-success">
                <div className=" notification is-primary card-header"><h1>Feed</h1></div>
                <header className="card-header">
                <p className="card-header-title" key={posts.id}>{posts.title}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p className="card-text" key={posts.id}>{posts.body}</p>
                        <br />
                    </div>
                </div>
            </div>
        )
        return (
            <div className="feedFlex">
                {this.card}
            </div>
        )
    }
}
export default Feed;