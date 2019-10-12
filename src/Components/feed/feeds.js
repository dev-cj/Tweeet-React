import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    posts: state.posts
})

function Feed(props) {
    console.log(props)
    let posts = [];
    posts = props.posts
    console.log(posts)
    let card = posts.reverse().map((posts, key) =>
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
    console.log(posts)
    console.log(card)
    return (
        <div className="feedFlex">
            {card}
            
        </div>
    )
}


export default connect(mapStateToProps)(Feed);