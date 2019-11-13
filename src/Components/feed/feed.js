import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../../Components/redux/actionFeed'

class Feed extends Component {

    deletePostHandler = id => {
        console.log(id)
        this.props.delPost(id)
    }

    render() {
        console.log(this.props.posts)
        const posts = this.props.posts
        this.card = posts.map((posts) =>
            <div key={posts._id} className=" card message is-success">
                <div className=" notification is-primary card-header feed">
                    <h1>Feed</h1>
                    {this.props.isAuth ? <button type="delete" className="button is-primary deleteFeed" key={posts._id} onClick={() => this.deletePostHandler(posts._id)}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z" />
                        </svg>
                    </button> : null}

                </div>
                <header className="card-header">
                    <p className="card-header-title" key={posts._id}>{posts.title}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p className="card-text" key={posts._id}>{posts.body}</p>
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
const mapDispatchToProps = (dispatch) => {
    return {
        delPost: (postId) => dispatch(deletePost(postId))
    }
}
const mapTheStateToProps = state => {
    return {
        posts: state.posts,
        isAuth: state.isLoggedIn
    }
}
export default connect(mapTheStateToProps, mapDispatchToProps)(Feed);