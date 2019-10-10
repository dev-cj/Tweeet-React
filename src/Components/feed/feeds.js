import React from 'react';
import { connect } from 'react-redux';
let posts = [];

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTheFeed: () => dispatch({ type: "getFeed" })
    }
}

const Feed = (props) => {
    //const posts = props.posts
    const card = posts.reverse().map((posts, key) =>
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
            {card}
        </div>
    )
}
Feed();
getTheFeed()


export default connect(mapStateToProps, mapDispatchToProps)(Feed);