import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

class Feed extends Component {

    render() {
        const posts = this.props.posts
        this.card = posts.reverse().map((posts, key) =>
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

const mapTheStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(mapTheStateToProps)(Feed);