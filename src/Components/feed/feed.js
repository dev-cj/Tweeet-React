import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

class Feed extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }
    // componentDidUpdate(prevprops) {
    //     console.log(this.props);
    //     if (prevprops  !== this.props.posts) {
    //         return true;
    //     }    
    // }

    // anotherFunc() {
    //         this.getPosts()
    //         this.callBackUpdateFalse()
    // }
    //triggers function in App to change updateRequired value to false
    // callBackUpdateFalse() {
    //     this.props.callBackFalse();
    // }    
    
    componentWillMount() {
        this.props.getTheFeed();
        console.log(this.props)
    }
    componentDidMount() {
        this.forceUpdate();
        console.log(this.props.posts) 
    }
    // getPosts() {
    //     const url = 'http://localhost:3000/comments';
    //     axios.get(url).then(response => response.data)
    //         .then((data) => {
    //             this.setState({
    //                 PostCount: data.length, posts: data
    //             });
    //         })
    // }

    render() {
        let posts = this.props.posts
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
        console.log(this.props)
        return (
            <div className="feedFlex">
                {this.card}
            </div>
        )
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Feed);